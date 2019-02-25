import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
			<div>
			<ul>
				  <li><a class="active" href="#home">Home</a></li>
				  <li><a href="#news">Operation Lookup</a></li>
				  <li><a href="#contact">Price Lookup</a></li>
				  <li><a href="#about">About</a></li>
				</ul>
		
            <table bgcolor = "white">
	
                <thead>
                    <tr>
                        <th>Hospital</th>
                        <th>Operation</th>
						<th>Average Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tallahassee Regional Hospital</td>
                        <td>Toe hurts</td>
						<td>$10</td>	
                    </tr>
                    <tr>
                        <td>Tallahassee Regional Hospital</td>
                        <td>Ate too much Wendy's</td>
						<td>$20</td>
                    </tr>
                    <tr>
                        <td>Tallahassee Regional Hospital</td>
                        <td>Fortnite Addiction</td>
						<td>$50</td>
                    </tr>
                </tbody>
            </table>
			</div>
        );
    }
}

export default Menu;