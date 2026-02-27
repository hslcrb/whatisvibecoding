'use client';

import { useEffect, useRef } from 'react';

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

    return (
    <div className="container" ref={containerRef} style={{ paddingTop: '20vh', paddingBottom: '20vh' }}>
      {/* Intro: The Personal Hook */}
      <section className="reveal section-spacing">
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', fontWeight: 900, marginBottom: '3rem' }}>
          어느 날, 저는 코딩을 <br/><span className="gradient-text">그만두기로 했습니다.</span>
        </h1>
        <p className="narrative-p">
          10년 넘게 화면 속의 세미콜론과 싸우고, 라이브러리의 버전 충돌을 해결하며 보낸 시간들. 
          그것이 제가 생각했던 &lsquo;창조&rsquo;의 본질일까요? 아닙니다. 저는 단지 <strong>디지털 공장의 숙련공</strong>이었을 뿐입니다.
        </p>
      </section>

      {/* The Shift: Vibe Coding is not a toy */}
      <section className="reveal section-spacing">
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '3rem', fontWeight: 800 }}>그건 그저 <br/>&lsquo;놀이&rsquo;가 아니었습니다.</h2>
        <p className="narrative-p">
          많은 사람들이 ChatGPT와 대화하며 코드를 짜는 것을 보고 말합니다. 
          &ldquo;그건 진짜 코딩이 아니야. 그냥 운 좋게 정답을 맞히는 놀이지.&rdquo; 
          하지만 저는 그 안에서 <strong>거대한 산업의 지각변동</strong>을 보았습니다.
        </p>
        <p className="narrative-p">
          이것은 단순히 '대신 해주는 것'이 아닙니다. 
          인간의 추상적이고 고차원적인 <strong>'비전(Vision)'</strong>과 AI의 폭발적인 <strong>'실행력(Execution)'</strong>이 결합되는 
          새로운 산업 생산 체계의 탄생입니다. 
        </p>
      </section>

      {/* The Core Argument: The Industry */}
      <section className="reveal section-spacing">
        <blockquote className="narrative-quote">
          &ldquo;코드는 곧 증발할 인터페이스에 불과합니다. <br/>진공청소기의 모터 원리를 몰라도 방을 깨끗이 치울 수 있듯이, 
          우리는 이제 코드의 내부 원리를 몰라도 <strong>가치를 창출하는 시대</strong>에 진입했습니다.&rdquo;
        </blockquote>
        <p className="narrative-p">
          우리가 &lsquo;바이브&rsquo;라고 부르는 것—그것은 사실 <strong>&lsquo;정교하게 설계된 직관&rsquo;</strong>입니다. 
          이것을 다루는 능력은 이제 취미가 아니라, 이 산업에서 살아남기 위한 가장 강력한 무기가 될 것입니다. 
          우리는 이제 숙련공이 아닌, <strong>오케스트라의 지휘자</strong>가 되어야 합니다.
        </p>
      </section>

      {/* The Progressive Persuasion: Why Join? */}
      <section className="reveal section-spacing">
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '3.5rem', fontWeight: 800 }}>왜 우리는 <br/>함께 모여야 하는가?</h2>
        <p className="narrative-p">
          혼자서 AI를 만지작거리는 것은 재미있을 수 있습니다. 하지만 거기서 멈추면 그것은 다시 '놀이'로 퇴행합니다. 
          산업은 <strong>연결</strong>을 통해 완성됩니다.
        </p>
        <div className="glass-card" style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', color: var(--accent-secondary) }}>산업적 표준의 수립</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
            어떤 프롬프트가 가치를 만들어내고, 어떤 바이브가 안정적인 프로덕트를 생성하는지. 
            우리는 함께 모여 이 새로운 산업의 <strong>Best Practice</strong>를 정의합니다.
          </p>
        </div>
        <div className="glass-card" style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1rem', color: var(--accent-secondary) }}>집단 지성의 가속화</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
            혼자서는 1년 걸릴 통찰을 모임에서의 1시간 대화를 통해 얻을 수 있습니다. 
            기술의 변화 속도가 광속에 가까운 지금, <strong>커뮤니티는 생존을 위한 필수 인프라</strong>입니다.
          </p>
        </div >
      </section >

        {/* The Climax: Call to Action */ }
        < section className = "reveal" style = {{ textAlign: 'center', padding: '100px 0' }
}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>이 거대한 흐름의 <br/><span className="gradient-text">주인공이 되십시오.</span></h2>
        <p className="narrative-p" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
          우리는 단순히 코드를 생성하는 사람이 아닙니다. <br/>
          미래의 산업 지형도를 다시 그리는 개척자들입니다. <br/>
          <strong>'바이브 코딩 모임'</strong>은 당신의 직관을 산업적 가치로 바꾸는 첫걸음이 될 것입니다.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button 
            style={{
              padding: '20px 40px',
              fontSize: '1.2rem',
              fontWeight: 700,
              borderRadius: '50px',
              border: 'none',
              background: 'linear-gradient(135deg, #7000FF, #4f00b3)',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(112, 0, 255, 0.4)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => alert('신청 페이지로 이동합니다. (준비 중)')}
          >
            모임 참여하기
          </button>
        </div>
      </section >

      <footer style={{ marginTop: '10vh', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '50px', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
        <p>&copy; 2026 Vibe Coding Industry Federation. All rights reserved.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Created with Vibe & Next.js</p>
      </footer>

      <style jsx>{`
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div >
  );
}
