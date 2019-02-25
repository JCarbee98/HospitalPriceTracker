import React, {Component} from 'react';

class Table extends Component {
    render() {
        return (
            <table bgcolor = "lightblue">
	
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
        );
    }
}

export default Table;