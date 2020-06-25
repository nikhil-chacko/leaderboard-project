import axios from 'axios';

export default () => {
	return axios.create({
		baseURL: 'http://159.65.158.103:8000/api',
	});
};
