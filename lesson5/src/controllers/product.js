import product from "../models/product";

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