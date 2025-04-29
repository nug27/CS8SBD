import React, { useState, useEffect } from 'react';

const WorldClock = ({ selectedCity }) => {
  const [timeData, setTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Map city selection to timezone strings
  const timezoneMap = {
    'Singapore': 'Asia/Singapore',
    'Indonesia': 'Asia/Jakarta',
  };

  useEffect(() => {
    const fetchTimeData = async () => {
      setLoading(true);
      try {
        const timezone = timezoneMap[selectedCity] || 'Asia/Jakarta';
        
        // Load the script if it doesn't exist
        if (!window.getTimezone) {
          const script = document.createElement('script');
          script.src = 'https://api.opentimeapi.com/index.js';
          script.async = true;
          document.body.appendChild(script);
          
          // Wait for script to load
          await new Promise(resolve => {
            script.onload = resolve;
          });
        }
        
        // Use the API after loading
        window.getTimezone(timezone, (data) => {
          setTimeData(data);
          setLoading(false);
        });
      } catch (err) {
        console.error('Error fetching time data:', err);
        setError('Could not load time data');
        setLoading(false);
      }
    };

    fetchTimeData();
    
    // Set interval to update time every minute
    const intervalId = setInterval(() => {
      fetchTimeData();
    }, 60000);
    
    return () => clearInterval(intervalId);
  }, [selectedCity]);

  if (loading) return <div className="text-sm text-blue-700">Loading...</div>;
  if (error) return <div className="text-sm text-red-500">{error}</div>;
  if (!timeData) return null;

  // Format time with leading zeros
  const hour = timeData.hour.toString().padStart(2, '0');
  const minute = timeData.mins.toString().padStart(2, '0');
  
  // Format date as YYYY-MM-DD
  const date = `${timeData.year}-${(timeData.month).toString().padStart(2, '0')}-${timeData.date.toString().padStart(2, '0')}`;

  return (
    <div className="text-sm text-blue-900 flex flex-col justify-center items-center">
      <p className="font-bold">{hour}:{minute}</p>
      <p>{date}</p>
    </div>
  );
};

export default WorldClock;