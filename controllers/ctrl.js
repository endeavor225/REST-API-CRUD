import Product from "../models/products.js";
import producValidation from "../validation/productValidation.js";

const getAll = (req, res) => {};
const getOne = (req, res) => {};
const createOne = (req, res) => {
  const { body } = req;
  const { error } = producValidation(body);
  if (error) return res.status(401).json(error.details[0].message);

  Product.create({ ...body })
    .then(res.status(201).json({ msg: "Created ressources" }))
    .catch((err) => res.status(500).json(err));
};
const updateOne = (req, res) => {};
const deleteOne = (req, res) => {};

export { getAll, getOne, createOne, updateOne, deleteOne };
