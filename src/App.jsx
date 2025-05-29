import './index.css';
import './App.css';
import Dropdown from './Dropdown.jsx';


function App() {
  const produtos = [
    {
      title: 'Totens',
      options: ['150x160 cm', '155x170 cm', '160x180 cm', '170x190 cm'],
    },
    {
      title: 'Totem Cubo',
      options: ['40x160 cm', '45x180 cm'],
    },
    {
      title: 'Cubo',
      options: ['10x10 cm', '20x20 cm', '30x30 cm', '40x40 cm'],
    },
    {
      title: 'Backdrop',
      options: ['150x160 cm', '165x170 cm', '180x190 cm', '240x190 cm'],
    },
  ];

  return (
    <div className="App">
      <header className="header">Logo</header>
      <input className="busca" placeholder="O que você procura?" />
      <div className="banner"></div>
      <div className="produtos">
        {produtos.map((p, i) => (
          <Dropdown key={i} title={p.title} options={p.options} />
        ))}
      </div>
    </div>
  );
}

export default App;
