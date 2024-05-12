import PortfolioContainer from "../components/portfolioContainer"
import PortfolioCard from "../components/portfolioCard"
import projects from '../assets/data/project.json'

function Portfolio() {
    return <>
        <PortfolioContainer>
            {projects.map(project=>{
                return <PortfolioCard project={project}/>
            })}
            
        </PortfolioContainer>
    </>
}

export default Portfolio