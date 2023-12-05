import { readDb, writeDb } from '../utils/db.js'
import cryto from 'crypto'

export const getAll = async (req, res) => {
  const data = readDb()

  res.send(data)
}

export const create = async (req, res) => {
  const { title } = req.body

  if (!title) {
    return res.status(400).send('Title is required')
  }

  const data = readDb()

  const newTodo = {
    id: cryto.randomUUID(),
    title,
    done: false
  }

  data.push(newTodo)

  writeDb({ todos: data })

  res.send(newTodo)
}

export const update = async (req, res) => {
  const { id } = req.params

  const data = readDb()

  const todo = data.find(todo => todo.id === id)

  if (!todo) {
    return res.status(404).send('Todo not found')
  }

  todo.done = !todo.done

  writeDb({ todos: data })

  res.send(`Tarea actualizada ${id}!`)
}

export const remove = async (req, res) => {
  const { id } = req.params

  const data = readDb()

  const todo = data.find(todo => todo.id === id)

  if (!todo) {
    return res.status(404).send('Todo not found')
  }

  const index = data.indexOf(todo)

  data.splice(index, 1)

  writeDb({ todos: data })

  res.send(`Tarea eliminada ${id}!`)
}
