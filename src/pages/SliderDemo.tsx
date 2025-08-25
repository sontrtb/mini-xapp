import { XSlider, XTabBar } from 'x-app-ui';

export default function SliderDemo() {
    return (
        <div className="demo-section">
            <h2>SliderDemo</h2>
            <p>Các nút tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <h3>Singer</h3>
                            <div style={{ display: 'flex', flexDirection: "column", gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XSlider />
                                <XSlider defaultValue={100} min={0} max={300} disabled />
                            </div>

                            <h3>Range</h3>
                            <div style={{ display: 'flex', flexDirection: "column", gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XSlider type="range"/>
                                <XSlider type="range" defaultValue={[100, 150]} min={0} max={300} disabled />
                            </div>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { XSlider } from 'x-app-ui';

// Single slider
<XSlider />
<XSlider defaultValue={100} min={0} max={300} disabled />

// Range slider
<XSlider type="range"/>
<XSlider type="range" defaultValue={[100, 150]} min={0} max={300} disabled />`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
