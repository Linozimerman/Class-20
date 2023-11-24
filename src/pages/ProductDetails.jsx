import React from 'react'
import { useParams } from 'react-router-dom'
import robotData from "../robot_products.json"

export default function ProductDetails() {
    const robotIndex = useParams().index;
    const robot = robotData[robotIndex]
    console.log(robot);

  return (
    <div>
        <h1>Product Details about {robot.Name}</h1>
        <h2>{robot.Description}</h2>
        <h2>{robot.Price}$</h2>
        <img src={robot.ImageUrl} alt={robot.Name} />

    </div>
  )
}
