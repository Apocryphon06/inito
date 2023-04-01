import React, { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);

  useMemo(() => {
    setInterval(() => {
      setCount(count - 1);
      if (count === 0) {
        return navigate("/");
      }
    }, 1000);
  }, [count]);

  return (
    <div className="flex flex-col justify-center items-center mt-[45vh]">
      <p className="text-[#363636] text-2xl font-semibold">404 | Not Found</p>
      <p className="text-[#363636] text-base font-light">
        You will be redirected to home in {count} seconds
      </p>
    </div>
  );
}

export default NotFound;
