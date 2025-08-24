import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Love" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Naomi L on{" "}
            <a href="https://github.com/naoloui/dictionary-application">
              {" "}
              Github{" "}
            </a>{" "}
            hosted on{" "}
            <a href="https://app.netlify.com/projects/dictionary-application-naoloui/overview">
              {" "}
              Netlify{" "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
