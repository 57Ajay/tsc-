// Suggested code may be subject to a license. Learn more: ~LicenseLog:375142307.
import useMousePointer from "./hooks/useMousePointer";
import useNetwork from "./hooks/useNetwork";
import useWindow from "./hooks/useWindow";
import { useDebounce } from "./hooks/useDebounce";

const App = () => {
  const mousePointer = useMousePointer();
  const windowSize = useWindow();
  const isOnline = useNetwork();
  const debouncedMousePointer = useDebounce(mousePointer, 500);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Mouse Pointer</h1>
      <p className="text-lg mb-2">
        X: {mousePointer.x}, Y: {mousePointer.y}
      </p>
      <h1 className="text-3xl font-bold mb-4">Window Size</h1>
      <p className="text-lg mb-2">
        Width: {windowSize.width}, Height: {windowSize.height}
      </p>
      <h1 className="text-3xl font-bold mb-4">Network Status</h1>
      <p className="text-lg mb-2">{isOnline ? "online" : "offline"}</p>
      <h1 className="text-3xl font-bold mb-4">Debounced Mouse Pointer</h1>
      <p className="text-lg mb-2">
        debounced-X: {debouncedMousePointer.x}, debounced-Y:{" "}
        {debouncedMousePointer.y}
      </p>
    </div>
  );  
};

export default App;
