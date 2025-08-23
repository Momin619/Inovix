// src/components/ParticlesBackground.jsx
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // load slim bundle (shapes, presets, etc.)
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 "
      options={{
        background: {
          color: { value: "#000000" },
        },
        particles: {
          number: { value: 150, density: { enable: true, area: 800 } },
          color: { value: "#00ffff" },
          shape: { type: "triangle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 10 } },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 4.8,
            random: true,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            grab: { distance: 400, links: { opacity: 0.5 } },
            bubble: {
              distance: 400,
              size: 20,
              duration: 1,
              opacity: 0.4,
              speed: 3,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { quantity: 4 },
            remove: { quantity: 2 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
