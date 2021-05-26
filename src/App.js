import image from "./image.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <img src={image} className="image img-fluid" alt="giraffe" />
      </header>
      <main>
        <Dictionary defaultKeyword="crab"/>
      </main>
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/jayani-chakravarti-bb4b04106/" target="_blank" rel="noreferrer">Jayani Chakravarti</a> and is <a href="https://github.com/jchakravarti/dictionary-react" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
      </footer>
      </div>
      
    </div>
  );
}

