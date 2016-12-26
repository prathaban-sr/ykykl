import React, {Component} from 'react';
import styles from './styles';

class Zone extends Component {
	render() {
		const style = styles.zone;
		return (
			<div style={style.container}>
				<h2 style={style.h2}><a style={style.a} href="#">{this.props.myzone.name}</a></h2>
				<span className="detail">{this.props.myzone.zipcodes}</span><br />
				<span>{this.props.myzone.cnt} comments</span>
			</div>	
		);
	}
}


export default Zone;
