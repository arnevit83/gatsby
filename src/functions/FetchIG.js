// import fetch from "node-fetch";

// const API_ENDPOINT =
// 	"https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={%22id%22:%2293024%22,%22first%22:12,%22after%22:%22%22}";

// exports.handler = async (event, context) => {
// 	let response;
// 	try {
// 		response = await fetch(API_ENDPOINT, {
// 			method: "GET",
// 			headers: {
// 				"User-Agent": "Mozilla",
// 			},
// 		})
// 			.then((res) => res.json())
// 			.then((data) => {
// 				return {
// 					statusCode: 200,
// 					body: data.stringify({
// 						data: response,
// 					}),
// 				};
// 			});
// 	} catch (err) {
// 		return {
// 			statusCode: err.statusCode || 500,
// 			body: JSON.stringify({
// 				error: err,
// 			}),
// 		};
// 	}
// };
