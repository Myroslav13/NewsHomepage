function NewNews() {

  return (
    <>
      <div className="text-start text-white bg-black p-3 px-4 pb-0 div-new-news">
        <h1 className="text-warning fs-2 fw-bold">New</h1>

        <div className="mt-4">
            <h2 className="fs-5 fw-bold">Hydrogen VS Electric Cars</h2>
            <p className="pb-3">Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>

        <hr/>

        <div className="mt-4">
            <h2 className="fs-5 fw-bold">The Downsides of AI Artistry</h2>
            <p className="pb-3">What are the possible adverse effects of on-demand AI image generation?</p>
        </div>

        <hr/>
        
        <div className="mt-4">
            <h2 className="fs-5 fw-bold">Is VC Funding Drying Up?</h2>
            <p className="pb-4 pb-lg-5">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
    </>
  )
}

export default NewNews
