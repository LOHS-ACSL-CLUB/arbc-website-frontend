import { Link, useLocation } from "react-router-dom";
import { PAGES } from "./pages";
import { useState } from "react";

interface Props extends React.ComponentPropsWithoutRef<"ul"> {
    onLinkClick?(index: number): void;
}

function NavLinksList({ onLinkClick, ...props }: Props) {
    const location = useLocation();
    const [currentPageIndex, setCurrentPageIndex] = useState(
        PAGES.findIndex(({ route }) => {
            return route === location.pathname;
        })
    );

    const handleLinkClick = (index: number) => {
        setCurrentPageIndex(index);
        onLinkClick?.(index);
    };

    return (
        <ul {...props}>
            {PAGES.map(({ route, name }, index) => {
                return (
                    <li key={route}>
                        <Link
                            to={route}
                            style={{
                                color: index === currentPageIndex ? "#000" : "",
                            }}
                            onClick={() => handleLinkClick(index)}
                        >
                            {name}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default NavLinksList;
