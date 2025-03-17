import Product from "../models/products.js";
import producValidation from "../validation/productValidation.js";

const getAll = (req, res) => {
  Product.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] } })
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(500).json(err));
};

const getOne = (req, res) => {
  const { id } = req.params;
  Product.findByPk(id)
    .then((product) => {
      if (!product) return res.status(404).json({ msg: "Not found" });
      res.status(200).json(product);
    })
    .catch((err) => res.status(500).json(err));
};

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
