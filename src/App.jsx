import { useState, useEffect } from 'react';
import './App.css'
import Myloader from './components/MyLoader'
import QRCodeGenerator from './components/QRCodeGenerator'
import ErrorBoundary from './ErrorBoundary'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <ErrorBoundary>
      {loading ? <><Myloader /></> : (
        <QRCodeGenerator />)}
    </ErrorBoundary>
  )
}

export default App
