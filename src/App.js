import AboutPage from './AboutPage';
import OperationLookup from './OperationLookup';
import HospitalLookup from './HospitalLookup';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const App = () => (
  <Router>
    <div>
	 <Helmet>
      <title>Home Page</title>
    </Helmet>
	
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
		<li>
          <Link to="/hospital">Hospital Lookup</Link>
        </li>
		<li>
          <Link to="/price">Operation Lookup</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
	  <Route path="/hospital" component={Hospital} />
	  <Route path="/price" component={Price} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Hospital = () => (
  <div>
    <HospitalLookup />
  </div>
);

const Price = () => (
  <div>
    <OperationLookup />
  </div>
);

const About = () => (
  <div>
    <AboutPage />
  </div>
);


export default App;
