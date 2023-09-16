import { Link } from "react-router-dom";
import { PAGES } from "./pages";

interface Props extends React.ComponentPropsWithoutRef<"ul"> {
    onLinkClick?(index: number): void;
    currentPageIndex: number;
    setCurrentPageIndex(index: number): void;
}

function NavLinksList({
    onLinkClick,
    currentPageIndex,
    setCurrentPageIndex,
    ...props
}: Props) {
    const handleLinkClick = (index: number) => {
        onLinkClick?.(index);
        setCurrentPageIndex(index);
    };

    return (
        <ul {...props}>
            {PAGES.map(({ route, name }, index) => {
                return (
                    <li key={`${route}-${index === currentPageIndex}`}>
                        <Link
                            to={route}
                            className={
                                index === currentPageIndex ? "active" : ""
                            }
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
