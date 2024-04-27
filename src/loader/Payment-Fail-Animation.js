import React from 'react';
import Lottie from 'lottie-react';
import animationData from './payment-fail.json';

export default function PaymentFailAnimation() {
  return (
    <>
     <div className="flex justify-center items-center h-screen">
  <Lottie
    animationData={animationData}
    className="w-50 h-50"
    loop={true}
  />
</div>

    </>
  );
}
