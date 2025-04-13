import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center">
                <RevealOnScroll>
          
<div className="text-center z-10 px-4">

        <h1 className="
        text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Mohamed Elbattawy
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          A full stack developer specializing in backend development with a passion for problem-solving and a history of competetive programming.
            With expertise in Web Development, I focus on building scalable and efficient systems that deliver reliable solutions for complex challenges.
          </p>

        {/* Wrapper div for buttons */}
        <div className="flex justify-center space-x-4"> 
            <a href="#projects" className="
          inline-block px-6 py-3 mt-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300
          hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]">
                    View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 mt-4 rounded font-medium transition-all duration-200 
             hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            </div>

          </div>
      </RevealOnScroll>

        </section>
    );
}