import React, {Component, PropTypes} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Search from 'react-search'
import ReactDOM from 'react-dom'
import StyledSearch from "./Components/StyledSearch";
import styled from "styled-components";
import firebase from 'firebase';
const ButtonTest = styled.button`
  color: red;

`

class HospitalLookup extends Component {	

	handleItemsChange(items) {
    console.log(items)
  }

  constructor (props) {
    super(props)
    this.state = {
      testval:"hardcodedtest",
      repos: []
    }
	
	this.handleClick = this.handleClick.bind(this);
  }
	
   handleClick() {
    const rootRef=firebase.database().ref('/hospital/');
    var x = rootRef;
    document.getElementById("demo").innerHTML = x;
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
			
			<label for="mysearch">Enter the hospital name: </label> 
			<input id="mysearch" type="search" placeholder="search"/>
			<button onClick={this.handleClick}>Click Me</button>
			<p id="demo">
      </p>
      <h1>{this.state.testval}</h1>

			{/*	
			<p>Enter the Hospital Name:</p>
			<StyledSearch items={items}
                maxSelected={3}
                multiple={true}
                onItemsChanged={this.handleItemsChange.bind(this)} />
			<ButtonTest>Hello Button!</ButtonTest>	
			
			*/}
			</div>
			

        );
    }
}	


export default HospitalLookup;