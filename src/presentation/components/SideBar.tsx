
const SideBar = () => {
  return (
    <div className="bg-light row col-2 p-3" style={{ height: "90vh" }}>
      <a className="m-4 text-dark text-decoration-none" href="/all-music">
        All Music
      </a>
      <a className="m-4 text-dark text-decoration-none" href="/search">
        Search
      </a>
      <a className="m-4 text-dark text-decoration-none" href="/favourites">
        Favourites
      </a>
      <a className="m-4 text-dark text-decoration-none" href="/playlists">
        Playlists
      </a>
    </div>
  );
};

export default SideBar;
