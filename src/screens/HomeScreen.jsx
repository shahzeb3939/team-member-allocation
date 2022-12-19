import Header from "../components/Header"
import LineBreak from "../components/LineBreak"
import SelectTeam from "../components/SelectTeam"
import Employees from "../components/Employees"

export default function Home(props) {
    return (
        <>
            <Header />
            <LineBreak />
            <SelectTeam />
            <Employees />
        </>
    )
}