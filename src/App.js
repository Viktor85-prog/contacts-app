import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/login" render={() => <Login />} />
          <Route path="/contacts" render={() => <Contacts />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
