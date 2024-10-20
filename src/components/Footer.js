import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="grid-footer">
        <FooterLogo />
        <FooterSection title="Đăng kí nhận tin" content="Nhận thông tin mới nhất từ chúng tôi" />
        <FooterButtons1 />
        <FooterButtons />
        <FooterSection title="Về chúng tôi" content="VY Food là thương hiệu được thành lập vào năm 2022 với sứ mệnh cung cấp những sản phẩm ẩm thực hàng đầu." />
        <FooterLinks title="Liên kết" links={['Về chúng tôi', 'Thực đơn', 'Điều khoản', 'Thể lệ', 'Tin tức']} />
        <FooterLinks title="Thực đơn" links={['Điểm tâm', 'Món chính', 'Đồ ăn vặt', 'Món tráng miệng', 'Thức uống']} />
        <FooterLinks title="Liên hệ" links={['35 Đ.Tiên Sơn 20, Phường Hòa Cường Nam', 'SĐT: 123456789', 'Gmail: VyFood123@gmail.com']} />
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="grid-footer-items">
      <img alt="VY Food logo" className="h-16 mb-4" src="img/vy-food.png" width="150px" />
    </div>
  );
}

function FooterSection({ title, content }) {
  return (
    <div className="grid-footer-items">
      <p className="f-title">{title}</p>
      <p className="f-contents">{content}</p>
    </div>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div className="grid-footer-items">
      <p className="f-title">{title}</p>
      {links.map((link) => (
        <p key={link} className="f-contents">
          <a href="#">{link}</a>
        </p>
      ))}
    </div>
  );
}

function FooterButtons1() {
  return (
    <div className="grid-footer-items" style={{ paddingLeft: '4rem'}}>
      <button className="border rounded-full" style={{ padding: '1rem 6rem' }}>Nhập email của bạn</button>
    </div>
  );
}
function FooterButtons() {
    return (
      <div className="grid-footer-items" style={{ paddingLeft: '9rem'}}>
        <button className="border rounded-full" style={{  padding: '1rem 3rem'}}>Đăng ký</button>
      </div>
    );
  }
export default Footer;
