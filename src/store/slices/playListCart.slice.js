import { createSlice } from "@reduxjs/toolkit";

const playListCartSlice = createSlice({
  name: "playListCart",
  initialState: {
    tracks: [],
  },
  reducers: {
    addTrack: (state, action) => {
      const newTrack = action.payload;

      //TODO Hace falta verificar si la cancion ya esta agregada
      const indexTrack = state.tracks.findIndex(
        (track) => track.id === newTrack.id
      );
      if (indexTrack === -1) {
        state.tracks.push(newTrack);
      } else {
        return state
      }
    },
    removeTrack: (state, action) => {
        const idTrackToDelete= action.payload;
        const newTracks = state.tracks.filter((track) => track.id !== idTrackToDelete)
        state.tracks = newTracks
    },
    clearTracks: (state) => {
      state.tracks = []
    }
  },
});

export const { addTrack, removeTrack, clearTracks } = playListCartSlice.actions;

export default playListCartSlice.reducer;
