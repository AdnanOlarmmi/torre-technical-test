import { createAsyncThunk } from '@reduxjs/toolkit';

const getUserBio = createAsyncThunk('bio/fetchBio', async (username) => {
  try {
    const response = await fetch(`https://enchanting-melba-5fb712.netlify.app/.netlify/functions/server/bios/${username}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Network Error');
  }
});

export default getUserBio;
