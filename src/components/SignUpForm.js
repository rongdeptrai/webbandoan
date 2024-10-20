import React from 'react';

function SignUpForm() {
  return (
    <div>
      <h2>Đăng ký tài khoản</h2>
      <form>
        <input
          id="name"
          placeholder="VD: Van Long"
          type="text"
        />
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
        <input
          id="confirm-password"
          placeholder="Nhập lại mật khẩu"
          type="password"
        />
        <button type="submit">ĐĂNG KÝ</button>
      </form>
    </div>
  );
}

export default SignUpForm;
