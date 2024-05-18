import React from 'react';
import Lottie from 'lottie-react';
import animationData from './payment-fail.json';

export default function PaymentFailAnimation() {
  return (
    <>
     <div className="flex flex-col justify-center items-center h-screen">
  <Lottie
    animationData={animationData}
    className="lg:w-1/4 lg:h-1/4"
    loop={true}
  />
  <p className='font-verdana font-semibold text-md text-center'>Your payment failed. Please try again or contact our support.</p>
</div>

    </>
  );
}
