import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CustomerList = () => {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    const response = await axios.get("http://localhost:5000/customers");
    setCustomer(response.data);
  };

  const deleteCustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/customers/${id}`);
      getCustomers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Link to={`add`} className="btn btn-primary">
        Add New
      </Link>
      <Table bordered hover>
        <thead>
          <tr className="table-light">
            <th>No</th>
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.nama}</td>
              <td>{customer.jenis_kelamin}</td>
              <td>{customer.email}</td>
              <td className="d-flex justify-content-center">
                <Link to={`edit/${customer.id}`} className="btn btn-primary">
                  Edit
                </Link>
                <Button onClick={() => deleteCustomer(customer.id)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CustomerList;
