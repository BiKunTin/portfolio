import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 800);
  }, []);

  return (
    <Router>
      <Preloader load={load} />{" "}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Particles
          options={{
            backgroundMode: {
              enable: true,
              zIndex: 0,
            },
            particles: {
              number: {
                value: 10,
                limit: 200,
                density: {
                  enable: true,
                  value_area: 200,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 4,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.5,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                  size_min: 3,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                  parallax: {
                    enable: false,
                    force: 20,
                    smooth: 10,
                  },
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 800,
                  lineLinked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 800,
                  size: 2,
                  duration: 2,
                  opacity: 1,
                  speed: 2,
                },
                push: {
                  particles_nb: 5,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            fps_limit: 144,
          }}
        />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />{" "}
          <Route path="/project" component={Projects} />{" "}
          <Route path="/about" component={About} />{" "}
          <Route path="/resume" component={Resume} />{" "}
          <Route path="/contact" component={Contact} />{" "}
        </Switch>{" "}
        {/* <Footer /> */}
      </div>{" "}
    </Router>
  );
}

export default App;
