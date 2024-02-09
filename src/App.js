import { Suspense, lazy } from "react";
const Home = lazy(()=>import('./Components/Home'))
const About = lazy(()=>import('./Components/About'))
 
 


function App() {
  return (
   <>
     <Suspense fallback={<h3>Please wait Home is Loading....</h3>}>
    <Home/>
    </Suspense>
    <Suspense fallback={<h3>Please wait About is Loading....</h3>}>
    <About/>
    </Suspense>
 

   </>
  );
}
 

export default App;
