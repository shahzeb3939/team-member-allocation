import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function PageLayout(props) {
    const { year } = props;
    

    return (
        <>
            <Navbar />
            <div className="container flex">
                <div className="content flex flex-column">
                    <Outlet />
                    <Footer 
                        year={year}/>
                </div>
            </div>
        </>
    )
}