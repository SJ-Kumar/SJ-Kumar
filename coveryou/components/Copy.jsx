import React from 'react'
import Container from './wrapper/Container'

const Copy = () => {
  return (
    <Container>
        <div className="md:w-4/5 md:-ml-12 flex flex-col justify-around items-start gap-2 lg:gap-6">
            <h1 className=" text-yellow-300 drop-shadow-lg text-3xl lg:text-6xl font-bold">CoverMe</h1>
            <h3 className="text-secondary drop-shadow-lg text-xl lg:text-3xl font-bold">Generate quality cover letters in less than 30 seconds using AI.</h3>
            <p className="text-secondary drop-shadow-md text-lg lg:text-xl font-semibold">Resume/CV Selection Guranteed!.</p>
        </div>
    </Container>
  )
}

export default Copy