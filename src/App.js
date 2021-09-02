import './App.css';
import Video from './Video';
import { useState, useEffect } from 'react';
import axios from './axios';

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/posts');
      setVideos(req.data);
    }

    fetchData();
  }, [])

  return (
    <div className="app">
      <div className="videos-container">
        {
          videos.map((video, i) => (
            <Video
              key={i}
              url={video.url}
              channel={video.channel}
              desc={video.desc}
              song={video.song}
              likes={video.likes}
              shares={video.shares}
              messages={video.messages}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
