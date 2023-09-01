import { useState } from "react";
import Icon from "./Icon";
import Nav from "./Nav";
import "./index.scss";
import NavLinksList from "./NavLinksList";

function Navbar() {
    const [showCollapsedNav, setShowCollapsedNav] = useState(false);

    return (
        <div className="navbar">
            <div className="navs">
                <Icon />
                <Nav
                    showCollapsedNav={showCollapsedNav}
                    setShowCollapsedNav={setShowCollapsedNav}
                />
            </div>

            <NavLinksList
                className={`collapsed-links ${showCollapsedNav ? "show" : ""}`}
                onAnyLinkClick={() => setShowCollapsedNav(false)}
            />
        </div>
    );
}

export default Navbar;
