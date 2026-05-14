import React from 'react';

const HistorySidebar = ({ history, isOpen, onClose }) => {
  return (
    <div className={`history-sidebar glass-card ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>Historial de Consultas</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      
      <div className="history-list">
        {history.length === 0 ? (
          <div className="empty-state">No hay consultas recientes</div>
        ) : (
          history.map((item) => (
            <div key={item.id} className="history-item glass-card">
              <div className="history-meta">
                <span className="specialty">{item.specialty}</span>
                <span className="date">{new Date(item.timestamp).toLocaleDateString()}</span>
              </div>
              <p className="symptom">"{item.symptom}"</p>
              <div className="history-footer">
                <span>Plan: {item.plan_id.replace('plan_', '')}</span>
                <span className="cost">${item.estimated_total}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <style jsx>{`
        .history-sidebar {
          position: fixed;
          top: 0;
          right: -350px;
          width: 350px;
          height: 100vh;
          z-index: 1000;
          border-radius: 0;
          border-left: 1px solid var(--border-color);
          padding: 2.5rem 1.75rem;
          transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          background: rgba(11, 15, 26, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
        .history-sidebar.open {
          right: 0;
        }
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sidebar-header h2 {
          font-size: 1.2rem;
          font-weight: 600;
        }
        .close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.5rem;
          cursor: pointer;
        }
        .history-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-right: 0.5rem;
        }
        .history-list::-webkit-scrollbar {
          width: 4px;
        }
        .history-list::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 10px;
        }
        .history-item {
          padding: 1rem;
          border-radius: 1rem;
          font-size: 0.9rem;
        }
        .history-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .specialty {
          color: var(--primary-color);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.7rem;
          letter-spacing: 0.05em;
        }
        .date {
          color: var(--text-secondary);
          font-size: 0.75rem;
        }
        .symptom {
          font-style: italic;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .history-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .cost {
          font-weight: 700;
          color: var(--text-primary);
        }
        .empty-state {
          text-align: center;
          color: var(--text-secondary);
          margin-top: 4rem;
          font-style: italic;
        }
        @media (max-width: 400px) {
          .history-sidebar {
            width: 100%;
            right: -100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HistorySidebar;
