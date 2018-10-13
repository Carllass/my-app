import React, { Component } from "react";
import "./App";
import ReactDOM from 'react-dom';

class TableManagement extends Component {
  constructor(props) {
    super(props);
    var name = props.name;
    var amount = props.amount;
    this.state = {name: name, amount: amount};
    this.onNameChange = this.onNameChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.state = {
      head_names: ['Товар', 'Кол-во'],
      rows: []
    };
  }  
  onAmountChange(e) {
            var val = e.target.value;
            this.setState({amount: val});
        }
        onNameChange(e) {
            var val = e.target.value;
            console.log(val);
            this.setState({name: val});
        }
  AddRow() {
    let newRows = this.state.rows;
    newRows.push([this.state.name,this.state.amount]);
  	this.setState({rows: newRows});
  }

	render() {
		return (<div>
			  <Table head={this.state.head_names} rows={this.state.rows} />
        <hr />
        <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Название товара:</label><br />
                        <input type="text" value={this.state.name} 
                            onChange={this.onNameChange}/>
                    </p>
                    <p>
                        <label>Кол-во:</label><br />
                        <input type="number" value={this.state.amount} 
                            onChange={this.onAmountChange} />
                    </p>
                    <button onClick={ this.AddRow.bind(this) }>Add row</button>
          </form>
        
	    </div>
		);
	}
}

class Table extends Component {
	render() {
		return (
			<table>
				<thead>
					{this.genHead()}
				</thead>
				<tbody>
					{this.genRow()}
				</tbody>
			</table>
		);
	}

	genHead() {
		var head = this.props.head;

		return head.map(function(v, i) {
			return (
				<th key={'th' + i}>
					{v}
				</th>
			);
		});
	}

	genRow() {
		var rows = this.props.rows;

		return rows.map(function(v, i) {
			var tmp = v.map(function(v2, j) {
				return (
					<td key={'td' + i + '_' + j}>
						{v2}
					</td>
				);
			});

			return (
				<tr key={'tr' + i}>
					{tmp}
				</tr>
			)
		});
	}
}

ReactDOM.render(
	<TableManagement />,
	document.getElementById('root')
);
