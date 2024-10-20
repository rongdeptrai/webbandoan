import React from 'react';

const menuItems = [
  { name: 'Nấm đùi gà chay tỏi', price: '70,000 VND', image: 'img/nam-dui-ga-chay-toi.jpeg' },
  { name: 'Rau xào ngũ sắc', price: '50,000 VND', image: 'img/rau-xao-ngu-sac.png' },
  { name: 'Súp bào ngư hải sâm', price: '60,000 VND', image: 'img/sup-bao-ngu-hai-sam.jpeg' },
  { name: 'Tai lưỡi trộn', price: '120,000 VND', image: 'img/tai-cuon-luoi.jpeg' },
  { name: 'Trà phô mai kem sữa', price: '80,000 VND', image: 'img/tra-pho-mai-kem-sua.jpg' },
  { name: 'Sủi cảo tôm thịt', price: '60,000 VND', image: 'img/xiu_mai_tom_thit_10_vien.jpg' },
];

function Menu() {
  return (
    <section>
      <h2 className="menu-heading">Khám phá thực đơn của chúng tôi</h2>
      <div className="grid-container">
        {menuItems.map((item) => (
          <div key={item.name} className="grid-item">
            <img alt={item.name} className="w-full h-48 object-cover rounded" src={item.image} />
            <p className="mt-2">{item.name}</p>
            <p className="font-bold">{item.price}</p>
            <button className="text-blue-500">Đặt món</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
