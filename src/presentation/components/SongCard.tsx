import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import Swal from "sweetalert2";
import Alert from "./Alert";

type cardProps = {
  songBanner: string;
  songName: string;
  artistName: string;
  link: string;
  index: number;
};
const SongCard: React.FC<cardProps> = ({
  songBanner,
  songName,
  artistName,
  link,
  index
}) => {

  const [isFavouritesClick, setIsFavouritesClick] = useState<boolean>(false);
  const [isPlaylistClick, setIsPlaylistClick] = useState<boolean>(false);

  const saveFavourites = () => {
    setIsFavouritesClick(!isFavouritesClick);
    var data = localStorage.getItem('favouritesData');
    var favouritesArray: Object[] = [];

    if(data !== null){
      favouritesArray = [...JSON.parse(data)]
    }
    favouritesArray.push({
      songName: songName,
      artistName: artistName,
      songBanner: songBanner,
      link: link,
      index: index
    })
    localStorage.setItem('favouritesData', JSON.stringify(favouritesArray));
    Alert('Song successfully added to Favourites');
  }

  const savePlaylist = () => {
    setIsPlaylistClick(!isPlaylistClick);
    var data = localStorage.getItem('playlistData');
    var playlistArray: Object[] = [];

    if(data !== null){
      playlistArray = [...JSON.parse(data)]
    }
    playlistArray.push({
      songName: songName,
      artistName: artistName,
      songBanner: songBanner,
      link: link,
      index: index
    })
    localStorage.setItem('playlistData', JSON.stringify(playlistArray));
    Alert('Song successfully added to playlist')
  }

  return (
    <div className="bg-dark rounded-3 border border-white p-2 m-2 col">
      <a href={link} target="blank">
        <img
          src={songBanner}
          className="rounded-2"
          alt="song_banner"
          width={"100%"}
        />
      </a>
      <h3 className="text-light text-center pt-3">{songName}</h3>
      <h5 className="text-light text-center p-3">{artistName}</h5>
      <div className="d-flex justify-content-between">
       {isFavouritesClick ? <Icon.BookmarkFill
          onClick={saveFavourites}
          fill="red"
          size={20}
          style={{ cursor: "pointer" }}
          className="m-3"
          data-toggle="tooltip" 
          data-placement="top" 
          title="Add to bookmarks"
          color="#eee"
        /> : 
        <Icon.Bookmark
          onClick={saveFavourites}
          size={20}
          style={{ cursor: "pointer" }}
          className="m-3"
          data-toggle="tooltip" 
          data-placement="top" 
          title="Add to bookmarks"
          color="#eee"
        />
        
        }
        <a href={link} target="blank">
          <Icon.PlayBtn
            size={40}
            style={{ cursor: "pointer" }}
            className="m-1"
            data-toggle="tooltip" 
            data-placement="top" 
            title="Play"
            color="#f7d54f"
          />
        </a>
        {
          isPlaylistClick ? 
        <Icon.FileEarmarkMusicFill
          onClick={savePlaylist}
          fill="#eee"
          size={20}
          style={{ cursor: "pointer" }}
          className="m-3"
          data-toggle="tooltip" 
          data-placement="top" 
          title="Add to playlist"
          color="#eee"
        />
        : 
        <Icon.FileEarmarkMusic
          onClick={savePlaylist}
          size={20}
          style={{ cursor: "pointer" }}
          className="m-3"
          data-toggle="tooltip" 
          data-placement="top" 
          title="Add to playlist"
          color="#eee"
        />
}
      </div>
    </div>
  );
};

export default SongCard;
