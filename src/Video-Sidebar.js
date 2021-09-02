import './Video-Sidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import { useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSidebar({ _likes, _shares, _messages }) {

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(_likes);

    const onLiked = (e) => {
        setLikes(likes + 1);
        setLiked(true);
    }

    const onUnliked = (e) => {
        setLikes(likes - 1);
        setLiked(false);
    }

    return (
        <div className="video-sidebar">
            <div className="video-sidebar-button">
                {
                    liked ? <FavoriteIcon onClick={onUnliked} /> : <FavoriteBorderIcon onClick={onLiked} />
                }
                <p>{likes}</p>
            </div>
            <div className="video-sidebar-button">
                <MessageIcon />
                <p>{_messages}</p>
            </div>
            <div className="video-sidebar-button">
                <ShareIcon />
                <p>{_shares}</p>
            </div>
        </div>
    );
}

export default VideoSidebar;