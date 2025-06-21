import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function SpiderWeb() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="spider-web"
      init={particlesInit}
      style={{ width: "100%", height: "100%" }}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: { distance: 70, duration: 0.6 },
          },
        },
        particles: {
          color: { value: "#87CEEB" },
          links: {
            enable: true,
            distance: 70,
            color: "#87CEEB",
            opacity: 0.8,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: { default: "bounce" },
          },
          number: {
            value: 150,
            density: { enable: true, area: 500 },
          },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 2.0, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
}