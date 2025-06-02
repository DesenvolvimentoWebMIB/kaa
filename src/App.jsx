import "./index.css";
import Dropdown from "./Dropdown.jsx";

function Cubo({ width = 200, height = 120 }) {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="#e3e7ed" stroke="#a6b0be" strokeWidth="3" rx="16" />
    </svg>
  );
}

const produtos = [
  {
    nome: "Totem",
    opcoes: ["50 x 160 cm", "55 x 170 cm", "60 x 180 cm", "70 x 190 cm"],
  },
  {
    nome: "Totem Cubo",
    opcoes: ["40 x 160 cm", "45 x 180 cm"],
  },
  {
    nome: "Cubo",
    opcoes: ["10 x 10 cm", "20 x 20 cm", "30 x 30 cm", "40 x 40 cm"],
  },
  {
    nome: "Backdrop",
    opcoes: ["150 x 160 cm", "165 x 170 cm", "180 x 190 cm", "240 x 190 cm"],
  },
];


function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img src="/logo.jpg" alt="Logo" className="logo" />
        <nav className="nav">
          <a href="#">Produtos</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      {/* Busca */}
      <div className="busca">
        <input type="text" placeholder="O que você procura?" />
      </div>

      {/* Banner */}
      <div className="banner">

        <Cubo width={850} height={240} />
      </div>

      {/* Produtos */}
      <div className="grid">
{produtos.map((item, i) => (
  <div key={i} className="produto">
    <Cubo width={160} height={120} />
    <div className="produto-nome">{item.nome}</div>
    <Dropdown options={item.opcoes} />
    <div className="produto-desc">Escolha o tamanho desejado.</div>
  </div>
))}

      </div>

      {/* Footer */}
      <footer className="footer">
        Clone educacional Printi | Feito por Estevan | Contato: contato@seudominio.com
      </footer>
    </div>
  );
}

export default App;
