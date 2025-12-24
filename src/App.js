import { useState } from "react";

function App() {
  const arr = [1, 2, 3, 4, 5, 6];
  const [num, setnum] = useState(1);
  const [selectednumber, setselectednumber] = useState();
  const [score, setscore] = useState(0);

  const rolldice = () => {
    if (!selectednumber) return;

    const newnum = Math.floor(Math.random() * 6) + 1;
    setnum(newnum);

    if (selectednumber === newnum) {
      setscore((prev) => prev + 2);
    } else {
      setscore((prev) => prev - 1);
    }

    setselectednumber(undefined);
  };

  return (
    <div className="container py-5 text-center">
      <div className="row mb-5 align-items-center">
        <div className="col-md-4 order-md-2">
          <h1 className="display-4 fw-bold text-primary">🎲 Dice Roll</h1>
        </div>

        <div className="col-md-4 order-md-1">
          <div className="card shadow-sm bg-light">
            <div className="card-body">
              <h5 className="card-title text-muted mb-0">Current Score</h5>
              <p className="card-text display-4 fw-bold text-success">
                {score}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-12">
          <h4 className="mb-3">Select Your Guess:</h4>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {arr.map((number) => (
              <button
                key={number}
                className={`btn btn-lg shadow-sm number-choice 
                  ${
                    selectednumber === number
                      ? "btn-warning border-3"
                      : "btn-outline-secondary"
                  }`}
                onClick={() => setselectednumber(number)}
                style={{ width: "60px", height: "60px", fontWeight: "bold" }}
              >
                {number}
              </button>
            ))}
          </div>
          {!selectednumber && (
            <p className="mt-3 text-danger fw-bold">
              Please select a number to play.
            </p>
          )}
        </div>
      </div>

      <hr />

      <div className="row justify-content-center mt-3">
        <div className="col-12">
          <h3 className="mb-4">Click the Dice to Roll!</h3>
          <div
            onClick={rolldice}
            style={{ cursor: "pointer" }}
            className="d-inline-block p-3 rounded-3 shadow-lg roll-area"
          >
            <img
              src={require(`./assets/Side${num}.png`)}
              alt={`Dice showing ${num}`}
              style={{ width: "180px", height: "180px" }}
            />
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-6 text-start bg-light p-4 rounded shadow-sm">
          <h5 className="fw-bold">How to play dice game</h5>
          <ul className="list-unstyled">
            <li>1. Select any number from the list.</li>
            <li>2. Click on the dice image to roll it.</li>
            <li>
              3. If the selected number is equal to the dice number, you get{" "}
              <span className="text-success fw-bold">2 points</span>.
            </li>
            <li>
              4. If your guess is wrong,{" "}
              <span className="text-danger fw-bold">1 point</span> will be
              deducted.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
