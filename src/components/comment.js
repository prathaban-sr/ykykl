import React, {Component} from 'react';
import styles from './styles';

class Comment extends Component {
	render() {
		const style = styles.comment;
		return (
			<div>
				<h2 style={style.h2}>{this.props.mycomm.title}</h2>
				<span className="detail">{this.props.mycomm.body}</span><br />
				<span style={{fontWeight:100}}>{this.props.mycomm.username}</span>
			</div>	
		);
	}
}


export default Comment;
