// components/SignInForm.js
import React from 'react';

function SignInForm() {
  return (
    <div>
      <h2>Đăng nhập</h2>
      <form>
        <input
          id="phone"
          placeholder="Nhập số điện thoại"
          type="text"
        />
        <input
          id="password"
          placeholder="Nhập mật khẩu"
          type="password"
        />
        <button type="submit">ĐĂNG NHẬP</button>
      </form>
      <p>Bạn chưa có tài khoản? <a href="#" style={{ color: '#3b82f6' }}>Đăng ký ngay</a></p>
    </div>
  );
}

export default SignInForm;
