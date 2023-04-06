import invoice from "../models/invoice";

export const getAll = async (req, res) => {
    try {
        const data = await invoice.find().populate({
            path: "userId"
        })
        res.send({
            data: data,
        })
    } catch (err) {

    }
}
export const create = async (req, res) => {
    try {
        const body = req.body;
        const data = await invoice.create(body);
        res.send({
            message: "tao thanh cong",
            data: data
        })
    } catch (err) {

    }
}