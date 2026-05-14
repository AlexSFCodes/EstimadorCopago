import React, { useState, useEffect } from 'react';
import PlanSelector from './components/PlanSelector';
import ChatInterface from './components/ChatInterface';
import ResultCard from './components/ResultCard';
import HistorySidebar from './components/HistorySidebar';
import './App.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function App() {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState('plan_plata');
  const [history, setHistory] = useState([]);
  const [currentResult, setCurrentResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [error, setError] = useState(null);

  // Initial data fetch
  useEffect(() => {
    fetchPlans();
    fetchHistory();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/plans`);
      const json = await res.json();
      if (json.success) setPlans(json.data);
    } catch (err) {
      console.error('Error fetching plans:', err);
      setError('No se pudo conectar con el servidor.');
    }
  };

  const fetchHistory = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/history`);
      const json = await res.json();
      if (json.success) setHistory(json.data);
    } catch (err) {
      console.error('Error fetching history:', err);
    }
  };

  const handleConsultation = async (symptom) => {
    setIsLoading(true);
    setError(null);
    setCurrentResult(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symptom, planId: selectedPlan }),
      });

      const json = await res.json();
      if (json.success) {
        setCurrentResult(json.data);
        fetchHistory(); // Refresh history
      } else {
        setError(json.error || 'Ocurrió un error en la consulta.');
      }
    } catch (err) {
      setError('Error de conexión con el agente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <div className="logo-section">
          <div className="logo-icon">🤖</div>
          <h1 className="text-gradient">Copago AI</h1>
        </div>
        <button className="glass-button" onClick={() => setIsSidebarOpen(true)}>
          📜 Historial
        </button>
      </header>

      <main className="content">
        <section className="hero-section">
          <h2>Analiza tus síntomas y ahorra</h2>
          <p>Dinos cómo te sientes y encontraremos la mejor opción para tu bolsillo.</p>
        </section>

        <PlanSelector 
          plans={plans} 
          selectedPlan={selectedPlan} 
          onSelect={setSelectedPlan} 
        />

        <ChatInterface 
          onSend={handleConsultation} 
          isLoading={isLoading} 
        />

        {error && <div className="error-message glass-card">{error}</div>}

        <ResultCard result={currentResult} />
      </main>

      <HistorySidebar 
        history={history} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <footer className="main-footer">
        <p>© 2026 Copago AI Assistant • Salud Inteligente</p>
      </footer>
    </div>
  );
}

export default App;
