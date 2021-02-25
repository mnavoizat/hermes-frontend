import "./App.css";
import Header from "./components/Header";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp,
  faAngleDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faAngleDown,
  faAngleUp,
  faCheck,
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube
);

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
