import "../src/css/Employees.css"
import { Routes, Route } from "react-router-dom"

import HomeScreen from "./screens/HomeScreen";
import TeamScreen from "./screens/TeamScreen";
import NoPageFound from "./components/NoPageFound";
import PageLayout from "./components/PageLayout";

import { DataProvider } from "./context/DataContext";

function App() {

  return (
    <DataProvider>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/teams" element={<TeamScreen/> }
          />
        </Route>
        <Route path="*" element={<NoPageFound />}/>
      </Routes>
    </DataProvider>
  );
}


export default App;
