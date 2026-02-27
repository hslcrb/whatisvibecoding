import PolicyLayout from '../PolicyLayout';

export default function NoticePage() {
    return (
        <PolicyLayout title="공지사항">
            <div className="policy-content">
                <h2 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '0' }}>1. 프로젝트의 목적</h2>
                <p>본 프로젝트는 AI 기술과 인간의 직관이 결합된 &lsquo;바이브 코딩&rsquo; 패러다임을 확산시키고, 새로운 시대의 엔지니어링 표준을 함께 정립하기 위한 **커뮤니티 연대**입니다.</p>

                <h2 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>2. 주요 안내 사항</h2>
                <ul style={{ paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '12px' }}>**연대 가입**: 현재 소수정예로 운영 중이며, 합류를 원하시는 분은 하단의 연락처 또는 깃허브 이슈를 통해 의사를 밝혀주시기 바랍니다.</li>
                    <li style={{ marginBottom: '12px' }}>**콘텐츠 저작권**: 본 사이트의 내러티브, 디자인, 애니메이션 에셋은 Rheehose (Rhee Creative)의 자산입니다. 무단 복제 및 도용을 엄격히 금지합니다.</li>
                    <li style={{ marginBottom: '12px' }}>**업데이트 계획**: 벤치마크 및 기술 서사는 글로벌 AI 트렌드에 따라 수시로 업데이트됩니다.</li>
                </ul>

                <h2 style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginBottom: '1.5rem', marginTop: '2.5rem' }}>3. 커뮤니티 가이드라인</h2>
                <p>우리는 AI를 도구가 아닌 파트너로 대우하며, 기술적 한계를 뛰어넘는 비전을 지향합니다. 타인에 대한 비방 대신, 건설적인 기술 공유와 영감을 주고받는 문화를 지향합니다.</p>
            </div>
        </PolicyLayout>
    );
}
