import { useState } from 'react';
import { XBottomSheet, XButton, XTabBar } from 'x-app-ui';

export default function BottomSheetDemoDemo() {
    const [isOpenBottomSheet, setOpenBottomSheet] = useState({
        isOpen: false,
        isTitle: false
    });

    return (
        <div className="demo-section">
            <h2>XBottomSheet Demo</h2>
            <p>Các input tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <h3>Buttom Sheet mặc định</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XButton
                                    onClick={() => setOpenBottomSheet({
                                        isOpen: true,
                                        isTitle: false
                                    })}
                                >
                                    Open sheet
                                </XButton>
                            </div>

                            <h3>Buttom Sheet với tiêu đề</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XButton
                                    onClick={() => setOpenBottomSheet({
                                        isOpen: true,
                                        isTitle: true
                                    })}
                                >
                                    Open sheet with title
                                </XButton>
                            </div>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { useState } from 'react';
import { XBottomSheet, XButton } from 'x-app-ui';

const [isOpenBottomSheet, setOpenBottomSheet] = useState({
  isOpen: false,
  isTitle: false
});

// Bottom Sheet cơ bản
<XButton
  onClick={() => setOpenBottomSheet({
    isOpen: true,
    isTitle: false
  })}
>
  Open sheet
</XButton>

<XBottomSheet
  isOpen={isOpenBottomSheet.isOpen}
  onClose={() => setOpenBottomSheet({ isOpen: false, isTitle: false })}
  title={isOpenBottomSheet.isTitle ? "Bottom Sheet Title" : undefined}
>
  <div className="xa:h-[300px] xa:px-4">Nội dung Bottom Sheet...</div>
</XBottomSheet>`}</code></pre>
                        </div>
                    )
                }
            ]} />

            <XBottomSheet
                title={isOpenBottomSheet.isTitle ? "Tiêu đề Bottom Sheet" : undefined}
                isOpen={isOpenBottomSheet.isOpen}
                onClose={() => setOpenBottomSheet(pre => ({ ...pre, isOpen: false }))}
            >
                <div className="xa:h-[300px] xa:px-4">Nội dung Bottom Sheet...</div>
            </XBottomSheet>
        </div>
    );
}
