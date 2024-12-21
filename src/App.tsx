import './App.scss';

function App() {
  return (
    <>
      <div className="header">
        <nav className="glossary">
          <a className="term">
            AutoClippers
            <span className="icon">east</span>
          </a>
          <div className="term">
            Amélioration AutoClippers
            <span className="icon">east</span>
          </div>
          <div className="term">
            Optimisation AutoClippers<span className="icon">east</span>
          </div>
          <div className="term">
            Hadwiger Clip Diagrammes<span className="icon">east</span>
          </div>
        </nav>
      </div>
      <div className="main">
        <div className="navigation">tutu tata</div>
        <h1>
          <span>Paperclips</span> 1 088 354 036 036 288 900 000 354 036 036 288
          900 000
        </h1>
        <div className="card">
          <h2>Manufacturing</h2>
          <div>
            Available Funds: <span>$ 20</span>
          </div>
          <div>
            Unsold Inventory: <span>20</span>
          </div>
          <button>Make Paperclips</button>
        </div>
        <div className="card">
          <h2>Wire Production</h2>
          <div>
            Available Funds: <span>$ 20</span>
          </div>
          <div>
            Unsold Inventory: <span>20</span>
          </div>
          <button>Make Paperclips</button>
        </div>
        {/* <div style={{ height: '2000px' }}></div> */}
      </div>
      <div className="footer">v1.2.3</div>
    </>
  );
}

export default App;
