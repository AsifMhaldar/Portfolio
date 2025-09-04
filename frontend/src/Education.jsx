import React from "react";

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science with Specialization in Artificial Intelligence & Machine Learning",
      institution: "Bharati Vidyapeeth's College Of Engineering, Kolhapur",
      year: "2021-2025",
      details: "Specialized in AI & ML, with a focus on software development, data structures, algorithms, and full-stack web technologies integrated with AI.",
      CGPA : "CGPA - 8.5"
    },
    {
      degree: "Higher Secondary Certificate (HSC) – Science Stream",
      institution: "Vivakanand College, Kolhapur",
      year: "2020 - 2021",
      Percentage:"87.33%"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Shri Ram High School Baveli, Kolhapur",
      year: "2018 - 2019",
      Percentage : "82.80%"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 py-16" id="education">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Education</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-600 ml-4 md:ml-8">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 ml-6 md:ml-10 relative">
              {/* Circle marker */}
              <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-4 border-4 border-white"></div>

              {/* Card content */}
              <div className="cursor-pointer bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-300 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-lg text-gray-700 mt-1">{edu.institution}</p>
                <p className="text-sm text-gray-500 italic mt-1">{edu.year}</p>
                {edu.CGPA && <p className="text-sm text-gray-500 italic mt-1">{edu.CGPA}</p>}
                {edu.details && <p className="mt-3 text-gray-700">{edu.details}</p>}
                {edu.Percentage && <p className="mt-3 text-gray-700">{edu.Percentage}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
