import "./index.css";

function Cubo({ width = 200, height = 120 }) {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="#e3e7ed" stroke="#a6b0be" strokeWidth="3" rx="16" />
    </svg>
  );
}

const produtos = [
  "Cartão de Visita",
  "Banner",
  "Flyer",
  "Adesivo",
  "Panfleto",
  "Envelope",
  "Bloco de Notas",
  "Calendário"
];

function App() {
  return (
    <div className="app">
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
        {produtos.map((nome, i) => (
          <div key={i} className="produto">
            <Cubo width={160} height={120} />
            <div className="produto-nome">{nome}</div>
            <div className="produto-desc">Descrição breve do produto.</div>
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
