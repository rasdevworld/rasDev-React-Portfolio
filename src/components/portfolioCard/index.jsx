function PortfolioCard({project}) {
    return <>
        
        <div class="col-md-4">
                <img src={project.image} class="img-responsive" alt=""/>
                <h3 class="h5">{project.title}</h3>
                <p><a href={project.liveLink}>Live</a> | <a href={project.githubLink}>Github</a></p>
              </div>
    </>
}

export default PortfolioCard