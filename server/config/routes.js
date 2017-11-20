const path = require("path")

const users = require("./../controllers/users")
const polls = require('./../controllers/polls')

module.exports = app => {
	app.post("/user_login", users.login)
	app.get('/current_user', users.current_user)
	app.get('/all_polls', polls.all_polls )
	app.post('/create_poll', polls.create_poll)
	app.get('/get_poll/:id', polls.get_poll)

	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}