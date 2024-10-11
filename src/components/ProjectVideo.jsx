import { useRef } from 'react';

const ProjectVideo = ({videoRef, src}) => {
    const galleryVideoRef = useRef();

    const handleMouseOver = () => {
        if (!videoRef)
        galleryVideoRef.current.play()
    }

    const handleMouseLeave = () => {
        if (!videoRef)
        galleryVideoRef.current.pause()
    }
    return (
        <video ref={videoRef ? videoRef : galleryVideoRef} loop muted playsInline className='w-full' onMouseOver={() => handleMouseOver()} onMouseLeave={() => handleMouseLeave()}>
            <source src={src} type="video/mp4" />
        </video>
    );
}
 
export default ProjectVideo;