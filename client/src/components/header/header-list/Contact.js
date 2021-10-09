const Contact = () => {
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
                        Contact
                    </a>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                    >
                        <li>
                            <a className="dropdown-item" href="#">
                                GU Core Values
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                SSR NAAC
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                IQAC
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                GUIUMS Portal
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Webmail
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Academic Council
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Deans of Facalties
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
