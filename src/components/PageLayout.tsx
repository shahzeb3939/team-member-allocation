import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function PageLayout() {

    return (
        <>
            <Navbar />
            <div className="container flex">
                <div className="content flex flex-column">
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    )
}