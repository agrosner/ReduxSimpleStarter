import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyB8qc0bir03C9uOhrjJK1i5qogLx4z-k2Q';

// Create a new component
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
