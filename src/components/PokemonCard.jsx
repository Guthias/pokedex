import React from 'react'

export default function PokemonCard({ name, id, sprite }) {
  return (
    <div>
      <h3>{ id }</h3>
      <img src={ sprite } alt="" />
      <h2>{ name }</h2>
    </div>
  )
}
