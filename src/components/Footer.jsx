const Footer = () => {
  return (
    <footer className="min-h-screen flex flex-col bg-gray-800 text-white p-8 justify-between" id="contact">
        <div className="mx-8 grid grid-cols-1 lg:grid-cols-2">
            <div className="mb-8 mr-16">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg leading-relaxed max-w-2xl">
                    I am a passionate video director with over 10 years of experience in creating compelling visual narratives. My work spans from short films and commercials to documentaries, always pushing boundaries to tell stories in new and exciting ways. Let’s create something amazing together!
                </p>
            </div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Projects & Contributions</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
                    <li className="py-5 md:mr-5 lg:mr-10">
                        <div>
                            <span className="text-2xl">
                                Project 1
                            </span>
                            <p className="mt-3">
                                Led the direction and visual concept, resulting in a 20% increase in audience engagement.
                            </p>
                        </div>
                    </li>
                    <li className="py-5 lg:mr-10">
                    <div>
                            <span className="text-2xl">
                                Project 2
                            </span>
                            <p className="mt-3">
                                Managed post-production, ensuring seamless transitions and high-quality sound design.
                            </p>
                        </div>
                    </li>
                    <li className="py-5 md:mr-5 lg:mr-10">
                    <div>
                            <span className="text-2xl">
                                Project 3
                            </span>
                            <p className="mt-3">
                                Directed a team of cinematographers, creating stunning visuals that enhanced the narrative.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">CONTACT</h2>
            <div className="flex space-x-4 mt-2 mb-8">
                <a
                    href="https://github.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    LinkedIn
                </a>
                <a
                    href="https://instagram.com/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                >
                    Instagram
                </a>
            </div>
            <p>&copy; 2024 Your Name</p>
        </div>
    </footer>
  );
};

export default Footer;
