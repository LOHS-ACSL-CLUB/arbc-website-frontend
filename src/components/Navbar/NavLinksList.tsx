import { Link } from "react-router-dom";
import { PAGES } from "./pages";
import { useEffect, useRef } from "react";

interface Props extends React.ComponentPropsWithoutRef<"ul"> {
    onLinkClick?(index: number): void;
    currentPageIndex: number;
    setCurrentPageIndex(index: number): void;
    showCollapsedNav: boolean;
    setShowCollapsedNav(value: boolean): void;
}

function NavLinksList({
    onLinkClick,
    currentPageIndex,
    setCurrentPageIndex,
    showCollapsedNav,
    setShowCollapsedNav,
    ...props
}: Props) {
    const listRef = useRef<HTMLUListElement>(null);

    const handleLinkClick = (index: number) => {
        onLinkClick?.(index);
        setCurrentPageIndex(index);
    };

    useEffect(() => {
        const anyClick = () => {
            if (showCollapsedNav) {
                setShowCollapsedNav(false);
            }
        };

        document.addEventListener("click", anyClick, true);

        return () => {
            document.removeEventListener("click", anyClick, true);
        };
    }, [listRef, setShowCollapsedNav, showCollapsedNav]);

    return (
        <ul {...props} ref={listRef}>
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
