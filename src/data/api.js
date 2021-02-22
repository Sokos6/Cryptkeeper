import axios from 'axios';
const { REACT_APP_CMCAPI } = process.env;

const baseUrl = '/v1/cryptocurrency/listings/latest';

const options = {
	headers: {
		'X-CMC_PRO_API_KEY': REACT_APP_CMCAPI,
	},
};

export function getData() {
	axios.get(baseUrl, options).then((response) => {
		console.log(response);
	});
}

console.log(getData());
