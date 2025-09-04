import React from 'react'

const skills = [
  'C','C++','Python','Data Structure and Algorithm','OOPs', 'JavaScript (ES6+)', 'SQL','MySQL', 'React', 'Node.js', 'Express',
  'MongoDB', 'HTML5 & CSS3', 'Tailwind CSS', 'Git & GitHub', 'REST APIs','Deployment (Netlify, Render)'
];

function About() {
  return (
    <section id='About' className='bg-gray-50 py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'>
      {/* Heading */}
      <div className='text-center mb-12'>
        <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-start">
        
        {/* Left Column - About Me */}
        <div className="text-justify ">
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            I am a passionate <span className="font-semibold text-blue-600">MERN stack developer</span> 
            with a knack for creating dynamic and responsive web applications. My journey in web development began 
            with a curiosity for how things work behind the scenes, and it has evolved into a full-fledged career 
            where I enjoy tackling complex problems and delivering user-friendly solutions.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            With a strong foundation in both front-end and back-end technologies, I build seamless, high-performance 
            applications from start to finish. I am a lifelong learner, always eager to explore new technologies and 
            refine my skills to stay at the forefront of the ever-evolving web landscape.
          </p>
        </div>

        {/* Right Column - My Skills */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;
