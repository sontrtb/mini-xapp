import { useState } from 'react';
import { Activity, Heart, TrendingUp, Plus } from 'lucide-react';
import { XButton, XInput, XModal } from 'x-app-ui';

export default function Health() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [newRecord, setNewRecord] = useState({
        type: '',
        value: '',
        note: ''
    });

    const [healthRecords] = useState([
        {
            id: 1,
            type: 'Huyết áp',
            value: '120/80',
            unit: 'mmHg',
            date: '16/09/2025',
            time: '08:00',
            status: 'normal'
        },
        {
            id: 2,
            type: 'Nhịp tim',
            value: '72',
            unit: 'bpm',
            date: '16/09/2025',
            time: '08:00',
            status: 'normal'
        },
        {
            id: 3,
            type: 'Cân nặng',
            value: '70',
            unit: 'kg',
            date: '15/09/2025',
            time: '07:30',
            status: 'normal'
        },
        {
            id: 4,
            type: 'Đường huyết',
            value: '95',
            unit: 'mg/dL',
            date: '14/09/2025',
            time: '09:15',
            status: 'normal'
        },
        {
            id: 5,
            type: 'SpO2',
            value: '98',
            unit: '%',
            date: '14/09/2025',
            time: '09:15',
            status: 'normal'
        }
    ]);

    const healthMetrics = [
        {
            title: 'Huyết áp',
            value: '120/80',
            unit: 'mmHg',
            status: 'normal',
            icon: Heart,
            color: 'text-red-600 bg-red-100'
        },
        {
            title: 'Nhịp tim',
            value: '72',
            unit: 'bpm',
            status: 'normal',
            icon: Activity,
            color: 'text-blue-600 bg-blue-100'
        },
        {
            title: 'Cân nặng',
            value: '70',
            unit: 'kg',
            status: 'normal',
            icon: TrendingUp,
            color: 'text-green-600 bg-green-100'
        },
        {
            title: 'SpO2',
            value: '98',
            unit: '%',
            status: 'normal',
            icon: Heart,
            color: 'text-purple-600 bg-purple-100'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'normal':
                return 'text-green-600 bg-green-100';
            case 'warning':
                return 'text-yellow-600 bg-yellow-100';
            case 'danger':
                return 'text-red-600 bg-red-100';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    const handleAddRecord = () => {
        // In real app, this would make an API call
        console.log('Adding new record:', newRecord);
        setShowAddModal(false);
        setNewRecord({ type: '', value: '', note: '' });
    };

    return (
        <div className="xa:bg-gray-50 xa:min-h-screen">
            {/* Header */}
            <div className="xa:bg-blue-600 xa:text-white xa:p-4">
                <div className="xa:flex xa:justify-between xa:items-center">
                    <div>
                        <h1 className="xa:text-xl xa:font-bold">Sức khỏe</h1>
                        <p className="xa:text-blue-100">Theo dõi chỉ số sức khỏe</p>
                    </div>
                    <XButton 
                        variant="neutral" 
                        level="tertiary" 
                        size="small"
                        onClick={() => setShowAddModal(true)}
                    >
                        <Plus size={16} className="xa:mr-1" />
                        Thêm
                    </XButton>
                </div>
            </div>

            <div className="xa:p-4 xa:space-y-6">
                {/* Current Health Metrics */}
                <div>
                    <h2 className="xa:text-lg xa:font-semibold xa:mb-4">Chỉ số hiện tại</h2>
                    <div className="xa:grid xa:grid-cols-2 xa:gap-4">
                        {healthMetrics.map((metric, index) => {
                            const IconComponent = metric.icon;
                            return (
                                <div key={index} className="xa:bg-white xa:p-4 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200">
                                    <div className="xa:flex xa:items-center xa:space-x-3">
                                        <div className={`xa:p-2 xa:rounded-full ${metric.color}`}>
                                            <IconComponent size={20} />
                                        </div>
                                        <div className="xa:flex-1">
                                            <p className="xa:text-sm xa:text-gray-600">{metric.title}</p>
                                            <p className="xa:text-lg xa:font-bold xa:text-gray-900">
                                                {metric.value} <span className="xa:text-sm xa:font-normal xa:text-gray-500">{metric.unit}</span>
                                            </p>
                                        </div>
                                        <span className={`xa:px-2 xa:py-1 xa:rounded-full xa:text-xs xa:font-medium ${getStatusColor(metric.status)}`}>
                                            Bình thường
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Recent Records */}
                <div>
                    <h2 className="xa:text-lg xa:font-semibold xa:mb-4">Lịch sử gần đây</h2>
                    <div className="xa:bg-white xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200 xa:overflow-hidden">
                        {healthRecords.map((record, index) => (
                            <div key={record.id} className={`xa:p-4 ${index !== healthRecords.length - 1 ? 'xa:border-b xa:border-gray-200' : ''}`}>
                                <div className="xa:flex xa:justify-between xa:items-center">
                                    <div>
                                        <h3 className="xa:font-medium xa:text-gray-900">{record.type}</h3>
                                        <p className="xa:text-lg xa:font-bold xa:text-blue-600">
                                            {record.value} <span className="xa:text-sm xa:font-normal xa:text-gray-500">{record.unit}</span>
                                        </p>
                                        <p className="xa:text-sm xa:text-gray-500">{record.date} - {record.time}</p>
                                    </div>
                                    <span className={`xa:px-2 xa:py-1 xa:rounded-full xa:text-xs xa:font-medium ${getStatusColor(record.status)}`}>
                                        Bình thường
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Health Tips */}
                <div className="xa:bg-white xa:p-6 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200">
                    <h3 className="xa:text-lg xa:font-semibold xa:mb-4">Lời khuyên sức khỏe</h3>
                    <div className="xa:space-y-3">
                        <div className="xa:flex xa:items-start xa:space-x-3">
                            <div className="xa:w-2 xa:h-2 xa:bg-blue-500 xa:rounded-full xa:mt-2"></div>
                            <p className="xa:text-gray-700">Duy trì chế độ ăn uống lành mạnh và tập thể dục đều đặn</p>
                        </div>
                        <div className="xa:flex xa:items-start xa:space-x-3">
                            <div className="xa:w-2 xa:h-2 xa:bg-blue-500 xa:rounded-full xa:mt-2"></div>
                            <p className="xa:text-gray-700">Kiểm tra huyết áp định kỳ, đặc biệt nếu có tiền sử gia đình</p>
                        </div>
                        <div className="xa:flex xa:items-start xa:space-x-3">
                            <div className="xa:w-2 xa:h-2 xa:bg-blue-500 xa:rounded-full xa:mt-2"></div>
                            <p className="xa:text-gray-700">Ngủ đủ 7-8 tiếng mỗi ngày để duy trì sức khỏe tốt</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Record Modal */}
            <XModal
                isOpen={showAddModal}
                onClose={() => setShowAddModal(false)}
                title="Thêm chỉ số sức khỏe"
            >
                <div className="xa:space-y-4">
                    <XInput 
                        label="Loại chỉ số"
                        placeholder="VD: Huyết áp, Nhịp tim, Cân nặng..."
                        value={newRecord.type}
                        onChange={(e) => setNewRecord(prev => ({ ...prev, type: e.target.value }))}
                    />
                    <XInput 
                        label="Giá trị"
                        placeholder="VD: 120/80, 72, 70..."
                        value={newRecord.value}
                        onChange={(e) => setNewRecord(prev => ({ ...prev, value: e.target.value }))}
                    />
                    <XInput 
                        label="Ghi chú (tùy chọn)"
                        placeholder="Ghi chú thêm..."
                        value={newRecord.note}
                        onChange={(e) => setNewRecord(prev => ({ ...prev, note: e.target.value }))}
                    />
                    <div className="xa:flex xa:space-x-3">
                        <XButton 
                            variant="neutral" 
                            level="secondary" 
                            className="xa:flex-1" 
                            onClick={() => setShowAddModal(false)}
                        >
                            Hủy
                        </XButton>
                        <XButton 
                            variant="highlight" 
                            className="xa:flex-1" 
                            onClick={handleAddRecord}
                        >
                            Lưu
                        </XButton>
                    </div>
                </div>
            </XModal>
        </div>
    );
}
