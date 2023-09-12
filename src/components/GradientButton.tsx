import { useEffect, useRef, useState } from "react";
import "./GradientButton.scss";

interface Props extends React.ComponentPropsWithRef<"button"> {
    width?: number;
    height?: number;
    borderWidth?: number;
}

function GradientButton({
    className,
    width = 180,
    height = 60,
    borderWidth = 1,
    children,
    ...props
}: Props) {
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        if (!contentRef.current || !buttonRef.current) {
            return;
        }

        const left =
            buttonRef.current.clientWidth / 2 -
            contentRef.current.clientWidth / 2;
        const top =
            buttonRef.current.clientHeight / 2 -
            contentRef.current.clientHeight / 2;

        setLeft(left);
        setTop(top);
    }, []);

    return (
        <button
            {...props}
            className={`gradient-button ${className}`}
            ref={buttonRef}
        >
            <div
                className="gradient"
                style={{
                    width,
                    height,
                }}
            >
                <div
                    className="gradient-after"
                    style={{
                        width: `${width - 2 * borderWidth}px`,
                        height: `${height - 2 * borderWidth}px`,
                        margin: `${borderWidth}px`,
                    }}
                ></div>
            </div>
            <div
                className="button-content"
                ref={contentRef}
                style={{ top, left }}
            >
                {children}
            </div>
        </button>
    );
}

export default GradientButton;
