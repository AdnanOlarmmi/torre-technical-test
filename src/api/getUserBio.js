import { createAsyncThunk } from '@reduxjs/toolkit';

const getUserBio = createAsyncThunk('bio/fetchBio', async (username) => {
  try {
    const response = await fetch(`http://localhost:8080/bios/${username}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
});

export default getUserBio;
