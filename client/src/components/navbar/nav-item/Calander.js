const Calander = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle text-white"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Calander
                    </a>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                    >
                        <li>
                            <a className="dropdown-item" href="#">
                                Academic Calander
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Holidays
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Resticted Holidays
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Calander;
