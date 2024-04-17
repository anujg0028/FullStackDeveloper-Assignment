const user = require("../model/users");
const sequelize = require('sequelize');

const getAll = async(req, res) => {
    try {
        const result = await user.findAll();
        res.json(result);     
    }
    catch (err) {
        res.json("bad request " + err);
    }
}

const createUsers = (req, res) => {
    try {
        const data = req.body;
        console.log(data)
        const singleuser = user.build(data);
        singleuser.save().then((result) => res.json(result)).catch((err) => console.log(err));

    }
    catch (err) {
        res.json("bad request");
    }
}

const getUserById = (req, res) => {
    try {
        const { userId } = req.params;
        const id = Number(userId);
        user.findByPk(id)
            .then((result) => res.json(result))
            .catch((err) => res.json(err));
    }
    catch (err) {
        res.json("bad request " + err);
    }
}
const deleteUser = (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const Id = Number(id);
        user.destroy({ where: { id: Id } })
            .then(() => {
                user.findAll()
                    .then((result) => res.json(result))
                    .catch((err) => res.json(err));
            })
            .catch((err) => console.log(err));
    }
    catch (err) {
        res.json("bad request " + err);
    }
}

module.exports = { createUsers, getUserById, deleteUser, getAll };