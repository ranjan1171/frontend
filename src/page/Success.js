import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to redirect after 2 seconds
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to the home page
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='bg-green-200 w-full max-w-md m-auto h-36 flex justify-center items-center font-semibold text-lg'>
      <p>Payment is successful. Redirecting to home page...</p>
    </div>
  );
};

export default Success;
