import React from 'react';
import SearchBar from './SearchBar';
import youtube from './../apis/youtube';

class App extends React.Component {
  state = { videos: [] }
  onTermSubmit = async (term) => {
    console.log(term)
    // youtube is now a preconfigured instance of axios
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log(response.data.items)
    this.setState({ videos: response.data.items })
  }
  render(){
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        i have {this.state.videos.length} videos
      </div>
    )
  }
}

export default App;