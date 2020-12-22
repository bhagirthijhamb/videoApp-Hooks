import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from './../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('plants')
  }, [])

  // callback function defined as arrow function
  const onTermSubmit = async (term) => {
    // console.log(term)
    // youtube is now a preconfigured instance of axios
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    // console.log(response.data.items)
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  // callback function defined as arrow function
  // const onVideoSelect = (video) => {
  //   // console.log('From the App', video);
  //   setSelectedVideo(video)
  // }

  return (
      <div className="ui container">
        <SearchBar onTermSubmit={onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                videos={videos} 
                // onVideoSelect={(video) => setSelectedVideo(video)} 
                onVideoSelect={setSelectedVideo} 
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default App;