import "./Home.css";
const ListItem = (props) => {
  const { id, name, age, gender } = props.data;

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{gender}</td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
