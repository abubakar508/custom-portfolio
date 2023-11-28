"use client";

//import usecallbakc and ract
import { useCallback } from "react";

//import particles from react-tsparticles
import Particles from "react-tsparticles";

//import tsparticles loadfull
import { loadFull } from "tsparticles";

//import engine type for tsparticles engine
import { Engine } from "tsparticles-engine";

const GalaxyParticles = () => {
  // init
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <div className=" absolute h-screen w-[400px]">
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        id="galaxy-particles"
        options={{
            fullScreen: {enable: false},
            background: {
                color: {
                    value: ''
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 90,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: '#7f1cfc'
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce'
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 150,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: {min: 1, max: 5}
                },
            },
            detectRetina: true,
        }}
      />
    </div>
  );
};

export default GalaxyParticles;
