import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './index.css'
import LoginForm from './components/LoginForm'
import Note from './components/Note'
import Togglable from './components/Togglable'
import NoteForm from './components/NoteForm'
import Notification from './components/Notification'
import Footer from './components/Footer'

import noteService from './services/notes'
import loginService from './services/login'

const App = () => {
	const [notes, setNotes] = useState([])
	const [showAll, setShowAll] = useState(true)
	const [errorMessage, setErrorMessage] = useState(null)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)

	useEffect(() => {
		noteService.getAll().then((initialNotes) => {
			setNotes(initialNotes)
		})
	}, [])

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			noteService.setToken(user.token)
		}
	}, [])

	const handleLogin = async (event) => {
		event.preventDefault()

		try {
			const user = await loginService.login({
				username,
				password,
			})

			window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user))

			noteService.setToken(user.token)
			setUser(user)
			setUsername('')
			setPassword('')
		} catch (exception) {
			setErrorMessage('Wrong credentials')
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000)
		}
	}

	const addNote = async (noteObject) => {
		try {
			noteFormRef.current.toggleVisibility()
			const newNote = await noteService.create(noteObject)
			setNotes(notes.concat(newNote))
		} catch (exception) {
			setErrorMessage('Note is too short, minimum is 5 characters')
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000)
		}
	}

	const toggleImportanceOf = (id) => {
		const note = notes.find((n) => n.id === id)
		const changedNote = { ...note, important: !note.important }

		noteService
			.update(id, changedNote)
			.then((returnedNote) => {
				setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
			})
			.catch((error) => {
				setErrorMessage(`Note '${note.content}' was already removed from server `)
				console.log(error)
				setTimeout(() => {
					setErrorMessage(null)
				}, 5000)
				setNotes(notes.filter((n) => n.id !== id))
			})
	}

	const notesToShow = showAll ? notes : notes.filter((note) => note.important)

	const noteFormRef = useRef()

	return (
		<div>
			<h1>Notes</h1>
			<Notification message={errorMessage} />
			{user === null ? (
				<Togglable buttonLabel='login'>
					<LoginForm
						username={username}
						password={password}
						handleUsernameChange={({ target }) => setUsername(target.value)}
						handlePasswordChange={({ target }) => setPassword(target.value)}
						handleSubmit={handleLogin}
					/>
				</Togglable>
			) : (
				<div className='newNote'>
					<p>{user.name} logged in</p>
					<Togglable  buttonLabel='new' ref={noteFormRef} >
						<NoteForm createNote={addNote} />
					</Togglable>
				</div>
			)}
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					show {showAll ? 'important' : 'all'}
				</button>
			</div>
			<ul>
				{notesToShow.map((note) => (
					<Note
						key={note.id}
						note={note}
						toggleImportance={() => toggleImportanceOf(note.id)}
					/>
				))}
			</ul>
			<Footer />
		</div>
	)
}

export default App
