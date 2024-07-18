import React from 'react'

const Sparks = () => {
  return (
    <>
        {[...Array(50)].map((_, index) => (
            <div
                key={index}
                className="spark"
                style={{
                    top: `${Math.random() * 100}vh`,
                    left: `${Math.random() * 100}vw`,
                    animationDuration: `${Math.random() * 5 + 3}s`,
                    animationDelay: `${Math.random() * 3}s`
                }}
            />
        ))}
    </>
  )
}

export default Sparks
