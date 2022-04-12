import { useState } from "react";
import "./Tip.css"

export default function Tip(props) {
  const [subtotal, setSubtotal] = useState();
  const [numDiners, setNumDiners] = useState();
  const [tipPercentage, setTipPercetnage] = useState( );
  const [result, setResult] = useState({});

  const submit = (e) => {
    e.preventDefault();
    if (+subtotal <= 0 || +numDiners <= 0 || +tipPercentage <= 0) {
      return;
    }
    const total = +subtotal * (1 +  +tipPercentage);
    setResult({ total, totalPerDiner: total / +numDiners });
  };

  return (
    <div className="App">
      <div className="card">
      <form className="formdata" onSubmit={submit}>
        <fieldset style={{border:"none"}}>
          <label style={{fontSize:"35px"}}>🤑SubTotal🤑</label>
          <input type="number" style={{width:"400px",}}
            value={subtotal}
            onChange={(e) => setSubtotal(e.target.value)}
          />
        </fieldset>

        <fieldset style={{border:"none"}}>
          <label style={{fontSize:"28px"}}>🔥Number of people sharing the bill🔥</label>
          <input type="number" style={{width:"400px"}}
            value={numDiners}
            onChange={(e) => setNumDiners(e.target.value)}
          />
        </fieldset>

        <fieldset style={{border:"none"}}>
          <label style={{fontSize:"30px"}}>Tip percentage</label><br></br>
          <select style={{width:"400px"}}
            value={tipPercentage}
            onChange={(e) => setTipPercetnage(e.target.value)}
          >
            <option value="0">0%</option>
            <option value="0.05">5%</option>
            <option value="0.1">10%</option>
            <option value="0.15">15%</option>
            <option value="0.2">20%</option>
          </select>
        </fieldset>

        <button type="submit" id="cal" style={{fontSize:"35px",outLine:"none",border:"none",marginTop:"10px"}}>Calculate</button>
      </form>
      <div className="newcard">
      <p>Total: {result.total && result.total.toFixed(2)}</p>
      <p>
        Total per diner:{" "}
        {result.totalPerDiner && result.totalPerDiner.toFixed(2)}
      </p>
      </div>
      </div>
    </div>
  );
}