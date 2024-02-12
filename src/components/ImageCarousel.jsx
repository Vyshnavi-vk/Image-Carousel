import React, { useState } from 'react'

const data = [
    "https://fastly.picsum.photos/id/1031/200/300.jpg?hmac=HVS-5o6kRugo6EcoZhPEsxm8Jnl7-J5tuEc20pN029c",
    "https://fastly.picsum.photos/id/218/200/300.jpg?hmac=S2tW-K1x-k9tZ7xyNVAdnie_NW9LJEby6GBgYpL7kfo",
    "https://fastly.picsum.photos/id/43/200/300.jpg?hmac=F_cVhLISpNmZ9wjirHfMJgX9rQzMYJbJE1xzfwmV36c",
    "https://fastly.picsum.photos/id/638/200/300.jpg?hmac=oYRYfxaIBKyb10YHb6-3AGadeAdyEWX91vrVrqdTnGE",
    "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
]

const ImageCarousel = () => {
    const [currentIndx, setCurrentIndx] = useState(0)

    const handleNext = () => {
        // if (currentIndx === data.length - 1) setCurrentIndx(0);
        // else setCurrentIndx((prevIndx) => prevIndx + 1)

        // The 1 here is crucial for handling edge cases.If data.length happens 
        // to be 0, attempting to calculate(prevIndx + 1) % 0 would result in a 
        // division by zero error, which is not desirable.By using 
        // Math.max(data.length, 1), we ensure that even if data.length is 0, 
        // the expression evaluates to at least 1, preventing the division by 
        // zero error.This ensures the code behaves correctly even when the data 
        // array is empty or non - existent.
        setCurrentIndx((prevIndx) => (prevIndx + 1) % Math.max(data.length, 1));

    }

    const handlePrev = () => {
        // if (currentIndx === 0) setCurrentIndx(data.length - 1)
        // else setCurrentIndx((prevIndx) => (prevIndx - 1))

        setCurrentIndx((prevIndx) => prevIndx === 0 ? Math.max(data.length - 1, 0) : Math.max(prevIndx - 1, 0));

    }

    return (
        <div>

            <img className="image" src={data[currentIndx]} alt="" />

            <div className='container'>
                <button className='btn' onClick={handleNext}>Next</button>
                <button className='btn' onClick={handlePrev}>Prev</button>
            </div>
        </div>
    )
}

export default ImageCarousel
