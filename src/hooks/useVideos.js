import { useState, useEffect } from 'react';
import youtube from './../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm])

  const search = async (term) => {
    // console.log(term)
    // youtube is now a preconfigured instance of axios
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    // console.log(response.data.items)
    setVideos(response.data.items);
  }
  // return { videos, onTermSubmit }
  return [videos, search];
}

export default useVideos;