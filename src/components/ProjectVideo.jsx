const ProjectVideo = ({videoRef, src, main = false }) => {
    return (
        <video ref={videoRef} loop muted playsInline className={`w-full h-full object-cover ${main && "min-h-screen"}`}>
            <source src={src} type="video/mp4" />
        </video>
    );
}
 
export default ProjectVideo;