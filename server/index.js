import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import recipes from './data/recipes.json'
import { Menu } from '../src/components'
import fs from 'fs'

const app = express()
const PORT = process.env.PORT || 4000

console.log(`Server is listening on port ${PORT}`)
app.use(express.static('./build'))

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<Menu recipes={recipes} />)
  const indexFile = path.resolve('./build/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`))
  })
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
