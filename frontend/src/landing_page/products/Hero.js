function Hero() {
    return (
        <div className="container mt-3  p-5">
            <div className="row text-center mt-5 p-3">
                <h1 className="fs-5">Zerodha Products </h1>
                <h6 className="text-muted mt-2" style={{ fontSize: "20px" }}>Sleek, modern, and intuitive trading platforms</h6>
                <p className="text-muted mt-2" style={{ fontSize: "16px" }}>
                    Check out our{" "}
                    <a href=" " style={{ textDecoration: "none" }}>
                        investment offerings
                        <i class="fa fa-long-arrow-right"></i></a>
                </p>
            </div>
            <hr></hr>
        </div>
    );
}

export default Hero;
