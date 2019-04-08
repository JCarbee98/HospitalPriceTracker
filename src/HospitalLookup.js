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
  
  sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  var x;
  var y;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      //check if the two rows should switch place:
	  console.log("hiya "+document.getElementById("myTable").rows.length);
      if ((document.getElementById("myTable").rows[i].cells[1].innerHTML).toLowerCase()> (document.getElementById("myTable").rows[i+1].cells[1].innerHTML).toLowerCase() ){	
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  }
  
  
  handleClick() {
	var table = document.getElementById("myTable");
	var i;
	
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
	
	
	for(i = 0; i < 216; i++) //Just went by the highest number I could find in the database
	{
		
		let newRow;
		const rootRef = firebase.database().ref();
		var usrHospital = (document.getElementById("usrHospital").value).toUpperCase();
		//Used to get operation names
		var x = rootRef.child(usrHospital).child(i.toString()).child("DRG Definition").on('value',
		snapshot=>{
        this.setState({testval:snapshot.val()});
        
		//Adds to table
		if(snapshot.val() != null)
		{
			newRow = table.insertRow(-1);
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
		
		
		
		//this.sortTable();
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