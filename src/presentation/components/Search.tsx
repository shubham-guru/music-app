import { useState } from "react";
import SideBar from "./SideBar";
import SongList from "./SongList";
import callApi from "../../helpers/callApi";
import { MusicList } from "../../domain/models/MusicList";
import * as Icon from "react-bootstrap-icons";
import SongCard from "./SongCard";

const Search = () => {
  const [searchedList, setSearchedList] = useState<MusicList[]>([]);

  const handleChange = async (e: any) => {
    var res: any = await callApi(
      "term",
      JSON.stringify(e.target.value),
      "search"
    );
    setSearchedList(res.hits);
  };
  return (
    <div className="col d-flex">
      <SideBar />
      <div className="d-flex row bg-dark w-100">
        <div>
          <input
            type="text"
            className="m-2 w-25"
            style={{ height: "30px" }}
            placeholder="Search"
            onChange={(e) => handleChange(e)}
          />
        </div>

        {searchedList?.length !== 0 ? (
          searchedList?.map((item: any, index: number) => {
            return (
              <SongCard
                songBanner={item.track.images.background}
                songName={item.track.title}
                artistName={item.track.subtitle}
                link={item.track.url}
                index={index}
              />
            );
          })
        ) : (
          <SongList />
        )}
      </div>
    </div>
  );
};

export default Search;
