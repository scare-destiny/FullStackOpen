import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		showSuccessNotification(state, action) {
			const content = action.payload
			return content
		},
		removeSuccessNotification(state, action) {
			return ''
		},
	},
})

export const { showSuccessNotification, removeSuccessNotification } =
	notificationSlice.actions

export const setNotification = (content, time) => {
	return async (dispatch) => {
		dispatch(showSuccessNotification(content))
		setTimeout(() => {
			dispatch(removeSuccessNotification())
		}, time * 1000)
	}
}
export default notificationSlice.reducer
