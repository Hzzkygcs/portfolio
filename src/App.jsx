import {choosenGradientTheme} from "./configuration/style.js";
import OverallBackground from "./components/background/OverallBackground.jsx";
import AllSections from "./components/sections/AllSections.jsx";

function App() {
  return (
    <>
      <div id="main-stack-layout"
           className="full-height"
           style={{
               '--num-of-each-section': choosenGradientTheme.length,
           }}>

          <AllSections />
          <OverallBackground colorsForEachSection={choosenGradientTheme} />
      </div>
    </>
  )
}

export default App
