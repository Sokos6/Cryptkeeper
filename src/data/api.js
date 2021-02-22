import axios from 'axios';
const { REACT_APP_CMCAPI } = process.env;

const baseUrl = '/v1/cryptocurrency/listings/latest';

const options = {
	headers: {
		'X-CMC_PRO_API_KEY': REACT_APP_CMCAPI,
	},
};

export function getListings() {
	console.log('0. calling getListings...');
	return fetch(baseUrl, options)
		.then(console.log('step 1, returning response.json()...'))
		.then((response) => response.json());
}

// export function getListings() {
// 	axios
// 		.get(baseUrl, options)
// 		.then(console.log('step 1, returning response.json()...'))
// 		.then((response) => response.json());
// }
