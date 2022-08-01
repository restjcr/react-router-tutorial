import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <hr />
      <nav>
        <Link to="/invoices">Invoices</Link> |<Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
