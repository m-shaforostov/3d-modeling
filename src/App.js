import './App.css';
import HeaderBlock from "./header-block";
import WeAreBlock from "./we-are-block";

function App() {
  return (
    <div className="App flex justify-center w-full h-full">
      <div className="app-content flex flex-col w-full md:w-px768 lg:w-px1024"> {/*"flex-col" has to be deleted*/} TODO
          <HeaderBlock/>
          <WeAreBlock/>
      </div>
    </div>
  );
}

export default App;
