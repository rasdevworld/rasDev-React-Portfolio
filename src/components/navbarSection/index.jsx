function NavbarSection({ currentPage, handlePageChange }) {
    return <>
        <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" style={{ flexGrow: 0 }} id="navbarNav">
                    <ul class="navbar-nav mx-auto text-white">
                        <li class="nav-item">
                            <a onClick={()=>handlePageChange("About")} class="nav-link text-white"><span data-hover="About">About</span></a>
                        </li>
                        <li class="nav-item">
                            <a onClick={()=>handlePageChange("Portfolio")} class="nav-link text-white"><span data-hover="Projects">Projects</span></a>
                        </li>
                        <li class="nav-item">
                            <a onClick={()=>handlePageChange("Resume")} class="nav-link text-white"><span data-hover="Resume">Resume</span></a>
                        </li>
                        <li class="nav-item">
                            <a onClick={()=>handlePageChange("Contact")} class="nav-link text-white"><span data-hover="Contact">Contact</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
</>
}

export default NavbarSection