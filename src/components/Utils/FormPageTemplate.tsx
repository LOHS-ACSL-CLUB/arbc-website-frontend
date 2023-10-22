import socalLogo from "assets/Socal_Logo.png";
import "./FormPageTemplate.scss";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
    // children?: React.ReactNode;
}

function FormPageTemplate({ children, className, ...props }: Props) {
    return (
        <div {...props} className={`form-page-template ${className}`}>
            <div className="form-container">
                <img src={socalLogo} alt="logo" className="socal-logo" />
                {children}
            </div>
        </div>
    );
}

export default FormPageTemplate;
