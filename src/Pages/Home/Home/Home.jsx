import React from "react";

const Home = () => {
  return (
    <section className="bg-[#213A57] text-white py-16">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Kutumbpur High School
        </h1>
        <p className="text-xl mb-8">
          Inspiring the leaders of tomorrow with education, creativity, and
          curiosity.
        </p>
        <a
          href="/admissions"
          className="inline-block bg-[#14919B] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#0B6477] transition"
        >
          Explore Admissions
        </a>
      </div>

      {/* About Us Section */}
      <div className="bg-[#80ED99] py-16 mt-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-[#213A57] mb-8 text-center">
            About Us
          </h2>
          <p className="text-lg text-[#0B6477] leading-relaxed text-center">
            At Kutumbpur High School, we believe in nurturing young minds with
            knowledge, creativity, and curiosity. Our dedicated faculty,
            state-of-the-art facilities, and diverse extracurricular programs
            ensure that each student thrives both academically and personally.
          </p>
        </div>
      </div>

      {/* Events and Updates Section */}
      <div className="py-16 bg-[#0AD1C8]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold text-[#213A57] mb-8">
            Latest Events and Updates
          </h2>
          <p className="text-lg text-[#0B6477] mb-8">
            Stay up to date with what's happening at our school.
          </p>
          <a
            href="/events"
            className="inline-block bg-[#45DFB1] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#14919B] transition"
          >
            View Events Calendar
          </a>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#0B6477] py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What Our Students Say
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-white text-[#213A57] p-6 rounded-lg shadow-lg">
              <p className="mb-4">
                "Kutumbpur High School has given me the opportunity to explore
                my creativity while excelling in academics."
              </p>
              <h4 className="font-bold">- Student A</h4>
            </div>
            <div className="bg-white text-[#213A57] p-6 rounded-lg shadow-lg">
              <p className="mb-4">
                "The teachers here are so supportive and always encourage us to
                ask questions and stay curious."
              </p>
              <h4 className="font-bold">- Student B</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-[#14919B] py-16">
        <div className="container mx-auto px-6 md:px-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="text-lg mb-8">
            Have any questions? Feel free to reach out to us.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#213A57] py-3 px-6 rounded-lg shadow-lg hover:bg-[#0B6477] transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
