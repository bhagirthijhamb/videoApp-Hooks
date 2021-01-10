import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from './../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from './../hooks/useVideos';

// App makes use of state and Lifecycle methods
// SearchBar uses state
// VideoList, VideoItem, VideoDetail components are already functional compoenents
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])


  // setSelectedVideo(response.data.items[0]);

  // callback function defined as arrow function
  // const onVideoSelect = (video) => {
  //   // console.log('From the App', video);
  //   setSelectedVideo(video)
  // }

  return (
      <div className="ui container">
        {/* <SearchBar onTermSubmit={onTermSubmit} /> */}
        <SearchBar onTermSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                videos={videos} 
                // onVideoSelect={(video) => setSelectedVideo(video)} 
                // we are taking one argument and passing it to the function
                // so we can write it like below (no purpose of making the arrow function)
                onVideoSelect={setSelectedVideo} 
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default App;

  // useEffect(() => {
  
  // }, []) works like ComponentDidMount because it runs the function inside useEffect only one time when the component mounts