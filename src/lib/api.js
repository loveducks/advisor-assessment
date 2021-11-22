export const getJSONresponse = async json_id => {
	const BASE_URL = process.env.NODE_ENV === "development" ? process.env.DEV_URL : process.env.PROD_URL
	const response = await fetch(BASE_URL + "/json/data.json", {
		method: "GET"
	})
	const data = await response.json()
	const obj = data.find(item => item.id === json_id)
	return obj
}
