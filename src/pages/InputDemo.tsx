import { XInput, XTextarea, XTabBar } from 'x-app-ui';

export default function XInputDemo() {
    return (
        <div className="demo-section">
            <h2>XInput</h2>
            <p>Các input tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <h3>Loại</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XInput label="Bình thường" placeholder="Placeholder" helperText="Helper Text" />
                                <XInput label="Mật khẩu" placeholder="Placeholder" helperText="Helper Text" type="password" />

                                <XTextarea label="Textarea" placeholder="Placeholder" helperText="Helper Text" />
                            </div>

                            <h3>Trạng thái validation của XInput</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XInput label="Label" placeholder="Placeholder" helperText="Helper Text" />
                                <XInput label="Error" placeholder="Placeholder" helperText="Helper Text" status="error" />
                                <XInput label="Warning" placeholder="Placeholder" helperText="Helper Text Warning" status="warning" />
                                <XInput label="Success" placeholder="Placeholder" helperText="Helper Text Success" status="success" />
                            </div>

                            <h3>Trạng thái</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                <XInput label="Label" placeholder="Placeholder" helperText="Helper Text" />
                                <XInput disabled label="Disable" placeholder="Placeholder" helperText="Helper Text" />
                            </div>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { XInput, XTextarea } from 'x-app-ui';

// Loại
<XInput label="Bình thường" placeholder="Placeholder" helperText="Helper Text" />
<XInput label="Mật khẩu" placeholder="Placeholder" helperText="Helper Text" type="password" />
<XTextarea label="Textarea" placeholder="Placeholder" helperText="Helper Text" />

// Trạng thái validation
<XInput label="Label" placeholder="Placeholder" helperText="Helper Text" />
<XInput label="Error" placeholder="Placeholder" helperText="Helper Text" status="error" />
<XInput label="Warning" placeholder="Placeholder" helperText="Helper Text Warning" status="warning" />
<XInput label="Success" placeholder="Placeholder" helperText="Helper Text Success" status="success" />

// Trạng thái
<XInput label="Label" placeholder="Placeholder" helperText="Helper Text" />
<XInput disabled label="Disable" placeholder="Placeholder" helperText="Helper Text" />`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
