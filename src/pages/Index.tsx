import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import PlayButton from "../components/PlayButton";
import ComingSoon from "../components/ComingSoon";
import FloatingFlowers from "../components/FloatingFlowers";
import { triggerCelebration } from "@/utils/confetti";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const backgroundMusic = new Audio("/priconne-collab.mp3");
    backgroundMusic.loop = true;
    setAudio(backgroundMusic);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      backgroundMusic.pause();
    };
  }, []);

  const handleStart = () => {
    if (audio) {
      audio.play().catch(console.error);
      setHasStarted(true);
      triggerCelebration(); // Trigger the celebration effect
    }
  };

  if (isLoading) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <FloatingFlowers />
      {!hasStarted ? (
        <PlayButton onClick={handleStart} />
      ) : (
        <ComingSoon />
      )}
    </div>
  );
};

export default Index;