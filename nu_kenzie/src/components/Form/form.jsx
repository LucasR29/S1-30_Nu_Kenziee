import { useState } from "react";
import "./form.css";
import { Notification } from "../Toasty/toasty.js";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [transactionValue, setTransactionValue] = useState("");
  const [transactionDescription, setTransactionDescription] = useState("");
  const [transactionType, setTransactionType] = useState("entrada");

  function addValue() {
    if (transactionValue.length > 0 && transactionDescription.length > 0) {
      if (transactionType == "entrada") {
        setListTransactions([
          ...listTransactions,
          {
            description: transactionDescription,
            type: transactionType,
            value: parseFloat(transactionValue),
          },
        ]);
      } else {
        setListTransactions([
          ...listTransactions,
          {
            description: transactionDescription,
            type: transactionType,
            value: -parseFloat(transactionValue),
          },
        ]);
      }

      setTransactionValue("");
      setTransactionDescription("");
    } else {
      Notification.toasty("Favor informar valor e descrição", "red");
    }
  }

  function changeType(e) {
    setTransactionType(e.target.value);
  }

  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <div>
        <p>Descrição</p>
        <input
          type="text"
          name="descrição"
          value={transactionDescription}
          placeholder="Digite aqui sua descrição"
          autoComplete="off"
          onChange={(event) => {
            setTransactionDescription(event.target.value);
          }}
        />
        <span>Ex: Compra de roupas</span>
      </div>

      <section className="form_values">
        <div>
          <p>Valor</p>
          <input
            className="form_values_input"
            type="number"
            step="0.01"
            name="valor_transção"
            value={transactionValue}
            placeholder="1"
            onChange={(event) => {
              setTransactionValue(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Tipo de valor</p>
          <select name="" value={transactionType} onChange={changeType}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </section>

      <button type="submit" onClick={(x) => addValue()}>
        Inserir valor
      </button>
    </form>
  );
};
