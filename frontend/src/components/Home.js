// core modules and third party modules
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// project modules
import Header from './Header';
import Particles from 'react-particles-js';

// CSS Rules
const useStyles = makeStyles({
  particlesCanvas: {
    postion: 'absolute',
    opacity: 0.8,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      {/* Responsbile for the  Image and typography  of the body */}
      <Header />

      {/* Responsible for the background particle effect */}
      <Particles
        canvasClassName={classes.particlesCanvas}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: {
              value: '#0000ff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'black',
              },
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 6.5,
                size_min: 0.1,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#c8c8c8',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'bounce',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 35,
                duration: 2,
                opacity: 7,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  );
};

export default Home;
