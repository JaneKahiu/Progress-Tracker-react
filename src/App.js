// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import './index.css';
import DSAList from './components/DSAList';

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <h1 className="text-emerald-500 font-bold text-3xl">
        Seasons in seasons
      </h1>
      <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-xl">
        {/* You may want to add some text here */}
      </h3>
      <DSAList /> 
    </div>
  );
}
