import React from 'react';
import './Video5.css';

const Video5 = () => {
  return (
    <div className="video5-container">
      {/* Hero Section */}
      <div className="video5-hero">
        <div className="video5-hero-content">
          <h1 className="video5-title">Chain of Thought Prompting</h1>
          <p className="video5-subtitle">
            Learn how to guide AI through reasoning step by step, solve complex problems, and debug your prompts effectively.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="video5-content">
        {/* Step-by-step Reasoning */}
        <div className="video5-section">
          <div className="video5-section-header">
            <div className="video5-icon">🧩</div>
            <h2>Step-by-step reasoning</h2>
          </div>
          <div className="video5-section-content">
            <p>
              Chain of Thought prompting encourages the model to explain its reasoning explicitly, one step at a time. This helps the AI break down a task into smaller, clearer decisions before arriving at an answer.
            </p>
            <div className="video5-example">
              <h4>Why it works:</h4>
              <div className="video5-code-block">
                It turns hidden reasoning into visible steps, making outputs easier to verify and reason about.
              </div>
            </div>
          </div>
        </div>

        {/* Breaking Complex Problems */}
        <div className="video5-section">
          <div className="video5-section-header">
            <div className="video5-icon">🛠️</div>
            <h2>Breaking complex problems</h2>
          </div>
          <div className="video5-section-content">
            <p>
              Complex tasks are easier to solve when the model handles them piece by piece. Chain of thought prompting guides the AI through a structured sequence of intermediate steps.
            </p>
            <div className="video5-benefits-grid">
              <div className="video5-benefit-card">
                <h4>Decompose tasks</h4>
                <p>Split the problem into smaller reasoning steps.</p>
              </div>
              <div className="video5-benefit-card">
                <h4>Track logic</h4>
                <p>Make it easier to inspect and correct reasoning errors.</p>
              </div>
              <div className="video5-benefit-card">
                <h4>Improve accuracy</h4>
                <p>Reduce mistakes by validating each intermediate step.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Debugging Prompts */}
        <div className="video5-section">
          <div className="video5-section-header">
            <div className="video5-icon">🐞</div>
            <h2>Debugging prompts</h2>
          </div>
          <div className="video5-section-content">
            <p>
              When outputs are wrong, chain of thought prompts reveal where the process went off track. You can debug by checking each step rather than only the final answer.
            </p>
            <div className="video5-step-list">
              <div className="video5-step-item">
                <h4>1. Ask for reasoning</h4>
                <p>Request the model to explain its thought process as it solves the task.</p>
              </div>
              <div className="video5-step-item">
                <h4>2. Verify steps</h4>
                <p>Look for incorrect assumptions or missing details in the intermediate reasoning.</p>
              </div>
              <div className="video5-step-item">
                <h4>3. Refine prompt</h4>
                <p>Adjust instructions based on the step where the logic broke down.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="video5-section">
          <div className="video5-section-header">
            <div className="video5-icon">💡</div>
            <h2>Examples</h2>
          </div>
          <div className="video5-section-content">
            <div className="video5-example-card">
              <h3>DSA solving</h3>
              <p>Guide the model through algorithm steps, data structures, and edge cases.</p>
              <div className="video5-code-block-example">
                {`Q: Find the middle node of a linked list.
A:
1. Check if the list is empty.
2. Use slow and fast pointers.
3. Move slow by one and fast by two.
4. When fast reaches the end, slow is at the middle.
Answer: Return the slow pointer.`}
              </div>
            </div>

            <div className="video5-example-card">
              <h3>Math reasoning</h3>
              <p>Walk through calculations and formulas step by step to ensure the model solves the problem correctly.</p>
              <div className="video5-code-block-example">
                {`Q: What is 18% of 250?
A:
1. Convert percentage to decimal: 0.18.
2. Multiply by 250: 0.18 * 250.
3. Calculate result: 45.
Answer: 45.`}
              </div>
            </div>

            <div className="video5-example-card">
              <h3>Interview questions</h3>
              <p>Use reasoning prompts to explain the decision process behind answers to behavioral or technical questions.</p>
              <div className="video5-code-block-example">
                {`Q: How would you handle conflicting requirements in a project?
A:
1. Gather all stakeholder requirements.
2. Identify conflicts and the underlying goals.
3. Prioritize based on impact and feasibility.
4. Propose a solution that balances needs.
5. Communicate tradeoffs clearly.
Answer: Select the best compromise and explain why.`}
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="video5-section">
          <div className="video5-section-header">
            <div className="video5-icon">✨</div>
            <h2>Best Practices</h2>
          </div>
          <div className="video5-section-content">
            <ul className="video5-best-practices">
              <li>Ask the AI to think through each step before answering.</li>
              <li>Keep the reasoning sequence clear and numbered.</li>
              <li>Include intermediate checks for assumptions and edge cases.</li>
              <li>Use examples that demonstrate the full reasoning flow.</li>
              <li>If the answer is wrong, inspect the step where the logic failed.</li>
              <li>Refine the prompt with additional constraints or clarifications.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video5;
