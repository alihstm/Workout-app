import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import "../../Components/global.css";

export default function GoalOpening() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/goal");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-900">
      <div className="flex items-center gap-4 mb-6 animate-fade-in">
        <div className="h-px w-16 bg-gray-300" />

        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300">
          بخش اول
        </h2>

        <div className="h-px w-16 bg-gray-300" />
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold animate-fade-in-slow color-white">
        <Typewriter
          words={["هدفت از تمرین چیه؟"]}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          delaySpeed={2000}
        />
      </h1>
    </main>
  );
}
