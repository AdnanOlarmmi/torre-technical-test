import { createSlice } from '@reduxjs/toolkit';
import getUserBio from '../../api/getUserBio';

const initialState = {
  bio: { person: { name: '', picture: '' }, strengths: [] },
  status: 'idle',
  error: null,
  isLoading: false,
};

const bioSlice = createSlice({
  name: 'bio',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserBio.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(getUserBio.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bio = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserBio.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default bioSlice.reducer;
