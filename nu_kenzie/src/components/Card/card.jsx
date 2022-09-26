export const Card = ({
  transactionName,
  transactionType,
  transactionValue,
  removeElement,
  index,
}) => {
  return (
    <>
      {transactionType == "entrada" ? (
        <li className="received">
          <div>
            <p>{transactionName}</p>
            <span>Entrada</span>
          </div>
          <section>
            <p>{transactionValue} +</p>
            <button
              onClick={(event) => {
                removeElement(event.target.id);
              }}
              value="oi"
              id={index}
            ></button>
          </section>
        </li>
      ) : (
        <li className="paid">
          <div>
            <p>{transactionName}</p>
            <span>Despesa</span>
          </div>

          <section>
            <p>{transactionValue} -</p>
            <button
              onClick={(event) => {
                removeElement(event.target.id);
              }}
              value="oi"
              id={index}
            ></button>
          </section>
        </li>
      )}
    </>
  );
};
