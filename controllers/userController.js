const { User: UserModel } = require('../models/User')

const userController = {

    create: async(req, res) => {
        const emailInUse = await UserModel.findOne({ userEmail: req.body.userEmail })
        const usernameInUse = await UserModel.findOne({ userName: req.body.userName })

        if (emailInUse) {
            res.status(200).json({ msg: 'Email já cadastrado!' })
        } else if (usernameInUse) {
            res.status(200).json({ msg: 'Usuário já cadastrado!' })
        } else {
            try {
                const {userName, userEmail, userPass} = req.body
                const response = await UserModel.create(req.body);
    
                res.status(201).json({ response, msg: 'Cadastrado com sucesso!' });
            } catch (error) {
                console.log(error)
            }
        }

    },
    getAll: async (req, res) => {
        try {
            const users = await UserModel.find().select('-userPass');

            res.json(users);
        } catch (error) {
            console.log(error);
        }
    },
    get: async(req, res) => {
        try {
            const id = req.params.id
            const user = await UserModel.findById(id, '-userPass')

            if(!user) {
                res.status(422).json({ msg: 'Usuário não encontrado.' });
                return;
            }

            res.json(user);

        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            const id = req.params.id
            const user = await UserModel.findByIdAndDelete(id);

            if(!user) {
                res.status(404).json({ msg: 'Usuário não encontrado.' });
                return;
            }

            res.status(200).json({ user, msg: 'Usuário excluído.' });

        } catch (error) {
            console.log(error);
        }
    },
    update: async(req, res) => {
        try {
            const id = req.params.id
            const user = await UserModel.findById(id, '-userPass')

            const {userName, userBirth, userEmail, userPhone, userAddress, userCity} = req.body

            const updatedUser = await UserModel.findByIdAndUpdate(id, req.body)

            if(!updatedUser) {
                res.status(404).json({ msg: 'Usuário não encontrado.' });
                return;
            }

            res.status(200).json({ user, msg: 'Usuário atualizado com sucesso!'})

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = userController;