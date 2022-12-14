import React from 'react'
import { useParams } from 'react-router'
import { useColors } from '../hooks'

export default function ColorDetails() {
  let { id } = useParams()
  console.log(`id: ${id}`)
  let { colors } = useColors()
  let foundColor = colors.find((color) => color.id === id)
  console.log(foundColor)

  return (
    <div>
      <div style={{ backgroundColor: foundColor.color, height: 100, width: 100 }}></div>
      <h1>{foundColor.title}</h1>
      <h1>{foundColor.color}</h1>
    </div>
  )
}
