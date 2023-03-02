import { Component } from 'react'

import { Toaster } from 'react-hot-toast'

import Header from './components/Header'
import NewsList from './components/NewsList/NewsList'
import Search from './components/Search/Search'

class App extends Component {
	state = {
		textSearch: '',
	}

	handleSubmit = (textSearch) => {
		this.setState({ textSearch })
	}

	render() {
		return (
			<div className='container'>
				<Toaster
					position='top-right'
					toastOptions={{
						duration: 1500,
					}}
				/>
				<Header onShowModalLogin={this.toggleModalLogin} />
				<Search onSearch={this.handleSubmit} />
				<NewsList value={this.state.textSearch} />
			</div>
		)
	}
}

export default App
