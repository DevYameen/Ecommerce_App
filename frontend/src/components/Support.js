import React from 'react';

const Support = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
          We're Here to Help!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you have questions about your orders, products, or need technical assistance, our support team is ready to assist you.
            Our team is dedicated to ensuring you have a smooth shopping experience. Explore our resources below to get quick help and tips.
          </p>
        </div>
        
        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800">Shipping Information</h3>
            <p className="mt-2 text-gray-600">
              Find out about our shipping methods, delivery times, and how to track your orders.
            </p>
            <div className="mt-4">
              <a href="/shipping-info" className="text-red-600 hover:underline">
                Learn more about shipping
              </a>
            </div>
          </div>

          {/* Return Policy */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800">Return & Refund Policy</h3>
            <p className="mt-2 text-gray-600">
              If you're not completely satisfied with your purchase, read more about how to return or exchange your items.
            </p>
            <div className="mt-4">
              <a href="/return-policy" className="text-red-600 hover:underline">
                View return policy
              </a>
            </div>
          </div>
        </div>

        {/* Additional Support Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Order Help */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800">Order Assistance</h3>
            <p className="mt-2 text-gray-600">
              Need help with your order? Learn how to check order status, modify details, and more.
            </p>
            <div className="mt-4">
              <a href="/order-help" className="text-red-600 hover:underline">
                Get order help
              </a>
            </div>
          </div>

          {/* Payment & Billing */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800">Payment & Billing</h3>
            <p className="mt-2 text-gray-600">
              Explore payment methods, billing issues, and other transaction-related queries.
            </p>
            <div className="mt-4">
              <a href="/payment-info" className="text-red-600 hover:underline">
                Learn about payments
              </a>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800">Customer Support</h3>
            <p className="mt-2 text-gray-600">
              Our support team is available 24/7 to address any issues you may have.
            </p>
            <div className="mt-4">
              <i className="fas fa-envelope text-red-600 mr-2"></i>  
              <a href="mailto:support@ecommerce.com" className="text-red-600 hover:underline">
                support@yam.com
              </a>
            </div>
            <div className="mt-2">
              <i className="fas fa-phone-alt text-red-600 mr-2"></i>  
              <a href="tel:+123456789" className="text-red-600 hover:underline">
               9305595655
              </a>
            </div>
        </div>
        
        {/* Tips and Tutorials */}
        <div className="mt-8 bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold">Shopping Tips & Tutorials</h3>
          <p className="mt-2 text-lg">
            New to online shopping? Browse our easy tutorials for help on navigating the store, making purchases, and more.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/how-to-shop" className="text-blue-200 hover:underline">
                How to place an order
              </a>
            </li>
            <li>
              <a href="/best-practices" className="text-blue-200 hover:underline">
                Best practices for secure payments
              </a>
            </li>
            <li>
              <a href="/discounts" className="text-blue-200 hover:underline">
                Finding discounts and promotions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
