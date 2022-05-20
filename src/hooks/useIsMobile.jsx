import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const UseIsMobile = (maxDeviceWidth) => {
  const mediaQ = useMediaQuery({ maxDeviceWidth: maxDeviceWidth || 767 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(mediaQ);
  }, [mediaQ]);

  return isMobile;
};

export default UseIsMobile;
