import { useState } from 'react';
import { User, Heart, Calendar, Settings, LogOut, Phone, Mail, MapPin, Edit } from 'lucide-react';
import { XButton, XModal, XInput, useToast } from 'x-app-ui';

export default function Account() {
    const [user] = useState({
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@email.com',
        phone: '0123456789',
        dateOfBirth: '01/01/1990',
        address: 'Hà Nội, Việt Nam',
        avatar: '👤'
    });

    const [healthStats] = useState({
        height: '170 cm',
        weight: '70 kg',
        bloodType: 'O+',
        allergies: 'Không có'
    });

    const [showEditModal, setShowEditModal] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const { showToast } = useToast();

    const menuItems = [
        {
            icon: Calendar,
            title: 'Lịch sử khám bệnh',
            description: 'Xem lại các lần khám trước',
            action: () => showToast('Tính năng đang phát triển', { status: 'info' })
        },
        {
            icon: Heart,
            title: 'Chỉ số sức khỏe',
            description: 'Theo dõi các chỉ số y tế',
            action: () => showToast('Tính năng đang phát triển', { status: 'info' })
        },
        {
            icon: Settings,
            title: 'Cài đặt',
            description: 'Tùy chỉnh ứng dụng',
            action: () => showToast('Tính năng đang phát triển', { status: 'info' })
        }
    ];

    const handleLogout = () => {
        // In real app, clear authentication tokens
        setShowLogoutModal(false);
        showToast('Đăng xuất thành công', { status: 'success' });
    };

    return (
        <div className="xa:bg-gray-50 xa:min-h-screen">
            {/* Header */}
            <div className="xa:bg-blue-600 xa:text-white xa:p-4">
                <h1 className="xa:text-xl xa:font-bold">Tài khoản</h1>
                <p className="xa:text-blue-100">Quản lý thông tin cá nhân</p>
            </div>

            <div className="xa:p-4 xa:space-y-6">
                {/* Profile Section */}
                <div className="xa:bg-white xa:p-6 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200">
                    <div className="xa:flex xa:items-center xa:space-x-4">
                        <div className="xa:text-4xl">{user.avatar}</div>
                        <div className="xa:flex-1">
                            <h2 className="xa:text-xl xa:font-bold xa:text-gray-900">{user.name}</h2>
                            <p className="xa:text-gray-600">{user.email}</p>
                        </div>
                        <XButton 
                            variant="neutral" 
                            level="secondary" 
                            size="small"
                            onClick={() => setShowEditModal(true)}
                        >
                            <Edit size={16} className="xa:mr-1" />
                            Sửa
                        </XButton>
                    </div>
                </div>

                {/* Personal Information */}
                <div className="xa:bg-white xa:p-6 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200">
                    <h3 className="xa:text-lg xa:font-semibold xa:mb-4">Thông tin cá nhân</h3>
                    <div className="xa:space-y-4">
                        <div className="xa:flex xa:items-center xa:space-x-3">
                            <Phone size={20} className="xa:text-gray-500" />
                            <div>
                                <p className="xa:text-sm xa:text-gray-600">Số điện thoại</p>
                                <p className="xa:font-medium">{user.phone}</p>
                            </div>
                        </div>
                        <div className="xa:flex xa:items-center xa:space-x-3">
                            <Mail size={20} className="xa:text-gray-500" />
                            <div>
                                <p className="xa:text-sm xa:text-gray-600">Email</p>
                                <p className="xa:font-medium">{user.email}</p>
                            </div>
                        </div>
                        <div className="xa:flex xa:items-center xa:space-x-3">
                            <User size={20} className="xa:text-gray-500" />
                            <div>
                                <p className="xa:text-sm xa:text-gray-600">Ngày sinh</p>
                                <p className="xa:font-medium">{user.dateOfBirth}</p>
                            </div>
                        </div>
                        <div className="xa:flex xa:items-center xa:space-x-3">
                            <MapPin size={20} className="xa:text-gray-500" />
                            <div>
                                <p className="xa:text-sm xa:text-gray-600">Địa chỉ</p>
                                <p className="xa:font-medium">{user.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Health Information */}
                <div className="xa:bg-white xa:p-6 xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200">
                    <h3 className="xa:text-lg xa:font-semibold xa:mb-4">Thông tin sức khỏe</h3>
                    <div className="xa:grid xa:grid-cols-2 xa:gap-4">
                        <div>
                            <p className="xa:text-sm xa:text-gray-600">Chiều cao</p>
                            <p className="xa:font-medium">{healthStats.height}</p>
                        </div>
                        <div>
                            <p className="xa:text-sm xa:text-gray-600">Cân nặng</p>
                            <p className="xa:font-medium">{healthStats.weight}</p>
                        </div>
                        <div>
                            <p className="xa:text-sm xa:text-gray-600">Nhóm máu</p>
                            <p className="xa:font-medium">{healthStats.bloodType}</p>
                        </div>
                        <div>
                            <p className="xa:text-sm xa:text-gray-600">Dị ứng</p>
                            <p className="xa:font-medium">{healthStats.allergies}</p>
                        </div>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="xa:bg-white xa:rounded-lg xa:shadow-sm xa:border xa:border-gray-200 xa:overflow-hidden">
                    {menuItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div 
                                key={index}
                                className="xa:p-4 xa:border-b xa:border-gray-200 xa:last:border-b-0 xa:cursor-pointer xa:hover:bg-gray-50"
                                onClick={item.action}
                            >
                                <div className="xa:flex xa:items-center xa:space-x-3">
                                    <IconComponent size={20} className="xa:text-gray-500" />
                                    <div className="xa:flex-1">
                                        <h4 className="xa:font-medium xa:text-gray-900">{item.title}</h4>
                                        <p className="xa:text-sm xa:text-gray-600">{item.description}</p>
                                    </div>
                                    <div className="xa:text-gray-400">›</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Logout Button */}
                <XButton 
                    variant="danger" 
                    level="secondary" 
                    className="xa:w-full"
                    onClick={() => setShowLogoutModal(true)}
                >
                    <LogOut size={20} className="xa:mr-2" />
                    Đăng xuất
                </XButton>
            </div>

            {/* Edit Profile Modal */}
            <XModal
                isOpen={showEditModal}
                onClose={() => setShowEditModal(false)}
                title="Chỉnh sửa thông tin"
            >
                <div className="xa:space-y-4">
                    <XInput label="Họ và tên" defaultValue={user.name} />
                    <XInput label="Số điện thoại" defaultValue={user.phone} />
                    <XInput label="Địa chỉ" defaultValue={user.address} />
                    <div className="xa:flex xa:space-x-3">
                        <XButton variant="neutral" level="secondary" className="xa:flex-1" onClick={() => setShowEditModal(false)}>
                            Hủy
                        </XButton>
                        <XButton variant="highlight" className="xa:flex-1" onClick={() => {
                            setShowEditModal(false);
                            showToast('Cập nhật thông tin thành công', { status: 'success' });
                        }}>
                            Lưu
                        </XButton>
                    </div>
                </div>
            </XModal>

            {/* Logout Confirmation Modal */}
            <XModal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                title="Xác nhận đăng xuất"
            >
                <div className="xa:space-y-4">
                    <p>Bạn có chắc chắn muốn đăng xuất khỏi ứng dụng?</p>
                    <div className="xa:flex xa:space-x-3">
                        <XButton variant="neutral" level="secondary" className="xa:flex-1" onClick={() => setShowLogoutModal(false)}>
                            Hủy
                        </XButton>
                        <XButton variant="danger" className="xa:flex-1" onClick={handleLogout}>
                            Đăng xuất
                        </XButton>
                    </div>
                </div>
            </XModal>
        </div>
    );
}
