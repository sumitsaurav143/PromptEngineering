import React from 'react';
import './Video4.css';

const Video4 = () => {
  return (
    <div className="video4-container">
      {/* Hero Section */}
      <div className="video4-hero">
        <div className="video4-hero-content">
          <h1 className="video4-title">Few Shot Prompting</h1>
          <p className="video4-subtitle">
            Learn how to guide AI with a small set of examples to improve accuracy, consistency, and pattern learning.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="video4-content">
        {/* Definition */}
        <div className="video4-section">
          <div className="video4-section-header">
            <div className="video4-icon">🧠</div>
            <h2>Definition</h2>
          </div>
          <div className="video4-section-content">
            <p>
              Few shot prompting is a technique where you provide the AI with a small number of examples before asking it to perform a task. This helps the model understand the desired pattern, formatting, and tone without requiring a large training set.
            </p>
            <div className="video4-example">
              <h4>Core idea:</h4>
              <div className="video4-code-block">
                Provide 2–5 examples, then ask the model to continue with the same logic.
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Examples */}
        <div className="video4-section">
          <div className="video4-section-header">
            <div className="video4-icon">📚</div>
            <h2>Multiple Examples</h2>
          </div>
          <div className="video4-section-content">
            <p>
              By showing the model a few examples, you teach it how to behave for similar inputs. This is especially effective when the task has a consistent structure or pattern.
            </p>
            <div className="video4-grid">
              <div className="video4-grid-item">
                <h4>Example Variety</h4>
                <p>Use examples that cover different cases but follow the same rule.</p>
              </div>
              <div className="video4-grid-item">
                <h4>Example Ratio</h4>
                <p>Three to five examples is usually enough to show the pattern without overwhelming the prompt.</p>
              </div>
              <div className="video4-grid-item">
                <h4>Example Clarity</h4>
                <p>Keep each example short, clear, and focused on the desired output style.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching AI Patterns */}
        <div className="video4-section">
          <div className="video4-section-header">
            <div className="video4-icon">🔧</div>
            <h2>Teaching AI Patterns</h2>
          </div>
          <div className="video4-section-content">
            <p>
              Few shot prompting teaches the AI the exact pattern you want it to replicate. The model uses the examples to infer structure, language style, and output rules.
            </p>
            <div className="video4-pattern-list">
              <div className="video4-pattern-item">
                <h4>Step 1</h4>
                <p>Provide a concise example input and output pair.</p>
              </div>
              <div className="video4-pattern-item">
                <h4>Step 2</h4>
                <p>Repeat with a second example showing a different variation.</p>
              </div>
              <div className="video4-pattern-item">
                <h4>Step 3</h4>
                <p>Ask the model to apply the same pattern to a new input.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Consistent Outputs */}
        <div className="video4-section">
          <div className="video4-section-header">
            <div className="video4-icon">✅</div>
            <h2>Consistent Outputs</h2>
          </div>
          <div className="video4-section-content">
            <p>
              Few shot prompts produce more reliable results when you need consistent formatting and behavior. The AI is less likely to deviate because it has concrete examples to follow.
            </p>
            <div className="video4-benefits-grid">
              <div className="video4-benefit-card">
                <h4>Pattern Stability</h4>
                <p>Output stays aligned with the example structure.</p>
              </div>
              <div className="video4-benefit-card">
                <h4>Reduced Ambiguity</h4>
                <p>The model is guided by concrete examples instead of vague instructions.</p>
              </div>
              <div className="video4-benefit-card">
                <h4>Better Formatting</h4>
                <p>Maintains output style across multiple requests.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Examples */}
        <div className="video4-section">
          <div className="video4-section-header">
            <div className="video4-icon">💡</div>
            <h2>Real Examples</h2>
          </div>
          <div className="video4-section-content">
            <div className="video4-example-card">
              <h3>Sentiment Analysis</h3>
              <p>Show the model a few labeled sentences so it can classify sentiment consistently.</p>
              <div className="video4-code-block-example">
                {`Input: "The product is amazing and easy to use."
Sentiment: Positive

Input: "The service was slow and disappointing."
Sentiment: Negative

Input: "The app is fine, but could be faster."
Sentiment:`}
              </div>
            </div>

            <div className="video4-example-card">
              <h3>Structured JSON</h3>
              <p>Teach the AI to return clean JSON by giving examples of the input and expected parsed structure.</p>
              <div className="video4-code-block-example">
                {`Input: "Book a meeting with Sarah on Monday at 10am."
Output: {"task":"Schedule meeting","person":"Sarah","day":"Monday","time":"10:00 AM"}

Input: "Send the invoice to James by Friday."
Output: {"task":"Send invoice","person":"James","deadline":"Friday"}

Input: "Create a reminder to submit the report tomorrow."
Output:`}
              </div>
            </div>

            <div className="video4-example-card">
              <h3>Coding Standards</h3>
              <p>Provide example code snippets that follow a specific style, naming, and comment pattern.</p>
              <div className="video4-code-block-example">
                {`Example 1:
function addNumbers(a, b) {
  // Add two numbers and return the result
  return a + b;
}

Example 2:
function isValidEmail(email) {
  // Check email format using regex
  return /@.+\./.test(email);
}

Example 3:
function formatDate(dateString) {
  // Convert ISO string to localized date format
  const date = new Date(dateString);
  return date.toLocaleDateString();
}`}
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="video4-section">
          <div className="video4-section-header">
            <div className="video4-icon">🧩</div>
            <h2>Best Practices</h2>
          </div>
          <div className="video4-section-content">
            <ul className="video4-best-practices">
              <li>Choose examples that cover the common input variations.</li>
              <li>Keep the examples short and consistent in format.</li>
              <li>Use the same output structure across all examples.</li>
              <li>Include edge cases if they matter for your task.</li>
              <li>Review the prompt and refine examples for clarity.</li>
              <li>Keep instructions precise and aligned with the examples.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video4;
