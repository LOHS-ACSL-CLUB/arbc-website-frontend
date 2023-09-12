import { Link } from "react-router-dom";
import { PAGES } from "./pages";

interface Props extends React.ComponentPropsWithoutRef<"ul"> {
    onLinkClick?(index: number): void;
    currentPageIndex: number;
}

function NavLinksList({ onLinkClick, currentPageIndex, ...props }: Props) {
    const handleLinkClick = (index: number) => {
        onLinkClick?.(index);
    };

    return (
        <ul {...props}>
            {PAGES.map(({ route, name }, index) => {
                console.log(
                    index,
                    currentPageIndex,
                    index === currentPageIndex
                );

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
