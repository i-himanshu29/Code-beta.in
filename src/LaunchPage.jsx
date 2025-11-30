import React, { useEffect, useState } from "react";

export default function LaunchPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const launchDate = new Date("2025-12-31T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setIsLive(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLive) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 to-indigo-900 text-white text-center p-6">
        <div className="text-[2.5rem] sm:text-[3.5rem] font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-glow">
          CodeBeta.in
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          🎉 We Are Live Now!
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-md sm:max-w-2xl leading-relaxed">
          Start your journey of mastering <strong>DSA</strong> and cracking top
          tech interviews with <strong>CodeBeta.in</strong>.
        </p>
        <footer className="mt-16 text-gray-500 text-xs sm:text-sm">
          © 2025 CodeBeta.in
        </footer>

        <style>{`
          @keyframes glow {
            0% {
              text-shadow: 0 0 20px rgba(34, 211, 238, 0.4),
                           0 0 40px rgba(59, 130, 246, 0.3),
                           0 0 60px rgba(168, 85, 247, 0.2);
            }
            100% {
              text-shadow: 0 0 30px rgba(34, 211, 238, 0.6),
                           0 0 60px rgba(59, 130, 246, 0.5),
                           0 0 80px rgba(168, 85, 247, 0.4);
            }
          }
          .animate-glow {
            animation: glow 2s ease-in-out infinite alternate;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#1e3a8a)] text-white text-center font-[Poppins] overflow-hidden px-4 sm:px-8">
      {/* Brand Name */}
      <div className="logo text-[2.8rem] sm:text-[4.5rem] font-black lowercase tracking-[2px] sm:tracking-[3px] bg-gradient-to-r from-[#ff007f] via-[#ff6a00] to-[#ffd200] bg-clip-text text-transparent animate-glow_pulse mb-3 sm:mb-4 select-none">
        CodeBeta
      </div>

      {/* Subtitle */}
      <h1 className="text-[2rem] sm:text-[3rem] font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide animate-fadeIn mb-2">
        🚀 Launching Soon
      </h1>

      <p className="text-[1rem] sm:text-[1.25rem] opacity-90 max-w-[90%] sm:max-w-[650px] mb-8 leading-relaxed animate-fadeIn">
        Get ready to strengthen your <strong>DSA</strong> skills and ace your{" "}
        <strong>interviews</strong> with <strong>CodeBeta.in</strong> — the
        ultimate platform for coding preparation and practice.
      </p>

      {/* Countdown */}
      <div className="countdown flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-[1.5rem] sm:text-[2rem] mt-4">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
          <div
            key={label}
            className="bg-white/10 px-5 sm:px-6 py-4 sm:py-5 rounded-xl min-w-[70px] sm:min-w-[90px] backdrop-blur-md shadow-md hover:-translate-y-1 transition-transform duration-200"
          >
            <span className="block text-3xl sm:text-4xl text-white">
              {Object.values(timeLeft)[i]}
            </span>
            <span className="label text-xs sm:text-sm opacity-80 mt-1 block text-gray-300">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 sm:bottom-5 text-xs sm:text-sm text-gray-400 opacity-80 tracking-wide px-2 text-center">
        © 2025 CodeBeta.in • DSA & Interview Preparation Platform
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes glow_pulse {
          0% {
            text-shadow: 0 0 20px rgba(255, 0, 150, 0.4),
                         0 0 40px rgba(255, 100, 50, 0.3),
                         0 0 60px rgba(255, 200, 0, 0.2);
            transform: scale(1);
          }
          100% {
            text-shadow: 0 0 30px rgba(255, 80, 150, 0.6),
                         0 0 60px rgba(255, 120, 50, 0.5),
                         0 0 80px rgba(255, 220, 50, 0.4);
            transform: scale(1.03);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-glow_pulse {
          animation: glow_pulse 2.5s ease-in-out infinite alternate;
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
