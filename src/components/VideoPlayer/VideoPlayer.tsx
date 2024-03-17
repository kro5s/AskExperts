import React, {useRef, useState} from 'react';
import styles from './VideoPlayer.module.css'
import classNames from "classnames";

interface VideoPlayerProps {
    src: string;
    poster: string;
    className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({src, poster, className}) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const video = useRef<HTMLVideoElement>(null);

    const handleVideoClick = async () => {
        setIsPlaying(!isPlaying);

        if (!isPlaying) await video.current!.play();
        else video.current!.pause();
    }

    return (
        <div className={classNames(styles.videoContainer, className)} onClick={handleVideoClick}>
            <video ref={video} className={styles.video} preload="none" poster={poster}>
                <source src={src}
                        type="video/mp4"/>
            </video>
            {
                !isPlaying &&
                <>
                    <div className={styles.videoButton}>
                        <svg width="13" height="19" viewBox="0 0 13 19" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.01938 17.7189L11.6309 10.4472C11.7696 10.33 11.881 10.1846 11.9574 10.021C12.0337 9.85742 12.0732 9.67947 12.0732 9.49939C12.0732 9.31932 12.0337 9.14137 11.9574 8.97777C11.881 8.81416 11.7696 8.66876 11.6309 8.55155L3.01938 1.27992C2.1974 0.58595 0.927734 1.16131 0.927734 2.22776L0.927734 16.7731C0.927734 17.8396 2.1974 18.4149 3.01938 17.7189Z"
                                fill="#3B3A5D"/>
                        </svg>
                    </div>
                    <div className={styles.videoButtonBg1}></div>
                    <div className={styles.videoButtonBg2}></div>
                </>
            }
        </div>
    );
};

export default VideoPlayer;