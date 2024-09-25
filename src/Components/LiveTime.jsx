import React, { useEffect, useState } from 'react'
import '../App.css'

const LiveTime = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(()=> {
        setInterval(() => {
            startTime()
        }, 1000);
    },[currentTime])

    const startTime = () => {
            showTime();
    }

    function showTime() {
        const time = new Date();
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
  
        // Convert 24-hour to 12-hour format
        const displayHours = hours % 12 || 12;
  
        // Add leading zeros to minutes and seconds
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
  
        // Display the time in the desired format
        let displayTime = `${displayHours}:${displayMinutes}:${displaySeconds} ${ampm}`
        setCurrentTime(displayTime);
      }
  return (
    <div className='time-container'>
        <div className='time-display'>
            {currentTime}
        </div>
    </div>
  )
}

export default LiveTime