import ListItem from "./ListItem";
import LoadingSvg from "./LoadingSvg";

const ListPassenger = (props) => {
  if (props.loading) {
    return <LoadingSvg />;
  }

  if (props.error) {
    return <p>Error: Something Went Wrong</p>;
  }

  return (
    <div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <input style={{ margin: "auto" }} />
        <button onClick={() => {}}>Get Passanger</button>
      </div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {props.data?.pasanggers_passanger.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={props.hapusPengunjung}
            onClickEdit={props.onClickEdit}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
