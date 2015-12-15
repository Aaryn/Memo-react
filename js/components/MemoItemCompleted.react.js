import React from 'react';

let MemoItemCompleted = React.createClass({

	propTypes: {
		created: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired
	},

  handleDelete: function() {
    this.props.onDelete(this.props.reactKey);
  },

	render: function() {
		return (
			<tr>
				<td>{this.props.created}</td>
				<td>{this.props.text}</td>
        <button className={"btn btn-lg btn-danger"} onClick={this.handleDelete}>
          <span className={"glyphicon glyphicon-remove"} onClick={this.handleDelete}></span>
        </button>
			</tr>
		);
	}

});

export default MemoItemCompleted;