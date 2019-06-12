import React, { Suspense } from "react";
import "./App.css";
import Loding from "./components/lodingSpinner/lodingspiner";
import icon from "./assets/icon.png";
const Map = React.lazy(() => import("./components/Map/drone_map"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="Dron icon" src={icon} />
        <h1>U.S Drone Strike's </h1>
        {/* <Suspense fallback={<div>Loding ....</div>}>*/}
        <Suspense fallback={<Loding />}>
          <Map />
        </Suspense>
      </header>
      <footer className="App-header">
        <p>
          Barack Obama inherited two ugly, intractable wars in Iraq and
          Afghanistan when he became president and set to work to end them. But
          a third, more covert war he made his own, escalating drone strikes in
          Pakistan and expanding them to Yemen and Somalia. The drone’s vaunted
          capability for pinpoint killing appealed to a president intrigued by a
          new technology and determined to try to keep the United States out of
          new quagmires. Aides said Mr. Obama liked the idea of picking off
          dangerous terrorists a few at a time, without endangering American
          lives or risking the yearslong bloodshed of conventional war. “Let’s
          kill the people who are trying to kill us,” he often told aides.
        </p>
        <p>
          By most accounts, hundreds of dangerous militants have, indeed, been
          killed by drones, including some high-ranking Qaeda figures. But for
          six years, when the heavy cloak of secrecy has occasionally been
          breached, the results of some strikes have often turned out to be
          deeply troubling. Every independent investigation of the strikes has
          found far more civilian casualties than administration officials
          admit. Gradually, it has become clear that when operators in Nevada
          fire missiles into remote tribal territories on the other side of the
          world, they often do not know who they are killing, but are making an
          imperfect best guess.
        </p>
        <p>Created by Ben Dov Hime Gratvol </p>
      </footer>
    </div>
  );
}

export default App;
