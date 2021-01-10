import { useState, useEffect } from 'react';
import youtube from './../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    search(defaultSearchTerm)
    // whenever we make use of outside variable inside useEffect hook, React wants us to list that argument/variable inside of the arrow function.  
    // it solves a lot of stale data references
    // Another benefit is, if we decide to chnage the default search term inside('buildings') App.js, automatically the videos will be fetched  
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
  // return the outputs (list of videos and a function that can be used to search for a new set of videos)
  // return these two things in one of two ways
  // more common return an object that has properties of videos and search

  // return { videos, search }
  // convention of useState() that returns an array that has a piece of state and a setter
  return [videos, search];
}

export default useVideos;

// Logic behind the creating custom useVideo hook
// Looking at the non-JSX stuff inside the App, line by line find the purpose of that code
// In App compoenent we have really two major goals, we are working with two pieces of state (videos, selectedVideo) and all this code is about managinf those two pieces of state. 
// managing a list of videos and managing a selected video
// managing the selectedVideo
// the currently selected video is a property/function od overall list of videos
// In Redux terms we would say that the selectedVideo piece of state is derived of the overall list of videos.

// So for the videos piece of code what tre the arguments (outside inputs required to make that piece of code run)?
// the default search term ('buildings')

// output ?
// videos list and onTermSubmit function 

// for a sentence with inputs and outputs
// If you give me a "default search term" I will give you "a way to search for videos" "a list of videos"