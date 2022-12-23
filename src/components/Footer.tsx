import { useState, useEffect } from "react";

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
      }, [])


    return (
        <p>Team Member Allocation App - {year}</p>
    )
}