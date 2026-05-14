import React from 'react';

const ResultCard = ({ result }) => {
  if (!result) return null;

  const { specialty, planName, bestOption, allOptions } = result;

  return (
    <div className="result-container animate-fade-in">
      <div className="result-header">
        <span className="badge">Recomendación Encontrada</span>
        <h2 className="text-gradient">Especialidad Sugerida: {specialty}</h2>
        <p className="plan-badge">Plan Activo: {planName}</p>
      </div>

      <div className="best-option glass-card">
        <div className="best-option-label">OPCIÓN MÁS ECONÓMICA</div>
        <div className="best-option-content">
          <div className="hospital-info">
            <h3>{bestOption.hospitalName}</h3>
            <p className="location">📍 {bestOption.location}</p>
          </div>
          <div className="financial-info">
            <div className="price-tag">
              <span className="label">Total Estimado</span>
              <span className="value">${bestOption.estimatedTotal}</span>
            </div>
            <div className="copay-tag">
              <span className="label">Copago</span>
              <span className="value">{bestOption.coPay}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="other-options">
        <h3>Otras opciones en red</h3>
        <div className="options-list">
          {allOptions.filter(opt => opt.hospitalName !== bestOption.hospitalName).map((opt, i) => (
            <div key={i} className="mini-card glass-card">
              <div className="mini-hospital">
                <h4>{opt.hospitalName}</h4>
                <p>{opt.location}</p>
              </div>
              <div className="mini-price">
                <span>${opt.estimatedTotal}</span>
                <small>({opt.coPay}%)</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .result-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .result-header {
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .badge {
          background: var(--primary-glow);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: inline-block;
        }
        .plan-badge {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-top: 0.25rem;
        }
        .best-option {
          padding: 2rem;
          border-radius: 1.5rem;
          background: linear-gradient(135deg, rgba(52, 211, 153, 0.1) 0%, rgba(30, 41, 59, 0.4) 100%);
          border: 1px solid rgba(52, 211, 153, 0.2);
          position: relative;
          overflow: hidden;
        }
        .best-option::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--primary-color);
        }
        .best-option-label {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--primary-color);
          margin-bottom: 1.25rem;
          letter-spacing: 0.15em;
          opacity: 0.9;
        }
        .best-option-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
        }
        .hospital-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .location {
          color: var(--text-secondary);
        }
        .financial-info {
          display: flex;
          gap: 2rem;
        }
        .price-tag, .copay-tag {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
        }
        .value {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fff;
        }
        .copay-tag .value {
          color: var(--primary-color);
        }
        .other-options h3 {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .options-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
        .mini-card {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .mini-hospital h4 {
          font-size: 0.95rem;
        }
        .mini-hospital p {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .mini-price {
          text-align: right;
          display: flex;
          flex-direction: column;
        }
        .mini-price span {
          font-weight: 600;
        }
        .mini-price small {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .best-option-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .financial-info {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default ResultCard;
