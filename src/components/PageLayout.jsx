import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useContext } from "react";
import DataContext from "../context/DataContext";

export default function PageLayout() {
    const { year } = useContext(DataContext);

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