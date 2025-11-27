function Team() {
    return (
        <div className="container">
            <div className="row p-5 " style={{ lineHeight: "1.5" }}>
                <h1 className="text-center  " style={{ fontSize: "24px" }}>People</h1>
                <div className="col-6 p-5 text-center">
                    <img src="Media/images/nithinKamath.jpg" alt="nithinImg" style={{ borderRadius: "100%", width: "60%" }}></img>
                    <h4 className="mt-3 mb-3" style={{ fontSize: "18px" }}>Nithin Kamath</h4>
                    < h6 className="text-muted" style={{ fontSize: "13px" }}>Founder, CEO</h6>
                </div>
                <div className="col-6 p-5">

                    <p style={{ fontSize: "18px", }}>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p> <br></br>

                        <p>  He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p> <br></br>

                        <p>Playing basketball is his zen.</p>

                        <p style={{ textDecoration: "none" }}>Connect on <a style={{ textDecoration: "none" }} href=" ">Homepage</a> / <a style={{ textDecoration: "none" }} href=" ">TradingQnA</a> / <a style={{ textDecoration: "none" }} href=" ">Twitter</a></p>
                    </p>
                </div>
            </div>

        </div >
    );
}

export default Team;