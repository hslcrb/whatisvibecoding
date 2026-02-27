import PolicyLayout from '../PolicyLayout';

export default function ContributingPage() {
    return (
        <PolicyLayout title="기여 가이드">
            <div className="policy-content">
                <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '0' }}>1. 기여 방법</h2>
                <p>바이브 코딩 연대에 관심을 가져주셔서 감사합니다. 우리는 기술의 중력을 함께 이겨낼 동료를 언제나 환영합니다.</p>
                <ul style={{ paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '12px' }}>**내러티브 제안**: 바이브 코딩의 가치를 더 잘 전달할 수 있는 문구나 서사 구조에 대한 제안.</li>
                    <li style={{ marginBottom: '12px' }}>**기술적 기여**: 사이트 성능 개선, 새로운 애니메이션 에셋 추가, 벤치마크 데이터 업데이트 등.</li>
                    <li style={{ marginBottom: '12px' }}>**커뮤니티 확장**: 연대의 가치를 공유하고 더 많은 동료를 연결하는 활동.</li>
                </ul>

                <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>2. 절차</h2>
                <ol style={{ paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '12px' }}>**Issue 생성**: 제안하거나 수정하고 싶은 사항을 이슈로 등록합니다.</li>
                    <li style={{ marginBottom: '12px' }}>**Fork & Pull Request**: 변경 사항을 작업한 후 PR을 보냅니다.</li>
                    <li style={{ marginBottom: '12px' }}>**Review & Merge**: Rheehose와 연대 운영진의 검토 후 메인 브랜치에 반영됩니다.</li>
                </ol>

                <h2 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>3. 지켜야 할 원칙</h2>
                <p>모든 코드는 **에이투지체(A2z)** 시스템과 프로젝트의 미학적 기준을 준수해야 합니다. 단순히 &lsquo;작동하는 코드&rsquo;보다, 의도가 명확하고 &lsquo;바이브&rsquo;가 느껴지는 설계를 권장합니다.</p>
            </div>
        </PolicyLayout>
    );
}
