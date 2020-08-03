const express = require('express')
const User = require('./models/').user
const Todoitem = require('./models/').todoItem
const Todolist = require('./models/').todoList
const app = express()
const PORT = 4000

app.get('/users', async (req, res) => {
	const users = await User.findAll()
	res.send(users)
})

app.get('/items', async (req, res) => {
	const items = await Todoitem.findAll()
	res.send(items)
})

app.get('/list', async (req, res) => {
	const list = await Todolist.findAll()
	res.send(list)
})

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`))
