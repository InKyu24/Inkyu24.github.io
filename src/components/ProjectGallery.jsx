import { motion } from 'framer-motion';

const ProjectGallery = ({ projects }) => {
    return (
        <div className="grid grid-cols-2" id="projects">
            {projects.map((project) => (
            <div key={project.id} className="relative group">
                <motion.div
                    className="relative"
                >
                    <img src={project.image} alt={project.title} className="w-full h-auto" />
                    <motion.div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                        <h3 className="text-white text-xl">{project.title}</h3>
                    </motion.div>
                </motion.div>
            </div>
            ))}
        </div>
    );
}
 
export default ProjectGallery;