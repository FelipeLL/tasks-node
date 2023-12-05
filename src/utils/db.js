import fs from 'fs'
import path from 'path'
import * as url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const pathJSON = path.join(__dirname, '../utils/db.json')

export const readDb = () => {
  const response = fs.readFileSync(pathJSON, 'utf-8')

  const data = JSON.parse(response).todos

  return data
}

export const writeDb = data => {
  fs.writeFileSync(pathJSON, JSON.stringify(data), err => {
    if (err) {
      throw err
    }
  })
}
