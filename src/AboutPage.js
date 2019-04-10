import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import image from './image.png'; // Import image
import image2 from  './image2.png';

console.log(image); // /logo.84287d09.png
console.log(image2);

class AboutPage extends Component {
    render() {
        return (
		
			<div>
				<Helmet>
					<title>About</title>
				</Helmet>


				<h2>About Chiron</h2>
				<div>
					<p>Chiron Price Tracker is a web application currently in development. The goal of the project
					is to provide free and easy access to users who are in search of information about the cost of procedures
					at their local hospitals. That way users can compare prices and decide where to get the best treatment for
						the best price!</p>
				</div>
				<div>
					<p>Our idea was birthed from a new law that was passed on January 1, 2019.</p>
				</div>



				<h2>About Us</h2>
				<div>
					<img src={image} alt="Image" />
				</div>
					From left to right: Emilio Murillo, Brandon Hahn, Spencer Lewis, and Tyler St Preux
				<p></p>
				<p>This is a class project for CEN4020 where our main goal is
				to implement a webpage that allows the user to search average prices for operations! </p>
			</div>

        );
    }
}


export default AboutPage;