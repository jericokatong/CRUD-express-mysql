import Customer from "../models/customerModel.js";

export const getCustomer = async (req, res) => {
  try {
    const response = await Customer.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const response = await Customer.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createCustomer = async (req, res) => {
  try {
    console.log(req.body);
    await Customer.create(req.body);
    res.status(201).json({ message: "customer created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateCustomer = async (req, res) => {
  try {
    await Customer.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: `customer updated at id=${req.params.id}` });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    await Customer.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: `Customer deleted at id ${req.params.id}` });
  } catch (error) {}
};
