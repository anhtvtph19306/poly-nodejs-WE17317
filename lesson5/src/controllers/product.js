import product from "../models/product";
import Joi from "joi"


const Specification = Joi.object({
    name: Joi.string().required(),
    attributes: Joi.array().items(Joi.object({
        code: Joi.string().required(),
        name: Joi.string().required(),
        value: Joi.string().required(),
    })).min(1).required()
})

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number()
})

export const getProduct = async(req,res)=>{
    try {
        const data = await product.find()
        res.send({
            message: "lấy dữ liệu dbAll thành công"
        })
    } catch (err) {
        res.status(500).send({
            message:err
        })
    }
}

export const getProductId = async(req,res)=>{
    try {
        const id = req.params.id
        const data = await product.findById()
        res.send({
            message: "lấy dữ liệu db thành công"
        })
    } catch (err) {
        res.status(500).send({
            message:err
        })
    }
}

export const createProduct = async(req,res)=>{
    try {
        const body = req.body
        const {error} = productSchema.validate(body);
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const data = await product.create(body)
            res.send({
                message:"Tạo mới thành công",
                data: data
            })
        }
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}