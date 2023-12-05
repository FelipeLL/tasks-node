import express from 'express'
import cors from 'cors'
import todoRouter from './routes/index.js'

const PORT = process.env.PORT ?? 3000
const app = express()

const corsConfig = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsConfig))

app.use(express.json())

app.use('/api/todo', todoRouter)

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
