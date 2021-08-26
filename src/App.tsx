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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/about" component={Feature} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/terms_of_service" component={TermsOfService} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Cta />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
