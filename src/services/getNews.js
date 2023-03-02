const BASE_URL = 'https://newsapi.org/v2/'
const API_KEY = '7391ec9459644ca0a76cb25df2a23597'

export const getNews = (searchText, page) => {
	return fetch(`${BASE_URL}everything?q=${searchText}&page=${page}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
}
