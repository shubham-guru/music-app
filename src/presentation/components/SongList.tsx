import React, { useEffect, useState } from "react";
import { MusicList } from "../../domain/models/MusicList";
import SongCard from "./SongCard";
import * as Icon from "react-bootstrap-icons";
import callApi from "../../helpers/callApi";

const SongList = () => {
  
  useEffect(()=>{
    getData();
  },[])

  const [dataList, setDataList] = useState<MusicList[]>([]);

  const getData = async() => {
        var res: any = await callApi('key', '484129036', 'songs/list-recommendations');
        setDataList(res); 
  }
  
  return (
    <div className="row d-flex">
    {dataList.length ? dataList?.map((item: any, index: number) => {
        return (
          <SongCard
            key={index}
            songBanner={item.images.background}
            songName={item.title}
            artistName={item.subtitle}
            link={item.url} 
            index={index}                  
            />
        );
    }) :
      <div className="d-flex align-items-center justify-content-center mb-5 pb-5">
        <Icon.ArrowClockwise color="#eee" size={10} className="spinner-border" />
      </div>
    }
  </div>
  )
}

export default SongList;