
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import {
  // Solid Icons
  faCheck,
  faTimes,
  faArrowRight,
  faPlay,
  faGaugeHigh,
  faShield,
  faShieldHalved,
  faGlobe,
  faChartLine,
  faCode,
  faCloud,
  faBars,
  faTimes as faTimesSolid,
  faMapMarkerAlt,
  faEnvelope,
  faPaperPlane,
  faRocket,
  faStar,
  faBuilding,
  faQuestionCircle,
  faCreditCard,
  faCog,
  faUserPlus,
  faHeadset,
  faSearch,
  faChevronDown,
  faChevronUp,
  faUser,
  faSignOutAlt,
  faHeart,
  faPhone,
  faClock,
  faSpinner,
  faCheckCircle,
  faArrowUp,
  faAward,
  faHandshake,
  faLightbulb,
  faUsers,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";


library.add(
  fab,
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,

  // Solid Icons
  faCheck,
  faTimes,
  faArrowRight,
  faPlay,
  faGaugeHigh,
  faShield,
  faShieldHalved,
  faGlobe,
  faChartLine,
  faCode,
  faCloud,
  faBars,
  faTimesSolid,
  faMapMarkerAlt,
  faEnvelope,
  faPaperPlane,
  faRocket,
  faStar,
  faBuilding,
  faQuestionCircle,
  faCreditCard,
  faCog,
  faUserPlus,
  faHeadset,
  faSearch,
  faChevronDown,
  faChevronUp,
  faUser,
  faSignOutAlt,
  faHeart,
  faPhone,
  faClock,
  faSpinner,
  faCheckCircle,
  faArrowUp,
  faAward,
  faHandshake,
  faLightbulb,
  faUsers,
  faChartSimple,
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
