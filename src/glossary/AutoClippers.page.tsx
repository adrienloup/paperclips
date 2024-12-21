import { Link } from 'react-router-dom';

function AutoClippersPage() {
  return (
    <>
      <div className="header"></div>
      <div className="main">
        <div className="navigation">
          <Link to="/paperclips/">Game</Link>
          <Link to="/paperclips/glossary/autoclippers/">AutoClipers</Link>
        </div>
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
      </div>
      <div className="footer">v1.2.3</div>
    </>
  );
}

export default AutoClippersPage;
