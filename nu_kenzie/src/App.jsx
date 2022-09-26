import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form/form.jsx";
import { Header } from "./components/Header/header.jsx";
import { List } from "./components/List/list.jsx";
import { TotalMoney } from "./components/TotalMoney/money.jsx";
import { Main } from "./components/MainPage/main.jsx";

function App() {
  const [home, setHome] = useState(true);
  const [filter, setFilter] = useState([]);
  const [usingFilter, setUsingFilter] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saida", value: -150 },
  ]);

  function filterTransactions(filterElement) {
    if (filterElement == "todos") {
      setUsingFilter(false);
    } else {
      const filtered = listTransactions.filter((x) => {
        if (x.type == filterElement) {
          return x;
        }
      });

      setFilter(filtered);
      setUsingFilter(true);
    }
  }

  function removeElement(id) {
    const filter = listTransactions.filter((x) => {
      if (listTransactions.indexOf(x) != id) {
        return x;
      }
    });
    setListTransactions(filter);
  }

  return (
    <>
      {home === true ? (
        <Main setHome={setHome} />
      ) : (
        <div className="App">
          <Header setHome={setHome}></Header>
          <div className="form_box">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            ></Form>
            <TotalMoney listTransactions={listTransactions} />
          </div>

          {listTransactions.length > 0 ? (
            usingFilter === true ? (
              <List
                listTransactions={filter}
                setListTransactions={setListTransactions}
                removeElement={removeElement}
                filter={filterTransactions}
              ></List>
            ) : (
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                removeElement={removeElement}
                filter={filterTransactions}
              ></List>
            )
          ) : (
            <div className="noTransactions">
              <p>Você ainda não possui nenhum lançamento</p>
              <div></div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
