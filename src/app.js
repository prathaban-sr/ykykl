import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './layouts/home';

class App extends Component {
	render() {
		return (<div>
					YakYik!
					<Home></Home>
				</div>	
			);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));