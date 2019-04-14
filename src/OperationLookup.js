import React, { Component, PropTypes } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Search from "react-search";
import ReactDOM from "react-dom";
import StyledSearch from "./Components/StyledSearch";
import styled from "styled-components";
import firebase from "firebase";
const ButtonTest = styled.button`
  color: black;
  background-color : white;
  
  :hover {
	  color: black;
	  background-color : lightgrey;
  }
`;



class OperationLookup extends Component {
  handleItemsChange(items) {
    console.log(items);
  }

  constructor(props) {
    super(props);
    this.state = {
      testval: "hardcodedtest",
      repos: []
    };
	
    this.handleClick = this.handleClick.bind(this);
  }
  
  visibleElement() {
  document.getElementById("dropBar").style.visibility = "hidden";
}
  
  
  handleClick() {
	var table = document.getElementById("myTable");
	var i;
	
	var testing = firebase.database().ref().on('value', function(snap) { //Loops through the hospital names
	
		snap.forEach(function(childNodes) { 
		
			firebase.database().ref().child(childNodes.key).on('value', function(snap2) {
				
				snap2.forEach(function(child2Nodes) { //loops through the numbers of each hospital
					console.log("inner");
						
						//check the name of each child2Nodes.val().name to see if it matches the user input
						
				});
			});
		
			
			
			console.log("outer");
		});
	});
		
		
    
  
  }
  
  

   render() {
        return (
	    <div class="search-container">
			<Helmet>
			  <title>Hospital Lookup</title>
			</Helmet>

			<label for="mysearch">Enter the operation name: </label>
			<input id="usrHospital" type="search" placeholder="search" />
			<ButtonTest onClick={this.handleClick}>Click Me</ButtonTest>
			<div align="right">
			<select id="dropBar" >
			<option value="name">Order by name</option>
			<option value="price">Order by price</option>		
			</select>
			</div>
			<table id="myTable">
				
			</table>
	
      </div>
        );
    } 
}


export default OperationLookup;