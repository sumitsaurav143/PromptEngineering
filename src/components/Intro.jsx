import { useState } from 'react';
import './Intro.css';
import { ChevronDown, Play, BookOpen, Zap, Code, Users } from 'lucide-react';
import Video1 from './Video1';
import Video2 from './Video2';
import Video3 from './Video3';

const Intro = () => {
  const [expandedSection, setExpandedSection] = useState(0);
  const [expandedVideo, setExpandedVideo] = useState(null);
  const [showVideoPage, setShowVideoPage] = useState(null);

  const sections = [
    {
      id: 0,
      title: "🎯 1: Introduction",
      color: "from-blue-500 to-cyan-500",
      videos: [
        {
          id: 1,
          title: "What is Prompt Engineering?",
          topics: [
            "What is a prompt",
            "Why prompts matter",
            "How AI responds",
            "Real-world examples",
            "Good vs bad prompts"
          ]
        }
      ]
    },
    {
      id: 1,
      title: "🔷 2: Prompt Types",
      color: "from-purple-500 to-pink-500",
      videos: [
        {
          id: 2,
          title: "Zero Shot Prompting",
          topics: ["Definition", "When to use", "Advantages", "Limitations", "Real examples"],
          examples: ["summarization", "email writing", "code generation"]
        },
        {
          id: 3,
          title: "One Shot Prompting",
          topics: ["Single example prompting", "Pattern learning", "Formatting improvements"],
          examples: ["resume creation", "SQL generation", "UI generation"]
        },
        {
          id: 4,
          title: "Few Shot Prompting",
          topics: ["Multiple examples", "Teaching AI patterns", "Consistent outputs"],
          examples: ["sentiment analysis", "structured JSON", "coding standards"]
        },
        {
          id: 5,
          title: "Chain of Thought Prompting",
          topics: ["Step-by-step reasoning", "Breaking complex problems", "Debugging prompts"],
          examples: ["DSA solving", "math reasoning", "interview questions"]
        },
        {
          id: 6,
          title: "Role-Based Prompting",
          topics: ['"Act as"', "Expert personas", "Behavior tuning"],
          examples: ["Senior Java developer", "Interviewer", "Product manager", "Fitness coach"]
        },
        {
          id: 7,
          title: "Persona Prompting",
          topics: ["Personality design", "Tone control", "AI character building"],
          examples: ["sarcastic AI", "teacher AI", "startup mentor AI", "recruiter AI"]
        },
        {
          id: 8,
          title: "Structured Output Prompting",
          topics: ["JSON outputs", "Markdown", "Table formatting", "API-ready responses"],
          examples: ["backend integrations", "automation systems"]
        },
        {
          id: 9,
          title: "Prompt Chaining",
          topics: ["Multi-step workflows", "Sequential prompting", "AI pipelines"],
          examples: ["Research → Summarize → Generate LinkedIn Post"]
        }
      ]
    },
    {
      id: 2,
      title: "🌍 3: Real World Prompt Engineering",
      color: "from-green-500 to-emerald-500",
      videos: [
        {
          id: 10,
          title: "Prompt Engineering for Developers",
          topics: ["API generation", "Debugging", "Refactoring", "Test cases", "SQL generation"],
          examples: ["Java", "Spring Boot", "ReactJS"]
        },
        {
          id: 11,
          title: "Prompt Engineering for Content Creators",
          topics: ["Captions", "Hooks", "Thumbnails", "Scripts", "Reels ideas"],
          examples: ["YouTube optimization", "Instagram content", "LinkedIn posts"]
        },
        {
          id: 12,
          title: "Prompt Engineering for Productivity",
          topics: ["Notes", "Study assistant", "Meeting summary", "Email assistant", "Learning roadmap"],
          examples: ["Student use", "Professional use", "Knowledge management"]
        }
      ]
    },
    {
      id: 3,
      title: "🚀 4: Final Project Series (3 Videos)",
      color: "from-orange-500 to-red-500",
      videos: [
        {
          id: 13,
          title: "Build AI Chatbot UI in ReactJS",
          topics: ["Chat UI", "Message rendering", "Streaming response UI", "Typing animations"],
          examples: ["ReactJS", "Tailwind"]
        },
        {
          id: 14,
          title: "Build FastAPI Backend for AI Chatbot",
          topics: ["FastAPI setup", "OpenAI integration", "APIs", "Environment setup"],
          examples: ["FastAPI", "Python", "OpenAI SDK"]
        },
        {
          id: 15,
          title: "Implement Role-Based Prompting in Chatbot",
          topics: ["System prompts", "Persona injection", "Behavior control"],
          examples: ["mentor bot", "interviewer bot", "coding assistant"]
        }
      ]
    }
  ];

  return (
    <div className="playlist-container">
      {showVideoPage ? (
        <div className="video-page-container">
          <button 
            className="back-btn"
            onClick={() => setShowVideoPage(null)}
          >
            ← Back to Playlist
          </button>
          {showVideoPage === 1 ? (
            <Video1 />
          ) : showVideoPage === 2 ? (
            <Video2 />
          ) : showVideoPage === 3 ? (
            <Video3 />
          ) : (
            <div className="coming-soon">
              <h1>Video {showVideoPage} Coming Soon!</h1>
              <p>This video page is under development. Check back later!</p>
              <button 
                className="back-btn"
                onClick={() => setShowVideoPage(null)}
                style={{ position: 'static', marginTop: '20px' }}
              >
                ← Back to Playlist
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="channel-badge">
            <span className="channel-icon">▶</span>
            The Backend Boi
          </div>

          <h1 className="hero-title">Prompt Engineering! <br />From Beginner to Pro</h1>
          <p className="hero-subtitle">Unlock the power of AI with 15 expert-crafted videos! From beginner basics to advanced techniques, real-world applications, and building your own AI chatbot project.</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">15</span>
              <span className="stat-label">Videos</span>
            </div>
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Sections</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Possibilities</span>
            </div>
          </div>
          <a
            href="https://www.youtube.com/playlist?list=PLt9Jsb9EamJhdpUE7hN4owuD2J1-iPZnx"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            ▶ Watch on YouTube
          </a>
        </div>
      </div>

      {/* Sections Container */}
      <div className="sections-container">
        {sections.map((section) => (
          <div key={section.id} className="section-card">
            <button
              className="section-header"
              onClick={() => setExpandedSection(expandedSection === section.id ? -1 : section.id)}
            >
              <div className="section-title-wrapper">
                <h2 className={`section-title bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                  {section.title}
                </h2>
              </div>
              <ChevronDown
                size={24}
                className={`chevron ${expandedSection === section.id ? 'rotate-180' : ''}`}
              />
            </button>

            {expandedSection === section.id && (
              <div className="section-content">
                <div className="videos-grid">
                  {section.videos.map((video) => (
                    <div key={video.id} className="video-card">
                      <div className="video-header">
                        <div className="video-number">Video {video.id}</div>
                        <Play size={20} className="play-icon" />
                      </div>

                      <h3 className="video-title">{video.title}</h3>

                      <div className="video-actions">
                        <button
                          className="expand-btn"
                          onClick={() =>
                            setExpandedVideo(expandedVideo === video.id ? null : video.id)
                          }
                        >
                          {expandedVideo === video.id ? "Hide Topics" : "View Topics"}
                        </button>
                        <button
                          className="watch-btn"
                          onClick={() => setShowVideoPage(video.id)}
                        >
                          Open
                        </button>
                      </div>

                      {expandedVideo === video.id && (
                        <div className="video-details">
                          <div className="topics-section">
                            <h4 className="topics-title">📌 Topics:</h4>
                            <ul className="topics-list">
                              {video.topics.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                              ))}
                            </ul>
                          </div>

                          {video.examples && (
                            <div className="examples-section">
                              <h4 className="examples-title">💡 Examples:</h4>
                              <div className="examples-list">
                                {video.examples.map((example, idx) => (
                                  <span key={idx} className="example-tag">
                                    {example}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prerequisites Section */}
      <div className="prerequisites-section">
        <h2>Prerequisites</h2>
        <p className="prerequisites-subtitle">Install these tools before you start learning</p>
        <div className="prerequisites-grid">
          <div className="prerequisite-card">
            <div className="prerequisite-icon">🐍</div>
            <h3>Python</h3>
            <p>Required for FastAPI backend and AI integration</p>
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="prerequisite-link"
            >
              Download Python
            </a>
          </div>
          <div className="prerequisite-card">
            <div className="prerequisite-icon">💻</div>
            <h3>VS Code</h3>
            <p>Code editor for React frontend and Python backend</p>
            <a
              href="https://code.visualstudio.com/download"
              target="_blank"
              rel="noopener noreferrer"
              className="prerequisite-link"
            >
              Download VS Code
            </a>
          </div>
          <div className="prerequisite-card">
            <div className="prerequisite-icon">🔑</div>
            <h3>OpenAI API Key</h3>
            <p>Required for LLM integration and AI model access</p>
            <a
              href="https://platform.openai.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="prerequisite-link"
            >
              Create OpenAI Account
            </a>
          </div>
        </div>
      </div>

      {/* What You'll Learn Section */}
      <div className="learn-section">
        <h2>What You'll Learn</h2>
        <div className="learn-grid">
          <div className="learn-card">
            <BookOpen size={32} />
            <h3>Prompt Fundamentals</h3>
            <p>From basic prompts to advanced chain-of-thought techniques</p>
          </div>
          <div className="learn-card">
            <Zap size={32} />
            <h3>Practical Skills</h3>
            <p>Real-world applications for developers, creators, and productivity</p>
          </div>
          <div className="learn-card">
            <Code size={32} />
            <h3>Project Building</h3>
            <p>Build a complete AI chatbot with React and FastAPI</p>
          </div>
          <div className="learn-card">
            <Users size={32} />
            <h3>AI Personas</h3>
            <p>Master role-based and persona-based prompting techniques</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-section">
        <h2>Technologies Used</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-badge">Frontend</span>
            <p>ReactJS • Tailwind CSS</p>
          </div>
          <div className="tech-item">
            <span className="tech-badge">Backend</span>
            <p>FastAPI • Python</p>
          </div>
          <div className="tech-item">
            <span className="tech-badge">AI Models</span>
            <p>OpenAI API • Ollama • GPT</p>
          </div>
          <div className="tech-item">
            <span className="tech-badge">Languages</span>
            <p>Python</p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="footer-cta">
        <h2>Ready to Master Prompt Engineering?</h2>
        <p>Subscribe and start your journey from beginner to pro</p>
        <p className="channel-name-footer">📺 The Backend Boi</p>
        <button className="main-cta-btn">Subscribe to Playlist</button>
      </div>
        </>
      )}
    </div>
  );
};

export default Intro;
