const Institues = () => {
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
                        Institues
                    </a>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                    >
                        <li>
                            <a className="dropdown-item" href="#">
                                GUINEIS
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                IDOL
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                UGC-HRDC
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                ST Radar Centre
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                ISRO RAC-S
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Institues;
