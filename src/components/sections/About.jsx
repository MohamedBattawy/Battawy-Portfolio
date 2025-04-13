import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React.js", "Next.js", "TailwindCSS", "Typescript"];
    const backendSkills = ["Node.js", "PHP", "MySQL", "MongoDB", "GraphQL"];
    const aiMlSkills = ["NumPy", "OpenCV", "Pandas", "PyTorch", "Scikit-learn", "Matplotlib", "NLTK"];
    
    const achievements = [
        "Published research paper in Computer Vision at The British Machine Vision Conference",
        "Achieved regional rankings in competitive programming competitions in 2022 and 2023",
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            With a strong history in AI/ML, I have since transitioned to a full stack developer with multiple projects to show, including the development of a web-based admin panel for a large-scale e-commerce automotive platform for BMW as part of a large team. With a solid foundation in both frontend and backend development, my primary focus is on the MERN stack including all it's latest frameworks such as Next.js. I also have a demonstrated ability to quickly adapt to new technologies, such as Magento and PHP, commonly used in e-commerce solutions based on the project requirements.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Frontend Section */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend Section */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* AI/ML Section */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">AI/ML</h3>
                                <div className="flex flex-wrap gap-2">
                                    {aiMlSkills.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Education and Work Experience Sections - Now stacked vertically */}
                        <div className="space-y-6 mt-8">
                            {/* Education Section */}
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                                <div className="text-gray-300 space-y-2">
                                    <p className="mb-2"><strong>Bachelor Degree in Computer Engineering</strong> - Alexandria University (2019-2024)</p>
                                    <div className="ml-2">
                                        <ul className="list-disc list-inside">
                                            <li>Relevant Coursework: DSA, AI/ML/Computer Vision, Distributed Systems, OS, Networks, Databases</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Work Experience Section */}
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                                <div className="text-gray-300">
                                    <h4 className="font-semibold mb-2">Full Stack Developer at Scandiweb (2024 - Present)</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
                                        <li>
                                        Refactored legacy codebase, decreasing API response time by over 40% and improving maintainability.
                                        </li>
                                        <li>
                                        Optimized backend requests, leading to a 50% speedup in performance and reduced latency
                                        </li>
                                        <li>
                                        Developed many reusable components in React, cutting frontend development time by 30%.
                                        </li>
                                        <li>
                                        Led the system design and implementation of client-requested features by analyzing the codebase, creating architecture diagrams, and delivering timely solutions.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Achievements Section */}
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-8">
                            <h3 className="text-xl font-bold mb-4">🏆 Achievements</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
