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
					<p>Our idea was birthed from a new law that was passed on January 1, 2019. Emilio Murillo informed the rest
					of us about it, and how it now requires all hospitals that take medicare/medicaid to publish complete price lists online.
					This law, however, does not specify a format for the data; and prices for some hospitals can also be difficult to
					find. So, the goal of Chiron Price Tracker is to provide an easy to use comparison search tool for multiple
						different hospitals.</p>
				</div>
				<div>
					<p>We chose the name 'Chiron' for our Hospital Operation Price Tracker because in Greek mythology, Chiron was famous
					for his wisdom and knowledge of medicine. The initials CPT can also be used to represent 'Current Procedural Terminology',
					which is used across the country as a uniform process for coding medical services.</p>
				</div>



				<h2>About Us</h2>
				<div>
					<p>All five members of this project are currently third year Computer Science students at Florida State
						University. We are working together together on this project for our CEN4020 Software Engineering course.
						</p>
				</div>
				<div>
					<img src={image} alt="Image" />
				</div>
					From left to right: Emilio Murillo, Brandon Hahn, Spencer Lewis, and Tyler St Preux
				<p></p>
				<div>
					<img src={image2} alt="Image2" />
				</div>
					And who could forget the amazing Joshua Carbee!?
			</div>

        );
    }
}


export default AboutPage;