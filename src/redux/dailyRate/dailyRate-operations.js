import { createAsyncThunk } from '@reduxjs/toolkit';
import { dailyRate, dailyUser } from '../../shared/api/daily-rate-api';

export const dailyRateOperation = createAsyncThunk(
  'daily-rate',
  async (data, { rejectWithValue }) => {
    try {
      const result = await dailyRate(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const dailyRateUserOperation = createAsyncThunk(
  'daily-rate-user',
  async (data, { rejectWithValue }) => {
    try {
      const result = await dailyUser(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
