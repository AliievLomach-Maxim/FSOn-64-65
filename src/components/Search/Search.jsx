import { Component } from 'react'
import { toast } from 'react-hot-toast'

class Search extends Component {
	state = {
		value: '',
	}

	handleChange = ({ target: { value } }) => {
		this.setState({ value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		if (!this.state.value) {
			return toast.error('Error')
		}
		this.props.onSearch(this.state.value)
		this.setState({ value: '' })
	}

	render() {
		return (
			<>
				<form
					onSubmit={this.handleSubmit}
					className='d-flex mt-2'
					role='search'
				>
					<input
						className='form-control me-2 '
						type='search'
						placeholder='Search'
						aria-label='Search'
						value={this.state.value}
						onChange={this.handleChange}
					/>
					<button className='btn btn-outline-success' type='submit'>
						Search
					</button>
				</form>
			</>
		)
	}
}

export default Search
