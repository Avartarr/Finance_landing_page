import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Online = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const handleOnline = () => {
        console.log('Network is online');
        toast.success('Connected to Network!');
        setIsOnline(true)
    };

    const handleOffline = () => {
        console.log('Network is offline');
        toast.error('Disconnected from network!');
        setIsOnline(false)
    };
    
    useEffect (() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
        }
    }, []);
    
  return (
    <div>
        {isOnline ? (
            <p>Connected to Network</p>
        ):(
            <p>Disconnected from Network</p>
        )}
    </div>
);
};


export default Online;