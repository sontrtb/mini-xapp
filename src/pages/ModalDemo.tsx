import { useState } from 'react';
import { XButton, XModal, XTabBar } from 'x-app-ui';

export default function ModalDemo() {
    const [isOpenModal, setIsOpenModal] = useState(false)

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
                            <h3>Modal mặc định</h3>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                                <XButton onClick={() => setIsOpenModal(true)}>Open Modal</XButton>
                                <XModal
                                    isOpen={isOpenModal}
                                    onClose={() => setIsOpenModal(false)}
                                    title="Tiêu đề Modal"
                                >
                                    <p>Nội dung modal</p>
                                </XModal>
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
import { XButton, XModal } from 'x-app-ui';

const [isOpenModal, setIsOpenModal] = useState(false);

// Modal cơ bản
<XButton onClick={() => setIsOpenModal(true)}>Open Modal</XButton>
<XModal
  isOpen={isOpenModal}
  onClose={() => setIsOpenModal(false)}
  title="Modal Title"
>
  Nội dung modal...
</XModal>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
