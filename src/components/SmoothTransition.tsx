import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return <>{children}</>;
};

export default SmoothTransition;
