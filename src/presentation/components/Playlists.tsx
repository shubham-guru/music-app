import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import SongCard from './SongCard'

const Playlists = () => {
  useEffect(()=> {
    getPlaylist();
  },[])
  
  const [dataList, setDataList] = useState<any>([]);

  const getPlaylist = () => {
    let data: any = localStorage.getItem("playlistData");
    let toJson: Array<Object> = JSON.parse(data);
    let uniqueData: Array<{}> = [];
    
    const unique = toJson.filter((element: any) => {
      const isDuplicate = uniqueData.includes(element.index);
      if(!isDuplicate){
        console.log(uniqueData)
        uniqueData.push(element);
        return true
      }
      return false;
    })

    setDataList(unique);
  }

  return (
    <div className="col d-flex">
    <SideBar />
    <div className="d-flex row bg-dark w-100">
      <h2 className="col text-light d-flex m-3">Playlist Songs</h2>
        <div className="row d-flex">
            {
              dataList?.length ? dataList?.map((item: any, index: number)=> {
                return(
                  <SongCard
                    key={index}
                    songBanner={item.songBanner}
                    songName={item.songName}
                    artistName={item.artistName}
                    link={item.link} 
                    index={index}                  
                  />
                )
              }) 
              : 
              <div className='text-center'>
                  <p className='text-light'>No favouraite songs !</p>
              </div>
            }
        </div>
        </div>
  </div>
  )
}

export default Playlists