
import { useState } from "react";
import "./App.css";

const previewTasks = [
  {
    id: 1,
    title: "Fix authentication flow",
    detail: "Review login validation and token handling",
    category: "BUG FIX",
    priority: "High",
    time: "2 min ago",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Build dashboard API",
    detail: "Connect task data to the React interface",
    category: "DEVELOPMENT",
    priority: "Medium",
    time: "12 min ago",
    icon: "⌘",
  },
  {
    id: 3,
    title: "Update README documentation",
    detail: "Add setup instructions for the team",
    category: "DOCUMENTATION",
    priority: "Low",
    time: "28 min ago",
    icon: "✎",
  },
];

function App() {
  const [previewListening, setPreviewListening] = useState(false);

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <div className="brand-mark">A<span>+</span></div>
          <div>
            <h1>alexa<span>+</span> track</h1>
            <p>YOUR DEV COMPANION</p>
          </div>
        </div>

        <div className="workspace-label">WORKSPACE</div>

        <nav className="side-nav">
          <div className="nav-item active">
            <span>◈</span> Command Center
          </div>
          <div className="nav-item">
            <span>▤</span> Task Activity
          </div>
          <div className="nav-item">
            <span>⌘</span> Integrations
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="mini-avatar">A+</div>
          <div className="profile-copy">
            <strong>Developer space</strong>
            <span>Hackathon workspace</span>
          </div>
          <span className="profile-dots">•••</span>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <div>
            <p className="breadcrumb">WORKSPACE <span>/</span> OVERVIEW</p>
            <h2>Command Center <span className="wave">✳</span></h2>
          </div>

          <div className="topbar-right">
            <div className="connection-pill">
              <span className="connection-dot"></span>
              Backend not connected
            </div>
            <div className="top-avatar">S</div>
          </div>
        </header>

        <section className="welcome-banner">
          <div className="welcome-copy">
            <div className="live-label">
              <span className="tiny-spark">✦</span>
              YOUR AI-POWERED WORKSPACE
            </div>
            <h3>Big ideas.<br /><span>Less busywork.</span></h3>
            <p>
              You bring the ideas. Alexa+ helps turn them into
              your next steps. Let's make something great.
            </p>
            <div className="welcome-footnote">
              <span className="footnote-dot"></span>
              Your command center is ready for you
            </div>
          </div>

          <div className={`orb-scene ${previewListening ? "is-listening" : ""}`}>
            <div className="orb-label top-orb-label">VOICE CORE <span>01</span></div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>
            <div className="orb-glow"></div>
            <div className="voice-orb">
              <div className="orb-inner">
                <span className="orb-symbol">✳</span>
                <div className="sound-bars">
                  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
              </div>
            </div>
            <div className="orb-caption">
              <span className="orb-caption-dot"></span>
              {previewListening ? "LISTENING PREVIEW" : "VOICE INTERFACE"}
            </div>
            <button
              className="preview-button"
              onClick={() => setPreviewListening(!previewListening)}
            >
              {previewListening ? "Stop preview" : "Preview voice state"} <span>↗</span>
            </button>
            <p className="preview-note">Visual preview only · microphone not connected</p>
          </div>

          <div className="banner-decoration decoration-one"></div>
          <div className="banner-decoration decoration-two"></div>
        </section>

        <div className="section-heading">
          <div>
            <p className="eyebrow">AT A GLANCE</p>
            <h3>Your workspace, in numbers</h3>
          </div>
          <span className="preview-tag">SAMPLE PREVIEW DATA</span>
        </div>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-top">
              <span>Total tasks</span>
              <span className="stat-icon violet">▤</span>
            </div>
            <div className="stat-number">03 <span>preview</span></div>
            <div className="stat-bottom">
              <span className="stat-line violet-line"></span>
              <span>Across your workspace</span>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span>High priority</span>
              <span className="stat-icon coral">↗</span>
            </div>
            <div className="stat-number">01 <span>preview</span></div>
            <div className="stat-bottom">
              <span className="priority-dot"></span>
              <span>Needs attention first</span>
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span>Bug reports</span>
              <span className="stat-icon amber">⌁</span>
            </div>
            <div className="stat-number">01 <span>preview</span></div>
            <div className="stat-bottom">
              <span className="stat-line amber-line"></span>
              <span>Issues to look into</span>
            </div>
          </article>

          <article className="stat-card status-card">
            <div className="stat-top">
              <span>System status</span>
              <span className="stat-icon muted">⌁</span>
            </div>
            <div className="status-main">
              <span className="status-indicator"></span>
              Awaiting connection
            </div>
            <div className="stat-bottom">
              <span>Backend API · Port 3000</span>
            </div>
          </article>
        </section>

        <section className="lower-grid">
          <article className="surface task-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">YOUR NEXT MOVES</p>
                <h3>Task activity <span className="count-badge">03</span></h3>
                <p className="panel-subtitle">
                  A little more clarity, one task at a time.
                </p>
              </div>
              <span className="preview-tag">PREVIEW</span>
            </div>

            <div className="task-list">
              {previewTasks.map((task) => (
                <div className="task-row" key={task.id}>
                  <div className={`task-icon task-icon-${task.id}`}>
                    {task.icon}
                  </div>
                  <div className="task-main">
                    <div className="task-title-line">
                      <h4>{task.title}</h4>
                      <span className={`priority priority-${task.priority.toLowerCase()}`}>
                        {task.priority}
                      </span>
                    </div>
                    <p>{task.detail}</p>
                    <div className="task-meta">
                      <span>{task.category}</span>
                      <span className="meta-separator">·</span>
                      <span>{task.time}</span>
                    </div>
                  </div>
                  <span className="task-arrow">↗</span>
                </div>
              ))}
            </div>

            <div className="task-footer">
              <span>Showing illustrative tasks</span>
              <span className="footer-spark">✦</span>
            </div>
          </article>

          <aside className="surface activity-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">BEHIND THE SCENES</p>
                <h3>System pulse</h3>
                <p className="panel-subtitle">The pieces working together.</p>
              </div>
              <div className="pulse-icon">⌁</div>
            </div>

            <div className="service-list">
              <div className="service-row">
                <div className="service-icon purple-service">✳</div>
                <div className="service-copy">
                  <strong>Voice assistant</strong>
                  <span>Waiting for input</span>
                </div>
                <span className="service-state waiting-state">Standby</span>
              </div>

              <div className="service-row">
                <div className="service-icon blue-service">✧</div>
                <div className="service-copy">
                  <strong>AI processing</strong>
                  <span>Ready for integration</span>
                </div>
                <span className="service-state waiting-state">Standby</span>
              </div>

              <div className="service-row">
                <div className="service-icon green-service">⌘</div>
                <div className="service-copy">
                  <strong>Task API</strong>
                  <span>localhost:3000</span>
                </div>
                <span className="service-state offline-state">Offline</span>
              </div>
            </div>

            <div className="human-note">
              <div className="note-icon">✦</div>
              <div>
                <strong>One step at a time.</strong>
                <p>Once the backend is connected, your real activity will appear here.</p>
              </div>
            </div>
          </aside>
        </section>

        <footer className="page-footer">
          <span>✳ Made for people who build things.</span>
          <span>ALEXA+ TRACK <span className="footer-divider">/</span> HACKATHON EDITION</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
