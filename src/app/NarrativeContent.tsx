'use client';

import { useEffect, useRef } from 'react';
import FluidBackground from './FluidBackground';

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
      </div>

      <div className="container" ref={containerRef} style={{ paddingTop: '20vh', paddingBottom: '20vh', position: 'relative' }}>
        {/* Intro: The Personal Hook */}
        <section className="reveal section-spacing">
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', fontWeight: 900, marginBottom: '3rem' }}>
            어느 날, 저는 코딩을 <br /><span className="gradient-text">그만두기로 했습니다.</span>
          </h1>
          <p className="narrative-p">
            10년 넘게 화면 속의 세미콜론과 싸우고, 라이브러리의 버전 충돌을 해결하며 보낸 시간들.
            그것이 제가 생각했던 &lsquo;창조&rsquo;의 본질일까요? 아닙니다. 저는 단지 <strong>디지털 공장의 숙련공</strong>이었을 뿐입니다.
          </p>
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

        {/* Security Paradox */}
        <section className="reveal section-spacing">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 800 }}>보안의 역설: <br />인간은 완벽한가요?</h2>
          <p className="narrative-p">
            흔히 AI 코딩의 보안을 우려합니다. 하지만 냉정하게 자문해 봅시다.
            인간 개발자는 코드를 짤 때 처음부터 보안을 완벽하게 고려하나요?
            수많은 해킹과 데이터 유출 사고는 AI가 아닌 <strong>인간의 부주의와 형식적인 보안 검토</strong>에서 비롯되었습니다.
          </p>
          <p className="narrative-p">
            AI는 오히려 인간보다 더 성실하게 보안 표준을 학습하고 적용할 수 있습니다.
            중요한 것은 도구의 결함이 아니라, 그 <strong>도구를 검증하고 통제하는 지휘자의 역량</strong>입니다.
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
            차세대 <span className="gradient-text">지능 지표</span> <br />
            <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.4)', fontWeight: 400, letterSpacing: '0.2em' }}>FEBRUARY 2026 FRONTIER BENCHMARKS</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div className="glass-card" style={{ padding: '40px' }}>
              <div className="benchmark-badge" style={{ marginBottom: '20px' }}>REASONING KING</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 900 }}>Gemini <span style={{ color: 'var(--accent-secondary)' }}>3.1 Pro</span></h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', color: '#fff' }}>94.3<span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}>%</span></div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>GPQA Diamond (Graduate-level Reasoning)</p>
            </div>

            <div className="glass-card" style={{ padding: '40px' }}>
              <div className="benchmark-badge" style={{ marginBottom: '20px' }}>CODING SPECIALIST</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 900 }}>Codex <span style={{ color: 'var(--accent-primary)' }}>5.3</span></h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', color: '#fff' }}>77.3<span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}>%</span></div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Terminal-Bench 2.0 (Agentic Execution)</p>
            </div>

            <div className="glass-card" style={{ padding: '40px' }}>
              <div className="benchmark-badge" style={{ marginBottom: '20px' }}>AGENTIC MASTER</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWeight: 900 }}>Claude <span style={{ color: '#ff6b6b' }}>Opus 4.6</span></h3>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '20px', color: '#fff' }}>80.2<span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}>%</span></div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>SWE-Bench Verified (Full Engineering Cycle)</p>
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

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '20px 0' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', left: '20px', top: '0', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, transparent, var(--accent-primary), var(--accent-secondary), transparent)' }}></div>

            {timelineData.map((item, index) => (
              <div key={index} className="glass-card" style={{ marginLeft: '60px', marginBottom: '4rem', padding: '30px', textAlign: 'left' }}>
                <div style={{ position: 'absolute', left: '-50px', top: '35px', width: '20px', height: '20px', borderRadius: '50%', background: index === timelineData.length - 1 ? 'var(--accent-secondary)' : 'var(--accent-primary)', border: '4px solid #050505', boxShadow: index === timelineData.length - 1 ? '0 0 15px var(--accent-secondary)' : 'none' }}></div>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: 800, marginBottom: '10px', display: 'block', letterSpacing: '0.1em' }}>{item.date}</span>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 800 }}>{item.title}</h3>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '1.5rem' }}>{item.desc}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-secondary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  Source View &rarr;
                </a>
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

        {/* The Climax: Call to Action */}
        <section className="reveal" style={{ textAlign: 'center', padding: '120px 0' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '2.5rem', fontWeight: 900 }}>이 거대한 흐름의 <br /><span className="gradient-text">주인공이 되십시오.</span></h2>
          <p className="narrative-p" style={{ maxWidth: '750px', margin: '0 auto 4rem', fontSize: '1.5rem', lineHeight: '1.6' }}>
            당신의 직관이 산업의 가치가 되는 곳. <br />
            <strong>&lsquo;바이브 코딩 모임&rsquo;</strong>에서 미래의 지형도를 함께 그려나갑시다. <br />
            당신의 참여가 이 산업의 표준이 됩니다.
          </p>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
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
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(112, 0, 255, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(112, 0, 255, 0.5)';
              }}
              onClick={() => alert('신청 페이지로 이동합니다. (준비 중)')}
            >
              모임 참여하기
            </button>
          </div>
        </section>

        <footer style={{ marginTop: '10vh', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px', textAlign: 'center', color: 'rgba(255,255,255,0.4)', paddingBottom: '40px' }}>
          <p style={{ fontSize: '1rem', marginBottom: '8px' }}>&copy; 2026 Vibe Coding Industry Federation. All rights reserved.</p>
          <p style={{ fontSize: '0.85rem' }}>Crafted with Vibe, Evidence, and Next.js</p>
        </footer>
      </div>
    </div>
  );
}
