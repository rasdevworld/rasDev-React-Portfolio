function PortfolioCard({project}) {
    return <>
        
        <div class="col-md-4" >
            <img src={project.image} class="img-responsive" alt=""style={{width:"300px",height:"250px"}}/>
            <h3 class="h5">{project.title}</h3>
            <p><a href={project.liveLink} target="_blank">Live</a> | <a href={project.githubLink} target="_blank">Github</a></p>
        </div>
    </>
}

export default PortfolioCard