import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getContributors } from '../actions/LeaderBoardActions';

class LeaderBoard extends Component {
	componentDidMount() {
		this.props.getContributors();
	}

	render() {
		return <div>Hello</div>;
	}
}

const mapStateToProps = (state) => ({
	...state.stats,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			getContributors,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
