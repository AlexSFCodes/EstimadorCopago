import React from 'react';

const PlanSelector = ({ plans, selectedPlan, onSelect }) => {
  return (
    <div className="plan-selector">
      <h2 className="section-title">Selecciona tu Plan</h2>
      <div className="plans-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card glass-card ${selectedPlan === plan.id ? 'active' : ''}`}
            onClick={() => onSelect(plan.id)}
          >
            <div className="plan-icon">
              {plan.id.includes('oro') ? '🏆' : '🥈'}
            </div>
            <div className="plan-info">
              <h3>{plan.name}</h3>
              <p>{plan.id === 'plan_oro' ? 'Cobertura Premium' : 'Cobertura Standard'}</p>
            </div>
            {selectedPlan === plan.id && <div className="selected-badge">✓</div>}
          </div>
        ))}
      </div>

      <style jsx>{`
        .plan-selector {
          margin-bottom: 2rem;
        }
        .section-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        .plan-card {
          padding: 1.5rem;
          cursor: pointer;
          transition: all var(--transition-speed);
          position: relative;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .plan-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }
        .plan-card.active {
          border-color: var(--primary-color);
          background: rgba(52, 211, 153, 0.05);
          box-shadow: 0 0 20px var(--primary-glow);
        }
        .plan-icon {
          font-size: 2rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem;
          border-radius: 1rem;
        }
        .plan-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }
        .plan-info p {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .selected-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: var(--primary-color);
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default PlanSelector;
