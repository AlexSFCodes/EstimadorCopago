import React, { useState } from 'react';

const ChatInterface = ({ onSend, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <div className="chat-interface glass-card">
      <form onSubmit={handleSubmit} className="chat-form">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe tus síntomas (ej: Me duele el estómago y tengo fiebre)..."
          disabled={isLoading}
          rows="3"
        />
        <div className="chat-actions">
          <p className="hint">El agente te sugerirá la especialidad y el mejor hospital.</p>
          <button type="submit" className="primary-button" disabled={isLoading || !input.trim()}>
            {isLoading ? (
              <span className="loader">Analizando...</span>
            ) : (
              'Consultar Beneficio'
            )}
          </button>
        </div>
      </form>

      <style jsx>{`
        .chat-interface {
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        .chat-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        textarea {
          background: rgba(15, 23, 42, 0.3);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 1.25rem;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          resize: none;
          outline: none;
          transition: all var(--transition-speed);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
        }
        textarea:focus {
          border-color: rgba(56, 189, 248, 0.5); /* Accent color on focus */
          background: rgba(15, 23, 42, 0.5);
        }
        .chat-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        .hint {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        .loader {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .loader::before {
          content: '';
          width: 16px;
          height: 16px;
          border: 2px solid #fff;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 600px) {
          .chat-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .hint {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;
