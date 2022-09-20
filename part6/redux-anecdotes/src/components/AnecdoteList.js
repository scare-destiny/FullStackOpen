import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import Filter from './Filter'

const Anecdote = ({ anecdote, handleClick }) => {
	return (
		<div>
			<div>{anecdote.content}</div>
			<div>
				has {anecdote.votes}
				<button onClick={handleClick}>vote</button>
			</div>
		</div>
	)
}

const AnecdoteList = () => {
	const dispatch = useDispatch()
	const anecdotes = useSelector((state) => state.anecdotes)
	const filter = useSelector((state) => state.filter)

	const sortedAnecdotes = [...anecdotes].sort((a, b) =>
		a.votes > b.votes ? -1 : 1
	)

	const filteredAnecdotes = [...sortedAnecdotes].filter((anecdote) =>
		anecdote.content.toLowerCase().includes(filter.toLowerCase())
	)

	return (
		<div>
			<Filter />
			{filteredAnecdotes.map((anecdote) => (
				<Anecdote
					key={anecdote.id}
					anecdote={anecdote}
					handleClick={() => dispatch(updateAnecdote(anecdote.id, anecdote))}
				/>
			))}
		</div>
	)
}

export default AnecdoteList
