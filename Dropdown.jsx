import { useState } from 'react';

export default function Dropdown({ title, options }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setOpen(!open)} className="dropdown-btn">
        {title} {open ? '▲' : '▼'}
      </button>
      {open && (
        <ul className="dropdown-list">
          {options.map((opt, idx) => (
            <li key={idx}>{opt}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
