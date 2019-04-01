import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

class AboutPage extends Component {
    render() {
        return (
		
			<div>
				<Helmet>
					<title>About</title>
				</Helmet>
			
			
				<h2>About Us</h2>
				<p>This is a class project for CEN4020 where our main goal is 
				to implement a webpage that allows the user to search average prices for operations! </p>
			</div>

        );
    }
}


export default AboutPage;