import {choosenGradientTheme} from "./configuration/style.js";
import GradientBackground from "./components/background/GradientBackground.jsx";
import AllSections from "./components/sections/AllSections.jsx";
import {StarBackground} from "./components/background/StarsInitiation.jsx";
import {useEffect, useState} from "react";

function App() {
    const [componentMounted, setComponentMounted] = useState(false);
    useEffect(function () {
        setComponentMounted(true);
    }, [])

  return (
    <>
      <div id="main-stack-layout"
           className="full-height"
           style={{
               '--num-of-each-section': choosenGradientTheme.length,
           }}>

          <AllSections />
          <GradientBackground colorsForEachSection={choosenGradientTheme} />
          {componentMounted && <StarBackground />}
      </div>
    </>
  )
}

export default App
