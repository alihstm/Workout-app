import { Route } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import coach from "../../assets/Material/coach.jpg";
import "../../Components/global.css";

export default function Greeting() {
  const [showTitle, setShowTitle] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowTitle(true);
    setTimeout(() => {
      navigate("/gender");
    }, 2500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-10 py-12">
      <div className="flex flex-col items-center justify-between w-full max-w-md gap-10 fade-in ">
        <div className="flex flex-col items-center gap-6">
          <img
            src={coach}
            alt="coach"
            className="w-40 sm:w-48 md:w-60 rounded-full shadow-lg"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-center">سلام!</h1>
          <p className="text-base sm:text-lg font-medium text-center leading-relaxed color-gray">
            من مربی شخصی‌ت هستم. <br />
            برای اینکه یه برنامه مخصوص خودت بچینم، چندتا سؤال دارم.
          </p>
        </div>

        {!showTitle ? (
          <button
            onClick={handleClick}
            className="bg-black text-white py-3 px-10 rounded-xl shadow-md hover:bg-gray-800 transition duration-150 hover:scale-105 active:scale-95"
          >
            بزن بریم
          </button>
        ) : (
          <h2 className="text-4xl font-bold text-center text-black animate-app-title">
            درجا
          </h2>
        )}
      </div>
    </main>
  );
}
