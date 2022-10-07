import React, { useRef, useState } from "react";
import "./style.css";

const Form = () => {
  const BASEDATA = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const BASE_ERROR = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const [data, setData] = useState(BASEDATA);
  const suratKesungguhan = useRef(null);
  const [errorMsg, setErrorMsg] = useState(BASE_ERROR);

  const HANDLECHANGE = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
    // console.log("data", data);

    validation(name, value);
  };

  const validation = (name, value) => {
    const noHandphoneRegex = new RegExp(/[0-9]/g);
    const nameRegex = new RegExp(/^[a-z ,.'-]+$/i);
    const emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (name === "nama") {
      if (value.match(nameRegex) || value === "") {
        setErrorMsg({ ...errorMsg, nama: "" });
        if (errorMsg.email === "" && errorMsg.noHandphone === "") {
        }
      } else {
        setErrorMsg({ ...errorMsg, nama: "Nama Lengkap harus berupa Huruf" });
      }
    }

    if (name === "email") {
      if (value.match(emailRegex) || value === "") {
        setErrorMsg({ ...errorMsg, email: "" });
        if (errorMsg.nama === "" && errorMsg.noHandphone === "") {
        }
      } else {
        setErrorMsg({ ...errorMsg, email: "Email tidak sesuai" });
      }
    }

    if (name === "noHandphone") {
      if (!noHandphoneRegex.test(value)) {
        setErrorMsg({
          ...errorMsg,
          noHandphone: "Nomor handphone harus berupa angka",
        });
      } else if (value.length < 9) {
        setErrorMsg({
          ...errorMsg,
          noHandphone: "Nomor Handphone Minimal 9 Digit",
        });
      } else if (value.length === 14) {
        setErrorMsg({
          ...errorMsg,
          noHandphone: "Anda telah mencapai batas Karakter Nomor Handphone",
        });
      } else {
        setErrorMsg({ ...errorMsg, noHandphone: "" });
      }
    }
  };

  const HANDLESUBMIT = (e) => {
    e.preventDefault();

    if (
      errorMsg.nama !== "" ||
      errorMsg.email !== "" ||
      errorMsg.noHandphone !== ""
    ) {
      alert("Data pendaftar tidak sesuai");
    } else {
      alert(`Data pendaftar "${data.nama}" berhasil diterima`);
      setData(BASEDATA);
      suratKesungguhan.current.value = "";
      setErrorMsg("");
    }
  };

  const HANDLERESET = (e) => {
    e.preventDefault();
    setData(BASEDATA);
    suratKesungguhan.current.value = "";
    setErrorMsg("");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {" "}
        Pendaftaran Peserta Coding Bootcamp
      </h1>

      <form onSubmit={HANDLESUBMIT}>
        <label>
          Nama Lengkap
          <input
            type="text"
            id="nama-lengkap"
            name="nama"
            value={data.nama}
            onChange={HANDLECHANGE}
            placeholder="Nama Lengkap"
            required
          />
          <span className="errorMsg">{errorMsg.nama}</span>
        </label>

        <label>
          Email
          <input
            type="text"
            id="email"
            name="email"
            value={data.email}
            onChange={HANDLECHANGE}
            placeholder="Email"
            required
          />
          <span className="errorMsg">{errorMsg.email}</span>
        </label>
        <label>
          Nomor Handphone
          <input
            type="text"
            id="noHandphone"
            name="noHandphone"
            maxLength={14}
            value={data.noHandphone}
            onChange={HANDLECHANGE}
            placeholder="Nomor Handphone"
          />
          <span className="errorMsg">{errorMsg.noHandphone}</span>
        </label>

        <label>
          <p>Latar Belakang Pendidikan</p>
          <input
            type="radio"
            value="IT"
            checked={data.pendidikan === "IT"}
            name="pendidikan"
            onChange={HANDLECHANGE}
            required
          />
          IT
          <input
            type="radio"
            value="Non IT"
            checked={data.pendidikan === "Non IT"}
            name="pendidikan"
            onChange={HANDLECHANGE}
          />
          Non IT
        </label>
        <br />
        <br />
        <label>
          Kelas Coding yang Dipilih
          <select
            name="kelas"
            value={data.kelas}
            onChange={HANDLECHANGE}
            id="kelas"
            required
          >
            <option value="">-- Pilih Salah Satu Program --</option>
            <option value="backend">Coding Backend with Golang</option>
            <option value="frontend">Coding Frontend with ReactJS</option>
            <option value="fullstack">Fullstack Developer</option>
          </select>
        </label>
        <label>
          Foto Surat Kesungguhan
          <input
            type="file"
            id="file"
            name="file"
            ref={suratKesungguhan}
            required
          />
        </label>
        <label>
          Harapan untuk coding Bootcamp ini
          <textarea
            id="harapan"
            name="harapan"
            value={data.harapan}
            onChange={HANDLECHANGE}
            rows="5"
          ></textarea>
        </label>
        <input type="submit" value="submit" />
        <button onClick={HANDLERESET}>Reset</button>
      </form>
    </div>
  );
};

export default Form;
