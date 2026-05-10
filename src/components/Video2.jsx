import React from 'react';
import './Video2.css';

const Video2 = () => {
  return (
    <div className="video2-container">
      {/* Hero Section */}
      <div className="video2-hero">
        <div className="video2-hero-content">
          <h1 className="video2-title">Zero Shot Prompting</h1>
          <p className="video2-subtitle">
            Master the technique of prompting AI without any prior examples or context
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="video2-content">
        {/* Definition */}
        <div className="video2-section">
          <div className="video2-section-header">
            <div className="video2-icon">📖</div>
            <h2>Definition</h2>
          </div>
          <div className="video2-section-content">
            <p>
              Zero-shot prompting is a technique where you ask an AI model to perform a task without providing any examples or demonstrations. The model relies solely on its training data and the instructions you provide to understand and complete the task.
            </p>
            <div className="video2-example">
              <h4>Key Concept:</h4>
              <div className="video2-code-block">
                No examples needed → Model infers from instructions alone
              </div>
            </div>
            <p className="video2-note">
              Unlike few-shot prompting where you provide examples, zero-shot relies on the model's ability to generalize and understand new tasks directly from the prompt.
            </p>
          </div>
        </div>

        {/* When to Use */}
        <div className="video2-section">
          <div className="video2-section-header">
            <div className="video2-icon">🎯</div>
            <h2>When to Use</h2>
          </div>
          <div className="video2-section-content">
            <p>Zero-shot prompting is ideal in these scenarios:</p>
            <div className="video2-use-cases">
              <div className="video2-use-case">
                <h4>✓ Quick Tasks</h4>
                <p>When you need immediate results without setup time</p>
              </div>
              <div className="video2-use-case">
                <h4>✓ Common Tasks</h4>
                <p>Tasks the model has seen frequently in training data (summarization, translation)</p>
              </div>
              <div className="video2-use-case">
                <h4>✓ Open-ended Queries</h4>
                <p>Questions that don't require specific formatting or patterns</p>
              </div>
              <div className="video2-use-case">
                <h4>✓ First Attempt</h4>
                <p>Starting point before refining with more specific techniques</p>
              </div>
              <div className="video2-use-case">
                <h4>✓ Diverse Variations</h4>
                <p>When you need many different outputs without pattern consistency</p>
              </div>
              <div className="video2-use-case">
                <h4>✓ Exploratory Work</h4>
                <p>Testing ideas or brainstorming solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="video2-section">
          <div className="video2-section-header">
            <div className="video2-icon">⭐</div>
            <h2>Advantages</h2>
          </div>
          <div className="video2-section-content">
            <div className="video2-advantages">
              <div className="video2-advantage">
                <div className="video2-advantage-icon">⚡</div>
                <div className="video2-advantage-content">
                  <h4>Fast & Efficient</h4>
                  <p>No time spent crafting examples or setting up context</p>
                </div>
              </div>
              <div className="video2-advantage">
                <div className="video2-advantage-icon">🧠</div>
                <div className="video2-advantage-content">
                  <h4>Leverages AI Knowledge</h4>
                  <p>Uses model's extensive training data and inherent understanding</p>
                </div>
              </div>
              <div className="video2-advantage">
                <div className="video2-advantage-icon">🎨</div>
                <div className="video2-advantage-content">
                  <h4>Creative Outputs</h4>
                  <p>Model can generate diverse, creative responses without pattern constraints</p>
                </div>
              </div>
              <div className="video2-advantage">
                <div className="video2-advantage-icon">🔧</div>
                <div className="video2-advantage-content">
                  <h4>Simple to Use</h4>
                  <p>Perfect for beginners - just write clear instructions</p>
                </div>
              </div>
              <div className="video2-advantage">
                <div className="video2-advantage-icon">💾</div>
                <div className="video2-advantage-content">
                  <h4>Lower Token Cost</h4>
                  <p>No need to include examples, reduces prompt length</p>
                </div>
              </div>
              <div className="video2-advantage">
                <div className="video2-advantage-icon">🚀</div>
                <div className="video2-advantage-content">
                  <h4>Rapid Prototyping</h4>
                  <p>Quickly test ideas and iterate without setup overhead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="video2-section">
          <div className="video2-section-header">
            <div className="video2-icon">⚠️</div>
            <h2>Limitations</h2>
          </div>
          <div className="video2-section-content">
            <div className="video2-limitations">
              <div className="video2-limitation">
                <div className="video2-limitation-icon">❌</div>
                <div className="video2-limitation-content">
                  <h4>Inconsistent Outputs</h4>
                  <p>Responses may lack consistency, especially for structured data or specific formatting needs</p>
                </div>
              </div>
              <div className="video2-limitation">
                <div className="video2-limitation-icon">❌</div>
                <div className="video2-limitation-content">
                  <h4>Lower Accuracy for Specialized Tasks</h4>
                  <p>May struggle with domain-specific tasks or unusual requirements</p>
                </div>
              </div>
              <div className="video2-limitation">
                <div className="video2-limitation-icon">❌</div>
                <div className="video2-limitation-content">
                  <h4>Interpretation Ambiguity</h4>
                  <p>Model might misinterpret vague instructions or make wrong assumptions</p>
                </div>
              </div>
              <div className="video2-limitation">
                <div className="video2-limitation-icon">❌</div>
                <div className="video2-limitation-content">
                  <h4>Hard to Control Quality</h4>
                  <p>Difficult to enforce specific standards without examples to guide the model</p>
                </div>
              </div>
              <div className="video2-limitation">
                <div className="video2-limitation-icon">❌</div>
                <div className="video2-limitation-content">
                  <h4>Unpredictable Edge Cases</h4>
                  <p>May produce unexpected results for complex or nuanced requirements</p>
                </div>
              </div>
              <div className="video2-limitation">
                <div className="video2-limitation-icon">❌</div>
                <div className="video2-limitation-content">
                  <h4>Model Dependency</h4>
                  <p>Success heavily depends on the AI model's capabilities and training data</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Examples */}
        <div className="video2-section">
          <div className="video2-section-header">
            <div className="video2-icon">🌍</div>
            <h2>Real Examples</h2>
          </div>
          <div className="video2-section-content">
            <div className="video2-examples-container">
              {/* Example 1: Summarization */}
              <div className="video2-example-card">
                <div className="video2-example-header">
                  <h3>📝 Summarization</h3>
                </div>
                <div className="video2-example-body">
                  <p className="video2-example-label">Prompt:</p>
                  <div className="video2-code-block-example">
                    "Summarize the following article in 3 sentences:\n[Article text]"
                  </div>
                  <p className="video2-example-label">Why Zero-Shot Works:</p>
                  <p>Summarization is a common task the AI model understands well from training data.</p>
                  <p className="video2-example-label">Output:</p>
                  <div className="video2-code-block-example">
                    "The article discusses the importance of climate action..."
                  </div>
                </div>
              </div>

              {/* Example 2: Email Writing */}
              <div className="video2-example-card">
                <div className="video2-example-header">
                  <h3>✉️ Email Writing</h3>
                </div>
                <div className="video2-example-body">
                  <p className="video2-example-label">Prompt:</p>
                  <div className="video2-code-block-example">
                    "Write a professional email to my manager requesting a meeting about Q3 goals."
                  </div>
                  <p className="video2-example-label">Why Zero-Shot Works:</p>
                  <p>Email writing follows common patterns the model has learned from vast training data.</p>
                  <p className="video2-example-label">Output:</p>
                  <div className="video2-code-block-example">
                    "Subject: Meeting Request - Q3 Goals Discussion\n\nDear [Manager],\nI hope this email finds you well..."
                  </div>
                </div>
              </div>

              {/* Example 3: Code Generation */}
              <div className="video2-example-card">
                <div className="video2-example-header">
                  <h3>💻 Code Generation</h3>
                </div>
                <div className="video2-example-body">
                  <p className="video2-example-label">Prompt:</p>
                  <div className="video2-code-block-example">
                    "Write a JavaScript function that checks if a number is prime."
                  </div>
                  <p className="video2-example-label">Why Zero-Shot Works:</p>
                  <p>Code generation is common enough that AI can generate working code without examples.</p>
                  <p className="video2-example-label">Output:</p>
                  <div className="video2-code-block-example">
                    {`function isPrime(num) {
  if (num ≤ 1) return false;
  for (let i = 2; i ≤ Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="video2-section">
          <div className="video2-section-header">
            <div className="video2-icon">✅</div>
            <h2>Best Practices for Zero-Shot Prompting</h2>
          </div>
          <div className="video2-section-content">
            <div className="video2-tips">
              <div className="video2-tip">
                <h4>1. Be Clear and Specific</h4>
                <p>Write explicit instructions. Don't assume the model will guess your intentions.</p>
                <div className="video2-tip-example">
                  ❌ Bad: "Write something about AI"
                  <br/>
                  ✅ Good: "Write a 200-word blog post about ethical implications of AI in healthcare"
                </div>
              </div>
              <div className="video2-tip">
                <h4>2. Provide Context</h4>
                <p>Give background information to help the model understand your needs.</p>
                <div className="video2-tip-example">
                  ✅ "Write a product description for a luxury watch brand targeting millionaires"
                </div>
              </div>
              <div className="video2-tip">
                <h4>3. Define Output Format</h4>
                <p>Specify how you want the response formatted (bullet points, paragraphs, JSON, etc.)</p>
                <div className="video2-tip-example">
                  ✅ "List 5 tips as bullet points" instead of "Give me tips"
                </div>
              </div>
              <div className="video2-tip">
                <h4>4. Use Role-Based Instructions</h4>
                <p>Frame the request with a specific perspective or expertise.</p>
                <div className="video2-tip-example">
                  ✅ "As a senior developer, review this code for performance issues"
                </div>
              </div>
              <div className="video2-tip">
                <h4>5. Add Constraints</h4>
                <p>Specify limitations like length, tone, complexity level, or target audience.</p>
                <div className="video2-tip-example">
                  ✅ "Explain quantum computing in 100 words for a 10-year-old"
                </div>
              </div>
              <div className="video2-tip">
                <h4>6. Test & Iterate</h4>
                <p>If the first response isn't satisfactory, refine your prompt and try again.</p>
                <div className="video2-tip-example">
                  ✅ Add more details or adjust your instructions based on the output
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When to Upgrade */}
        <div className="video2-section">
          <div className="video2-section-header">
            <div className="video2-icon">🚀</div>
            <h2>When to Move Beyond Zero-Shot</h2>
          </div>
          <div className="video2-section-content">
            <p>Consider upgrading to other techniques when:</p>
            <div className="video2-upgrade-reasons">
              <div className="video2-reason">
                <h4>📋 Consistency Needed</h4>
                <p>Use few-shot prompting when you need consistent formatting or output structure across multiple requests</p>
              </div>
              <div className="video2-reason">
                <h4>🧩 Complex Tasks</h4>
                <p>Use chain-of-thought prompting for reasoning-heavy tasks like problem-solving or analysis</p>
              </div>
              <div className="video2-reason">
                <h4>🎭 Specific Persona</h4>
                <p>Use role-based or persona prompting when you need consistent voice and perspective</p>
              </div>
              <div className="video2-reason">
                <h4>📊 Structured Data</h4>
                <p>Use structured output prompting when you need JSON, tables, or specific formats for integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video2;
