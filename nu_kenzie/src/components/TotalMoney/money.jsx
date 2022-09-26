import { currency } from "../List/list.jsx";
import "./money.css";

export const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="money">
      <div>
        <h3>Valor total:</h3>
        <span>
          {currency(
            listTransactions.reduce((valorAnterior, valorAtual) => {
              return valorAnterior + valorAtual.value;
            }, 0)
          )}
        </span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};