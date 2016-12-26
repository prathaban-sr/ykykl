import React, {Component} from 'react';
import Comment from '../components/comment.js';
import styles from './styles';
import superagent from 'superagent';

class Comments extends Component {
	constructor() {
		super();
		this.state = {
			comment: {
				title:'',
				body:'',
				username:''
			},
			list: []
		};
	}
    /*{title:'The Beginning', body:'As time goes on and React picks up we are all wanna do it.', userName: 'pselvaraj'},
				{title:'The Process', body:'Death to React!', userName: 'pselvaraj'},
				{title:'As Time passes', body:'When does the water end?', userName: 'pselvaraj'},
				{title:'In the End', body:'And there was light.', userName:'pselvaraj'}
	*/

	componentDidMount() {
		console.log("componentDidMount");
		superagent
		.get('/api/comment')
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
		
	submitComment() {
		let updatedList = Object.assign([], this.state.list);
		updatedList.push(this.state.comment);
		this.setState({
			list: updatedList
		});
		//console.log("submit Comment" +JSON.stringify(this.state.comment));
	}


	updateTitle(event) {
		//console.log("Update Title " +event.target.value);
		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment['title'] = event.target.value;
		this.setState({
			comment: updatedComment
		});
	}

	updateBody(event) {
		//console.log("Update Comment " +event.target.value);
		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment['body'] = event.target.value;
		this.setState({
			comment: updatedComment
		});
	}

	updateUserName(event) {
		//console.log("Update UserName " +event.target.value);
		let updatedComment = Object.assign({}, this.state.comment);
		updatedComment['username'] = event.target.value;
		this.setState({
			comment: updatedComment
		});
	}

	render() {
		const style = styles.comment;
		const listItems = this.state.list.map((comment,i) => {
			return (
					<li key={i}><Comment mycomm={comment}></Comment></li>
				);
		});

		return (
			<div>
				<h2>Zone 1 Comments</h2>
				<div  style={style.commentsBox}>
					<ul style={style.commentsList}>
						{listItems}
					</ul>
					<input onChange={this.updateUserName.bind(this)} className="form-control" type="text" placeholder="Username" /><br />
					<input onChange={this.updateTitle.bind(this)} className="form-control" type="text" placeholder="Title" /><br />
					<input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment" /><br />
					<button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
				</div>
			</div>	
		);
	}
}

export default Comments;
