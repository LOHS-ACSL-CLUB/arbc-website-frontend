import { FaBars } from "react-icons/fa";
import "./Nav.scss";
import NavLinksList from "./NavLinksList";
import { useEffect, useRef } from "react";

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
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function anyClick(e: MouseEvent) {
            console.log(buttonRef, e.target);

            if (
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node | null)
            ) {
                setShowCollapsedNav(false);
            }
        }

        document.addEventListener("click", anyClick);

        return () => {
            document.removeEventListener("click", anyClick);
        };
    }, [buttonRef, setShowCollapsedNav]);

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
                ref={buttonRef}
            >
                <FaBars />
            </button>
        </div>
    );
}

export default Nav;
