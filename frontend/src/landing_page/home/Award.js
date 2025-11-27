import React from "react";

function Awards() {
    return (

        <div className="container mt-2">
            <div class="row">
                <div className="col-6 mt-3 p-5">
                    <img src="Media/images/largestBroker.svg" alt="largest brokerimg" />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1 style={{ fontSize: "24px" }}>Largest stock broker in India </h1>
                    <p className="mb-2 mt-4">2+ milion Zeroda clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:  </p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Features and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="Media/images/pressLogos.png" alt="press logo" style={{ width: " 90% " }} />
                </div>
            </div>
        </div>

    );
}

export default Awards;
