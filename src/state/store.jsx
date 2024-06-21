import { configureStore } from '@reduxjs/toolkit';

import trackDataReducer from '@/state/trackData/trackDataSlice';

export const store = configureStore({
  reducer: {
    trackData: trackDataReducer,
  },
});
