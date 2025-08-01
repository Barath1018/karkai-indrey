import React from "react";

// Declare Razorpay global interface
declare global {
  interface Window {
    Razorpay: any;
  }
}

const DonateButton: React.FC = () => {
  const handleDonate = () => {
    const options: any = {
      key: "rzp_test_YourTestKeyHere", // 🔸 Replace with your Razorpay test key
      amount: 10000, // ₹100 in paise
      currency: "INR",
      name: "Donation Platform",
      description: "Support Us - ₹100 Donation",
      image: "https://your-image-url.com/logo.png", // optional logo
      handler: (response: any) => {
        alert(`✅ Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Test Donor",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#22c55e",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handleDonate}
      className="px-4 py-2 bg-green-600 border border-black text-white text-sm rounded-md shadow hover:bg-green-700 transition"
    >
      Donate ₹100
    </button>
  );
};

export default DonateButton;
