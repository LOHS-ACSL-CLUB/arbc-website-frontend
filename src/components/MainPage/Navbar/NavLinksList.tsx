import { Link } from "react-router-dom";

function NavLinksList(props: React.ComponentPropsWithoutRef<"ul">) {
    return (
        <ul {...props}>
            <li>
                <Link to="/competition">Competition</Link>
            </li>
            <li>
                <Link to="/resources">Resources</Link>
            </li>
            <li>
                <Link to="/chapters">Chapters</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    );
}

export default NavLinksList;
