import React from 'react';


let MemoItem = React.createClass({

	propTypes: {
		created: React.PropTypes.string.isRequired,
		reactKey: React.PropTypes.number.isRequired,
		text: React.PropTypes.string.isRequired,
		onComplete: React.PropTypes.func.isRequired,
		onDelete: React.PropTypes.func.isRequired
	},

	handleCompleted: function() {
		this.props.onComplete(this.props.reactKey);
	},

	handleDelete: function() {
		this.props.onDelete(this.props.reactKey);
	},

	render: function() {
		return (
			<div className={"panel panel-info"}>
				<div className={"row panel-body"}>
					<div className={"col-md-11 lead"}>
						{ this.props.text }
						<p></p>
						{ this.props.created }
					</div>
					<div className={"col-md-1"}>
						<button className={"btn btn-lg btn-success"} onClick={this.handleCompleted}>
							<span className={"glyphicon glyphicon-ok"} onClick={this.handleCompleted}></span>
						</button>
						<br /> <br />
						<button className={"btn btn-lg btn-danger"} onClick={this.handleDelete}>
							<span className={"glyphicon glyphicon-remove"} onClick={this.handleDelete}></span>
						</button>
					</div>
				</div>
			</div>
		);
	}
});

export default MemoItem;