import React from 'react';

let MemoInput = React.createClass({

	propTypes: {
		value: React.PropTypes.string,
		onSave: React.PropTypes.func.isRequired
	},

	getInitialState: function() {
		return {
			value: this.props.value || ''
		};
	},


	_onChange: function(e) {
		this.setState({ value: e.target.value });
	},

	_onKeyDown: function(e) {
		const ENTER = 13;
		if(e.keyCode === ENTER) {
			this._save();
		}
	},

	render: function() {
		return (
			<div className={"row"}>
				<div className={"col-md-11"}>
					<input type="text"
						   className={"form-control input-lg"}
						   value={this.state.value}
						   onChange={this._onChange}
						   onKeyDown={this._onKeyDown} />
				</div>
				<div className={"col-md-1"}>
					<button className={"btn btn-small btn-primary"} onClick={this._save}>
						<span className={"glyphicon glyphicon-plus"}></span> Add
					</button>
				</div>
			</div>
		);
	},

	_save: function() {
		this.props.onSave(this.state.value);
		this.setState({ value: '' });
	}

});

export default MemoInput;