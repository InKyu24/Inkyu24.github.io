import { motion, useAnimationControls } from 'framer-motion';
import ProjectVideo from './ProjectVideo'
import { useRef, useState } from 'react';

const ProjectSmall = ({ project }) => {
    const boxControls = useAnimationControls();
    const titleControls = useAnimationControls();
    const subTitleControls = useAnimationControls();
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef();
    
    const handleMouseEnter = () => {
        setIsHovered(true);
        videoRef.current.play();
        boxControls.start({ opacity: 0 });
        titleControls.start({ y: -50 });
        subTitleControls.start({ y: 0, opacity: 1 })
    };

    const handleMouseLeave = () => {
        videoRef.current.pause();
        boxControls.start({ opacity: 0.5 });
        titleControls.start({ y: 0 });
        subTitleControls.start({ y: 100, opacity: 0 })
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <motion.div
                className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition duration-300'
                initial={{ opacity: 0.5 }}
                animate={boxControls}
            >
            </motion.div>
            <motion.div className={`z-10 h-auto absolute top-1/2 w-full text-white text-3xl text-center`}
                initial={{ y: 0 }}
                animate={titleControls}
                transition={{ type: "spring", stiffness: 120 }}
            >
                {project.title}
            </motion.div>
            <motion.div className={`z-10 h-auto absolute top-1/2 w-full text-white text-2xl text-center`}
                initial={{ y: 0, opacity: 0 }}
                animate={subTitleControls}
                transition={{ type: "spring", stiffness: 120 }}
            >
                {project.subTitle}
            </motion.div>
            <ProjectVideo videoRef={videoRef} src={project.video} />
            {!isHovered && (
                <img
                    src="https://placehold.co/600x400" // 이미지 URL을 적절한 이미지로 변경하세요
                    alt="Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}
        </div>
    );
}
 
export default ProjectSmall;