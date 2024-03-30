import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Simulador</h1>
        <a href="https://tienda.ardur.com.ar/">Regresar a la página web de Ardur</a>
      </header>
      <body>
        <label for="cars">Choose a car:</label>
          <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
      </body>
    </div>
  );
}

export default App;
