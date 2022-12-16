import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LandPage from "./components/LandPage/LandPage";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandPage} />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
