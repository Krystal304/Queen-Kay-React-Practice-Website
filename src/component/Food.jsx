import React from 'react'

function Food() {
    const food1 = "Veggie Pizza"
    const food2 = "Turkey Burger"
  return (

    <ul>
        <li>Apple Pie</li>
        <li>{food1.toUpperCase()}</li>
        <li>{food2.toUpperCase()}</li>
    </ul>
  )
}

export default Food;