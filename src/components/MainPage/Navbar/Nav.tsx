import { FaBars } from "react-icons/fa";
import "./Nav.scss";
import NavLinksList from "./NavLinksList";

interface Props {
    showCollapsedNav: boolean;
    setShowCollapsedNav: (value: boolean) => void;
}

function Nav({ showCollapsedNav, setShowCollapsedNav }: Props) {
    return (
        <div className="nav">
            <NavLinksList className="list-nav" />

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
