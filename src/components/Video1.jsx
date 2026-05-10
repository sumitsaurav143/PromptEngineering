import React from 'react';
import './Video1.css';

const Video1 = () => {
  return (
    <div className="video1-container">
      {/* Hero Section */}
      <div className="video1-hero">
        <div className="video1-hero-content">
          <h1 className="video1-title">What is Prompt Engineering?</h1>
          <p className="video1-subtitle">
            Master the art of communicating with AI models to get the best results
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="video1-content">
        {/* What is a Prompt */}
        <div className="video1-section">
          <div className="video1-section-header">
            <div className="video1-icon">💬</div>
            <h2>What is a Prompt?</h2>
          </div>
          <div className="video1-section-content">
            <p>
              A prompt is the input you give to an AI model to guide its response. It's like asking a question or giving instructions to a very knowledgeable assistant.
            </p>
            <div className="video1-example">
              <h4>Example:</h4>
              <div className="video1-code-block">
                "Write a short story about a robot learning to paint."
              </div>
            </div>
          </div>
        </div>

        {/* Why Prompts Matter */}
        <div className="video1-section">
          <div className="video1-section-header">
            <div className="video1-icon">🎯</div>
            <h2>Why Prompts Matter</h2>
          </div>
          <div className="video1-section-content">
            <p>
              The quality and clarity of your prompt directly affects the quality of the AI's response. A well-crafted prompt can make the difference between a generic answer and a highly relevant, useful output.
            </p>
            <div className="video1-benefits">
              <div className="video1-benefit">
                <h4>Precision</h4>
                <p>Get exactly what you need</p>
              </div>
              <div className="video1-benefit">
                <h4>Creativity</h4>
                <p>Unlock AI's full potential</p>
              </div>
              <div className="video1-benefit">
                <h4>Efficiency</h4>
                <p>Save time and iterations</p>
              </div>
            </div>
          </div>
        </div>

        {/* How AI Responds */}
        <div className="video1-section">
          <div className="video1-section-header">
            <div className="video1-icon">🤖</div>
            <h2>How AI Responds</h2>
          </div>
          <div className="video1-section-content">
            <p>
              AI models like GPT analyze your prompt, understand context, and generate responses based on patterns learned from vast amounts of training data. The better your prompt, the more accurate and relevant the response.
            </p>
            <div className="video1-process">
              <div className="video1-step">
                <span className="video1-step-number">1</span>
                <p>Input Processing</p>
              </div>
              <div className="video1-step">
                <span className="video1-step-number">2</span>
                <p>Context Understanding</p>
              </div>
              <div className="video1-step">
                <span className="video1-step-number">3</span>
                <p>Response Generation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real-world Examples */}
        <div className="video1-section">
          <div className="video1-section-header">
            <div className="video1-icon">🌍</div>
            <h2>Real-world Examples</h2>
          </div>
          <div className="video1-section-content">
            <div className="video1-examples-grid">
              <div className="video1-example-card">
                <h4>Content Creation</h4>
                <p>"Write a blog post about sustainable living for millennials"</p>
              </div>
              <div className="video1-example-card">
                <h4>Code Generation</h4>
                <p>"Create a Python function to calculate fibonacci numbers"</p>
              </div>
              <div className="video1-example-card">
                <h4>Business Analysis</h4>
                <p>"Analyze the market trends for electric vehicles in 2024"</p>
              </div>
              <div className="video1-example-card">
                <h4>Learning</h4>
                <p>"Explain quantum physics to a 10-year-old"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Good vs Bad Prompts */}
        <div className="video1-section">
          <div className="video1-section-header">
            <div className="video1-icon">⚖️</div>
            <h2>Good vs Bad Prompts</h2>
          </div>
          <div className="video1-section-content">
            <div className="video1-prompt-comparison">
              <div className="video1-prompt-column">
                <h4>❌ Bad Prompt</h4>
                <div className="video1-prompt-box bad">
                  "Write something"
                </div>
                <p className="video1-prompt-explanation">
                  Too vague, gives AI too much freedom, likely generic response
                </p>
              </div>
              <div className="video1-prompt-column">
                <h4>✅ Good Prompt</h4>
                <div className="video1-prompt-box good">
                  "Write a 500-word article about the benefits of meditation for software developers, including scientific studies and practical tips"
                </div>
                <p className="video1-prompt-explanation">
                  Specific, detailed, guides AI toward desired output
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="video1-cta">
        <h2>Ready to Learn More?</h2>
        <p>Continue with the next video in the series</p>
        <button className="video1-cta-btn">Next Video →</button>
      </div>
    </div>
  );
};

export default Video1;