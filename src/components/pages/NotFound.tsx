import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  // const [count, setCount] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line
      navigate("/");
    }, 5000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-[45vh]">
      <p className="text-[#363636] text-2xl font-semibold">404 | Not Found</p>
      <p className="text-[#363636] text-base font-light">
        You will be redirected to home in 5 seconds
      </p>
    </div>
  );
}

export default NotFound;
