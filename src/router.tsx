import App from "./App";
import PlaygroundOne from "./pages/playground/one";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/playground/1",
    element: <PlaygroundOne />,
  },
];
