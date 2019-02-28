import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class OperationLookup extends Component {
    render() {
        return (
			
			<div class="search-container">
				<form action="/action_page.php">
					<input type="text" placeholder="Search.." name="search">
					</input>
					<button type="submit"><i class="fa fa-search"></i></button>
				</form>
			</div>
        );
    }
}


export default OperationLookup;