import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Context } from "./context";

const Root = () => {
  // const [count, setCount] = useState<number>(0);

  return (
    <Context.Provider value="">
      <App />
    </Context.Provider>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Root />);
