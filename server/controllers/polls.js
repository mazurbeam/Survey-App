const mongoose = require('mongoose')
const User = mongoose.model('User')
const Poll = mongoose.model('Poll')

const POLLS = [
    {
        question: 'Which breed of dog is great to adobt?',
        option1: {option: "Husky", votes: 0},
        option2: {option: "Poodle", votes: 0},
        option3: {option: "Shih Tzu", votes: 0},
        option4: {option: "Terrier", votes: 0},
        _user: 'Walter',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        question: 'Which breed of dog is great to adobt?',
        option1: {option: "Husky", votes: 0},
        option2: {option: "Poodle", votes: 0},
        option3: {option: "Shih Tzu", votes: 0},
        option4: {option: "Terrier", votes: 0},
        _user: 'Steve',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        question: 'Which of these is the best?',
        option1: {option: "Arch", votes: 0},
        option2: {option: "Mac OS", votes: 0},
        option3: {option: "Ubuntu", votes: 0},
        option4: {option: "Gentoo", votes: 0},
        _user: 'Bill',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

module.exports = {
    all_polls: (req, res) =>{
        res.json(POLLS)
    },
    create_poll: (req, res) =>{
        let poll = new Poll({question: req.body.question, option1: req.body.option1, option2: req.body.option2, option3: req.body.option3, option4: req.body.option4, _user: req.session._user})
        POLLS.push(poll)
        poll.save()
        .then(saved=> {
            console.log(saved)
            res.json(true)
        })
        .catch(err=>console.log(err))
    },
    get_poll: (req,res) =>{

        console.log("get_poll",req.session._user)
        Poll.findOne({_id: req.params.id})
        .then(data=> res.json(data))
        .catch(err=>res.json(err))
    },

    vote: (req,res) =>{
        Poll.find({_id:req.params.id}, (err, poll)=>{
            poll.votes = poll.votes + 1
            poll.save()
        })
    }
}