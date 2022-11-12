import React, { useState } from "react";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets//bootstrap/css/style.css";
const Contact = () => {
  const BASEDATA = {
    name: "",
    email: "",
    alamat: "",
    nohp: "",
    message: "",
  };
  const [values, setValues] = useState(BASEDATA);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values === "") {
      alert("Something went worong!!!");
    } else {
      alert(`Pendaftaran dengan :
            name: ${values.name}, Alamat${values.alamat}
            Email: ${values.email}
            Nomor Hp: ${values.nohp}
            Message: ${values.message}
            Berhasil ditambahkan
            `);
    }
    setValues(BASEDATA);
  };

  return (
    <div>
      <section id="contact" className="contact mb-5 pt-5">
        <div className="container">
          <div className="row pt-4 mb-4">
            <div className="col text-center">
              <h2>Contact</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="card border-primary mb-3 text-center">
                <div className="card-body text-primary">
                  <h5 className="card-title">Contact Our GRUOP</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <ul className="list-gruop">
                <li className="list-group-item">
                  <h3>LOCATION</h3>
                </li>
                <li className="list-group-item">OUR OFFICE</li>
                <li className="list-group-item">ROAD CIANJUR</li>
                <li className="list-group-item">WEST JAVA</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="alamat">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="alamat"
                    id="alamat"
                    value={values.alamat}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nope">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nohp"
                    id="nope"
                    value={values.nohp}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="6"
                    onChange={handleChange}
                    value={values.message}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Send!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
