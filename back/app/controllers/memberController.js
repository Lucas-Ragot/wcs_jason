const Member = require('../models/member');

memberController = {

     // lire tous les membres
     async getAllMembers(req, res) {
        const members = await Member.findAll();
        return res.json(members);
    },

    // créer un membre
    async createMember(req, res) {
        const newMember = await Member.create(req.body);
        return res.json(newMember);
    },

};

module.exports = memberController;