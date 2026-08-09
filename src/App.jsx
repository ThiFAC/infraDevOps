import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>CodeFactory Solutions</h1>
        <p>Transformação DevOps do nosso time</p>
      </header>

      <main className="app-main">
        <section>
          <h2>Objetivo do Projeto</h2>
          <p>
            Este projeto demonstra a adoção da Cultura DevOps na empresa,
            aplicando versionamento, containerização e integração contínua.
          </p>
        </section>

        <section>
          <h2>Tecnologias Utilizadas</h2>
          <ul>
            <li>React + Vite</li>
            <li>Git e GitHub</li>
            <li>Docker</li>
            <li>GitHub Actions (CI)</li>
          </ul>
        </section>

        <button>Saiba mais</button>
      </main>

      <footer className="app-footer">
        <p>Projeto de DevOps e Integração Contínua — Uninter 2026</p>
      </footer>
    </div>
  )
}

export default App