import { motion, useAnimationControls } from 'framer-motion';
import ProjectVideo from './ProjectVideo'

const ProjectSmall = ({ project }) => {
    const controls = useAnimationControls();
    
    const handleMouseEnter = () => {
        controls.start({ y: 0, opacity: 1 });
    };

    const handleMouseLeave = () => {
        controls.start({ y: -100, opacity: 0 });
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProjectVideo src={project.video} />
            <motion.div
                className='z-10 h-auto absolute top-1/2 left-1/2'
                initial={{ y: -100, opacity: 0 }}
                animate={controls}
                transition={{ type: "spring", stiffness: 120 }}
            >
                <h3 className="text-white text-xl">{project.title}</h3>
            </motion.div>
        </div>
    );
}
 
export default ProjectSmall;