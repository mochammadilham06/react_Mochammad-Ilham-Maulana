import ListItem from "./ListItem";
import { useLazyQuery } from "@apollo/client";
import LoadingSvg from "./LoadingSvg";
import { useState } from "react";
import getPassangerList from "../config/fetchData";
import getPassangerById from "../config/getById";

const ListPassenger = (props) => {
  const [getData, { data, loading, error }] = useLazyQuery(getPassangerById);

  const [id, setId] = useState(0);

  if (loading) {
    <LoadingSvg />;
  }

  if (error) {
    console.log(error);
    return null;
  }

  const getDataById = () => {
    getData({
      variables: {
        id: id,
      },
    });
  };
  const changeId = (e) => {
    if (e.target) {
      setId(e.target.value);
    }
  };

  return (
    <div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <input value={id} onChange={changeId} />
        <button onClick={getDataById}>Get Passanger</button>
      </div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {data?.pasanggers_passanger.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={props.hapusPengunjung}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
