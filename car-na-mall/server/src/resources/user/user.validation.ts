
import Joi from "joi";

const register = Joi.object({
    username: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
});

const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});


export default { register, login }; 