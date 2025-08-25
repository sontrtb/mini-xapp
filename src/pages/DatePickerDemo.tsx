import { useState } from 'react';
import { XDatePicker, XButton, XFormDatePicker } from 'x-app-ui';

export default function DatePickerDemoDemo() {
    const [activeTab, setActiveTab] = useState('preview');
    
    return (
        <div className="demo-section">
            <h2>XDatePicker Demo</h2>
            <p>Các input tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <div className="tabs">
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
                    <h3 className='xa:font-bold'>DatePicker chọn ngày</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '30px', marginTop: '0.5rem' }}>
                        <XDatePicker>
                            <XButton>Date Picker date</XButton>
                        </XDatePicker>
                    </div>

                    <h3 className='xa:font-bold'>DatePicker chọn tháng</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '30px', marginTop: '0.5rem' }}>
                        <XDatePicker type="month">
                            <XButton>Date Picker month</XButton>
                        </XDatePicker>
                    </div>

                    <h3 className='xa:font-bold'>Form DatePicker chọn ngày</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '30px', marginTop: '0.5rem' }}>
                       <XFormDatePicker type="day" />
                    </div>

                    <h3 className='xa:font-bold'>Form DatePicker chọn tháng</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '30px', marginTop: '0.5rem' }}>
                    <XFormDatePicker type="month" />
                    </div>
                </div>
            </div>

            <div className={`tab-content ${activeTab === 'code' ? 'active' : ''}`}>
                <div className="code-block">
                    <pre><code>{`import { XDatePicker, XButton, XFormDatePicker } from 'x-app-ui';

// DatePicker chọn ngày
<XDatePicker>
  <XButton>Date Picker date</XButton>
</XDatePicker>

// DatePicker chọn tháng
<XDatePicker type="month">
  <XButton>Date Picker month</XButton>
</XDatePicker>

// Form DatePicker chọn ngày
<XFormDatePicker type="day" />

// Form DatePicker chọn tháng
<XFormDatePicker type="month" />`}</code></pre>
                </div>
            </div>
        </div>
    );
}
