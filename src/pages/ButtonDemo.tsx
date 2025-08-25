import { XButton, XTabBar } from 'x-app-ui';

export default function XButtonDemo() {
    return (
        <div className="demo-section">
            <h2>XButtons</h2>
            <p>Các nút tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <h3>Các biến thể của XButton</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XButton variant="highlight">Highlight</XButton>
                                <XButton variant="neutral">Neutral</XButton>
                                <XButton variant="danger">Danger</XButton>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XButton variant="highlight" level="secondary">Highlight</XButton>
                                <XButton variant="neutral" level="secondary">Neutral</XButton>
                                <XButton variant="danger" level="secondary">Danger</XButton>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                                <XButton variant="highlight" level="tertiary">Highlight</XButton>
                                <XButton variant="neutral" level="tertiary">Neutral</XButton>
                                <XButton variant="danger" level="tertiary">Danger</XButton>
                            </div>

                            <h3>Các kích thước</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', marginTop: '0.5rem' }}>
                                <XButton size="small">Small</XButton>
                                <XButton size="medium">Medium</XButton>
                                <XButton size="large">Large</XButton>
                            </div>

                            <h3>Trạng thái</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                <XButton state="default">Bình thường</XButton>
                                <XButton state="disabled">Vô hiệu hóa</XButton>
                                <XButton state="loading">Đang tải</XButton>
                            </div>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { XButton } from 'x-app-ui';

// Các biến thể
<XButton variant="highlight">Highlight</XButton>
<XButton variant="neutral">Neutral</XButton>
<XButton variant="danger">Danger</XButton>

<XButton variant="highlight" level="secondary">Highlight</XButton>
<XButton variant="neutral" level="secondary">Neutral</XButton>
<XButton variant="danger" level="secondary">Danger</XButton>

<XButton variant="highlight" level="tertiary">Highlight</XButton>
<XButton variant="neutral" level="tertiary">Neutral</XButton>
<XButton variant="danger" level="tertiary">Danger</XButton>

// Các kích thước
<XButton size="small">Small</XButton>
<XButton size="medium">Medium</XButton>
<XButton size="large">Large</XButton>

// Trạng thái
<XButton state="default">Bình thường</XButton>
<XButton state="disabled">Vô hiệu hóa</XButton>
<XButton state="loading">Đang tải</XButton>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
