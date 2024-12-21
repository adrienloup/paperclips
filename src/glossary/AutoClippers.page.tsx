import { Link } from 'react-router-dom';

function AutoClippersPage() {
  return (
    <>
      <>
        <div className="header"></div>
        <div className="main">
          <div className="navigation">
            <Link to="/paperclips/">Game</Link>
            <Link to="/paperclips/glossary/autoclippers/">AutoClipers</Link>
          </div>
          <h1>Autoclippers</h1>
        </div>
        <div className="footer">v1.2.3</div>
      </>
    </>
  );
}

export default AutoClippersPage;
