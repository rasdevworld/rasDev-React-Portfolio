function PortfolioContainer({children}) {
    return <>
        <section class="project py-5" id="project">
        <div class="container">
                
                <div class="row">
                  <div class="col-lg-11 text-center mx-auto col-12">

                      <div class="col-lg-8 mx-auto">
                        <h2>Things I have designed for digital media agencies</h2>
                      </div>

                      <div class="owl-carousel owl-theme">
                        {children}
                      </div>

                  </div>
                </div>
        </div>
    </section>
    </>
}

export default PortfolioContainer