import './App.css';
import HeaderBlock from "./header-block";

function App() {
  return (
    <div className="App flex justify-center text-center w-full h-full">
      <div className="app-content flex w-full md:w-px768 lg:w-px1024">
          <HeaderBlock/>
      </div>
    </div>
  );
}

export default App;
