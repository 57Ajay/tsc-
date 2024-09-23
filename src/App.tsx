import useMousePointer from "./hooks/useMousePointer";
import useNetwork from "./hooks/useNetwork";
import useWindow from "./hooks/useWindow";
const App = () => {
  const mousePointer = useMousePointer();
  const windowSize = useWindow();
  const isOnline = useNetwork();
  return (
    <div>
      <h1>X: {mousePointer.x}, Y: {mousePointer.y}</h1>
      <h1>Width: {windowSize.width}, Height: {windowSize.height}</h1>
      <p>{isOnline ? "online" : "offline"}</p>
    </div>
  );  
};

export default App;
