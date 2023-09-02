import { Link } from "react-router-dom";
import "./Footer.scss";
import { MdMail } from "react-icons/md";
import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <p>
                &copy; 2023 American Regional Biology Competition. All rights
                reserved.
            </p>

            <div className="links">
                <Link to="mailto: arbcsoutherncal@gmail.com" target="_blank">
                    <MdMail />
                </Link>
                <Link
                    to="https://www.linkedin.com/company/americanregionalbiologycompetition/"
                    target="_blank"
                >
                    <FaLinkedin />
                </Link>
                <Link to="https://discord.gg/eSjVY48G" target="_blank">
                    <FaDiscord />
                </Link>
                <Link
                    to="https://instagram.com/arbc_socal?igshid=OGQ5ZDc2ODk2ZA=="
                    target="_blank"
                >
                    <FaInstagram />
                </Link>
            </div>
        </div>
    );
}

export default Footer;
