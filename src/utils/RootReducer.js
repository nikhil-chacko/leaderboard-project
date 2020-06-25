import { combineReducers } from 'redux';
import LeaderBoardReducer from '../actions/LeaderBoardActions';

export default combineReducers({
	stats: LeaderBoardReducer,
});
