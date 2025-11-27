import React from 'react'

function Hero() {
    return (
        <div className='container p-5 mt-5 '>
            <div className='row text-center' >
                <img src='Media/images/homeHero.png' alt='Hero section' className='mb-3' style={{ width: "80%", margin: "0 auto " }} />
                <h1 className='mt-4' style={{ fontSize: "28px" }}> Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Signup now</button>
            </div>
        </div>
    );
}

export default Hero;