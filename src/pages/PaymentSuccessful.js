import React,{useEffect} from 'react'
import PaymentSuccess from '../loader/Payment-Success-Animation';

const PaymentSuccessful = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <PaymentSuccess />
  )
}

export default PaymentSuccessful;
