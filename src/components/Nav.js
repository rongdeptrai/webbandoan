import React from 'react';

function Nav() {
  return (
    <nav className="flex justify-center space-x-8 py-4 border-b">
      {['Trang chủ', 'Món ăn chính', 'Món ăn vặt', 'Món tráng miệng', 'Nước uống', 'Món khác'].map((link) => (
        <a key={link} className="hover:underline" href="#">
          {link}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
