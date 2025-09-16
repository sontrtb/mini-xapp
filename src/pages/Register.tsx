import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { XButton, XInput } from 'x-app-ui';

export default function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: new Date()
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleRegister = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // For demo purposes, always navigate to login
            navigate('/login');
        }, 1000);
    };

    return (
        <div className="xa:min-h-screen xa:bg-gray-50 xa:flex xa:items-center xa:justify-center xa:p-4">
            <div className="xa:max-w-md xa:w-full xa:bg-white xa:rounded-lg xa:shadow-md xa:p-6">
                <div className="xa:text-center xa:mb-6">
                    <h1 className="xa:text-2xl xa:font-bold xa:text-gray-900">Đăng ký</h1>
                    <p className="xa:text-gray-600 xa:mt-2">Tạo tài khoản mới để bắt đầu</p>
                </div>

                <div className="xa:space-y-4">
                    <XInput
                        label="Họ và tên"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Nhập họ và tên"
                    />

                    <XInput
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Nhập email của bạn"
                    />

                    <XInput
                        label="Số điện thoại"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Nhập số điện thoại"
                    />

                    <XInput
                        label="Mật khẩu"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Nhập mật khẩu"
                    />

                    <XInput
                        label="Xác nhận mật khẩu"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="Nhập lại mật khẩu"
                    />

                    <XButton
                        state={isLoading ? "loading" : "default"}
                        onClick={handleRegister}
                        className="xa:w-full"
                        variant="highlight"
                    >
                        Đăng ký
                    </XButton>

                    <div className="xa:text-center">
                        <span className="xa:text-gray-600">Đã có tài khoản? </span>
                        <Link to="/login" className="xa:text-blue-600 xa:font-medium">
                            Đăng nhập ngay
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
