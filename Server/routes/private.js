const router = require('express').Router();
const authenticate = require('../middleware/authenticate');

router.post('/private', authenticate, (req,res)=>{
    let object = {
        message:'This is a hidden path!!!',
        secret: 'You have been allowed!',
        _id:req._id
    };
    res.status(200).send(object);
})

module.exports = router;