import Academics from "./header-list/Academics";
import AcademicStaff from "./header-list/AcademicStaff";
import Contact from "./header-list/Contact";
import Research from "./header-list/Research";
import StudentAffair from "./header-list/StudentAffair";

const Header = () => {
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <div className="flex-grow-1">
                        <img
                            className="img d-block my-3 text-start"
                            id="header-logo"
                            src="https://www.gauhati.ac.in/assets/images/logo.png"
                            alt="logo"
                        />
                    </div>
                    <div className="text=right">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Academics />
                            <AcademicStaff />
                            <Research />
                            <StudentAffair />
                            <Contact />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
