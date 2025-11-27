function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1>The Zerodha Universe </h1>
                <p> Extend your trading and investment experience even further with our partner platforms</p>

                <div className="col-4 p-3 mt-5">
                    <img className="img-fluid w-50" src="Media/images/smallcaseLogo.png" alt=" smlcaseimg" />
                    <p className="text-small text-muted">Thematic investing platform
                    </p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img className="img-fluid w-50" src="Media/images/streakLogo.png" alt=" " />
                    <p className="text-small text-muted">Akgo & strategy platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img className="img-fluid w-50" src="Media/images/sensibullLogo.svg" alt=" " />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img className="img-fluid w-50" src="Media/images/zerodhaFundhouse.png" alt=" " />
                    <p className="text-small text-muted">Asset management</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img className="img-fluid w-50" src="Media/images/goldenpiLogo.png" alt=" " />
                    <p className="text-small text-muted">Bonds trading platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img className="img-fluid w-50" src="Media/images/dittoLogo.png" alt=" " />
                    <p className="text-small text-muted">Insurance</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Signup now</button>
            </div>

        </div>
    );
}

export default Universe;