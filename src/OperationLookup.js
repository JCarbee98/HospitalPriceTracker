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
	if (table.rows.length > 0) { //clears out table if not empty
		while(table.rows.length != 0)	{
			table.deleteRow(0);
		}
	}
	var usrOperation = (document.getElementById("usrOperation").value).toUpperCase();
	
	var operationTotal=0;
	var numOperations=0;
	var testing = firebase.database().ref().on('value', function(snap) { //Loops through the hospital names
	
		snap.forEach(function(childNodes) { 
		
			firebase.database().ref().child(childNodes.key).on('value', function(snap2) {
				
				snap2.forEach(function(child2Nodes) { //loops through the numbers of each hospital
				//	console.log("inner");
						
						var innerVal =child2Nodes.child("DRG Definition").val();
						
						if(innerVal.includes(usrOperation) == true)
						{
								let newRow = table.insertRow(-1);
								let newCell = newRow.insertCell(0);
								let newText = document.createTextNode(childNodes.key);
								newCell.appendChild(newText);
								
								let nameCell = newRow.insertCell(1);
								let nameText = document.createTextNode(child2Nodes.child("DRG Definition").val());
								nameCell.appendChild(nameText);
								
								
								let priceCell = newRow.insertCell(2);
								let priceText = document.createTextNode('$'+child2Nodes.child("Average Total Payments").val());
								priceCell.appendChild(priceText);

								numOperations++;
								operationTotal+=parseFloat(child2Nodes.child("Average Total Payments").val(),10);
						}
						//872 - SEPTICEMIA OR SEVERE SEPSIS W/O MV >96 HOURS W/O MCC
						//check the name of each child2Nodes.val().name to see if it matches the user input
						
				});
				
			});
		
			
		
			//console.log("outer");
		});
		//console.log(operationTotal);
		//console.log(numOperations);
		//console.log(operationTotal/numOperations);
	});
		//calculate average price for operations returned
		//THIS NEEDS TO BE MADE INTO A FUNCTION CALLED AFTER DATABASE RETURNS VALS
		var operationAverage=operationTotal/numOperations;
		//regex pattern to make operation prices legibile to parseFloat
		var pattern = /[^0-9.-]+/g;
		for(var i=0; i<numOperations;++i){
			//attempt to iterate through table, add a % difference column, need get operation price from table
			var temprow=table.rows[i];
			var avgcell=temprow.insertCell(3);
			var average=((parseFloat(temprow.cells[2].innerHTML.replace(pattern,''))/operationAverage));
			var priceComparison;
			if(average<1){
				var outAvg=Math.round((1-average)*100);
				outAvg=Math.trunc(outAvg);
				 priceComparison=document.createTextNode("% "+outAvg+" lower");
			}
			else{
				var outAvg=Math.round((average-1)*100);
				outAvg=Math.trunc(outAvg);
				 priceComparison=document.createTextNode("% "+outAvg+" higher");
			}
			avgcell.appendChild(priceComparison);
		}
		//END OF FUNCTION
    
  
  }
  


   render() {
        return (
	    <div class="search-container">
			<Helmet>
			  <title>Hospital Lookup</title>
			</Helmet>

			<label for="mysearch">Enter the operation name: </label>
			<input id="usrOperation" type="search" placeholder="search" />
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