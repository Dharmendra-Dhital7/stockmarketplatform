function Hero() {
    return (
        <div className="container  mt-5 p-5">
            <div className="row p-5 mt-5  border-bottom text-center">
                <h1 className="fs-4">Pricing</h1>
                <h3 className="text-muted mt-3 fs-6">List of all charges and taxes</h3>
            </div>

            <div className="row p-5 mt-5 text-center">
                <div className="col-4 p-3">
                    <img src="Media/images/pricingEquity.svg " alt="equityimg " />
                    <h2 className="fs-4 ">Free equity delivery </h2>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.  </p>
                </div>

                <div className="col-4 p-3">
                    <img src="Media/images/intradayTrades.svg " alt="equityimg " />
                    <h2 className="fs-4">Intraday and F&O trades </h2>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. </p>
                </div>

                <div className="col-4 p-3">
                    <img src="Media/images/pricingEquity.svg " alt="equityimg " />
                    <h2 className="fs-4">Free direct MF </h2>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.  </p>
                </div>
            </div>

        </div>
    );
}

export default Hero;