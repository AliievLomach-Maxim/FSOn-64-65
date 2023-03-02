import { Component } from 'react'

import { getNews } from '../../services/getNews'

import ErrorPage from '../ErrorPage/ErrorPage'
import Loader from '../Loader/Loader'
import NewsItem from '../NewsItem/NewsItem'

class NewsList extends Component {
	state = {
		news: [],
		error: '',
		status: 'idle',
		page: 1,
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevProps.value !== this.props.value ||
			prevState.page !== this.state.page
		) {
			this.setState({ status: 'pending' })

			getNews(this.props.value.trim(), this.state.page)
				.then((response) => response.json())
				.then((news) => {
					if (news.status !== 'ok') {
						return Promise.reject(news.message)
					}

					this.setState({
						news: [...this.state.news, ...news.articles],
						status: 'resolved',
					})
				})
				.catch((error) => {
					console.log('error :>> ', error)
					this.setState({ error, status: 'rejected' })
				})
		}
	}

	handleLoad = () => {
		this.setState((prev) => ({ page: prev.page + 1 }))
	}

	render() {
		const { status, news, error } = this.state

		if (status === 'pending') return <Loader />

		if (status === 'resolved')
			return (
				<>
					<NewsItem news={news} />
					<button onClick={this.handleLoad}>Load</button>
				</>
			)

		if (status === 'rejected') return <ErrorPage error={error} />
	}
}

export default NewsList
