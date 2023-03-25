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