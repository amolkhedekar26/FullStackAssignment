import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import useApi from "./hooks/useApi";
import apiClient from "./api/client";
import { useEffect, useState } from "react";

function App() {
  
  return <div className="App">
    <Dashboard />
  </div>;
}

export default App;
