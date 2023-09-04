import Footer from "components/Footer";
import Navbar from "components/Navbar";
import SignUpSection from "components/SignUpSection";
import { Outlet, ScrollRestoration } from "react-router-dom";

interface Props {
    children?: React.ReactNode;
}

function AppLayout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children ?? <Outlet />}
            <SignUpSection />
            <Footer />
            <ScrollRestoration />
        </>
    );
}

export default AppLayout;
