import PolicyLayout from '../PolicyLayout';

export default function ContributingPage() {
    return (
        <PolicyLayout title="기여 가이드 (Contributing Guide)">
            <div className="policy-content">
                <p style={{ marginBottom: '2rem' }}>바이브 코딩의 비전에 동참하고 프로젝트를 개선하고 싶으신가요? 여러분의 참여를 환영합니다!</p>

                <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>기여 방법</h2>
                <ol style={{ paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '16px' }}>
                        <strong>Bug Reports</strong>: UI가 깨지거나 오타가 있다면 Issue를 생성해 주세요.
                    </li>
                    <li style={{ marginBottom: '16px' }}>
                        <strong>Feature Requests</strong>: 더 압도적인 비주얼이나 추가하고 싶은 AI 소식이 있다면 제안해 주세요.
                    </li>
                    <li style={{ marginBottom: '16px' }}>
                        <strong>Pull Requests</strong>:
                        <ul style={{ marginTop: '10px', opacity: 0.8 }}>
                            <li>`main` 브랜치에서 자신의 브랜치를 생성합니다.</li>
                            <li>변경 사항을 커밋합니다 (메시지는 한글로 상세히 적어주세요).</li>
                            <li>PR을 생성하고 검토를 기다립니다.</li>
                        </ul>
                    </li>
                </ol>

                <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>디자인 원칙</h2>
                <p>본 프로젝트는 <strong>&ldquo;Overwhelming Beauty(압도적인 아름다움)&rdquo;</strong>를 최우선 가치로 합니다.</p>
                <ul style={{ paddingLeft: '20px', opacity: 0.8 }}>
                    <li style={{ marginBottom: '10px' }}>폰트는 반드시 `A2z` 패밀리를 사용해야 합니다.</li>
                    <li style={{ marginBottom: '10px' }}>모든 인터랙션은 부드러운 트랜지션(Bezier)을 포함해야 합니다.</li>
                    <li style={{ marginBottom: '10px' }}>다크 모드 기반의 네온/글래스모피즘 테마를 유지합니다.</li>
                </ul>

                <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>코드 규정</h2>
                <ul style={{ paddingLeft: '20px', opacity: 0.8 }}>
                    <li style={{ marginBottom: '10px' }}>Next.js의 App Router 컨벤션을 준수합니다.</li>
                    <li style={{ marginBottom: '10px' }}>CSS는 가급적 `globals.css`의 토큰을 활용합니다.</li>
                    <li style={{ marginBottom: '10px' }}>WebGL 관련 코드는 `src/app/FluidBackground.tsx`에서 관리합니다.</li>
                </ul>

                <p style={{ marginTop: '40px', fontWeight: 600, color: 'var(--accent-primary)' }}>함께 더 멋진 바이브를 만들어 봅시다!</p>
            </div>
        </PolicyLayout>
    );
}
