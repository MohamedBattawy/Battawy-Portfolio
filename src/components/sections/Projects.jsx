import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Jobify</h3>
              <p className="text-gray-400 mb-4">
                Feature rich job board platform with user authentication, job posting, application tracking features, image uploading, charts and graphs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "React.js", "Vite", "Express.js", "MongoDb", "REST API"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Stats Image with low opacity */}
              <div className="relative mb-4">
                <img
                  // src="/stats.png" remove . when testing locally
                  src="./stats.png"
                  alt="Project Statistics"
                  className="w-full h-auto rounded-md opacity-40 transition-opacity hover:opacity-80"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <a
                    href="https://jobify-abqj.onrender.com/"
                    className="text-blue-400 hover:text-blue-300 transition-colors mb-2"
                  >
                    View Project →
                  </a>
                  <a
                    href="https://github.com/MohamedBattawy/Jobify"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Source Code →
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Race</h3>
              <p className="text-gray-400 mb-4">
                Full stack car rental system with real-time booking and monitoring of car status depending on the region of the car and customer with a strong emphasis on SQL queries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "MYSQL", "HTML", "CSS", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/MohamedBattawy/Car-Rental-System"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Source Code →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Smart Connect-4</h3>
              <p className="text-gray-400 mb-4">
                Connect-4 game with an AI opponent using Minmax algorithm and alpha-beta pruning for optimal moves.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "PySimpleGUI"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/MohamedBattawy/Connect-4"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                Source Code →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Real-Time Chat App</h3>
              <p className="text-gray-400 mb-4">
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};