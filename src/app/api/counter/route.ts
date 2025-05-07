/** @format */

export async function GET(request: Request) {
	console.log({ method: request.method });
	//   const res = await fetch('https://data.mongodb-api.com/...', {
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				'API-Key': process.env.DATA_API_KEY,
	// 			},
	// 		});
	// 		const data = await res.json();

	return Response.json({ count: 100 });
}
