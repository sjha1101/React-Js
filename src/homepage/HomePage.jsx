import './Hompage.css';
import logo from './images/logo.png';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import userIcon from './images/user.png';
function HomePage() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md bg-success navbar-dark">
                    <div className="container-fluid">
                        <div className="logo">
                            <img src={logo} width={160} alt="logo" />
                        </div>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav gap-3">
                                <li className="nav-item">
                                    <a className="nav-link nav-color" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-color" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-color" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav-color" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown ms-auto">
                            <button
                                className="btn dropdown-toggle bg-transparent border-0"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src={userIcon} alt="User" width={40} height={40} style={{ borderRadius: '50%' }} />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="../Login">Login</a></li>
                                <li><a className="dropdown-item" href="#">SignUp </a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={slide1} className="card-img-top" alt="Slide 1" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="card">
                                    <img src={slide1} className="card-img-top" alt="Slide 1" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default HomePage;
