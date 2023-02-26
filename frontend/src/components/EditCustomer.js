import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditCustomer = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [jenis_kelamin, setKelamin] = useState("laki");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCustomerById();
  }, []);

  const updateCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/customers/${id}`, {
        nama,
        jenis_kelamin,
        email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getCustomerById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/customers/${id}`);
      setNama(response.data.nama);
      setEmail(response.data.email);
      setKelamin(response.data.jenis_kelamin);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form onSubmit={updateCustomer}>
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
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditCustomer;
