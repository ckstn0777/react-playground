import App from "./App";
import PlaygroundFive from "./pages/playground/five";
import PlaygroundFour from "./pages/playground/four";
import PlaygroundOne from "./pages/playground/one";
import PlaygroundThree from "./pages/playground/three";
import PlaygroundTwo from "./pages/playground/two";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/playground/1",
    element: <PlaygroundOne />,
  },
  {
    path: "/playground/2",
    element: <PlaygroundTwo />,
  },
  {
    path: "/playground/3",
    element: <PlaygroundThree />,
  },
  {
    path: "/playground/4",
    element: <PlaygroundFour />,
  },
  {
    path: "/playground/5",
    element: <PlaygroundFive />,
  },
];
