import "./main.css";

export const Main = ({ setHome }) => {
  return (
    <div className="main_info">
      <div>
        <section>
          <h2>
            Nu <span>Kenzie</span>
          </h2>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button
            onClick={(event) => {
              setHome(false);
              const body = document.getElementById("body");
              body.style.backgroundColor = "white";
            }}
          >
            Iniciar
          </button>
        </section>
      </div>
    </div>
  );
};
