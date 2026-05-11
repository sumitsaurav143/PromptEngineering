import React from 'react';
import './Video6.css';

const Video6 = () => {
  return (
    <div className="video6-container">
      <div className="video6-hero">
        <div className="video6-hero-content">
          <h1 className="video6-title">Role-Based Prompting</h1>
          <p className="video6-subtitle">
            Learn how to set AI behavior with roles, expert personas, and tuned instructions for better responses.
          </p>
        </div>
      </div>

      <div className="video6-content">
        <div className="video6-section">
          <div className="video6-section-header">
            <div className="video6-icon">🎭</div>
            <h2>"Act as"</h2>
          </div>
          <div className="video6-section-content">
            <p>
              The "Act as" prompt tells the AI which role it should assume. This can influence tone, knowledge depth, and behavior for the task.
            </p>
            <div className="video6-example">
              <h4>Core pattern:</h4>
              <div className="video6-code-block">
                "Act as a senior Java developer and review this code for best practices."
              </div>
            </div>
          </div>
        </div>

        <div className="video6-section">
          <div className="video6-section-header">
            <div className="video6-icon">🧑‍💼</div>
            <h2>Expert personas</h2>
          </div>
          <div className="video6-section-content">
            <p>
              Expert personas provide specific context about the role the AI should play. This helps the model respond like an experienced professional rather than a generic assistant.
            </p>
            <div className="video6-grid">
              <div className="video6-grid-item">
                <h4>Context</h4>
                <p>Describe the persona in detail, including experience level and domain.</p>
              </div>
              <div className="video6-grid-item">
                <h4>Tone</h4>
                <p>Define how direct, formal, or friendly the response should be.</p>
              </div>
              <div className="video6-grid-item">
                <h4>Focus</h4>
                <p>Tell the AI what to prioritize: advice, critique, planning, or coaching.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="video6-section">
          <div className="video6-section-header">
            <div className="video6-icon">⚙️</div>
            <h2>Behavior tuning</h2>
          </div>
          <div className="video6-section-content">
            <p>
              Behavior tuning refines the AI's output using explicit instructions. This is useful when you want the model to be more helpful, concise, or aligned with a workflow.
            </p>
            <div className="video6-benefits-grid">
              <div className="video6-benefit-card">
                <h4>Clarity</h4>
                <p>Make the AI follow a predictable response pattern.</p>
              </div>
              <div className="video6-benefit-card">
                <h4>Consistency</h4>
                <p>Reduce variation by specifying the behavior expectations.</p>
              </div>
              <div className="video6-benefit-card">
                <h4>Precision</h4>
                <p>Keep outputs on-topic and aligned with the chosen persona.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="video6-section">
          <div className="video6-section-header">
            <div className="video6-icon">💡</div>
            <h2>Examples</h2>
          </div>
          <div className="video6-section-content">
            <div className="video6-example-card">
              <h3>Senior Java developer</h3>
              <p>Ask the model to critique or improve code with the mindset of a seasoned engineer.</p>
              <div className="video6-code-block-example">
                {`Act as a senior Java developer and suggest improvements for this service layer implementation.`}
              </div>
            </div>

            <div className="video6-example-card">
              <h3>Interviewer</h3>
              <p>Use this persona to simulate interview questions and evaluate candidate responses.</p>
              <div className="video6-code-block-example">
                {`Act as an interviewer and ask follow-up questions to assess problem-solving skills.`}
              </div>
            </div>

            <div className="video6-example-card">
              <h3>Product manager</h3>
              <p>Make the AI think in terms of user needs, roadmap decisions, and product success metrics.</p>
              <div className="video6-code-block-example">
                {`Act as a product manager and write a brief product requirement summary for a new onboarding flow.`}
              </div>
            </div>

            <div className="video6-example-card">
              <h3>Fitness coach</h3>
              <p>Use persona prompts to generate workout plans and motivation tailored to a fitness goal.</p>
              <div className="video6-code-block-example">
                {`Act as a fitness coach and create a 4-week beginner workout plan for strength and mobility.`}
              </div>
            </div>
          </div>
        </div>

        <div className="video6-section">
          <div className="video6-section-header">
            <div className="video6-icon">⭐</div>
            <h2>Best practices</h2>
          </div>
          <div className="video6-section-content">
            <ul className="video6-best-practices">
              <li>Start with a clear role description.</li>
              <li>Include persona strengths and focus areas.</li>
              <li>Define how the AI should speak and what to prioritize.</li>
              <li>Combine role prompts with task-specific instructions.</li>
              <li>Test and refine the persona until it behaves consistently.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video6;
