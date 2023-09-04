import { useCallback, useEffect, useState } from "react";
import Icon from "./Icon";
import Nav from "./Nav";
import "./index.scss";
import NavLinksList from "./NavLinksList";

function Navbar() {
    const [showCollapsedNav, setShowCollapsedNav] = useState(false);

    const onResize = useCallback(() => {
        if (showCollapsedNav) {
            setShowCollapsedNav(false);
        }
    }, [showCollapsedNav]);

    window.addEventListener("resize", onResize);

    useEffect(() => {
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [onResize]);

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
                onLinkClick={() => setShowCollapsedNav(false)}
            />
        </div>
    );
}

export default Navbar;
