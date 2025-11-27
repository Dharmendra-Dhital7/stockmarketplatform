function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row mt-5 p-5">
        <div className="col-4 mt-5 p-5  ">
          <h1 style={{ fontSize: "24px", }}> {productName}</h1>
          <p style={{ fontSize: "16px",  }}>{productDescription}</p>

          <div className>
            <a
              href={learnMore}
              style={{
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Learn More <i class="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-1"></div>

        <div className="col-7  mb-5">
          <img src={imageURL} alt=" imgurl" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
