import './App.css'

function BackgroundGraphics() {
  return (
    <>
      <div className="graphic-ring" aria-hidden="true" />
      <div className="graphic-ring graphic-ring--alt" aria-hidden="true" />
      <div className="graphic-dots" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className="graphic-line" aria-hidden="true" />
    </>
  )
}

function App() {
  return (
    <div className="page">
      <BackgroundGraphics />
      <main>
        <h1>Test Widget Website</h1>
        <div className="content-box">
          <p>Test widget always here</p>
          <div className="neon-bar" />
        </div>
      </main>
    </div>
  )
}

export default App
