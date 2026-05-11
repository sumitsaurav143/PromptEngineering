import React from 'react';
import './Video9.css';

const Video9 = () => {
  return (
    <div className="video9-container">
      <div className="video9-hero">
        <div className="video9-hero-content">
          <h1 className="video9-title">Prompt Chaining</h1>
          <p className="video9-subtitle">
            Learn how to connect multiple prompts into a workflow so AI can research, summarize, and generate content step by step.
          </p>
        </div>
      </div>

      <div className="video9-content">
        <div className="video9-section">
          <div className="video9-section-header">
            <div className="video9-icon">🔗</div>
            <h2>Multi-step workflows</h2>
          </div>
          <div className="video9-section-content">
            <p>
              Prompt chaining breaks a complex task into multiple prompt stages. Each step feeds its output into the next prompt, creating a reliable workflow.
            </p>
            <div className="video9-code-block">
              {`Step 1: Research topic
Step 2: Summarize findings
Step 3: Generate LinkedIn post`}
            </div>
          </div>
        </div>

        <div className="video9-section">
          <div className="video9-section-header">
            <div className="video9-icon">🧠</div>
            <h2>Sequential prompting</h2>
          </div>
          <div className="video9-section-content">
            <p>
              Sequential prompting ensures each prompt has context from the previous result. This helps the model produce coherent outputs that follow a logical progression.
            </p>
            <div className="video9-grid">
              <div className="video9-grid-item">
                <h4>Stage 1</h4>
                <p>Gather source information and key ideas.</p>
              </div>
              <div className="video9-grid-item">
                <h4>Stage 2</h4>
                <p>Condense the information into a summary.</p>
              </div>
              <div className="video9-grid-item">
                <h4>Stage 3</h4>
                <p>Use the summary to generate the final content.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="video9-section">
          <div className="video9-section-header">
            <div className="video9-icon">🚀</div>
            <h2>AI pipelines</h2>
          </div>
          <div className="video9-section-content">
            <p>
              AI pipelines chain prompt stages together like a data pipeline. This makes it easier to automate content generation, analysis, and transformation tasks.
            </p>
            <div className="video9-benefits-grid">
              <div className="video9-benefit-card">
                <h4>Modular</h4>
                <p>Reuse individual prompt stages across workflows.</p>
              </div>
              <div className="video9-benefit-card">
                <h4>Traceable</h4>
                <p>See how each step contributes to the final result.</p>
              </div>
              <div className="video9-benefit-card">
                <h4>Scalable</h4>
                <p>Build bigger systems by combining small prompt steps.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="video9-section">
          <div className="video9-section-header">
            <div className="video9-icon">💡</div>
            <h2>Example workflow</h2>
          </div>
          <div className="video9-section-content">
            <div className="video9-example-card">
              <h3>Research → Summarize → Generate LinkedIn Post</h3>
              <p>
                Use a chained prompt sequence to gather insights, condense them, and create a polished social media update.
              </p>
              <div className="video9-code-block-example">
                {`1) Research: "Find 3 key trends in AI for startups."
2) Summarize: "Summarize the trends in 3 short bullet points."
3) Generate LinkedIn Post: "Write a LinkedIn post based on the summary with an engaging opening."`}
              </div>
            </div>
          </div>
        </div>

        <div className="video9-section">
          <div className="video9-section-header">
            <div className="video9-icon">✅</div>
            <h2>Best practices</h2>
          </div>
          <div className="video9-section-content">
            <ul className="video9-best-practices">
              <li>Define each stage clearly and keep outputs structured.</li>
              <li>Pass only the relevant data to the next prompt.</li>
              <li>Use summaries or extracted facts to preserve context.</li>
              <li>Test each prompt step individually before chaining.</li>
              <li>Handle edge cases where a stage may return incomplete data.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video9;
