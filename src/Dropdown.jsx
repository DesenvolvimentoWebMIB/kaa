function Dropdown({ options }) {
  return (
    <select className="dropdown">
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  );
}

export default Dropdown;
