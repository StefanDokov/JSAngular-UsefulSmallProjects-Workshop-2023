import Joi from "joi";

const craft = Joi.object({
    model: Joi.string().max(30).required(),
    image: Joi.string().required(),
    doors: Joi.number().min(2).required(),
    seats: Joi.number().min(2).required(),
    transmission: Joi.string().required(),
    price: Joi.number().required(),
    year: Joi.number().min(2000).required(),
    ownerId: Joi.string().required(),
});

const rentInfo = Joi.object({
     id: Joi.string().required(),
     update: {resOwner: Joi.string().required(),
     dateFrom: Joi.string().required(),
     dateDays: Joi.number().min(1).required(),
     cardN: Joi.string().required(),
     costMoney: Joi.number().min(1).required(),
     }
})


export default { craft, rentInfo };