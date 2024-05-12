function PortfolioCard({project}) {
    return <>
        <div class="item">
            <div class="project-info">
                <img src={project.image}/>
            </div>
        </div>
    </>
}

export default PortfolioCard