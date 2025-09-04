import React from "react";

function Contact() {
  return (
    <section  id="Contact" className="px-6 py-16 bg-gray-50 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
        <p className="text-gray-600 mt-2">
          Have a question or want to work together? Fill out the form below ✨
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 ">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-300">
          <form
            action="https://formspree.io/f/mzzakewv"
            method="POST"
            className="space-y-6"
            
          >
            {/* Username + Email in 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 font-medium text-gray-800"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  placeholder="Enter your name..."
                  className="w-full px-4 py-3 border border-black-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Enter your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-black-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your main heading..."
                className="w-full px-4 py-3 border border-black-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Enter your message..."
                className="w-full px-4 py-3 border border-black-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition"
              >
                Send Message 🚀
              </button>
            </div>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17048236678!2d73.69781022308634!3d18.52454474161084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708765037890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="w-full h-[450px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
