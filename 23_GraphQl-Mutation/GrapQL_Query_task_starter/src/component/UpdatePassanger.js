import { useEffect, useState } from "react";
import "./Home.css";

function FormUpdatePassangers(props) {
  const [state, setState] = useState({
    ...props.edit,
    editing: true,
  });

  useEffect(() => {
    if (props.edit.name !== "") {
      setState({
        ...props.edit,
        editing: false,
      });
    }
  }, [props.edit]);

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (state.name.trim() && state.age && state.gender) {
      const age = state.age;
      if (age >= 75 || age <= 12) {
        alert("Umur tidak sesuai");
      } else {
        const editData = {
          id: state.id,
          name: state.name,
          age: state.age,
          gender: state.gender,
        };
        props.editPengunjung(editData);
        setState({
          ...state,

          name: "",
          age: "",
          gender: "Pria",
        });
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    });
  };

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Edit Name Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama anda ..."
          value={state.name}
          name="name"
          onChange={onChange}
        />
        <p>Edit Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur anda ..."
          value={state.age}
          name="age"
          onChange={onChange}
        />
        <p>Edit Jenis Kelamin Anda</p>
        <select onChange={onChange} name="gender">
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Update</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Update
      </button>
    </div>
  );
}

export default FormUpdatePassangers;
