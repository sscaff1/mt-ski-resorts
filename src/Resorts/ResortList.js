import { resorts } from "./resorts";
import "./resortList.css";

const ResortList = ({ handleClick, resortCompare }) => {
  return (
    <div>
      <div className="resorts">
        {resorts.map((resort) => (
          <div className="resort" key={resort.name}>
            <img src={resort.img} alt="resort" className="image" />
            <div className="desc">
              <h2>{resort.name}</h2>
              <h6>{resort.description}</h6>
            </div>
            <div className="buttons">
              <a href={resort.web} target="_blank" rel="noreferrer">
                <button className="f6 grow no-underline br-pill ba bw1 ph3 mb2 dib">
                  Visit Website!
                </button>
              </a>
              <button
                onClick={() => handleClick(resort)}
                className="f6 grow no-underline br-pill ba bw1 ph3 mb2 dib"
              >
                Compare Resort
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResortList;
