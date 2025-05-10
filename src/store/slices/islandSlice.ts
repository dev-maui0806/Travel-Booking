import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IslandState {
  selectedIsland: string;
}

const initialState: IslandState = {
  selectedIsland: 'Port Blair',
};

const islandSlice = createSlice({
  name: 'island',
  initialState,
  reducers: {
    setSelectedIsland(state, action: PayloadAction<string>) {
      state.selectedIsland = action.payload;
    },
  },
});

export const { setSelectedIsland } = islandSlice.actions;
export default islandSlice.reducer;