const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
    login: (req, res) => {
			console.log(req.body)

			User.findOne({name: req.body.name})
				.then(user => {
					if(user){
						req.session.user_id = user._id
						res.json(true)
					} else {
						let new_user = new User(req.body) 
			
						new_user.save()
							.then(() => {
								req.session.user_id = new_user._id
								res.json(true)
							})
							.catch(err => {
								console.log("User create error", err)
								res.status(500).json(err)
							})
					}
				})
				.catch(err => {
					console.log("User Find One error", console.log(err))
					res.status(500).json(err)
				})
	},
      current_user: (request, response) => {
        if(request.session.user_id) {
          User.findOne({_id: request.session.user_id})
            .then(data => {
              response.json({data: data, status: true})
            })
    
        } else {
          response.redirect('/')
        }
    },
    logout: (request, response) => {
        request.session.destroy()
        response.redirect('/')
      },
}