const Message = require('../../../models/Message');

//getAll
//GET: /api/v1/messages
const getAll = (req, res) => {
    Message.find({}, (err, docs) => {
        if(!err){
            res.json({
                "status": "succes",
                    "Message": docs
            });
        }if(err){
            res.json({
                "status": "error",
                "message": "could not save this item"
            })
        }
    });
}

//getOne
//GET: /api/v1/messages/:id
const getOne = (req, res) => {
    Message.find({_id: req.params.id}, (err, docs) => {
        if(err){
            res.json({
                "status": "error",
                "message": "could not get id"
            })
        } if(!err){
            res.json({
                "status": "succes",
                    "Message": docs
        })
    }
    })
}

//post
//POST:/api/v1/messages
const post = (req, res, next) => {
    let message = new Message();
    message.text = req.body.text;
    //"nodejs isn't hard, or is it?";
    message.user = req.body.user;
    //"Pickachu";
    message.save( (err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "could not save this item"
            })
        } if (!err){
            res.json({
                "status": "succes",
                "Message": doc
            })
        }
    })
}

//update
//PUT:/api/v1/messages/:id
const update = (req, res) => {
    Message.findByIdAndUpdate({_id: req.params.id}, (err, docs) => {
        if(err){
            res.json({
                "status": "error",
                "message": "could not update item"
            })
        } if(!err){
            res.json({
                "status": "succes",
                    "Message": docs
            })
        }
    })
}

//remove
//DELETE:/api/v1/messages/:id
const remove = (req, res) => {
    Message.findByIdAndDelete({_id: req.params.id}, (err, docs) => {
        if(err){
            res.json({
                "status": "error",
                "message": "could not remove item"
            })
        }if(!err){
            res.json({
                "status": "succes",
                    "Message": docs
            })
        }
    })
}

//user
//GET:/api/v1/messages?user=username
const user = (req, res) => {
    Message.find({user: req.params.user}, (err, docs) => {
        if(err){
            res.json({
                "status": "error",
                "message": "could not get user"
            })
        }if(!err){
            res.json({
                "status": "succes",
                    "Message": docs
            })
        }
    })
}


module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.post = post;
module.exports.update = update;
module.exports.remove = remove;
module.exports.user = user;