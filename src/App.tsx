import { useEffect } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Top from "./pages/Top";
import Feature from "./pages/Feature";
import Header from "./organisms/Header";
import Cta from "./molecules/Cta";
import Footer from "./organisms/Footer";
import NotFound from "./pages/NotFound";

function App() {
  // const { hash, pathname } = useLocation();

  // useEffect(() => {
  //   if (!hash) {
  //     window.scrollTo(0, 0);
  //   }
  // }, [hash, pathname]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/about/link" component={Top} />
        <Route exact path="/about/features" component={Feature} />
        <Route component={NotFound} />
      </Switch>
      <Cta />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
