const api_endpoint = "https://us-east-1.aws.data.mongodb-api.com/app/data-zlzaw/endpoint/data/v1/action/findOne";
const myBody = {
"collection": "listingsAndReviews",
"database": "sample_airbnb",
"dataSource": "Cluster0",
"filter": {
"beds": 2,
"property_type": "House"
},
"projection": {
"listing_url": 1,
"name": 1,
"summary": 1,
"property_type": 1,
"cancellation_policy": 1}
};
async function fetchData() {
  const response = await fetch(api_endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'JCZsFeB0wvcGx4vbMwjDKiSqEsVHMpu13TyCxpdoRLT6zKvtvTxebBiIePBGgeLk',
    },
    body: JSON.stringify(myBody)
  });
  const json_response = await response.json();
  console.log(json_response);
}

fetchData();