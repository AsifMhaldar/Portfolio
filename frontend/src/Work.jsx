import React from 'react';
import Wanderlust from './assets/wanderlust.jpeg';
import Sugarcane from './assets/sugarcane.jpg';
import Thapa from './assets/thapa.jpeg';
import BookMyShow from './assets/BookMyShow.jpg';

function Work() {
  const projects = [
    {
      title: "BackEnd - Wanderlust",
      img: Wanderlust,
      description: "Developed the backend for a Wanderlust clone with features like user authentication, property listings, and booking functionalities. Ensured secure API interactions and efficient data management.",
      live: "https://backend-wanderlust.onrender.com/listings",
      github: "#"
    },
    {
      title: "SugarCane Bud Detection",
      img: Sugarcane,
      description: "Designed a real-time AI solution to detect and classify sugarcane buds with high accuracy. Trained and tested ML models, achieving 90% detection accuracy. Deployed model for real-time inference with optimized preprocessing pipeline.",
      live: "https://github.com/AsifMhaldar/Sugarcane",
      github: "https://github.com/AsifMhaldar/Sugarcane"
    },
    {
      title: "Thapa Eduhub Clone",
      img: Thapa,
      description: "Built a responsive educational website, “Thapa EduHub”, using HTML and CSS with a clean, user-friendly interface. Integrated a contact feature allowing learners to send messages directly to the platform. Technologies Used: HTML, CSS",
      live: "https://thapaeduhubplatform.netlify.app/",
      github: "https://github.com/AsifMhaldar/thapaeduhub-frontend"
    },
    {
      title: "Book My Show - Frontend",
      img: BookMyShow,
      description: "Developed a responsive movie ticket booking website, “BookMyShow Clone”, using HTML and CSS.",
      live: "https://bookmyshowweb.netlify.app/",
      github: "https://github.com/AsifMhaldar/bookmyshow"
    }
  ];

  return (
    <section id='Work' className='py-16 bg-gray-50 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'>
      <div className='max-w-7xl mx-auto px-4'>
        <h2 className="text-center text-4xl font-bold mb-2 mt-10">Work</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-300 rounded-2xl shadow-md p-6 transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-40 object-cover rounded-t-2xl mb-4"
              />
              <h3 className="text-2xl font-semibold mb-4">{proj.title}</h3>
              <p className="text-gray-700 mb-4 text-justify">{proj.description}</p>
              <div className='flex justify-between items-center'>
                <a href={proj.live} target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  View Live
                </a>
                <a href={proj.github} target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                  Github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
