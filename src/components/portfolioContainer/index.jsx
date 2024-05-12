function PortfolioContainer({children}) {
    return <>
        <div class="card">
          <div class="card-block">
            <h2>Projects</h2>
            <div class="row">
              {children}
            </div>
          </div>
        </div>

    <div class="card">
          <div class="card-block">
            
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            

            
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="/images/img-05.jpg" class="img-responsive" alt="..."/>
                <div class="carousel-caption">
                  <h3 class="h5">Jules for Bastion</h3>
                  <p>2017</p>
                </div>
              </div>
              <div class="item">
                <img src="/images/img-06.jpg" class="img-responsive" alt="..."/>
                <div class="carousel-caption">
                  <h3 class="h5">Jules for Bastion</h3>
                  <p>2017</p>
                </div>
              </div>

              <div class="item">
                <img src="/images/img-08.jpg" class="img-responsive" alt="..."/>
                <div class="carousel-caption">
                  <h3 class="h5">Jules for Bastion</h3>
                  <p>2017</p>
                </div>
              </div>
            </div>

            
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

          </div>
          </div>
        </div>
    </>
}

export default PortfolioContainer