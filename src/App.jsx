import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import HomeNavbar from "./components/Navs/HomeNavbar";
import HomeFooter from "./components/Footers/HomeFooter";
import store from "./Store";
import { Provider } from "react-redux";

function App() {
  return (
   
      <Provider store={store}>
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
      </Provider>
   
  );
}

export default App;
