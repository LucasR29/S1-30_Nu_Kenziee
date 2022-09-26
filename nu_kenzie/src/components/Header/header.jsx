import "./header.css";

export const Header = ({ setHome }) => {
  return (
    <header className="header">
      <h1>
        Nu <span>Kenzie</span>
      </h1>
      <button
        onClick={() => {
          setHome(true);
          const body = document.getElementById("body");
          body.style.backgroundColor = "#212529";
        }}
      >
        Início
      </button>
    </header>
  );
};
