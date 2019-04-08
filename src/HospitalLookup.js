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

  handleClick() {
	var table = document.getElementById("myTable");
	var i;
	for(i = 0; i < 216; i++)
	{
		
		let newRow = table.insertRow(-1);
		const rootRef = firebase.database().ref();
		var usrHospital = (document.getElementById("usrHospital").value).toUpperCase();
		//Used to get operation names
		var x = rootRef.child(usrHospital).child(i.toString()).child("DRG Definition").on('value',
		snapshot=>{
        this.setState({testval:snapshot.val()});
        
		//Adds to table
		if(snapshot.val() != null)
		{
			let newCell = newRow.insertCell(0);
			let newText = document.createTextNode(snapshot.val());
			newCell.appendChild(newText);
		}
		});
    
		//Used to get operation prices
		var y = rootRef.child(usrHospital).child(i.toString()).child("Average Total Payments").on('value',
		snapshot=>{
        this.setState({testval:snapshot.val()});
        
		//Adds to table
		if(snapshot.val() != null)
		{
			let newCell2 = newRow.insertCell(1);
			let newText2 = document.createTextNode('$'+snapshot.val());
			newCell2.appendChild(newText2);
		}
		
		});
		
		
		
		
		console.log("Hello!");	
	}
    
  }

  render() {
    let items = [
      { id: 0, value: "Capital Regional Medical Center" },
      { id: 1, value: "Tallahassee Memorial HealthCare" },
      { id: 2, value: "University of Miami Hospital" },
      { id: 3, value: "Jackson Memorial Hospital" },
      { id: 4, value: "Mercy Hospital" }
    ];
    return (
      <div class="search-container">
        <Helmet>
          <title>Hospital Lookup</title>
        </Helmet>

        <label for="mysearch">Enter the hospital name: </label>
        <input id="usrHospital" type="search" placeholder="search" />
        <ButtonTest onClick={this.handleClick}>Click Me</ButtonTest>
		
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