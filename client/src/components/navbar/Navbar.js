import Administration from "./nav-item/Administration";
import Admission from "./nav-item/Admission";
import Alumini from "./nav-item/Alumini";
import Calander from "./nav-item/Calander";
import Institues from "./nav-item/Institues";
import More from "./nav-item/More";
import Offices from "./nav-item/Offices";
import Results from "./nav-item/Results";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
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
                <Administration />
                <Institues />
                <Calander />
                <Offices />
                <Results />
                <Admission />
                <Alumini />
                <More />
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button className="btn btn-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
