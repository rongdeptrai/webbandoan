import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <img
        alt="VY Food logo"
        className="h-16"
        src="img/Remove-bg.ai_1728717088004.png"
        height="100"
        width="100"
      />
      <input
        className="border rounded p-2 w-1/3"
        placeholder="Tìm kiếm"
        type="text"
      />
      <div className="flex space-x-4">
        <Link to="/signup">
            <button className="border rounded-full px-4 py-2">Đăng nhập/Đăng ký Tài khoản</button>
        </Link>
        <button className="border rounded-full px-4 py-2">Giỏ hàng</button>
      </div>
    </header>
  );
}

export default Header;
