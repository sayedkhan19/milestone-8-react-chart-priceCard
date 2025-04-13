import React, { Suspense } from 'react';
import DaisyNav from './components/DaisyNav';
import NavBar from './components/Navbar/NavBar';
import Pricing from './components/pricing option/Pricing';
import ResultChart from './components/resultChart/ResultChart';
import axios from 'axios';
import MarkChart from './components/markChats/MarkChart';


const PricingPromise = fetch('PricingData.json')
.then(res => res.json());

const marksPromise = axios.get('MarksData.json')
// .then(data => {
//   console.log(data)
// })

const App = () => {
  return (
    <>
    <header>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
    </header>


    <main>
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <Pricing PricingPromise={PricingPromise}> </Pricing>
      </Suspense>

      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <MarkChart marksPromise={marksPromise}></MarkChart>
      </Suspense>
      <ResultChart></ResultChart>
    </main>


    <footer></footer>
    </>
  );
};

export default App;