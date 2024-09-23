import { useEffect, useState } from "react";

const useNetwork = ()=>{
    
const [isOnline, setIsOnline] = useState(navigator.onLine); 

useEffect(() => {
  const handleOnline = () => setIsOnline(true);
  const handleOffline = () => setIsOnline(false);

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline)};
    }, []);
    return isOnline;
}

export default useNetwork;
