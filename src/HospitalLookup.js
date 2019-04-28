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

class HospitalLookup extends Component {
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
	
	if (table.rows.length > 0)	{ //clears out table if not empty
		while(table.rows.length != 0)	{
			table.deleteRow(0);
		}
	}
	
	function Average(props){

		
	}
	const rootCheck = firebase.database().ref();
	var isReal = (document.getElementById("usrHospital").value).toUpperCase();

	var z = rootCheck.child(isReal).child('0').child("DRG Definition").on('value',
		snapshot=>{ //always has a 0 operation so we can check to see if it exists
        this.setState({testval:snapshot.val()});
		
		if(snapshot.val() == null)
		{
			let newRow = table.insertRow(-1);
			let newCell = newRow.insertCell(0);
			let newText = document.createTextNode(isReal + " does not exist");
			newCell.appendChild(newText);
		}
		else
		{
			/* Hospital details here
			let newRow = table.insertRow(-1);
			let newCell = newRow.insertCell(0);
			let newText = document.createTextNode(isReal + "");
			newCell.appendChild(newText);
			*/
		}
		
		});
	
	
		const rootRef = firebase.database().ref();
		var usrHospital = (document.getElementById("usrHospital").value).toUpperCase();
		 rootRef.child(usrHospital).once("value").then(function(snapshot){
			snapshot.forEach(function(childSnap){
				console.log(childSnap.val());
				let newRow = table.insertRow(-1);
				let newCell = newRow.insertCell(0);
				let newText = document.createTextNode(childSnap.child("DRG Definition").val());
				newCell.appendChild(newText);
				let newCell2 = newRow.insertCell(1);
				let newText2 = document.createTextNode('$'+childSnap.child("Average Total Payments").val());
				newCell2.appendChild(newText2);
				})
			});
    

	
  }
	
  
  render() {
 
    return (
		
      <div class="search-container">
        <Helmet>
          <title>Hospital Lookup</title>
        </Helmet>

        <label for="mysearch">Enter the hospital name: </label>
        <input id="usrHospital" type="search" placeholder="search" />
        <ButtonTest onClick={this.handleClick}>Submit</ButtonTest>
		
		<table id="myTable">
			
		</table>
	
      </div>
    );
  }
}

export default HospitalLookup;
/*
firebase example
const rootref=firebase.database().ref() //this is the basic connection, connects to firebase realtime database root
//to reference the 'Test' variable 
rootRef.child('Test').on('value',snapshot=>{//on is a one-time query to the DB
  //value of Test is held with snapshot.val() here so you can do
  console.log(snapshot.val());
};
  //and itll print to your browser console
  to look at the address of TMHC
  Hospitals
  └Tallahassee Memorial HealthCare
    └Address="1300...."
rootRef.child('Hospitals').child('Tallahassee Memorial HealthCare').child('Address').on('value',snapshot=>{
console.log(snapshot.val());
});
})
*/ 