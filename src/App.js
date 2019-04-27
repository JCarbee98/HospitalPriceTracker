import HomePage from './HomePage';
import AboutPage from './AboutPage';
import OperationLookup from './OperationLookup';
import HospitalLookup from './HospitalLookup';
import SupportedHospitals from './SupportedHospitals';
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Layout } from './Components/Layout';
import { NavigationBar }from './Components/CustomNavbar';
import { Banner } from './Components/Banner';



class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Banner />
          <Layout>
          <Router>
            <Switch>
             <Route exact path="/" component={HomePage} />
	           <Route path="/hospitallookup" component={HospitalLookup} />
	           <Route path="/operationlookup" component={OperationLookup} />
			   <Route path="/supportedhospitals" component={SupportedHospitals} />
             <Route path="/about" component={AboutPage} />
            </Switch>
        </Router>
       </Layout>
      </React.Fragment>
    )
  }
}


export default App;


















/*import HomePage from './HomePage';
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
	   <HomePage />
    //  <title>Home Page</title>
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

      

      <Route exact path="/" component={Home} />
	  <Route path="/hospital" component={Hospital} />
	  <Route path="/price" component={Price} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <HomePage />
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
*/

