import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    }

    return (
        <div className="container sticky-top">
            <nav className="navbar navbar-expand-lg navbar-blur">
                <div className="d-flex justify-content-between w-100 align-items-center">
                    <button type="button" className="btn btn-info p-2 m-3 btn-rounded" onClick={navigateToHome}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5" />
                        </svg> Back
                    </button>

                    <div className="d-flex justify-content-end">
                        <span onClick={navigateToHome} className="logo-pointer">
                            <Logo />
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
