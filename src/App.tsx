import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import "./App.css";
import NavBar from "./presentation/components/NavBar";
import Home from "./presentation/screens/Home";
import PrivateRoute from "./helpers/PrivateRoute";
import MusicApp from "./presentation/screens/MusicApp";
import AllMusic from "./presentation/components/AllMusic";
import Search from "./presentation/components/Search";
import Favourites from "./presentation/components/Favourites";
import Playlists from "./presentation/components/Playlists";

function App() {

  return (
    <>
      <ReactKeycloakProvider authClient={keycloak} initOptions={{onLoad: 'login-required'}}>
        <NavBar />
        <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/secured"
              element={
                // <PrivateRoute>
                  <MusicApp />
                // </PrivateRoute>
              }
            />
            <Route path="/all-music" element={<AllMusic />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/playlists" element={<Playlists />} />
          </Routes>
        </BrowserRouter>
        </StrictMode>
      </ReactKeycloakProvider>
    </>
  );
}

export default App;
