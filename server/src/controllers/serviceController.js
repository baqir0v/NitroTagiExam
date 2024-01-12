import serviceModel from "../models/serviceModel.js";

const serviceActions = {
    getAll: async (req, res) => {
        try {
            const service = await serviceModel.find({})
            res.send(service)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    getByID: async (req, res) => {
        try {
            const service = await serviceModel.findById(req.params.id)
            res.send(service)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    createservice: async (req, res) => {
        try {
            const { title, icon,text } = req.body
            const newService = new serviceModel({
                title: title,
                text: text,
                icon: icon,
            })
            await newService.save()
            res.send(newService)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    },
    deleteService:async (req,res) =>{
        try {
            const deleteRehim = await serviceModel.findByIdAndDelete(req.params.id)
            res.send(deleteRehim)
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }
}

export default serviceActions