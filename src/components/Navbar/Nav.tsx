import { FaBars } from "react-icons/fa";
import "./Nav.scss";
import NavLinksList from "./NavLinksList";

interface Props {
    showCollapsedNav: boolean;
    setShowCollapsedNav: (value: boolean) => void;
    currentPageIndex: number;
    setCurrentPageIndex(index: number): void;
}

function Nav({
    showCollapsedNav,
    setShowCollapsedNav,
    currentPageIndex,
    setCurrentPageIndex,
}: Props) {
    return (
        <div className="nav">
            <NavLinksList
                className="list-nav"
                currentPageIndex={currentPageIndex}
                setCurrentPageIndex={setCurrentPageIndex}
            />

            <button
                className="collapsed-nav"
                onClick={() => setShowCollapsedNav(!showCollapsedNav)}
            >
                <FaBars />
            </button>
        </div>
    );
}

export default Nav;
