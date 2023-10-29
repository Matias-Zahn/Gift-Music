import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PlayListPublic from "./Pages/PlayListPublic";
import Home from "./Pages/Home";
import PlayList from "./Pages/PlayList";
import PlaylistDetail from "./Pages/PlaylistDetail";
import TrackDetail from "./Pages/TrackDetail";
import ArtistDetail from "./Pages/ArtistDetail";
import Page404 from "./Pages/Page404";
import PrivateRoutes from "./Components/auth/PrivateRoutes";

function App() {
  return (
    <>
      <Routes>
        {/* Rutas Publicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playlist/public/:id" element={<PlayListPublic />} />

        {/* Rutas Privadas */}
        <Route element={<PrivateRoutes />} >
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<PlayList />} />
          <Route path="/playlists/:id" element={<PlaylistDetail />} />
          <Route path="/tracks/:id" element={<TrackDetail />} />
          <Route path="/artists/:id" element={<ArtistDetail />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
