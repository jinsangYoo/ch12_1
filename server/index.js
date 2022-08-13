import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Menu } from '../src/components'
import data from '../src/data/recipes.json'

const app = express()
const PORT = process.env.PORT || 4000
// const PORT = 4000

app.use(express.static('./build'))

app.get('/*', (req, res) => {
  const app = ReactDOMServer.renderToString(<Menu recipes={data} />)
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
