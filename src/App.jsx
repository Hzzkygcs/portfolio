import {choosenGradientTheme} from "./configuration/style.js";
import GradientBackground from "./components/background/GradientBackground.jsx";
import AllSections from "./components/sections/AllSections.jsx";
import {StarBackground} from "./components/background/StarsInitiation.jsx";
import {useEffect, useState} from "react";

function App() {
    const [componentMounted, setComponentMounted] = useState(false);
    useEffect(function () {
        setComponentMounted(true);
    }, []);

    const [totalNumberOfSections, setTotalNumberOfSections] = useState(0);


  return (
    <>
      <div id="main-stack-layout"
           className="full-height"
           style={{
               '--num-of-each-section': totalNumberOfSections,
           }}>

          <AllSections totalNumberOfSections={totalNumberOfSections}
                       setTotalNumberOfSections={setTotalNumberOfSections} />
          <GradientBackground colorsForEachSection={choosenGradientTheme(totalNumberOfSections)} />
          {componentMounted && <StarBackground />}
      </div>
    </>
  )
}

export default App
