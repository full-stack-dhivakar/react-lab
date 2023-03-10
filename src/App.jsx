import { createRoot } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Frontendmasters!</h1>
      <SearchParams />;
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
