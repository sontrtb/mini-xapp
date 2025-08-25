import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { openPickerImage, EMediaType, FlutterMessageResponse } from "x-app-sdk";
import { XButton } from "x-app-ui";

interface MediaDemoProps {
    onResult: (data: FlutterMessageResponse) => void;
}

export default function MediaDemo({ onResult }: MediaDemoProps) {
    const [activeTab, setActiveTab] = useState('preview');

    const onPickerImage = async (type: EMediaType) => {
        const res = await openPickerImage(type)
        onResult(res)
    }

    return (
        <section className="xa:mb-6 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
            <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Media</h2>
            
            <div className="tabs xa:mb-4">
                <div
                    className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('preview')}
                >
                    Xem trước
                </div>
                <div
                    className={`tab ${activeTab === 'code' ? 'active' : ''}`}
                    onClick={() => setActiveTab('code')}
                >
                    Code
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'preview' ? 'active' : ''}`}>
                <div className="demo-container">
                    <div className="xa:flex xa:items-center xa:gap-2 xa:mb-2">
                        <CircleCheck size={18} color="green" />
                        <p>Lấy hình ảnh (từ file hoặc camera)</p>
                    </div>
                    <div className="xa:flex xa:gap-2 xa:mb-2">
                        <XButton onClick={() => onPickerImage(EMediaType.gallery)} className="xa:flex-1">Thư viện</XButton>
                        <XButton onClick={() => onPickerImage(EMediaType.camera)} className="xa:flex-1">Máy ảnh</XButton>
                    </div>
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'code' ? 'active' : ''}`}>
                <div className="code-block">
                    <pre><code>{`import { openPickerImage, EMediaType } from "x-app-sdk";

const onPickerImage = async (type: EMediaType) => {
  const res = await openPickerImage(type);
  console.log(res);
}

// Chọn từ thư viện
<XButton onClick={() => onPickerImage(EMediaType.gallery)} className="xa:flex-1">
  Thư viện
</XButton>

// Chụp từ camera
<XButton onClick={() => onPickerImage(EMediaType.camera)} className="xa:flex-1">
  Máy ảnh
</XButton>`}</code></pre>
                </div>
            </div>
        </section>
    );
}
