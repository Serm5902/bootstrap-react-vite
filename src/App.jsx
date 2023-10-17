import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Contenido from "./contenido.jsx";
import Imagen from "./imagen.jsx";
import Acordeon from "./acordeon.jsx";

function App() {
  return (
    <div className="Container">
      <div className="row">
        <div className="col">
          <div className="px-4 py-5 my-5 text-center">
            <Imagen />
            <Contenido />
          </div>
        </div>
      </div>
      <div className="row">
        <Acordeon />
      </div>
    </div>
  );
}

export default App;
