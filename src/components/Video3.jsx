import React from 'react';
import './Video3.css';

const Video3 = () => {
  return (
    <div className="video3-container">
      {/* Hero Section */}
      <div className="video3-hero">
        <div className="video3-hero-content">
          <h1 className="video3-title">One Shot Prompting</h1>
          <p className="video3-subtitle">
            Learn how providing a single example can dramatically improve AI output quality and consistency
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="video3-content">
        {/* Definition */}
        <div className="video3-section">
          <div className="video3-section-header">
            <div className="video3-icon">📖</div>
            <h2>What is One Shot Prompting?</h2>
          </div>
          <div className="video3-section-content">
            <p>
              One-shot prompting is a technique where you provide a single example to teach an AI model how to perform a task. This single demonstration helps the model understand the desired format, style, and approach before generating its own responses.
            </p>
            <div className="video3-example">
              <h4>Core Concept:</h4>
              <div className="video3-code-block">
                One Example + Clear Instructions = Better, More Consistent Results
              </div>
            </div>
            <p className="video3-note">
              It bridges the gap between zero-shot (no examples) and few-shot (multiple examples), making it ideal when you need improved results without the overhead of multiple examples.
            </p>
          </div>
        </div>

        {/* Single Example Prompting */}
        <div className="video3-section">
          <div className="video3-section-header">
            <div className="video3-icon">💡</div>
            <h2>Single Example Prompting</h2>
          </div>
          <div className="video3-section-content">
            <p>
              The power of one-shot prompting lies in strategic example selection. Your single example serves as a template that the model uses to understand:
            </p>
            <div className="video3-understanding-grid">
              <div className="video3-understanding-item">
                <div className="video3-understanding-icon">📝</div>
                <h4>Format</h4>
                <p>How the output should be structured</p>
              </div>
              <div className="video3-understanding-item">
                <div className="video3-understanding-icon">🎨</div>
                <h4>Style</h4>
                <p>Tone, voice, and writing style to adopt</p>
              </div>
              <div className="video3-understanding-item">
                <div className="video3-understanding-icon">🎯</div>
                <h4>Details</h4>
                <p>Level of detail and specific elements to include</p>
              </div>
              <div className="video3-understanding-item">
                <div className="video3-understanding-icon">🔄</div>
                <h4>Patterns</h4>
                <p>Repeatable patterns and structure</p>
              </div>
            </div>
            <div className="video3-tip-box">
              <h4>💡 Pro Tip:</h4>
              <p>Choose an example that is representative and high-quality. A single poor example can mislead the model more than no example at all.</p>
            </div>
          </div>
        </div>

        {/* Pattern Learning */}
        <div className="video3-section">
          <div className="video3-section-header">
            <div className="video3-icon">🧠</div>
            <h2>Pattern Learning</h2>
          </div>
          <div className="video3-section-content">
            <p>
              When you provide one shot, the AI model analyzes the example and infers the underlying pattern or logic. This learned pattern is then applied to similar tasks or new inputs.
            </p>
            <div className="video3-pattern-flow">
              <div className="video3-flow-step">
                <div className="video3-flow-number">1</div>
                <h4>Input Analysis</h4>
                <p>Model examines the example input</p>
              </div>
              <div className="video3-flow-arrow">→</div>
              <div className="video3-flow-step">
                <div className="video3-flow-number">2</div>
                <h4>Output Analysis</h4>
                <p>Model examines the example output</p>
              </div>
              <div className="video3-flow-arrow">→</div>
              <div className="video3-flow-step">
                <div className="video3-flow-number">3</div>
                <h4>Pattern Recognition</h4>
                <p>Model identifies the transformation</p>
              </div>
              <div className="video3-flow-arrow">→</div>
              <div className="video3-flow-step">
                <div className="video3-flow-number">4</div>
                <h4>Apply to New Input</h4>
                <p>Model replicates pattern for new task</p>
              </div>
            </div>
            <div className="video3-examples-container">
              <div className="video3-pattern-example">
                <h4>Example Pattern Recognition:</h4>
                <p><strong>Given Example:</strong></p>
                <div className="video3-code-block">Input: "HELLO" → Output: "hello"</div>
                <p><strong>Pattern Learned:</strong> Convert text to lowercase</p>
                <p><strong>Applied to New Input:</strong> "WORLD" → "world"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formatting Improvements */}
        <div className="video3-section">
          <div className="video3-section-header">
            <div className="video3-icon">✨</div>
            <h2>Formatting Improvements</h2>
          </div>
          <div className="video3-section-content">
            <p>
              One of the most powerful uses of one-shot prompting is achieving consistent, properly formatted outputs. Your example provides a template that the model follows.
            </p>
            <div className="video3-improvement-areas">
              <div className="video3-improvement">
                <h4>📊 Structured Data</h4>
                <p>JSON objects, CSV format, tables</p>
              </div>
              <div className="video3-improvement">
                <h4>🔤 Text Formatting</h4>
                <p>Markdown, bullet points, headers</p>
              </div>
              <div className="video3-improvement">
                <h4>📋 Lists & Categories</h4>
                <p>Organized groupings and hierarchies</p>
              </div>
              <div className="video3-improvement">
                <h4>🎯 Specific Lengths</h4>
                <p>Word counts, character limits, sections</p>
              </div>
              <div className="video3-improvement">
                <h4>🎨 Style Consistency</h4>
                <p>Voice, tone, terminology</p>
              </div>
              <div className="video3-improvement">
                <h4>🔗 Template Adherence</h4>
                <p>Following specific layouts or structures</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Examples */}
        <div className="video3-section">
          <div className="video3-section-header">
            <div className="video3-icon">🌍</div>
            <h2>Real World Examples</h2>
          </div>
          <div className="video3-section-content">
            <div className="video3-examples-showcase">
              {/* Example 1: Resume Creation */}
              <div className="video3-example-card">
                <div className="video3-example-header">
                  <h3>📄 Resume Creation</h3>
                </div>
                <div className="video3-example-body">
                  <p className="video3-example-label">Problem:</p>
                  <p>Zero-shot resume generation produces inconsistent formatting and missing sections.</p>
                  
                  <p className="video3-example-label">One-Shot Solution:</p>
                  <div className="video3-code-block-example">
                    <strong>Example Resume (Well-Formatted):</strong>
                    <pre>{`JOHN DOE
john@email.com | (555) 123-4567

EXPERIENCE
Senior Developer | Tech Corp | 2020-Present
• Led team of 5 developers
• Increased performance by 40%

SKILLS
Java, Python, React, AWS`}</pre>
                  </div>

                  <p className="video3-example-label">Prompt:</p>
                  <div className="video3-code-block-example">
                    "Using this resume format as reference, create a resume for Jane Smith who is a Product Manager with experience at StartupX and TechCo."
                  </div>

                  <p className="video3-example-label">Result:</p>
                  <div className="video3-code-block-example">
                    Model now generates resumes with identical structure, formatting, and section organization
                  </div>
                </div>
              </div>

              {/* Example 2: SQL Generation */}
              <div className="video3-example-card">
                <div className="video3-example-header">
                  <h3>💾 SQL Generation</h3>
                </div>
                <div className="video3-example-body">
                  <p className="video3-example-label">Problem:</p>
                  <p>Without examples, SQL queries might use incorrect syntax or table naming conventions.</p>
                  
                  <p className="video3-example-label">One-Shot Solution:</p>
                  <div className="video3-code-block-example">
                    <strong>Example Query (Correct Format):</strong>
                    <pre>{`-- Get all active users from US
SELECT 
  user_id,
  full_name,
  email
FROM users
WHERE status = 'active' 
  AND country = 'US'
ORDER BY created_at DESC;`}</pre>
                  </div>

                  <p className="video3-example-label">Prompt:</p>
                  <div className="video3-code-block-example">
                    "Using the query structure above as reference, generate a SQL query to find all premium customers who made purchases in the last 30 days."
                  </div>

                  <p className="video3-example-label">Result:</p>
                  <div className="video3-code-block-example">
                    <pre>{`-- Get all premium customers with purchases in last 30 days
SELECT 
  customer_id,
  customer_name,
  email
FROM customers
WHERE subscription_tier = 'premium' 
  AND last_purchase_date >= CURRENT_DATE - INTERVAL '30 days'
ORDER BY last_purchase_date DESC;`}</pre>
                  </div>
                </div>
              </div>

              {/* Example 3: UI Generation */}
              <div className="video3-example-card">
                <div className="video3-example-header">
                  <h3>🎨 UI Generation</h3>
                </div>
                <div className="video3-example-body">
                  <p className="video3-example-label">Problem:</p>
                  <p>UI components need consistent styling, structure, and component hierarchy.</p>
                  
                  <p className="video3-example-label">One-Shot Solution:</p>
                  <div className="video3-code-block-example">
                    <strong>Example React Component:</strong>
                    <pre>{`const UserCard = ({ user }) => (
  <div className="card">
    <img src={user.avatar} alt={user.name} />
    <h3>{user.name}</h3>
    <p className="role">{user.role}</p>
    <button className="btn-primary">View Profile</button>
  </div>
);`}</pre>
                  </div>

                  <p className="video3-example-label">Prompt:</p>
                  <div className="video3-code-block-example">
                    "Create a ProductCard component following the same structure and styling pattern as the UserCard component."
                  </div>

                  <p className="video3-example-label">Result:</p>
                  <div className="video3-code-block-example">
                    <pre>{`const ProductCard = ({ product }) => (
  <div className="card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p className="role">{product.category}</p>
    <button className="btn-primary">View Details</button>
  </div>
);`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="video3-section">
          <div className="video3-section-header">
            <div className="video3-icon">⭐</div>
            <h2>Advantages of One Shot Prompting</h2>
          </div>
          <div className="video3-section-content">
            <div className="video3-advantages">
              <div className="video3-advantage">
                <div className="video3-advantage-icon">🎯</div>
                <div className="video3-advantage-content">
                  <h4>Improved Accuracy</h4>
                  <p>Single example significantly improves output quality over zero-shot</p>
                </div>
              </div>
              <div className="video3-advantage">
                <div className="video3-advantage-icon">📐</div>
                <div className="video3-advantage-content">
                  <h4>Consistent Format</h4>
                  <p>Output follows the format of your example consistently</p>
                </div>
              </div>
              <div className="video3-advantage">
                <div className="video3-advantage-icon">⚡</div>
                <div className="video3-advantage-content">
                  <h4>Minimal Overhead</h4>
                  <p>Only one example, so prompt remains short and efficient</p>
                </div>
              </div>
              <div className="video3-advantage">
                <div className="video3-advantage-icon">🎓</div>
                <div className="video3-advantage-content">
                  <h4>Easy to Understand</h4>
                  <p>Simple to implement compared to few-shot or chain-of-thought</p>
                </div>
              </div>
              <div className="video3-advantage">
                <div className="video3-advantage-icon">💰</div>
                <div className="video3-advantage-content">
                  <h4>Cost Effective</h4>
                  <p>Better results with minimal token usage</p>
                </div>
              </div>
              <div className="video3-advantage">
                <div className="video3-advantage-icon">🔄</div>
                <div className="video3-advantage-content">
                  <h4>Pattern Transfer</h4>
                  <p>Model applies learned pattern to diverse variations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="video3-section">
          <div className="video3-section-header">
            <div className="video3-icon">✅</div>
            <h2>Best Practices for One Shot Prompting</h2>
          </div>
          <div className="video3-section-content">
            <div className="video3-tips">
              <div className="video3-tip">
                <h4>1. Choose a Representative Example</h4>
                <p>Your example should be typical of what you want to generate. It should showcase the desired quality and complexity level.</p>
                <div className="video3-tip-example">
                  ✅ Good: A complete, well-formatted resume with all sections
                  <br/>
                  ❌ Bad: A minimal resume missing sections
                </div>
              </div>
              <div className="video3-tip">
                <h4>2. Keep Example Quality High</h4>
                <p>The model will try to replicate your example, so make sure it's an excellent demonstration of what you want.</p>
                <div className="video3-tip-example">
                  ✅ Proofread your example thoroughly
                </div>
              </div>
              <div className="video3-tip">
                <h4>3. Clearly Label Example vs Request</h4>
                <p>Distinguish between the example you're providing and the actual task you want the model to perform.</p>
                <div className="video3-tip-example">
                  ✅ "Example: [example here] Now create a similar [task]"
                </div>
              </div>
              <div className="video3-tip">
                <h4>4. Match Input Domain</h4>
                <p>Your example input should be similar in domain to what you're asking the model to process.</p>
                <div className="video3-tip-example">
                  ✅ Example with tech keywords for tech resume creation
                </div>
              </div>
              <div className="video3-tip">
                <h4>5. Show Complete Transformation</h4>
                <p>Include both input and output in your example to show the complete transformation.</p>
                <div className="video3-tip-example">
                  ✅ Input: X → Output: Y format
                </div>
              </div>
              <div className="video3-tip">
                <h4>6. Test and Iterate</h4>
                <p>If results aren't perfect, try a different example that better represents your needs.</p>
                <div className="video3-tip-example">
                  ✅ Experiment with different example styles until you get desired output
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When to Use */}
        <div className="video3-section">
          <div className="video3-section-header">
            <div className="video3-icon">🎯</div>
            <h2>When to Use One Shot Prompting</h2>
          </div>
          <div className="video3-section-content">
            <div className="video3-use-cases">
              <div className="video3-use-case">
                <h4>✓ Format-Critical Tasks</h4>
                <p>When output format must be exact (JSON, CSV, specific structure)</p>
              </div>
              <div className="video3-use-case">
                <h4>✓ Style-Specific Content</h4>
                <p>When you need consistent tone, voice, or writing style</p>
              </div>
              <div className="video3-use-case">
                <h4>✓ Template-Based Generation</h4>
                <p>When outputs follow a specific template or pattern</p>
              </div>
              <div className="video3-use-case">
                <h4>✓ Quality Improvement</h4>
                <p>When zero-shot results are inconsistent or poor quality</p>
              </div>
              <div className="video3-use-case">
                <h4>✓ Limited Domain Tasks</h4>
                <p>For specialized tasks with clear input-output patterns</p>
              </div>
              <div className="video3-use-case">
                <h4>✓ Token Optimization</h4>
                <p>When you need better results without using many examples</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="video3-section">
          <div className="video3-section-header">
            <div className="video3-icon">📊</div>
            <h2>One Shot vs Zero Shot vs Few Shot</h2>
          </div>
          <div className="video3-section-content">
            <div className="video3-comparison-table">
              <div className="video3-comparison-row">
                <div className="video3-comparison-cell header">Aspect</div>
                <div className="video3-comparison-cell header">Zero Shot</div>
                <div className="video3-comparison-cell header">One Shot</div>
                <div className="video3-comparison-cell header">Few Shot</div>
              </div>
              <div className="video3-comparison-row">
                <div className="video3-comparison-cell">Examples</div>
                <div className="video3-comparison-cell">None</div>
                <div className="video3-comparison-cell">1</div>
                <div className="video3-comparison-cell">2-5</div>
              </div>
              <div className="video3-comparison-row">
                <div className="video3-comparison-cell">Setup Time</div>
                <div className="video3-comparison-cell">Fast</div>
                <div className="video3-comparison-cell">Very Fast</div>
                <div className="video3-comparison-cell">Moderate</div>
              </div>
              <div className="video3-comparison-row">
                <div className="video3-comparison-cell">Accuracy</div>
                <div className="video3-comparison-cell">Good</div>
                <div className="video3-comparison-cell">Very Good</div>
                <div className="video3-comparison-cell">Excellent</div>
              </div>
              <div className="video3-comparison-row">
                <div className="video3-comparison-cell">Consistency</div>
                <div className="video3-comparison-cell">Variable</div>
                <div className="video3-comparison-cell">Good</div>
                <div className="video3-comparison-cell">Excellent</div>
              </div>
              <div className="video3-comparison-row">
                <div className="video3-comparison-cell">Token Cost</div>
                <div className="video3-comparison-cell">Low</div>
                <div className="video3-comparison-cell">Low</div>
                <div className="video3-comparison-cell">Moderate</div>
              </div>
              <div className="video3-comparison-row">
                <div className="video3-comparison-cell">Best For</div>
                <div className="video3-comparison-cell">Quick tasks</div>
                <div className="video3-comparison-cell">Format control</div>
                <div className="video3-comparison-cell">Complex patterns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video3;
