import { XSwitch, XTabBar } from 'x-app-ui';

export default function SwitchDemo() {
    return (
        <div className="demo-section">
            <h2>SwitchDemo</h2>
            <p>Các nút tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <h3>Các biến thể của XButton</h3>
                            <div style={{ display: 'flex', flexDirection: "column", gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XSwitch label="Mặc định" />
                                <XSwitch defaultChecked label="Mặc định" />
                                <XSwitch disabled label="Disabled" />
                                <XSwitch disabled defaultChecked label="Disabled" />
                            </div>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { XSwitch } from 'x-app-ui';

// Trạng thái switch
<XSwitch label="Mặc định" />
<XSwitch defaultChecked label="Mặc định" />
<XSwitch disabled label="Disabled" />
<XSwitch disabled defaultChecked label="Disabled" />`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
