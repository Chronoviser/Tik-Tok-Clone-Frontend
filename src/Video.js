import './Video.css';
import { useRef, useState } from 'react';
import VideoFooter from './Video-Footer';
import VideoSidebar from './Video-Sidebar';

function Video({ url, channel, desc, song, likes, shares, messages }) {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null)

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video
                src={url}
                className="video-player"
                loop
                ref={videoRef}
                onClick={handleVideoPress}></video>
            <VideoFooter channel={channel} desc={desc} song={song} />
            <VideoSidebar _likes={likes} _messages={messages} _shares={shares} />
        </div>
    );
}

export default Video;