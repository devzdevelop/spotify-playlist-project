import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const trackDataSlice = createSlice({
  name: 'trackData',
  initialState,
  reducers: {
    addTrackData: (state, action) => {
      state.push(action.payload);
    },
    setTrackData: (state, action) => {
      return action.payload;
    },
  },
});

export default trackDataSlice.reducer;
export const { addTrackData, setTrackData } = trackDataSlice.actions;
