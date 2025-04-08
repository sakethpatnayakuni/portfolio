import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-center shadow-inner">
      <p className="mb-4 text-gray-600">© 2025 Saketh patnayakuni. All rights reserved.</p>
      <a
        href="/Resume_saketh.pdf"
        download
        className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
      >
        📄 Download Resume
      </a>
    </footer>
  );
};

export default Footer;
