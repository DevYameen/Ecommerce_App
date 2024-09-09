import React from 'react';
import companyBackground from '../assest/aboutus.webp';


const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who We Are
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            At YAM, we believe in delivering the best products with exceptional customer service.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-500">
                Our mission is to offer a wide range of high-quality products that suit your lifestyle and budget. 
                We aim to make online shopping easy, enjoyable, and accessible for everyone.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
              <ul className="list-disc list-inside text-lg text-gray-500">
                <li>Fast and reliable shipping worldwide</li>
                <li>Premium quality products at competitive prices</li>
                <li>24/7 customer support for all your queries</li>
                <li>Secure and easy online shopping experience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="lg:absolute lg:inset-0">
              <img
                className="h-56 w-full object-cover lg:h-full lg:w-full"
                src={companyBackground}
                alt="Company background"
              />
            </div>
            <div className="relative px-6 py-8 lg:py-20 lg:px-20 lg:w-1/2 bg-gray-600 bg-opacity-10 text-white mx-auto shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold text-black">Our Story</h3>
              <p className="mt-4 text-lg text-gray-800 font-medium">
                Established in 2024, we started as a small business with a passion for making a difference.
                Over the years, we’ve grown into a trusted e-commerce platform loved by customers across the globe.
              </p>
              <p className="mt-4 text-lg text-gray-800 font-medium">
                Our journey is fueled by our dedication to providing only the best products and a customer-first mindset.
              </p>
            </div>


          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 active:bg-red-800 hover:rounded-full transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
