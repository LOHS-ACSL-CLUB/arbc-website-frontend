import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/competition">Competition</Link>
                </li>
                <li>
                    <Link to="/resources">Resources</Link>
                </li>
                <li>
                    <Link to="/results">Results</Link>
                </li>
                <li>
                    <Link to="/chapters">Chapters</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
