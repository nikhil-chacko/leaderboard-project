import ApiClient from '../utils/ApiClient';

//action types
export const VIEW_ALL_CONTRIBUTORS = 'VIEW_ALL_CONTRIBUTORS';
export const SOME_ERROR_OCCURRED = 'SOME_ERROR_OCCURRED';

//initialState
const initialState = {
	loading: true,
	contributors: [],
	error: null,
};

//reducers
export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case VIEW_ALL_CONTRIBUTORS:
			return {
				...state,
				loading: false,
				contributors: payload,
			};
		case SOME_ERROR_OCCURRED:
			return {
				...state,
				loading: false,
				error: payload,
			};
		default:
			return state;
	}
};

//actions
export const getContributors = () => async (dispatch) => {
	try {
		const res = await ApiClient().get('/leaderboard/');
		console.log(res);
		dispatch({
			type: VIEW_ALL_CONTRIBUTORS,
			payload: res.data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: SOME_ERROR_OCCURRED,
			payload: error,
		});
	}
};
