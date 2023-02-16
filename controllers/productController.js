const { Product: ProductModel } = require('../models/Product')

const productController = {

    create: async(req, res) => {
        try {
            const {
                productName,
                productPic,
                productCond,
                productDesc,
                productTags,
                productPrice,
                productQtd,
                productOwner,
            } = req.body

            const response = await ProductModel.create(req.body);

            res.status(201).json({ response, msg: 'Produto cadastrado!' });

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const products = await ProductModel.find();

            res.json(products);

        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id
            const product = await ProductModel.findById(id);

            if(!product) {
                res.status(404).json({ msg: 'Produto não encontrado.' });
                return;
            }

            res.json(product);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const product = await ProductModel.findByIdAndDelete(id);

            if(!product) {
                res.status(404).json({ msg: 'Produto não encontrado.' });
                return;
            }

            res.status(200).json({ patient, msg: 'Produto excluído.' });

        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id

            const {
                productName,
                productPic,
                productCond,
                productDesc,
                productTags,
                productPrice,
                productQtd,
                productOwner,
            } = req.body

            const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body)

            if(!updatedProduct) {
                res.status(404).json({ msg: 'Produto não encontrado.' });
                return;
            }

            res.status(200).json({ product, msg: 'Produto atualizado com sucesso!'})

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = productController;