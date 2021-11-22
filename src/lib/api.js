export const getJSONresponse = async json_id => {
	const response = await fetch(process.env.BASE_URL, {
		method: "GET"
	})
	const data = await response.json()
	const obj = data.find(item => item.id === json_id)
	return obj
}
