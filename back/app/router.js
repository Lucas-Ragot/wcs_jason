const express = require('express');
const memberController = require('./controllers/memberController'); 

const router = express.Router();

// route test
router.get('/api/ping', (req, res) =>{
    res.send('pong');
});

// routes pour récupérer les membres
router.get('/api/members', memberController.getAllMembers);

router.post('/api/create_member', memberController.createMember);

module.exports = router;