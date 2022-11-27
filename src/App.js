import Context from "./context";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <Context>
        <Router />
      </Context>
    </>
  );
}

export default App;
