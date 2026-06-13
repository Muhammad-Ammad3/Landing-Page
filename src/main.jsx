import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Font Awesome Configuration
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faArrowRight, faPlay, faGaugeHigh, faShield, faGlobe, faChartLine, faCode, faCloud, faBars, faTimes, faMapMarker, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGithub, faTwitter, faLinkedin, faCheck, faArrowRight, faPlay, faGaugeHigh, faShield, faGlobe, faChartLine, faCode, faCloud, faBars, faTimes, faMapMarker, faEnvelope, faPaperPlane)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)