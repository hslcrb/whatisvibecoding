import PolicyLayout from '../PolicyLayout';

export default function NoticePage() {
    return (
        <PolicyLayout title="공지사항 (Notice)">
            <div className="policy-content">
                <p style={{ marginBottom: '2rem' }}>바이브 코딩 프로젝트와 관련하여 사용자 및 개발자가 알아야 할 중요 사항을 안내합니다.</p>

                <h2 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>1. 프로젝트의 목적</h2>
                <p>본 프로젝트는 생성형 AI 기술을 활용한 소프트웨어 개발 방식의 변화를 시각화하고 대중에게 알리기 위한 비영리 교육 및 전시 목적으로 제작되었습니다.</p>

                <h2 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>2. 데이터의 정확성</h2>
                <p>사이트에 게시된 AI 모델의 벤치마크 지표(2026년 2월 기준)는 작성 시점의 공개 데이터를 기반으로 합니다. AI 기술의 급격한 발전으로 인해 실제 성능이나 순위는 실시간으로 변동될 수 있습니다.</p>

                <h2 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>3. 외부 에셋 사용</h2>
                <ul style={{ paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '12px' }}>포함된 각 기업 로고(OpenAI, Claude, Gemini, AI Times)의 권리는 각 소유주에게 있습니다.</li>
                    <li style={{ marginBottom: '12px' }}>&lsquo;에이투지체&rsquo; 폰트의 라이선스는 해당 폰트 제작자의 규정을 따릅니다.</li>
                </ul>

                <h2 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>4. 보안 및 책임</h2>
                <p>본 사이트는 정적인 정보를 제공하며, 사용자의 개인정보를 수집하지 않습니다. 제공된 외부 링크를 통해 발생하는 문제에 대해서는 본 프로젝트가 책임을 지지 않습니다.</p>

                <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.9rem', opacity: 0.5 }}>
                    최종 수정일: 2026년 2월 27일
                </div>
            </div>
        </PolicyLayout>
    );
}
