import SongList from "./SongList";
import SideBar from "./SideBar";

const AllMusic = () => {

  return (
    <div className="col d-flex">
      <SideBar />
      <div className="d-flex row bg-dark w-100">
        <h2 className="col text-light d-flex m-3">List of amazing songs</h2>
          <SongList />
      </div>
    </div>
  );
};

export default AllMusic;
