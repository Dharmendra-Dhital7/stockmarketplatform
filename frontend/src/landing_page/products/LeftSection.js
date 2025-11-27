function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore }) {
    return (
        <div className="container mt-3  ">
            <div className="row mt-3 p-3">
                <div className="col-7  " >
                    <img src={imageURL} alt=" imgurl" />
                </div>
                <div className="col-1"></div>

                <div className="col-4 mt-5 ">
                    <h1 style={{ fontSize: "24px" }}> {productName}</h1>
                    <p style={{ fontSize: "16px" }}>{productDescription}</p>

                    <div className="ml-5" >
                        <a style={{ fontSize: "16px", marginLeft: "2px", textDecoration: "none" }} href={tryDemo}>Try Demo <i class="fa fa-long-arrow-right"></i>
                        </a>
                        <a href={learnMore} style={{ marginLeft: "110px", fontSize: "16px", textDecoration: "none" }}>Learn More <i class="fa fa-long-arrow-right"></i>
                        </a>
                    </div>

                    <div className="mt-3">
                        <a href={googlePlay}><img src="Media/images/googlePlayBadge.svg " alt=" googlePlay" /></a>
                        <a href={appStore}><img src="Media/images/appStoreBadge.svg " alt="appStoreImg" style={{ marginLeft: "50px" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;