import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BGM_SRC = "/audio/bgm.mp3";

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume = 0.34;

    const playWhenAllowed = (event?: Event) => {
      if (
        event?.target instanceof Node &&
        toggleButtonRef.current?.contains(event.target)
      ) {
        return;
      }

      if (audio.muted) {
        return;
      }

      void audio.play().catch(() => undefined);
    };

    playWhenAllowed();

    window.addEventListener("pointerdown", playWhenAllowed, { once: true });
    window.addEventListener("keydown", playWhenAllowed, { once: true });

    return () => {
      window.removeEventListener("pointerdown", playWhenAllowed);
      window.removeEventListener("keydown", playWhenAllowed);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.muted = isMuted;

    if (!isMuted) {
      void audio.play().catch(() => undefined);
    }
  }, [isMuted]);

  const handleToggle = () => {
    const audio = audioRef.current;
    const nextMuted = !isMuted;

    if (audio) {
      audio.muted = nextMuted;

      if (!nextMuted) {
        void audio.play().catch(() => undefined);
      }
    }

    setIsMuted(nextMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={BGM_SRC}
        autoPlay
        loop
        playsInline
        preload="auto"
        muted={isMuted}
      />
      <button
        ref={toggleButtonRef}
        type="button"
        className="liquid-glass flex h-12 w-12 items-center justify-center rounded-full text-white transition duration-200 hover:bg-white/10 active:scale-[0.98]"
        onClick={handleToggle}
        aria-label={isMuted ? "开启背景音乐" : "关闭背景音乐"}
        aria-pressed={!isMuted}
        title={isMuted ? "开启背景音乐" : "关闭背景音乐"}
      >
        {isMuted ? (
          <VolumeX aria-hidden="true" className="h-5 w-5" />
        ) : (
          <Volume2 aria-hidden="true" className="h-5 w-5" />
        )}
      </button>
    </>
  );
}
