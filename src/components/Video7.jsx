import React from 'react';
import './Video7.css';

const Video7 = () => {
  return (
    <div className="video7-container">
      <div className="video7-hero">
        <div className="video7-hero-content">
          <h1 className="video7-title">Persona Prompting</h1>
          <p className="video7-subtitle">
            Discover how to design AI personalities, control tone, and build compelling AI characters for more engaging interactions.
          </p>
        </div>
      </div>

      <div className="video7-content">
        <div className="video7-section">
          <div className="video7-section-header">
            <div className="video7-icon">🧠</div>
            <h2>Personality design</h2>
          </div>
          <div className="video7-section-content">
            <p>
              Personality design defines the character traits the AI will use in its responses. This includes style, attitude, and how the AI approaches questions.
            </p>
            <div className="video7-example">
              <h4>Example:</h4>
              <div className="video7-code-block">
                "Your name is Max, you are witty, concise, and always give practical advice."
              </div>
            </div>
          </div>
        </div>

        <div className="video7-section">
          <div className="video7-section-header">
            <div className="video7-icon">🎤</div>
            <h2>Tone control</h2>
          </div>
          <div className="video7-section-content">
            <p>
              Tone control ensures the AI’s voice matches the desired mood and audience. You can ask for formal, casual, sarcastic, or supportive language.
            </p>
            <div className="video7-grid">
              <div className="video7-grid-item">
                <h4>Formal</h4>
                <p>Professional, polite, and structured wording.</p>
              </div>
              <div className="video7-grid-item">
                <h4>Casual</h4>
                <p>Friendly, simple, and relaxed style.</p>
              </div>
              <div className="video7-grid-item">
                <h4>Humorous</h4>
                <p>Playful, witty, and engaging responses.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="video7-section">
          <div className="video7-section-header">
            <div className="video7-icon">👤</div>
            <h2>AI character building</h2>
          </div>
          <div className="video7-section-content">
            <p>
              AI character building combines personality and tone into a memorable persona. This helps your model respond consistently with a recognizable character.
            </p>
            <div className="video7-benefits-grid">
              <div className="video7-benefit-card">
                <h4>Identity</h4>
                <p>Give the AI a clear character profile to follow.</p>
              </div>
              <div className="video7-benefit-card">
                <h4>Consistency</h4>
                <p>Keep messages aligned even across different prompts.</p>
              </div>
              <div className="video7-benefit-card">
                <h4>Engagement</h4>
                <p>Create more compelling and natural interactions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="video7-section">
          <div className="video7-section-header">
            <div className="video7-icon">💡</div>
            <h2>Examples</h2>
          </div>
          <div className="video7-section-content">
            <div className="video7-example-card">
              <h3>Sarcastic AI</h3>
              <p>Use a sarcastic persona for witty, playful responses that still convey useful information.</p>
              <div className="video7-code-block-example">
                {`Act as a sarcastic assistant and answer the question with humor mixed with insight.`}
              </div>
            </div>

            <div className="video7-example-card">
              <h3>Teacher AI</h3>
              <p>Design an AI that explains concepts clearly, step by step, like a patient instructor.</p>
              <div className="video7-code-block-example">
                {`Act as a teacher and explain this concept in simple terms with examples.`}
              </div>
            </div>

            <div className="video7-example-card">
              <h3>Startup mentor AI</h3>
              <p>Build a persona that offers strategic advice, prioritizes product-market fit, and stays action-oriented.</p>
              <div className="video7-code-block-example">
                {`Act as a startup mentor and give feedback on this product idea with market advice.`}
              </div>
            </div>

            <div className="video7-example-card">
              <h3>Recruiter AI</h3>
              <p>Ask the model to take the role of a recruiter assessing skills, culture fit, and communication.</p>
              <div className="video7-code-block-example">
                {`Act as a recruiter and suggest questions to evaluate a frontend engineer candidate.`}
              </div>
            </div>
          </div>
        </div>

        <div className="video7-section">
          <div className="video7-section-header">
            <div className="video7-icon">✨</div>
            <h2>Best practices</h2>
          </div>
          <div className="video7-section-content">
            <ul className="video7-best-practices">
              <li>Define the persona’s style, attitude, and knowledge level.</li>
              <li>Set expectations for tone and response length.</li>
              <li>Use concrete role descriptions, not vague labels.</li>
              <li>Combine persona prompts with task instructions.</li>
              <li>Test the persona and refine the character details.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video7;
