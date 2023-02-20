const { Service: ServiceModel } = require('../models/Service')
const cloudinary = require('../api/cloudinary')

const serviceController = {

    create: async(req, res) => {
        try {
            const {
                serviceName,
                servicePic,
                serviceDesc,
                serviceTags,
                servicePrice,
                serviceOwner,
            } = req.body

            const result = await cloudinary.uploader.upload(servicePic, {
                folder: 'services',
            })

            const response = await ServiceModel.create({
               serviceName,
               servicePic: {public_id: result.public_id, url: result.secure_url},
               serviceDesc,
               serviceTags,
               servicePrice,
               serviceOwner,
            });

            res.status(201).json({ response, msg: 'Serviço cadasttrado!' });

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const servicos = await ServiceModel.find();

            res.json(servicos);

        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id
            const service = await ServiceModel.findById(id);

            if(!service) {
                res.status(404).json({ msg: 'Serviço não encontrado.' });
                return;
            }

            res.json(service);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const service = await ServiceModel.findByIdAndDelete(id);

            if(!service) {
                res.status(404).json({ msg: 'Serviço não encontrado.' });
                return;
            }

            res.status(200).json({ patient, msg: 'Serviço excluído.' });

        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id

            const {
                serviceName,
                servicePic,
                serviceDesc,
                serviceTags,
                servicePrice,
                serviceOwner,
            } = req.body

            const updatedService = await ServiceModel.findByIdAndUpdate(id, req.body)

            if(!updatedService) {
                res.status(404).json({ msg: 'Serviço não encontrado.' });
                return;
            }

            res.status(200).json({ service, msg: 'Serviço atualizado com sucesso!'})

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = serviceController;