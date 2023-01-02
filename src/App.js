import './App.css';
import Banner from './components/Banner';
import Class from './components/Class';
import Footer from './components/Footer';
import Header from './components/Header';
import Learn from './components/Learn';
import Popular from './components/Popular';
import School from './components/School';
import Teacher from './components/Teacher';



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <School />
      <Learn />
      <Teacher />
      <Class />
      <Popular />
      <Footer />
    </div>
  );
}

export default App;
