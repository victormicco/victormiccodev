import React, { useState, useEffect } from "react";

const MainNavBar = () => {
  const [isLarge, setIsLarge] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsLarge(window.innerWidth);

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <nav>
      {/* seu conteudo */}
      {isLarge > 0 && <p>Current width: {isLarge}px</p>}
    </nav>
  );
};

export default MainNavBar;
