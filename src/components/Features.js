import React from 'react';

function Features() {
  const features = ['Giao hàng nhanh', 'Sản phẩm an toàn', 'Hỗ trợ 24/7', 'Hoàn tiền lại'];

  return (
    <section className="flex justify-center space-x-8 py-8 border-b">
      {features.map((feature) => (
        <div key={feature} className="border rounded-full px-6 py-2">
          {feature}
        </div>
      ))}
    </section>
  );
}

export default Features;
