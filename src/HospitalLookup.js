import React, {Component, PropTypes} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Search from 'react-search'
import ReactDOM from 'react-dom'


class HospitalLookup extends Component {	
	
	handleItemsChange(items) {
    console.log(items)
  }

  constructor (props) {
    super(props)
    this.state = {
      repos: []
    }
  }

    render() {
		
		 let items = [
      { id: 0, value: 'Capital Regional Medical Center' },
      { id: 1, value: 'Tallahassee Memorial HealthCare' },
      { id: 2, value: 'University of Miami Hospital' },
      { id: 3, value: 'Jackson Memorial Hospital' },
      { id: 4, value: 'Mercy Hospital' }
]	
		
		
        return (
						
						
			<div class="search-container">
				<Helmet>
					<title>Hospital Lookup</title>
				</Helmet>
			
			<p>Enter your Hospital:</p>
			<Search items={items} />

			<Search items={items}
                //placeholder='Pick your hospital'
                maxSelected={3}
                multiple={true}
                onItemsChanged={this.handleItemsChange.bind(this)} />

			</div>
			

        );
    }
}	


export default HospitalLookup;