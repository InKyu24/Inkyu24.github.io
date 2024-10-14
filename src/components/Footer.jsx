const Footer = () => {
  return (
    <footer className="h-screen flex flex-col bg-gray-800 text-white p-8" id="contact">
        <div className="mx-8 grid grid-cols-1 lg:grid-cols-2">
            <div className="mb-8 mr-16">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg leading-relaxed max-w-2xl">
                    I am a passionate video director with over 10 years of experience in creating compelling visual narratives. My work spans from short films and commercials to documentaries, always pushing boundaries to tell stories in new and exciting ways. Let’s create something amazing together!
                </p>
            </div>
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Projects & Contributions</h2>
                <ul className="flex flex-row flex-wrap list-none justify-between divide-x divide-solid">
                    <li className="w-1/4 px-5 flex flex-col h-96 justify-between">
                        <div>
                            <span className="text-2xl">
                                Project 1
                            </span>
                            <p>
                                Led the direction and visual concept, resulting in a 20% increase in audience engagement.
                            </p>
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur provident officiis neque reiciendis autem atque ab nemo! Totam officia temporibus distinctio eius! Modi corporis illo porro facere reiciendis! Et, nemo!
                        </div>
                    </li>
                    <li className="w-1/4 px-5 flex flex-col h-96 justify-between">
                    <div>
                            <span className="text-2xl">
                                Project 2
                            </span>
                            <p>
                                Managed post-production, ensuring seamless transitions and high-quality sound design.
                            </p>
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur provident officiis neque reiciendis autem atque ab nemo! Totam officia temporibus distinctio eius! Modi corporis illo porro facere reiciendis! Et, nemo!
                        </div>
                    </li>
                    <li className="w-1/4 px-5 flex flex-col h-96 justify-between">
                    <div>
                            <span className="text-2xl">
                                Project 3
                            </span>
                            <p>
                                Directed a team of cinematographers, creating stunning visuals that enhanced the narrative.
                            </p>
                        </div>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur provident officiis neque reiciendis autem atque ab nemo! Totam officia temporibus distinctio eius! Modi corporis illo porro facere reiciendis! Et, nemo!
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        {/* <div className="flex flex-col items-center">
            <p>&copy; 2024 Your Name</p>
            <div className="flex space-x-4 mt-4">
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
        </div> */}
    </footer>
  );
};

export default Footer;
