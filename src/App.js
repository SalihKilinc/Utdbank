import "./App.css";
import TopBar from "./components/common/TopBar";
import Footer from "./components/common/Footer";
import CustomRoutes from "./router/CustomRoutes";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "./components/common/PageHeader";
import Menu from "./components/common/Menu";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Menu />
      <PageHeader />
      <CustomRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
