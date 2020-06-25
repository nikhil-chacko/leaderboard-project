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
export const getContributors = () => (dispatch) => {
	ApiClient()
		.get('/leaderboard')
		.then((res) =>
			dispatch({ type: VIEW_ALL_CONTRIBUTORS, payload: res.data })
		)
		.catch((err) =>
			dispatch({
				type: SOME_ERROR_OCCURRED,
				payload: 'Please Try Again later',
			})
		);
};
