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
                  <img src="/images/workday-scheduler.png" class="img-responsive" alt="..."/>
                  <div class="carousel-caption">
                    <h3 class="h5">Workday Scheduler</h3>
                  </div>
                </div>
                <div class="item">
                  <img src="/images/techblog.png" class="img-responsive" alt="..."/>
                  <div class="carousel-caption">
                    <h3 class="h5">Tech Blog</h3>
                  </div>
                </div>
                <div class="item">
                  <img src="/images/weather-forecast.png" class="img-responsive" alt="..."/>
                  <div class="carousel-caption">
                    <h3 class="h5">Weather Forecast</h3>
                  </div>
                </div>
                <div class="item">
                  <img src="/images/filmfetcher.png" class="img-responsive" alt="..."/>
                  <div class="carousel-caption">
                    <h3 class="h5">Film Fetcher</h3>
                  </div>
                </div>
                <div class="item">
                  <img src="/images/shiftsaavy.png" class="img-responsive" alt="..."/>
                  <div class="carousel-caption">
                    <h3 class="h5">Shift Saavy</h3>
                  </div>
                </div>
                <div class="item">
                  <img src="/images/pwa-texteditor.png" class="img-responsive" alt="..."/>
                  <div class="carousel-caption">
                    <h3 class="h5">PWA Text Editor</h3>
                  </div>
                </div>
              </div>
              <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                <li data-target="#carousel-example-generic" data-slide-to="5"></li>
              </ol>
            </div>
          </div>
        </div>
    </>
}

export default PortfolioContainer