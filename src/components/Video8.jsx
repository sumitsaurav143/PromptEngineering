import React from 'react';
import './Video8.css';

const Video8 = () => {
  return (
    <div className="video8-container">
      <div className="video8-hero">
        <div className="video8-hero-content">
          <h1 className="video8-title">Structured Output Prompting</h1>
          <p className="video8-subtitle">
            Learn how to ask AI for clean JSON, Markdown, tables, and API-ready responses that are easy to parse.
          </p>
        </div>
      </div>

      <div className="video8-content">
        <div className="video8-section">
          <div className="video8-section-header">
            <div className="video8-icon">📦</div>
            <h2>JSON outputs</h2>
          </div>
          <div className="video8-section-content">
            <p>
              Structured prompts help AI return valid JSON that can be parsed automatically by applications. This is essential for backend integrations and data pipelines.
            </p>
            <div className="video8-code-block">
              {`Prompt: "Extract the user name and email from this text and return a JSON object."
Output: {"name":"Jane Doe","email":"jane@example.com"}`}
            </div>
          </div>
        </div>

        <div className="video8-section">
          <div className="video8-section-header">
            <div className="video8-icon">📝</div>
            <h2>Markdown</h2>
          </div>
          <div className="video8-section-content">
            <p>
              Asking for Markdown makes AI responses easy to display in documentation, readme files, and static sites. It keeps the structure clean and readable.
            </p>
            <div className="video8-code-block">
              {`Prompt: "Write a product summary in Markdown with a title, bullet points, and a CTA."`}
            </div>
          </div>
        </div>

        <div className="video8-section">
          <div className="video8-section-header">
            <div className="video8-icon">📊</div>
            <h2>Table formatting</h2>
          </div>
          <div className="video8-section-content">
            <p>
              Table formatting is useful when you need organized rows and columns for reports, comparisons, or feature summaries. Structured prompts can ensure consistent table syntax.
            </p>
            <div className="video8-code-block">
              {`Prompt: "Generate a markdown table comparing three API providers with price, latency, and support."`}
            </div>
          </div>
        </div>

        <div className="video8-section">
          <div className="video8-section-header">
            <div className="video8-icon">🌐</div>
            <h2>API-ready responses</h2>
          </div>
          <div className="video8-section-content">
            <p>
              API-ready outputs are formatted so clients can consume them directly. Use clear output schemas and examples so the AI returns data in the exact shape your app expects.
            </p>
            <div className="video8-code-block">
              {`Prompt: "Return the result as a JSON object with keys 'status', 'data', and 'message'."`}
            </div>
          </div>
        </div>

        <div className="video8-section">
          <div className="video8-section-header">
            <div className="video8-icon">💡</div>
            <h2>Examples</h2>
          </div>
          <div className="video8-section-content">
            <div className="video8-example-card">
              <h3>Backend integrations</h3>
              <p>Use structured prompts to make AI outputs compatible with backend routes and services.</p>
              <div className="video8-code-block-example">
                {`Prompt: "Convert this order description into a JSON object for our order API."`}
              </div>
            </div>
            <div className="video8-example-card">
              <h3>Automation systems</h3>
              <p>Ask for machine-readable responses that can trigger workflows and automation tools.</p>
              <div className="video8-code-block-example">
                {`Prompt: "Extract the task, due date, and priority, then return a JSON object."`}
              </div>
            </div>
          </div>
        </div>

        <div className="video8-section">
          <div className="video8-section-header">
            <div className="video8-icon">✅</div>
            <h2>Best practices</h2>
          </div>
          <div className="video8-section-content">
            <ul className="video8-best-practices">
              <li>Define the output format explicitly in the prompt.</li>
              <li>Provide one or two examples of the desired structure.</li>
              <li>Use JSON or Markdown syntax examples if you need strict formatting.</li>
              <li>Keep the schema simple and consistent across requests.</li>
              <li>Validate AI output and handle parsing errors gracefully.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video8;
