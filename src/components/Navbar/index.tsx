import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Icon from "./Icon";
import Nav from "./Nav";
import NavLinksList from "./NavLinksList";
import "./index.scss";
import { PAGES } from "./pages";

function Navbar() {
    const [showCollapsedNav, setShowCollapsedNav] = useState(false);
    const location = useLocation();
    const [currentPageIndex, setCurrentPageIndex] = useState(
        PAGES.findIndex(({ route }) => {
            return route === location.pathname;
        })
    );

    const onLinkClick = (index: number) => {
        setCurrentPageIndex(index);
        setShowCollapsedNav(false);
    };

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
                    currentPageIndex={currentPageIndex}
                    setCurrentPageIndex={setCurrentPageIndex}
                />
            </div>

            <NavLinksList
                className={`collapsed-links ${showCollapsedNav ? "show" : ""}`}
                onLinkClick={onLinkClick}
                currentPageIndex={currentPageIndex}
                setCurrentPageIndex={setCurrentPageIndex}
                setShowCollapsedNav={setShowCollapsedNav}
                showCollapsedNav={showCollapsedNav}
            />
        </div>
    );
}

export default Navbar;
