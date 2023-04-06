import product from "../models/product";
import Joi from "joi"
import Device from "../models/device";


const Specification = Joi.object({
    name: Joi.string().required(),
    attributes: Joi.array().items(Joi.object({
        code: Joi.string().required(),
        name: Joi.string().required(),
        value: Joi.string().required(),
    })).min(1).required()
})
// const images = Joi.object({
//     base_url: Joi.string().required(),
//     is_gallery: Joi.boolean(),
//     label: Joi.string(),
//     large_url: Joi.string(),
//     medium_url: Joi.string(),
//     position: Joi.string().allow(null),
//     small_url: Joi.string(),
//     thumbnail_url: Joi.string()
// })
const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number(),
    original_price: Joi.number(),
    description: Joi.string().required(),
    specifications: Joi.array().items(Specification).min(1).required(),
    // images: Joi.array().items(images).min(1).required()
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

// device

export const getDevice = async(req,res)=>{
    try {
        const data = await Device.find()
        res.send({
            message: "lấy dữ liệu dbAll thành công",
            data: data
        })
    } catch (err) {
        res.status(500).send({
            message:err
        })
    }
}

export const getDeviceId = async(req,res)=>{
    try {
        const id = req.params.id
        const datadev = await Device.findById(id)
        res.send({
            message: "lấy dữ liệu db thành công",
            data: datadev
        })
    } catch (err) {
        res.status(500).send({
            message:err
        })
    }
}
export const createDevice = async(req,res)=>{
    try {
        const body = req.body
        const {error} = productSchema.validate(body);
        if (error) {
            res.status(400).send({
                message: error.message
            })
        } else {
            const datadev = await Device.create(body)
            res.send({
                message:"Tạo mới thành công",
                data: datadev
            })
        }
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

export const updateDevice = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const datadev = await Device.findByIdAndUpdate(id, body)
        res.send({
            message: "Cập nhật sản phẩm thành công",
            data: datadev
        })
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}

export const removeDevice = async (req, res) => {
    try {
        const id = req.params.id
        const datadev = await Device.findByIdAndDelete(id)
        if(datadev) {
            res.send({
                message: "Xoá sản phẩm thành công",
                data: datadev
            })
        } else {
            res.status(400).send({
                message: "Không tồn tại sản phẩm",
            })
        }
        
    } catch(err) {
        res.status(500).send({
            message: err
        })
    }
}