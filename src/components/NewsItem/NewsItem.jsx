const NewsItem = ({ news }) => {
	return news.map((el) => {
		return <p key={el.url}>{el.title}</p>
	})
}

export default NewsItem
