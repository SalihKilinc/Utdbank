import "./App.css";
import TopBar from "./components/common/TopBar";
import Footer from "./components/common/Footer";
import CustomRoutes from "./router/CustomRoutes";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "./components/common/PageHeader";

function App() {
  return (
    <BrowserRouter>
      <TopBar />

      <CustomRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
