import { XRadio, XTabBar } from 'x-app-ui';

export default function XRadioDemo() {
    return (
        <div className="demo-section">
            <h2>XRadioDemo</h2>
            <p>Các nút tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <h3>Các biến thể của XButton</h3>
                            <div style={{ display: 'flex', flexDirection: "column", gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XRadio value label="Mặc định" />
                                <XRadio value={false} label="Mặc định" />
                                <XRadio disabled label="Disabled" />
                                <XRadio disabled value label="Disabled" />
                            </div>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { XRadio } from 'x-app-ui';

// Trạng thái radio
<XRadio value label="Mặc định" />
<XRadio value={false} label="Mặc định" />
<XRadio disabled label="Disabled" />
<XRadio disabled value label="Disabled" />`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
