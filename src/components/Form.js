import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [indianaddress, setIndianaddress] = useState("");
  const [statusincanada, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/submit", {
        name,
        email,
        campus,
        course,
        address,
        phone,
        birthdate,
        indianaddress,
        statusincanada,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Campus:
        <input
          type="campus"
          value={campus}
          onChange={(event) => setCampus(event.target.value)}
        />
      </label>
      <label>
        Course:
        <input
          type="course"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </label>
      <label>
        Phone:
        <input
          type="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>
      <label>
        D.O.B:
        <input
          type="date"
          value={birthdate}
          onChange={(event) => setBirthdate(event.target.value)}
        />
      </label>
      <label>
        Indian Address/Home Address:
        <input
          type="Indianaddress"
          value={indianaddress}
          onChange={(event) => setIndianaddress(event.target.value)}
        />
      </label>
      <label>
        Status:
        <input
          type="status"
          value={statusincanada}
          onChange={(event) => setStatus(event.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
