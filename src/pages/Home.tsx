import { useState } from 'react';
import { Calendar, Clock, Heart, Activity, Plus, User } from 'lucide-react';
import { XButton } from 'x-app-ui';

export default function Home() {
    const [userName] = useState('Nguyễn Văn A');

    const quickActions = [
        {
            icon: Calendar,
            title: 'Đặt lịch khám',
            description: 'Đặt lịch với bác sĩ',
            color: 'bg-blue-100 text-blue-600'
        },
        {
            icon: Heart,
            title: 'Sức khỏe',
            description: 'Theo dõi chỉ số',
            color: 'bg-red-100 text-red-600'
        },
        {
            icon: Activity,
            title: 'Lịch sử khám',
            description: 'Xem lịch sử',
            color: 'bg-green-100 text-green-600'
        },
        {
            icon: User,
            title: 'Hồ sơ',
            description: 'Quản lý thông tin',
            color: 'bg-purple-100 text-purple-600'
        }
    ];

    const recentAppointments = [
        {
            doctor: 'BS. Nguyễn Thị B',
            specialty: 'Tim mạch',
            date: '25/09/2025',
            time: '09:00',
            status: 'confirmed'
        },
        {
            doctor: 'BS. Trần Văn C',
            specialty: 'Nội khoa',
            date: '30/09/2025',
            time: '14:30',
            status: 'pending'
        }
    ];

    return (
        <div className="xa:bg-gray-50 xa:min-h-screen">
            {/* Header */}
            <div className="xa:bg-blue-600 xa:text-white xa:p-4">
                <h1 className="xa:text-xl xa:font-bold">Xin chào, {userName}!</h1>
                <p className="xa:text-blue-100">Chăm sóc sức khỏe mỗi ngày</p>
            </div>

            {/* Quick Actions */}
            <div className="xa:p-4">
                <h2 className="xa:text-lg xa:font-semibold xa:mb-4">Thao tác nhanh</h2>
                <div className="xa:grid xa:grid-cols-2 xa:gap-4">
                    {quickActions.map((action, index) => {
                        const IconComponent = action.icon;
                        return (
                            <div key={index} className="xa:bg-white xa:p-4 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200 xa:flex xa:flex-col xa:items-center xa:text-center xa:cursor-pointer xa:hover:bg-gray-50">
                                <div className={`xa:p-3 xa:rounded-full xa:mb-2 ${action.color}`}>
                                    <IconComponent size={24} />
                                </div>
                                <h3 className="xa:font-medium xa:text-gray-900">{action.title}</h3>
                                <p className="xa:text-sm xa:text-gray-600">{action.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Recent Appointments */}
            <div className="xa:p-4">
                <div className="xa:flex xa:justify-between xa:items-center xa:mb-4">
                    <h2 className="xa:text-lg xa:font-semibold">Lịch khám sắp tới</h2>
                    <XButton size="small" variant="neutral" level="tertiary">
                        Xem tất cả
                    </XButton>
                </div>

                <div className="xa:space-y-3">
                    {recentAppointments.map((appointment, index) => (
                        <div key={index} className="xa:bg-white xa:p-4 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200">
                            <div className="xa:flex xa:justify-between xa:items-start">
                                <div>
                                    <h3 className="xa:font-medium xa:text-gray-900">{appointment.doctor}</h3>
                                    <p className="xa:text-sm xa:text-gray-600">{appointment.specialty}</p>
                                    <div className="xa:flex xa:items-center xa:mt-2 xa:text-sm xa:text-gray-500">
                                        <Calendar size={16} className="xa:mr-1" />
                                        {appointment.date}
                                        <Clock size={16} className="xa:ml-3 xa:mr-1" />
                                        {appointment.time}
                                    </div>
                                </div>
                                <span className={`xa:px-2 xa:py-1 xa:rounded-full xa:text-xs xa:font-medium ${
                                    appointment.status === 'confirmed' 
                                        ? 'xa:bg-green-100 xa:text-green-800' 
                                        : 'xa:bg-yellow-100 xa:text-yellow-800'
                                }`}>
                                    {appointment.status === 'confirmed' ? 'Đã xác nhận' : 'Chờ xác nhận'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Health Stats */}
            <div className="xa:p-4">
                <h2 className="xa:text-lg xa:font-semibold xa:mb-4">Chỉ số sức khỏe hôm nay</h2>
                <div className="xa:bg-white xa:p-4 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200">
                    <div className="xa:grid xa:grid-cols-2 xa:gap-4">
                        <div className="xa:text-center">
                            <div className="xa:text-2xl xa:font-bold xa:text-red-600">120/80</div>
                            <p className="xa:text-sm xa:text-gray-600">Huyết áp</p>
                        </div>
                        <div className="xa:text-center">
                            <div className="xa:text-2xl xa:font-bold xa:text-blue-600">72</div>
                            <p className="xa:text-sm xa:text-gray-600">Nhịp tim</p>
                        </div>
                        <div className="xa:text-center">
                            <div className="xa:text-2xl xa:font-bold xa:text-green-600">36.5°C</div>
                            <p className="xa:text-sm xa:text-gray-600">Nhiệt độ</p>
                        </div>
                        <div className="xa:text-center">
                            <div className="xa:text-2xl xa:font-bold xa:text-purple-600">98%</div>
                            <p className="xa:text-sm xa:text-gray-600">SpO2</p>
                        </div>
                    </div>
                    <XButton variant="neutral" level="secondary" className="xa:w-full xa:mt-4">
                        Cập nhật chỉ số
                    </XButton>
                </div>
            </div>

            {/* Quick Add Button */}
            <div className="xa:fixed xa:bottom-20 xa:right-4">
                <XButton variant="highlight" className="xa:rounded-full xa:w-14 xa:h-14 xa:flex xa:items-center xa:justify-center">
                    <Plus size={24} />
                </XButton>
            </div>
        </div>
    );
}
