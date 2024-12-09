// Particle effect setup for moving background
particlesJS('particles-js', {
    particles: {
      number: {
        value: 100, 
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ff99cc"  // Pastel pink/lavender color
      },
      shape: {
        type: "circle",  // Particle shapes
        stroke: {
          width: 0,
          color: "#fff"
        }
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ff99cc",  // Lavender links between particles
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Repulse effect when hovering
        },
        onclick: {
          enable: true,
          mode: "push" // Add particles on click
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
  