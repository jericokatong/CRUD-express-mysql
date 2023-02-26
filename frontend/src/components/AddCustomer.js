import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddCustomer = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [jenis_kelamin, setKelamin] = useState("laki");
  const navigate = useNavigate();

  const saveCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/customers", {
        nama,
        jenis_kelamin,
        email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={saveCustomer}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" placeholder="Enter nama" value={nama} onChange={(e) => setNama(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Jenis kelamin</Form.Label>
          <Form.Select value={jenis_kelamin} onChange={(e) => setKelamin(e.target.value)}>
            <option value="Laki">Laki</option>
            <option value="Perempuan">Perempuan</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default AddCustomer;
