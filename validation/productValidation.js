import Joi from "joi";

const producValidation = (body) => {
  const ProductSchema = Joi.object({
    title: Joi.string().min(3).max(40).trim().required(),
    price: Joi.number().required(),
    description: Joi.string().min(5).max(500),
  });

  return ProductSchema.validate(body);
};

export default producValidation;
