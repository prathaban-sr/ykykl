import React, {Component} from 'react';
import Zone from '../components/zone.js';
import superagent from 'superagent';

class Zones extends Component {
	constructor() {
		super();
		this.state = {
			zone: {
				name:'',
				zipcodes:[],
				cnt:0
			},
			list: []
		}
	}

	componentDidMount() {
		console.log("componentDidMount");
		superagent
		.get('/api/zone')
		.query(null)
		.set('Accept','application/json')
		.end((err, response) => {
			if(err) {
				alert('Error: ' + err);
				return;
			};
			console.log(JSON.stringify(response.body));
			let results = response.body.results;
			this.setState({
				list: results
			});
		})
	}

	updateZone(event) {
		let newzone = Object.assign({}, this.state.zone);
		newzone[event.target.id] = event.target.value;
		this.setState({
			zone: newzone
		});
		console.log(JSON.stringify(this.state.zone));
	}

	addZone(event) {
		let newlist = Object.assign([], this.state.list);
		newlist.push(this.state.zone);
		this.setState({
			list: newlist
		});
	}

	render() {

		const listItems = this.state.list.map((zone,i) => {
			return (
					<li key={i}><Zone myzone={zone}></Zone></li>
				);
		});

		return (
			<div>
				<ol>
					{listItems}
				</ol>
				<input id='name' onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Name"></input><br />
				<input id='zipcodes' onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Zip Code"></input><br />
				<input id='cnt' onChange={this.updateZone.bind(this)} type="text" className="form-control" placeholder="Number of Comments"></input><br />
				<button onClick={this.addZone.bind(this)} className="btn btn-danger" >Add Zone</button>
			</div>	
		);
	}
}

export default Zones;
