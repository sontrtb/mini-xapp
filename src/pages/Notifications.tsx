import { useState } from 'react';
import { Bell, Check, Clock, Calendar } from 'lucide-react';
import { XButton } from 'x-app-ui';

export default function Notifications() {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            title: 'Lịch khám sắp tới',
            message: 'Bạn có lịch khám với BS. Nguyễn Thị Lan vào 9:00 ngày 25/09/2025',
            time: '2 giờ trước',
            type: 'appointment',
            read: false
        },
        {
            id: 2,
            title: 'Nhắc nhở uống thuốc',
            message: 'Đã đến giờ uống thuốc huyết áp',
            time: '30 phút trước',
            type: 'medication',
            read: false
        },
        {
            id: 3,
            title: 'Kết quả xét nghiệm',
            message: 'Kết quả xét nghiệm máu đã có. Vui lòng kiểm tra trong hồ sơ y tế.',
            time: '1 ngày trước',
            type: 'result',
            read: true
        },
        {
            id: 4,
            title: 'Đặt lịch thành công',
            message: 'Lịch khám với BS. Trần Văn Nam đã được xác nhận',
            time: '2 ngày trước',
            type: 'appointment',
            read: true
        },
        {
            id: 5,
            title: 'Nhắc nhở khám định kỳ',
            message: 'Đã đến lúc khám sức khỏe định kỳ 6 tháng',
            time: '3 ngày trước',
            type: 'reminder',
            read: false
        }
    ]);

    const markAsRead = (id: number) => {
        setNotifications(prev => 
            prev.map(notif => 
                notif.id === id ? { ...notif, read: true } : notif
            )
        );
    };

    const markAllAsRead = () => {
        setNotifications(prev => 
            prev.map(notif => ({ ...notif, read: true }))
        );
    };

    const getNotificationIcon = (type: string) => {
        switch (type) {
            case 'appointment':
                return <Calendar size={20} className="xa:text-blue-600" />;
            case 'medication':
                return <Clock size={20} className="xa:text-green-600" />;
            case 'result':
                return <Check size={20} className="xa:text-purple-600" />;
            case 'reminder':
                return <Bell size={20} className="xa:text-orange-600" />;
            default:
                return <Bell size={20} className="xa:text-gray-600" />;
        }
    };

    const getNotificationColor = (type: string) => {
        switch (type) {
            case 'appointment':
                return 'xa:bg-blue-100';
            case 'medication':
                return 'xa:bg-green-100';
            case 'result':
                return 'xa:bg-purple-100';
            case 'reminder':
                return 'xa:bg-orange-100';
            default:
                return 'xa:bg-gray-100';
        }
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="xa:bg-gray-50 xa:min-h-screen">
            {/* Header */}
            <div className="xa:bg-blue-600 xa:text-white xa:p-4">
                <div className="xa:flex xa:justify-between xa:items-center">
                    <div>
                        <h1 className="xa:text-xl xa:font-bold">Thông báo</h1>
                        <p className="xa:text-blue-100">
                            {unreadCount > 0 ? `${unreadCount} thông báo chưa đọc` : 'Tất cả đã đọc'}
                        </p>
                    </div>
                    {unreadCount > 0 && (
                        <XButton 
                            variant="neutral" 
                            level="tertiary" 
                            size="small"
                            onClick={markAllAsRead}
                        >
                            Đánh dấu tất cả
                        </XButton>
                    )}
                </div>
            </div>

            <div className="xa:p-4">
                {notifications.length === 0 ? (
                    <div className="xa:text-center xa:py-12">
                        <Bell size={48} className="xa:text-gray-400 xa:mx-auto xa:mb-4" />
                        <h3 className="xa:text-lg xa:font-medium xa:text-gray-900 xa:mb-2">
                            Không có thông báo
                        </h3>
                        <p className="xa:text-gray-600">
                            Bạn sẽ nhận được thông báo về lịch khám, nhắc nhở uống thuốc và cập nhật y tế tại đây.
                        </p>
                    </div>
                ) : (
                    <div className="xa:space-y-3">
                        {notifications.map((notification) => (
                            <div 
                                key={notification.id}
                                className={`xa:bg-white xa:p-4 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200 xa:cursor-pointer xa:hover:bg-gray-50 ${
                                    !notification.read ? 'xa:border-l-4 xa:border-l-blue-500' : ''
                                }`}
                                onClick={() => markAsRead(notification.id)}
                            >
                                <div className="xa:flex xa:items-start xa:space-x-3">
                                    <div className={`xa:p-2 xa:rounded-full ${getNotificationColor(notification.type)}`}>
                                        {getNotificationIcon(notification.type)}
                                    </div>
                                    
                                    <div className="xa:flex-1">
                                        <div className="xa:flex xa:justify-between xa:items-start xa:mb-1">
                                            <h3 className={`xa:font-medium ${!notification.read ? 'xa:text-gray-900' : 'xa:text-gray-700'}`}>
                                                {notification.title}
                                            </h3>
                                            <span className="xa:text-xs xa:text-gray-500">
                                                {notification.time}
                                            </span>
                                        </div>
                                        
                                        <p className={`xa:text-sm ${!notification.read ? 'xa:text-gray-700' : 'xa:text-gray-600'}`}>
                                            {notification.message}
                                        </p>
                                    </div>
                                    
                                    {!notification.read && (
                                        <div className="xa:w-2 xa:h-2 xa:bg-blue-500 xa:rounded-full"></div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
