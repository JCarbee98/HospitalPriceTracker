import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Style setting to center header
var divStyle = {
    width: "500px",
    margin: "auto"
};

// Basic information about the project in it's current iteration is listed on the homepage
class HomePage extends Component {
    render() {
        return (
			<div>
                <div style={divStyle}>
                    <h2>Welcome to Chiron Price Tracker</h2>
                </div>
                <div>
                    <h4>This application is currently in development.</h4>
                </div>
                <div>
                    <h4>To test our application in its current iteration, please select the Hospital Lookup tab above. Then enter
                    the name of a hospital in Florida to view the average costs of each one of that Hospital's procedures/operations.</h4>
                </div>
                <div>
                    <h4>To learn more about the project and the team behind it, please select the About tab above.</h4>
                </div>
			</div>
        );
    }
}
export default HomePage;












/*import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Style setting to center header
var divStyle = {
    width: "500px",
    margin: "auto"
};

// Basic information about the project in it's current iteration is listed on the homepage

class HomePage extends Component {
    render() {
        return (0
			<div>
<<<<<<< HEAD
					  <h2></h2>
=======
                <div style={divStyle}>
                    <h2>Welcome to Chiron Price Tracker</h2>
                </div>
                <div>
                    <h4>This application is currently in development.</h4>
                </div>
                <div>
                    <h4>To test our application in its current iteration, please select the Hospital Lookup tab above. Then enter
                    the name of a hospital in Florida to view the average costs of each one of that Hospital's procedures/operations.</h4>
                </div>
                <div>
                    <h4>To learn more about the project and the team behind it, please select the About tab above.</h4>
                </div>
>>>>>>> 738d785daa5761301516b1a79460269309a4c99e
			</div>
        );
    }
}

export default HomePage;*/
