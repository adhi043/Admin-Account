import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <div className="header-container">
            <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
            <Link className="navbar-brand me-lg-5" to={{ pathname: "/"}}><img className="navbar-brand-dark" src="assets/img/light.svg" alt="Rich" /> <img className="navbar-brand-light" src="assets/img/dark.svg" alt="Rich logo" /></Link>
                <div className="d-flex align-items-center"><button className="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button></div>
            </nav>
            <nav id="sidebarMenu" className="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
                <div className="sidebar-inner px-4 pt-3">
                <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                    <div className="d-flex align-items-center">
                        <div className="avatar-lg me-4"><img src="assets/img/profile-picture-3.jpg" className="card-img-top rounded-circle border-white" alt="Bonnie Green"/></div>
                        <div className="d-block">
                            <h2 className="h5 mb-3">Hi, Jane</h2>
                            <Link to="#" className="btn btn-secondary btn-sm d-inline-flex align-items-center">
                            <svg className="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                            </svg>
                            Sign Out
                            </Link>
                        </div>
                    </div>
                    <div className="collapse-close d-md-none">
                        <Link to="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
                            <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
                <ul className="nav flex-column pt-3 pt-md-0">
                     <div>
                        <img src={require('../componets/fastFood.png')} alt='foody'/>
                     </div>
                     
                    <li className="nav-item active">
                       <Link className="nav-link" to={{ pathname: "/dashboard"}}>
                            <span className="sidebar-icon">
                            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                            </span>
                            <span className="sidebar-text">Dashboard</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                       <Link className="nav-link" to={{ pathname: "/company"}}>
                            <span className="sidebar-icon">
                            <i className="bi bi-buildings-fill"></i>
                            </span>
                            <span className="sidebar-text">Company</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: "/customer"}}>
                            <span className="sidebar-icon">
                            <i className="bi bi-people-fill"></i>
                            </span>
                            <span className="sidebar-text">Customer</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: "/product"}}>
                            <span className="sidebar-icon">
                            <i className="bi bi-basket-fill"></i>
                            </span>
                            <span className="sidebar-text">Product</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link" to={{ pathname: "/report"}}>
                            <span className="sidebar-icon">
                            <i className="bi bi-bar-chart-line-fill"></i>
                            </span>
                            <span className="sidebar-text">Report</span>
                        </Link>
                    </li>


                    
                   
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;