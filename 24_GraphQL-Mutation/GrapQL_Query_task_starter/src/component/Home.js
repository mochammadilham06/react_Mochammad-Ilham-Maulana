import React, { useEffect, useState } from "react";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import FormUpdatePassangers from "./UpdatePassanger";
import {
  UseCreatePassangers,
  UseDeletePassangers,
  UseFetchPassangers,
  UseSubsciptionPassangers,
  useUpdatePassangers,
} from "../hooks";

const Home = () => {
  const { createData, createLoading } = UseCreatePassangers();
  const { deletePassanger, deleteLoading } = UseDeletePassangers();
  const { updateData, updateLoading } = useUpdatePassangers();
  const { data, getError, getLoading } = UseSubsciptionPassangers();

  const hapusPengunjung = (id) => {
    deletePassanger({
      variables: {
        id: id,
      },
    });
  };

  const tambahPengunjung = (newUser) => {
    createData({
      variables: {
        objects: {
          ...newUser,
        },
      },
    });
  };

  const [edit, setEdit] = useState({
    id: "",
    name: "",
    gender: "",
    age: "",
  });
  const onClickEdit = (dataChoice) => {
    setEdit(dataChoice);
  };
  const editPengunjung = (toUpdateData) => {
    updateData({ variables: toUpdateData });
  };

  return (
    <div>
      <Header />
      <ListPassenger
        data={data}
        error={getError}
        loading={getLoading || deleteLoading || createLoading || updateLoading}
        hapusPengunjung={hapusPengunjung}
        onClickEdit={onClickEdit}
      />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
      <FormUpdatePassangers edit={edit} editPengunjung={editPengunjung} />
    </div>
  );
};

export default Home;
