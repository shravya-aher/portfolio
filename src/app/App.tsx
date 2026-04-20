import { useState } from 'react';
import PhotoGallery from './components/PhotoGallery';

export default function App() {
  const [activeSection, setActiveSection] = useState<'tech' | 'creative' | null>(null);

  const handleReset = () => {
    setActiveSection(null);
  };

  return (
    <div className="size-full bg-gradient-to-br from-[#FFE5E5] via-[#FFF4E5] to-[#E5F3FF] overflow-hidden relative flex items-center justify-center font-['Inter']">
      {/* Left Square - Tech Resume */}
      <div
        onMouseEnter={() => setActiveSection('tech')}
        className={`absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#B5E7E3] to-[#A5D8FF] shadow-2xl cursor-pointer transition-all duration-700 ease-in-out flex items-center justify-center ${
          activeSection === 'tech'
            ? 'w-full h-full rounded-none translate-x-0'
            : activeSection === 'creative'
            ? 'w-[500px] h-[500px] rounded-[48px] -translate-x-full opacity-0'
            : 'w-[500px] h-[500px] rounded-[48px] -translate-x-1/2'
        }`}
      >
        <div className={`transition-opacity duration-500 ${activeSection === 'tech' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="max-w-4xl mx-auto px-12 py-8 h-full overflow-y-auto">
            <div className="mb-8 pb-4 border-b border-[#2D5A6B]/20">
              <button
                onClick={handleReset}
                className="text-3xl text-[#2D5A6B] hover:text-[#1D4A5B] transition-colors font-['p22-allyson-pro']"
              >
                ← Portfolio
              </button>
            </div>
            <h2 className="text-5xl mb-8 text-[#2D5A6B] font-['p22-allyson-pro']">Tech Resume</h2>
            <div className="space-y-8 text-[#3D6A7B]">
              <section>
                <h3 className="text-3xl mb-4 text-[#2D5A6B] font-['p22-allyson-pro']">Technical Skills</h3>
                <div className="space-y-2">
                  <p className="text-lg"><span className="font-medium">Languages:</span> JavaScript, TypeScript, Python, Java, SQL</p>
                  <p className="text-lg"><span className="font-medium">Frontend:</span> React, Next.js, Vue.js, Tailwind CSS, HTML/CSS</p>
                  <p className="text-lg"><span className="font-medium">Backend:</span> Node.js, Express, Django, REST APIs, GraphQL</p>
                  <p className="text-lg"><span className="font-medium">Tools:</span> Git, Docker, AWS, MongoDB, PostgreSQL</p>
                </div>
              </section>

              <section>
                <h3 className="text-3xl mb-4 text-[#2D5A6B] font-['p22-allyson-pro']">Experience</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xl mb-1 font-medium">Senior Full Stack Developer</p>
                    <p className="text-base mb-2 opacity-80">Tech Company Inc. | 2022 - Present</p>
                    <ul className="list-disc list-inside space-y-1 text-base">
                      <li>Led development of customer-facing web applications serving 100K+ users</li>
                      <li>Architected and implemented microservices infrastructure using Node.js and Docker</li>
                      <li>Mentored junior developers and established coding best practices</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xl mb-1 font-medium">Frontend Developer</p>
                    <p className="text-base mb-2 opacity-80">Startup Labs | 2020 - 2022</p>
                    <ul className="list-disc list-inside space-y-1 text-base">
                      <li>Built responsive web applications using React and TypeScript</li>
                      <li>Improved application performance by 40% through code optimization</li>
                      <li>Collaborated with design team to implement pixel-perfect UI components</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-3xl mb-4 text-[#2D5A6B] font-['p22-allyson-pro']">Education</h3>
                <div>
                  <p className="text-xl mb-1 font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-base opacity-80">University Name | 2016 - 2020</p>
                </div>
              </section>

              <section>
                <h3 className="text-3xl mb-4 text-[#2D5A6B] font-['p22-allyson-pro']">Projects</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-medium mb-1">E-Commerce Platform</p>
                    <p className="text-base">Built a full-stack e-commerce solution with payment integration, inventory management, and admin dashboard</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-1">Task Management App</p>
                    <p className="text-base">Developed a collaborative task management tool with real-time updates using WebSockets</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={`text-center pr-24 transition-opacity duration-300 ${activeSection === 'tech' ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-4xl mb-4 text-[#2D5A6B] font-['p22-allyson-pro']">Tech</h2>
          <p className="text-lg text-[#3D6A7B]">Developer & Engineer</p>
        </div>
      </div>

      {/* Right Square - Creative Side */}
      <div
        onMouseEnter={() => setActiveSection('creative')}
        className={`absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#FFD4E5] to-[#FFDAB9] shadow-2xl cursor-pointer transition-all duration-700 ease-in-out flex items-center justify-center ${
          activeSection === 'creative'
            ? 'w-full h-full rounded-none translate-x-0'
            : activeSection === 'tech'
            ? 'w-[500px] h-[500px] rounded-[48px] translate-x-full opacity-0'
            : 'w-[500px] h-[500px] rounded-[48px] translate-x-1/2'
        }`}
      >
        <div className={`transition-opacity duration-500 ${activeSection === 'creative' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="w-full h-full py-8 overflow-y-auto">
            <div className="mb-8 pb-4 border-b border-[#8B4567]/20 px-12">
              <button
                onClick={handleReset}
                className="text-3xl text-[#8B4567] hover:text-[#6B3547] transition-colors font-['p22-allyson-pro']"
              >
                ← Portfolio
              </button>
            </div>
            <h2 className="text-5xl mb-8 text-[#8B4567] font-['p22-allyson-pro'] px-12">Creative Portfolio</h2>
            <p className="text-lg text-[#9B5577] mb-8 px-12">Click on any image to read its story</p>
            <PhotoGallery />
          </div>
        </div>
        <div className={`text-center pl-24 transition-opacity duration-300 ${activeSection === 'creative' ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-4xl mb-4 text-[#8B4567] font-['p22-allyson-pro']">Creative</h2>
          <p className="text-lg text-[#9B5577]">Designer & Artist</p>
        </div>
      </div>

      {/* Center Title */}
      <div className={`z-10 text-center transition-opacity duration-500 ${activeSection ? 'opacity-0' : 'opacity-100'}`}>
        <h1 className="text-6xl mb-4 text-[#4A5568] font-['p22-allyson-pro']">Portfolio</h1>
        <p className="text-xl text-[#5A6578]">Hover to explore</p>
      </div>
    </div>
  );
}