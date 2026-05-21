import './Intro.css';

const SetupGuide = ({ onClose }) => {
  return (
    <div className="setup-guide-page">
      <div className="setup-guide-panel">
        <button className="back-btn" onClick={onClose}>
          ← Back to Playlist
        </button>

        <div className="setup-guide-header">
          <div className="channel-badge">
            🚀 OpenAI Setup
          </div>
          <h1 className="setup-guide-title">Local VS Code OpenAI Setup</h1>
          <p className="setup-guide-description">
            Follow this themed step-by-step guide to create a Python virtual environment, install the OpenAI SDK, and run your first test prompt.
          </p>
        </div>

        <div className="setup-guide-grid">
          <div className="setup-step-card">
            <div className="setup-step-badge">1</div>
            <h3>Create project folder</h3>
            <pre><code>mkdir openai-test
cd openai-test</code></pre>
          </div>
          <div className="setup-step-card">
            <div className="setup-step-badge">2</div>
            <h3>Open folder in VS Code</h3>
            <pre><code>code .</code></pre>
          </div>
          <div className="setup-step-card">
            <div className="setup-step-badge">3</div>
            <h3>Create a Python virtual environment</h3>
            <pre><code>python3 -m venv venv</code></pre>
          </div>
          <div className="setup-step-card">
            <div className="setup-step-badge">4</div>
            <h3>Activate the virtual environment</h3>
            <p>Use the command for your OS:</p>
            <pre><code>source venv/bin/activate</code></pre>
            <pre><code>venv\Scripts\activate</code></pre>
          </div>
          <div className="setup-step-card">
            <div className="setup-step-badge">5</div>
            <h3>Install OpenAI dependencies</h3>
            <pre><code>pip install openai python-dotenv</code></pre>
          </div>
          <div className="setup-step-card">
            <div className="setup-step-badge">6</div>
            <h3>Create an environment file</h3>
            <pre><code>touch .env</code></pre>
            <p>Add your API key:</p>
            <pre><code>OPENAI_API_KEY=your_openai_secret_key_here</code></pre>
          </div>
          <div className="setup-step-card">
            <div className="setup-step-badge">7</div>
            <h3>Create the app file</h3>
            <pre><code>touch app.py</code></pre>
            <p>Paste this example code:</p>
            <pre><code>import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
  api_key=os.getenv("OPENAI_API_KEY")
)

response = client.responses.create(
  model="gpt-4o-mini",
  input="Hi"
)

print(response.output_text)</code></pre>
          </div>
          <div className="setup-step-card">
            <div className="setup-step-badge">8</div>
            <h3>Run the app</h3>
            <pre><code>python app.py</code></pre>
            <p>Expected response:</p>
            <pre><code>Hi! How can I help you today?</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupGuide;
