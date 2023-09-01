import { Link } from "react-router-dom";

interface Props extends React.ComponentPropsWithoutRef<"ul"> {
    onAnyLinkClick?(): void;
}

function NavLinksList({ onAnyLinkClick, ...props }: Props) {
    return (
        <ul {...props} onClick={onAnyLinkClick}>
            <li>
                <Link to="/">Home</Link>
            </li>
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
