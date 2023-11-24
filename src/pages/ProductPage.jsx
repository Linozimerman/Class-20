import React from 'react'
import ProductCard from '../components/ProductCard';

export default function ProductPage({ robots, setCartNumber, cartNumber }) {
    return (
        <section className='robots-container'>
            {
                robots.map((eachRobot, index) => {
                    return <ProductCard key={index} index={index} details={eachRobot} setCartNumber={setCartNumber} cartNumber={cartNumber} />
                })
            }
        </section>
    )
}
