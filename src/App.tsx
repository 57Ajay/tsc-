import useMousePointer from "./hooks/useMousePointer";
import useNetwork from "./hooks/useNetwork";
import useWindow from "./hooks/useWindow";
import { useDebounce } from "./hooks/useDebounce";
import { Fragment } from "react/jsx-runtime";
import { main } from "./tsc";
import { useMemo } from "react";
const App = () => {
  const mousePointer = useMousePointer();
  const windowSize = useWindow();
  const isOnline = useNetwork();
  const debouncedMousePointer = useDebounce(mousePointer, 500);
  const val = useMemo(()=>main(),[]);
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-600 p-4">
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
    <div className="flex flex-col items-center min-h-screen bg-slate-900
    p-4">
       <p>---------------------Typescript---------------------</p>
        <p>----------------------------------------------------</p>
      <div className="text-2xl font-semibold">
        {val.map((x: any)=> <p key={x} className="text-center text-slate-100">
          {x}
          <p>-------------------------------------------------------</p>
          </p>)}
      </div>
    </div>
  </Fragment>
  );  
};

export default App;
