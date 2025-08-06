function OtherNews() {

  return (
    <>
      <div className="d-md-flex justify-content-between text-start div-other-news mt-4 pt-2 pt-lg-0 mt-lg-0 mb-4 mb-lg-0">
        <div className="d-flex gap-3 mb-3 md-lg-0">
            <img src="./assets/images/image-retro-pcs.jpg" className="img-fluid" alt="image retro pcs" title="Reviving Retro PCs"/>
            <div>
                <h2 className="fs-3 fw-bold">01</h2>
                <h3 className="fs-6 fw-bold">Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>

        <div className="d-flex gap-3 mb-3 md-lg-0">
            <img src="./assets/images/image-top-laptops.jpg" className="img-fluid" alt={"image top laptops"} title="Top 10 Laptops of 2022"/>
            <div>
                <h2 className="fs-3 fw-bold">02</h2>
                <h3 className="fs-6 fw-bold">Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>

        <div className="d-flex gap-3 mb-0 mb-lg-3">
            <img src="./assets/images/image-gaming-growth.jpg" className="img-fluid" alt={"image gaming growth"} title="The Growth of Gaming"/>
            <div>
                <h2 className="fs-3 fw-bold">03</h2>
                <h3 className="fs-6 fw-bold">The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default OtherNews
