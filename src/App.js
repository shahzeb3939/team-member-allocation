import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Employees from './components/Employees';

function App() {
  return (
    <div className="App">
      <Header />
      <Employees />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
