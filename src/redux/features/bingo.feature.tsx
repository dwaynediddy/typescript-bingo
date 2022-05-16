import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    squares: [
        {id: 1, title: "one", img: 'avatar', toggled: false},
        {id: 2, title: "two", img: "claws", toggled: false},
        {id: 3, title: "three", img: "avatar", toggled: false},
        {id: 4, title: "four", img: "claws", toggled: false},
        {id: 5, title: "five", img: 'avatar', toggled: false},
        {id: 6, title: "six", img: "claws", toggled: false},
        {id: 7, title: "seven", img: "avatar", toggled: false},
        {id: 8, title: "eight", img: "claws", toggled: false},
        {id: 9, title: "nine", img: 'avatar', toggled: false},
        {id: 10, title: "ten", img: "claws", toggled: false},
        {id: 11, title: "eleven", img: "avatar", toggled: false},
        {id: 12, title: "twelve", img: "claws", toggled: false},
    ]
}

const bingoSlice = createSlice({
    name: 'bingo',
    initialState,
    reducers: {
        squaresSelected: function(state, action) {
            
        },
    }
})

export const {squaresSelected} = bingoSlice.actions
export default bingoSlice.reducer