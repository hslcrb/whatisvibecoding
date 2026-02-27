'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import FluidBackground from './FluidBackground';
import AntigravityLogo from '../components/AntigravityLogo';

export default function NarrativeContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      date: "2022.11",
      title: "ChatGPT의 탄생 (The Spark)",
      desc: "OpenAI가 ChatGPT(GPT-3.5)를 공개하며 생성형 AI 시대의 서막을 열었습니다. 출시 5일 만에 100만 사용자를 돌파하는 역사적 기록을 세웠습니다.",
      link: "https://openai.com/blog/chatgpt"
    },
    {
      date: "2023.03",
      title: "GPT-4 & 멀티모달의 도약",
      desc: "단순 텍스트를 넘어 이미지와 고도의 추론 능력을 갖춘 GPT-4가 출시되었습니다. 변호사 시험 상위 10%를 기록하며 지능의 임계점을 돌파했습니다.",
      link: "https://openai.com/research/gpt-4"
    },
    {
      date: "2023.12",
      title: "Google Gemini 1.0",
      desc: "구글이 가장 범용적이고 유능한 AI 모델인 Gemini를 발표하며 진정한 멀티모달 경쟁 시대가 열렸습니다.",
      link: "https://blog.google/technology/ai/google-gemini-ai/"
    },
    {
      date: "2024.02",
      title: "Sora: 비디오 혁명",
      desc: "텍스트만으로 고해상도 영상을 생성하는 Sora가 공개되며 콘텐츠 산업의 미래를 예고했습니다.",
      link: "https://openai.com/sora"
    },
    {
      date: "2024.03",
      title: "Devin & Claude 3",
      desc: "최초의 AI 소프트웨어 엔지니어 Devin과 강력한 추론 능력을 가진 Anthropic의 Claude 3가 등장하며 개발 환경에 대대적인 변화를 불러왔습니다.",
      link: "https://www.anthropic.com/news/claude-3-family"
    },
    {
      date: "2025.01",
      title: "Project Stargate & Agentic AI",
      desc: "기존의 챗봇을 넘어 스스로 계획하고 실행하는 '에이전틱(Agentic) AI'가 산업 현장의 핵심으로 부상했습니다. 대규모 인프라 투자인 Project Stargate가 가동되었습니다.",
      link: "https://www.morganstanley.com/ideas/generative-ai-agents-automation"
    },
    {
      date: "2025.11",
      title: "Gemini 3 & GPT-5.1 최적화",
      desc: "초거대 모델들이 현실 세계의 복잡한 비즈니스 워크플로우를 완벽하게 이해하고 자동 제어하는 수준으로 진화했습니다.",
      link: "https://blog.google/technology/ai/"
    },
    {
      date: "2026.01",
      title: "일상의 인프라가 된 AI",
      desc: "AI는 더 이상 특별한 도구가 아닌, 전기나 수도처럼 모든 산업과 일상의 기저에서 작동하는 필수 인프라로 안착했습니다.",
      link: "https://www.microsoft.com/en-us/ai"
    },
    {
      date: "2026.02.04",
      title: "Claude Opus 4.6 출시",
      desc: "추론의 심연을 탐구하는 Anthropic의 신작. 1M 컨텍스트와 SWE-Bench 80.2% 돌파로 에이전틱 코딩의 신기원을 열었습니다.",
      link: "https://www.anthropic.com/news/claude-4-6"
    },
    {
      date: "2026.02.05",
      title: "GPT-5.3 Codex (Specialist)",
      desc: "OpenAI의 코딩 특화 모델. 터미널 환경 최적화와 멀티 언어 SWE-Bench Pro에서 압도적 성능을 보이며 개발자의 뇌를 대체하기 시작했습니다.",
      link: "https://openai.com/blog"
    },
    {
      date: "2026.02.19",
      title: "Google Gemini 3.1 Pro",
      desc: "지능의 총체적 승리. GPQA Diamond 94.3%라는 경이로운 수치와 함께 범용 AI 에이전트 시장의 왕좌를 탈환했습니다.",
      link: "https://deepmind.google/technologies/gemini/"
    },
    {
      date: "2026.02.27",
      title: "대한민국 AI 임팩트 서밋 (오늘)",
      desc: "글로벌 AI 3대장이 실시간으로 경쟁하는 현장에서, AI가 창출하는 경제적 가치가 임계점을 넘었습니다.",
      link: "https://www.aitimes.com/"
    }
  ];

  return (
    <div style={{ perspective: '1000px' }}>
      <FluidBackground />

      {/* Floating Decorative Elements */}
      <div className="bg-glow">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
        <div className="glow-orb orb-4"></div>
      </div>

      {/* Floating Particles/Shapes */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}>
        <div className="floating-shape" style={{ top: '15%', left: '10%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(112, 0, 255, 0.1) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 20s infinite linear' }}></div>
        <div className="floating-shape" style={{ top: '60%', left: '80%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(0, 255, 209, 0.08) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 25s infinite linear reverse' }}></div>
        <div className="floating-shape" style={{ top: '40%', left: '50%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 30s infinite ease-in-out' }}></div>
        <div className="floating-shape" style={{ top: '75%', left: '5%', width: '400px', opacity: 0.15, zIndex: -1 }}>
          <img src="/svg-ani/code-nebula.svg" alt="" className="no-interaction" style={{ width: '100%' }} />
        </div>
      </div>

      <div className="container" ref={containerRef} style={{ paddingTop: '20vh', paddingBottom: '20vh', position: 'relative' }}>
        {/* Rheehose Intro Signature */}
        <div className="reveal" style={{ marginBottom: '4rem', opacity: 0.9, display: 'flex', alignItems: 'center' }}>
          <img src="/rheehose.svg" alt="Rheehose" className="no-interaction" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} onContextMenu={(e) => e.preventDefault()} />
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, rgba(255,255,255,0.2), transparent)', marginLeft: '20px', display: 'inline-block', width: '200px', verticalAlign: 'middle' }}></div>
        </div>

        {/* Intro: The Personal Hook */}
        <section className="reveal section-spacing">
          <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 900, marginBottom: '2rem' }}>
            당신은 아직도 <br /><span className="gradient-text">직접 코딩하십니까?</span>
          </h1>
          <p className="narrative-p" style={{ fontSize: '1.65rem', fontWeight: 400, color: '#fff', lineHeight: '1.4' }}>
            지금은 단순한 기술의 변화를 넘어, <span className="highlight-box-purple" style={{ padding: '0.2em 0.5em' }}>패러다임의 혁명</span>이 일어나고 있는 시대입니다.
          </p>
          <p className="narrative-p">
            세상의 코드들은 더 이상 인간의 타이핑 소리에만 의존하지 않습니다.
            단순한 '도구'의 시대를 넘어, 지휘자의 직관이 시스템의 결과물로 즉시 치환되는 **바이브 코딩(Vibe Coding)**의 시대가 열렸습니다.
          </p>
          <p className="narrative-p">
            질문은 간단합니다. "우리 시대의 엔지니어는 무엇을 해야 합니까?" <br />
            해답 또한 명확합니다. **"엔지니어는 이제 '가치'를 설계하고, 시스템은 그 가치를 입체적인 '실체'로 구현합니다."**
          </p>
        </section>

        {/* The Demonstration Section: ex.png */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', marginBottom: '3rem', fontWeight: 800 }}>지원의 현장: <br />Antigravity 엔진과의 협업</h2>
          <div
            className="glass-card img-protect"
            style={{
              padding: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(112, 0, 255, 0.3)',
              background: 'rgba(0,0,0,0.6)',
              position: 'relative',
              userSelect: 'none',
              WebkitUserSelect: 'none'
            }}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="svg-container" style={{ bottom: '-20px', right: '-20px', width: '200px', transform: 'rotate(-15deg)' }}>
              <img src="/svg-ani/tech-flow.svg" alt="" className="no-interaction" />
            </div>
            <img
              src="/ex.webp"
              alt="Antigravity Demonstration"
              className="no-interaction"
              style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              draggable="false"
            />
            <div style={{ padding: '30px 20px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', fontWeight: 300, lineHeight: '1.6' }}>
                &ldquo;추상적인 설계 의도에서 시작해, 복잡한 시스템의 아키텍처를 세우는 과정— <br />
                이것이 바로 현대적 IDE 환경에서 실현되는 **바이브 코딩**의 실제 현장입니다.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* The Shift: Vibe Coding is not a toy */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '3rem', fontWeight: 800 }}>그건 그저 <br />&lsquo;놀이&rsquo;가 아니었습니다.</h2>
          <p className="narrative-p">
            많은 사람들이 ChatGPT와 대화하며 코드를 짜는 것을 보고 말합니다.
            &ldquo;그건 진짜 코딩이 아니야. 그냥 운 좋게 정답을 맞히는 놀이지.&rdquo;
            하지만 저는 그 안에서 <strong>거대한 산업의 지각변동</strong>을 보았습니다.
          </p>

          <div className="glass-card" style={{ marginBottom: '4rem', borderLeft: '4px solid var(--accent-secondary)', textAlign: 'left' }}>
            <div style={{ marginBottom: '2rem', background: 'rgba(255,255,255,0.05)', display: 'inline-block', padding: '10px 20px', borderRadius: '8px' }}>
              <img src="/aitimes_logo.png" alt="AI Times" style={{ height: '30px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Case Study: Spotify의 리얼 타임 혁명</h3>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', marginBottom: '1rem' }}>
              &ldquo;스포티파이의 일부 엔지니어는 <strong>작년 12월 이후 코드 한 줄도 직접 작성하지 않았습니다.</strong>&rdquo;
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              &mdash; <a href="https://www.aitimes.com/news/articleView.html?idxno=206906" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-secondary)', textDecoration: 'none', borderBottom: '1px solid currentColor' }}>AI타임스 보도 중 발췌 (기사 원문 보기)</a>
            </p>
            <div style={{ padding: '24px', background: 'rgba(0,0,0,0.4)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                그들은 출근길 지하철에서 슬랙(Slack)을 통해 클로드(Claude)에게 iOS 앱의 버그 수정을 요청합니다.
                사무실에 도착하기도 전에 수정된 버전을 푸시 알림으로 확인하고, <strong>자리에 앉기도 전에 프로덕션 환경에 배포</strong>합니다.
                이것은 더 이상 상상이 아닙니다. 이미 시작된 산업의 현실입니다.
              </p>
            </div>
          </div>

          <div className="svg-container" style={{ top: '10%', right: '-50px' }}>
            <img src="/svg-ani/pulse-node.svg" alt="" className="no-interaction" style={{ width: '150px' }} />
          </div>
          <p className="narrative-p">
            이것은 단순히 &lsquo;대변인&rsquo;을 두는 것이 아닙니다.
            인간의 고차원적인 <strong>&lsquo;비전(Vision)&rsquo;</strong>과 AI의 무한한 <strong>&lsquo;실행력(Execution)&rsquo;</strong>이 결합되는
            새로운 산업 생산 체계의 탄생입니다.
          </p>
        </section>

        {/* The Global Impact Section */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3.5rem', fontWeight: 800 }}>거인들은 이미 <br />바이브를 타고 있습니다.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', textAlign: 'left' }}>
            <div className="glass-card">
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '12px', fontSize: '1.2rem' }}>Google</h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>코딩 생산성 20% 이상 향상</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>수만 명의 엔지니어가 직접 타이핑 대신 AI와의 &lsquo;교감&rsquo;을 통해 아키텍처를 세우고 있습니다.</p>
            </div>
            <div className="glass-card">
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '12px', fontSize: '1.2rem' }}>GitHub</h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>전체 코드의 25%가 AI 생성</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>전 세계에서 생성되는 새로운 코드 4줄 중 1줄은 이미 인간의 손가락 끝에서 나오지 않습니다.</p>
            </div>
            <div className="glass-card">
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '12px', fontSize: '1.2rem' }}>Shopify</h4>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>수만 줄의 코드 자동 배포</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)' }}>개발자의 역할은 이제 &lsquo;코드를 적는 것&rsquo;에서 &lsquo;흐름을 승인하는 것&rsquo;으로 완전히 옮겨갔습니다.</p>
            </div>
          </div>
        </section>

        {/* The V-Curve: Productivity Visualization */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '3rem', fontWeight: 800, textAlign: 'center' }}>바이브 코딩의 <span className="gradient-text">생산성 궤적</span></h2>
          <div className="glass-card" style={{ padding: 'clamp(20px, 4vw, 40px)', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 800 500" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Grid Lines */}
              <line x1="50" y1="450" x2="750" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="50" y1="50" x2="50" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

              {/* Curve: V-Curve (The Dip and the Jump) */}
              <path
                d="M 50 250 Q 150 480 300 220 Q 450 30 750 80"
                fill="none"
                stroke="url(#curveGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                className="path-animation"
                style={{ strokeDasharray: '1000', strokeDashoffset: '1000', animation: 'drawGraph 3s ease-out forwards' }}
              />

              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--accent-primary)" />
                  <stop offset="50%" stopColor="var(--accent-secondary)" />
                  <stop offset="100%" stopColor="#00ffd1" />
                </linearGradient>
              </defs>

              {/* Labels */}
              <text x="60" y="270" fill="rgba(255,255,255,0.4)" fontSize="12">전통적 코딩</text>
              <text x="180" y="470" fill="var(--accent-primary)" fontSize="14" fontWeight="800">초기 적응기 (Dip)</text>
              <text x="500" y="100" fill="#00ffd1" fontSize="18" fontWeight="900">압도적 생산성 폭발</text>
            </svg>
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>
                초기에는 AI와의 호흡을 맞추는 시간이 필요합니다. 하지만 그 임계점을 넘는 순간, <br />
                당신의 생산성은 기존의 선형적 성장을 너머 <strong>기하급수적(Exponential)</strong>으로 도약합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Economic & Industrial Logic */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3.5rem', fontWeight: 800 }}>왜 기업들은 <br />사활을 걸고 있습니까?</h2>
          <p className="narrative-p">
            구글, 마이크로소프트, 오픈AI—이들이 거액의 자본을 쏟아붓는 이유는 단순히 기술적 자부심 때문이 아닙니다.
            LLM 모델을 직접 개발하지 않는 일반 기업들조차 너도나도 AI를 자사 시스템에 통합하는 이유는 명확합니다.
            그것은 <strong>이윤, 효율, 그리고 생존</strong>의 문제이기 때문입니다.
          </p>
          <div className="glass-card" style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              &ldquo;이것은 단순한 화제가 아닙니다. 산업계에서 <strong>돈이 되고, 돈을 벌어다 주는 실체</strong>입니다.
              생산 비용을 절반으로 줄이면서 출시 속도를 세 배로 높일 수 있는 기술을 외면할 리더는 없습니다.
              AI는 이제 비즈니스의 부가 요소가 아니라 <strong>엔진 그 자체</strong>가 되고 있습니다.&rdquo;
            </p>
          </div>
        </section>

        {/* The Core Argument: The Industry */}
        <section className="reveal section-spacing">
          <p className="narrative-p">
            코딩은 이제 숙련공의 반복적인 망치질이 아닙니다. 그것은 영감을 현실로 치환하는 **'디지털 연금술'**입니다.
            시스템은 인간의 언어 속에 숨은 맥락을 읽고, 수만 줄의 코드를 설계자의 비전에 맞춰 실시간으로 정렬합니다.
          </p>
          <blockquote className="narrative-quote">
            &ldquo;바이브 코딩은 단순히 코드를 짜는 기술이 아닙니다. 상상력을 가로막는 기술적 중력을 제거하고 가치 창출에 집중하는 새로운 문명적 표준입니다. <br />
            우리는 이제 문법의 감옥에서 벗어나 가치의 바다로 항해하고 있습니다.&rdquo;
          </blockquote>
          <p className="narrative-p">
            이것을 다루는 능력은 이제 선택이 아닌 생존입니다.
            단순히 코드를 '적는 자'는 도태될 것이며, AI라는 거대한 지능을 '지휘하는 자'가 새로운 산업의 주인이 될 것입니다.
          </p>
        </section>

        {/* The Core Argument: The Industry */}
        <section className="reveal section-spacing">
          <blockquote className="narrative-quote">
            &ldquo;코드는 곧 증발할 인터페이스에 불과합니다. <br />우리는 이제 코드의 내부 원리를 몰라도 <strong>가치를 창출하는 시대</strong>에 진입했습니다.&rdquo;
          </blockquote>
          <p className="narrative-p">
            우리가 &lsquo;바이브&rsquo;라고 부르는 것—그것은 단순히 모호한 느낌이 아닙니다.
            그것은 <strong>&lsquo;정교하게 설계된 직관&rsquo;</strong>이며, 새로운 시대를 여는 <strong>산업적 기술</strong>입니다.
          </p>
          <p className="narrative-p">
            이것을 다루는 능력은 이제 취미가 아닙니다. 산업의 생태계를 지배하는 가장 강력한 자본이 될 것입니다.
            우리는 이제 숙련공이 아닌, <strong>산업 전체를 조망하는 오케스트라의 지휘자</strong>가 되어야 합니다.
          </p>
        </section>

        {/* Benchmarks Section */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', marginBottom: '4rem', fontWeight: 900, textAlign: 'center' }}>
            차세대 <span className="gradient-text">코딩 지능 지표</span> <br />
            <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)', fontWeight: 400, letterSpacing: '0.2em' }}>FEBRUARY 2026 SOFTWARE ENGINEERING BENCHMARKS</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div className="glass-card" style={{ padding: '40px', position: 'relative' }}>
              <div className="benchmark-badge" style={{ marginBottom: '20px' }}>LOGIC MASTER</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 900 }}>Gemini <span style={{ color: 'var(--accent-secondary)' }}>3.1 Pro</span></h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', color: '#fff' }}>98.2<span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}>%</span></div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>HumanEval+ (Python Coding Logic)</p>
              <a href="https://deepmind.google/technologies/gemini/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)', textDecoration: 'none', fontWeight: 700, border: '1px solid rgba(0, 255, 209, 0.2)', padding: '6px 12px', borderRadius: '4px' }}>VIEW REPORT</a>
            </div>

            <div className="glass-card" style={{ padding: '40px', position: 'relative' }}>
              <div className="benchmark-badge" style={{ marginBottom: '20px' }}>PRODUCTION CORE</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 900 }}>Codex <span style={{ color: 'var(--accent-primary)' }}>5.3</span></h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', color: '#fff' }}>92.5<span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}>%</span></div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>SWE-Bench Lite (Issue Resolution)</p>
              <a href="https://openai.com/index/research/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 700, border: '1px solid rgba(112, 0, 255, 0.2)', padding: '6px 12px', borderRadius: '4px' }}>VIEW REPORT</a>
            </div>

            <div className="glass-card" style={{ padding: '40px', position: 'relative' }}>
              <div className="benchmark-badge" style={{ marginBottom: '20px' }}>AUTONOMOUS PRO</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 900 }}>Claude <span style={{ color: '#ff6b6b' }}>Opus 4.6</span></h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', color: '#fff' }}>81.4<span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}>%</span></div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>SWE-Bench Verified (Full Cycle)</p>
              <a href="https://www.anthropic.com/news/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: '#ff6b6b', textDecoration: 'none', fontWeight: 700, border: '1px solid rgba(255, 107, 107, 0.2)', padding: '6px 12px', borderRadius: '4px' }}>VIEW REPORT</a>
            </div>
          </div>
        </section>

        {/* Partners/Tools Logos */}
        <section className="reveal" style={{ marginBottom: '10vh', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginBottom: '2rem', letterSpacing: '0.3em', fontWeight: 600 }}>POWERING THE INDUSTRY</p>
          <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', alignItems: 'center', opacity: 0.6, filter: 'grayscale(1) brightness(2)' }}>
            <img src="/openai_logo.svg" alt="OpenAI" style={{ height: '35px' }} />
            <img src="/claude_logo.svg" alt="Claude" style={{ height: '35px' }} />
            <img src="/gemini_logo.webp" alt="Gemini" style={{ height: '35px' }} />
          </div>
        </section>

        {/* The Digital Divide */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3.5rem', fontWeight: 800 }}>가속화되는 <br /><span className="gradient-text">양극화의 파도</span></h2>
          <p className="narrative-p">
            이제 세상은 두 부류로 나뉠 것입니다.
            AI를 단순한 채팅방의 비서로 사용하는 자와, <span className="highlight-box">AI를 산업적 생산 수단으로 완전히 내재화한 자</span>.
            이들의 격차는 시간이 갈수록 기하급수적으로 벌어질 것이며, 이것은 곧 <strong>디지털 계급의 양극화</strong>로 이어질 것입니다.
          </p>
          <p className="narrative-p">
            AI의 성능은 소프트웨어의 알고리즘만큼이나, 그것을 <span className="highlight-box-purple">사용하는 사람의 실력</span>에 의해 결정됩니다.
            같은 악기를 들어도 연주자에 따라 소음이 되기도, 명곡이 되기도 하듯
            당신의 '바이브'가 이 산업의 퀄리티를 결정합니다.
          </p>
        </section>

        {/* AI Evolution Timeline */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '5rem', fontWeight: 800, textAlign: 'center' }}>지능의 폭발: <br />인류가 걸어온 <span className="gradient-text">40개월의 궤적</span></h2>

          <div className="timeline-container" style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item reveal" style={{
                display: 'flex',
                gap: '40px',
                marginBottom: '6rem',
                position: 'relative'
              }}>
                <div className="timeline-date-side" style={{
                  flex: '0 0 120px',
                  textAlign: 'right',
                  paddingTop: '8px'
                }}>
                  <span style={{
                    fontSize: '1rem',
                    color: index === timelineData.length - 1 ? 'var(--accent-secondary)' : 'rgba(255,255,255,0.4)',
                    fontWeight: 700,
                    fontFamily: 'Google Sans Flex, sans-serif'
                  }}>
                    {item.date}
                  </span>
                </div>

                <div className="timeline-dot-wrapper" style={{ position: 'relative' }}>
                  <div className={`timeline-dot ${index === timelineData.length - 1 ? 'active-dot' : ''}`} style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: index === timelineData.length - 1 ? 'var(--accent-secondary)' : 'rgba(255,255,255,0.1)',
                    border: '2px solid rgba(0,0,0,1)',
                    zIndex: 2,
                    position: 'relative',
                    marginTop: '12px'
                  }}></div>
                  {index !== timelineData.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: '24px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '1px',
                      height: 'calc(100% + 4rem)',
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.02))'
                    }}></div>
                  )}
                </div>

                <div className="timeline-content-side" style={{ flex: 1 }}>
                  <div className="glass-card timeline-card" style={{
                    padding: '30px',
                    textAlign: 'left',
                    margin: 0,
                    border: index === timelineData.length - 1 ? '1px solid rgba(0, 255, 209, 0.3)' : '1px solid rgba(255,255,255,0.05)'
                  }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem', fontWeight: 800 }}>{item.title}</h3>
                    <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '1.5rem' }}>{item.desc}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-link"
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--accent-secondary)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 600,
                        opacity: 0.6,
                        transition: 'opacity 0.3s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
                    >
                      EXPLORE EVIDENCE <span style={{ fontSize: '1.2rem' }}>&rsaquo;</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Progressive Persuasion: Why Join? */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '3.5rem', fontWeight: 800 }}>왜 우리는 <br />함께 모여야 하는가?</h2>
          <p className="narrative-p">
            혼자서 AI와 대화하는 것은 그저 흥미로운 &lsquo;놀이&rsquo;일 수 있습니다.
            하지만 역사는 말합니다. 산업은 <strong>연결과 집단의 힘</strong>을 통해 완성됩니다.
          </p>
          <div style={{ textAlign: 'left' }}>
            <div className="glass-card" style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>1. 새로운 산업 표준의 정립</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem' }}>
                공유되지 않는 기술은 도태됩니다. 우리는 모여서 각자의 &lsquo;바이브&rsquo;를 공유하고,
                이 시대를 지배할 <strong>Best Practice</strong>와 <strong>산업적 표준</strong>을 함께 수립합니다.
              </p>
            </div>
            <div className="glass-card" style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>2. 기하급수적 성장의 열쇠</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem' }}>
                변화의 속도가 광속에 가깝습니다. 혼자서는 1년이 걸릴 시행착오를,
                모임의 대화 1시간으로 단축할 수 있습니다. <strong>성장은 연결에서 시작됩니다.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Community & Team Recruitment */}
        <section className="reveal section-spacing" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '3rem', fontWeight: 800 }}>함께 성장할 <br /><span className="gradient-text">동지를 찾습니다.</span></h2>
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '50px' }}>
            <p className="narrative-p" style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
              우리는 현재 **소수정예**로 Vibe Coding의 미래를 설계하고 있습니다.
              현재의 실력은 중요하지 않습니다. 중요한 것은 변화를 두려워하지 않는 **'오픈 마인드'**와 **'학습 의지'**입니다.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '3rem' }}>
              <div style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '10px' }}>팀 프로젝트</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>함께 실제 서비스를 빌드하며 성장합니다.</p>
              </div>
              <div style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '10px' }}>해커톤 & 대회</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>글로벌 AI 대회와 해커톤에 팀으로 도전합니다.</p>
              </div>
              <div style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '10px' }}>지식 공유</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>매주 최신 AI 트렌드와 코딩 팁을 나눕니다.</p>
              </div>
            </div>
            <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>
              "혼자 가면 빨리 가지만, 함께 가면 더 멀리, 더 높게 갑니다."
            </p>
          </div>
        </section>

        {/* Technical Manifesto Section */}
        <section className="reveal section-spacing">
          <div className="glass-card" style={{ textAlign: 'left', border: '1px solid rgba(112, 0, 255, 0.2)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '2.5rem', fontWeight: 900 }}>기술 선언문 <br /><span className="gradient-text">(The Manifesto)</span></h2>
            <div className="manifesto-card">
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                &ldquo;우리는 더 이상 코드의 파편에 집착하지 않습니다. 우리는 **의도(Intent)**를 설계하고, AI는 그 의도를 완벽한 **연산(Computation)**으로 치환합니다. 이것은 개발의 종말이 아니라, 가치 창출의 새로운 문명적 도약입니다.&rdquo;
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <span className="benchmark-badge" style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}>Visionary Design</span>
                <span className="benchmark-badge" style={{ borderColor: 'var(--accent-secondary)', color: 'var(--accent-secondary)' }}>Agentic Execution</span>
                <span className="benchmark-badge">Infinite Scale</span>
              </div>
            </div>

            <div style={{ position: 'relative', marginTop: '60px', height: '200px', overflow: 'hidden', borderRadius: '16px' }}>
              <img src="/svg-ani/neural-net.svg" alt="" className="no-interaction" style={{ position: 'absolute', top: '-50%', left: '0', width: '100%', opacity: 0.3 }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: 700 }}>AI CONNECTIVITY LAYER v3.1</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Climax: Call to Action */}
        <section className="reveal" style={{ textAlign: 'center', padding: '120px 0', position: 'relative' }}>
          <div className="svg-container" style={{ top: '0', left: '50%', transform: 'translateX(-50%)', opacity: 0.2 }}>
            <img src="/svg-ani/infinity-loop.svg" alt="" className="no-interaction" style={{ width: '300px' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '2.5rem', fontWeight: 900 }}>바이브 코딩의 <br /><span className="gradient-text">연대에 합류하십시오.</span></h2>
          <p className="narrative-p" style={{ maxWidth: '750px', margin: '0 auto 4rem', fontSize: '1.5rem', lineHeight: '1.6' }}>
            당신의 직관이 산업의 가치가 되고, <br />
            진화된 기술 생태계가 그 비전을 현실로 구현할 것입니다. <br />
            함께 코딩의 새로운 미래를 정립합시다.
          </p>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{
                padding: '24px 50px',
                fontSize: '1.3rem',
                fontWeight: 800,
                borderRadius: '60px',
                border: 'none',
                background: 'linear-gradient(135deg, var(--accent-primary), #4f00b3)',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 15px 40px rgba(112, 0, 255, 0.5)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(112, 0, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(112, 0, 255, 0.5)';
              }}
              onClick={() => alert('Vibe Coding Federation에 오신 것을 환영합니다.')}
            >
              바이브 코딩 연대 참여하기
            </button>
          </div>
        </section>

        <footer style={{ marginTop: '15vh', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '80px', paddingBottom: '60px', background: 'linear-gradient(to bottom, transparent, rgba(112, 0, 255, 0.02))' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px', textAlign: 'left' }}>
              <div style={{ gridColumn: 'span 1' }}>
                <img src="/rheehose.svg" alt="Rheehose" className="no-interaction" style={{ height: '32px', width: 'auto', marginBottom: '10px', filter: 'brightness(0) invert(1)' }} onContextMenu={(e) => e.preventDefault()} />
                <p style={{ marginTop: '20px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
                  우리는 창조의 중력을 거스르고 <br />
                  AI와 인간의 궁극적 협업을 <br />
                  현실로 만듭니다.
                </p>
              </div>
              <div>
                <h5 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '24px' }}>Resources</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link href="/notice" className="footer-link">공지사항</Link>
                  <Link href="/contributing" className="footer-link">기여 가이드</Link>
                  <Link href="/license" className="footer-link">라이선스 (MIT)</Link>
                </div>
              </div>
              <div>
                <h5 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '24px' }}>Community</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a
                    href="https://github.com/hslcrb/whatisvibecoding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    style={{
                      padding: '12px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textDecoration: 'none',
                      margin: 0,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <img src="/openai_logo.svg" alt="" style={{ height: '16px', filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
                    <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>GitHub</span>
                  </a>
                  <a
                    href="https://rheehose.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card"
                    style={{
                      padding: '12px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textDecoration: 'none',
                      margin: 0,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <img src="/rheehose.svg" alt="" style={{ height: '14px', filter: 'brightness(0) invert(1)', opacity: 0.7 }} />
                    <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>My Site</span>
                  </a>
                  <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <a href="#" className="footer-link" style={{ fontSize: '0.85rem' }}>Discord Server</a>
                    <a href="#" className="footer-link" style={{ fontSize: '0.85rem' }}>Neural Network (Beta)</a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>&copy; 2008-2026 Rheehose (Rhee Creative). All rights reserved.</p>
              <div style={{ display: 'flex', gap: '24px' }}>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>Vibe Coding movement</p>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>Identity by Rheehose</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
