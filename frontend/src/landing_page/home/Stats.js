import React from "react";

function Stats() {
    return (
        <div className="container p-5 ">
            <div className="row g-5 p-5">
                <div className="col-6 p-5">
                    <h1 className=" mb-5" style={{ fontSize: "28px" }}>Trust with confidence</h1>
                    <h2 style={{ fontSize: "24px" }}>Customer-first always</h2>
                    <p style={{ fontSize: "16px" }}
                        className="text-muted">
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
                        of equity investments, making us India’s largest broker;
                        contributing to 15% of daily retail exchange volumes in India.{" "}
                    </p>

                    <h2 style={{ fontSize: "24px" }}>No spam or gimmicks</h2>
                    <p className="text-muted" style={{ fontSize: "16px" }}>
                        No gimmicks, spam, "gamification", or annoying push notifications.
                        High quality apps that you use at your pace, the way you like.
                    </p>

                    <h2 style={{ fontSize: "24px" }} >The Zerodha universe</h2>
                    <p className="text-muted" style={{ fontSize: "16px" }}>
                        Not just an app, but a whole ecosystem. Our investments in 30+
                        fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 style={{ fontSize: "24px" }}>Do better with money</h2>
                    <p className="text-muted" style={{ fontSize: "16px" }}>
                        With initiatives like Nudge and Kill Switch, we don't just
                        facilitate transactions, but actively help you do better with your
                        money.
                    </p>
                </div>
                <div className="col-6 mt-5 p-3">
                    <img
                        src="Media/images/ecosystem.png"
                        alt="ecosystem img"
                        style={{ width: "100%" }}
                    />
                    <div className="text-center mt-5">
                        <a href=" " className="mx-4" style={{ textDecoration: "none" }}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href=" " className="mx-4" style={{ textDecoration: "none" }}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
