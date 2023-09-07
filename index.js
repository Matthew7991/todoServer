import express from "express"
import cors from "cors"

const port = 9000
const server = express()

const todos = []

server.use(cors())
server.use(express.json())
server.use((req, res, next) => {
  // console.log(req.url)
  // console.log(todos)
  next()
})

server.get("/api/todos", (req, res) => {
  res.json(todos)
})

server.post("/api/todos", (req, res) => {
  todos.push(req.body)
  res.end()
})

server.put("/api/todos", (req, res) => {
  const index = todos.findIndex((object) => object.id === req.body.id)
  todos[index] = req.body
  res.end()
})

server.listen(port, () => {
  console.log("Listening at", port)
})
