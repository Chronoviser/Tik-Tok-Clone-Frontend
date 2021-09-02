import './Video-Footer.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({ channel, desc, song }) {
    return (
        <div className="video-footer">
            <div className="video-footer-text">
                <h3>@{channel}</h3>
                <p>{desc}</p>
                <div className="video-footer-ticker">
                    <MusicNoteIcon className="video-footer-icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="video-footer-record"
                src="disco-icon.png"
                alt="" />
        </div>
    );
}

export default VideoFooter;