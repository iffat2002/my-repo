import "./App.css";
import { lazy, Suspense } from "react";
import React, { useEffect, useState, useRef } from "react";
import Loader from "./components/Loader";


const Home = lazy(() =>
  new Promise((resolve) =>
    setTimeout(() => resolve(import("./components/Home")), 3600)
  )
);
function App() {
  
  return (
<Suspense fallback={<Loader />}>
 <Home />
</Suspense>
  );
}

export default App;
