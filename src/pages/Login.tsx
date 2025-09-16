import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { XButton, XInput } from 'x-app-ui';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // For demo purposes, always navigate to home
            navigate('/');
        }, 1000);
    };

    return (
        <div className="xa:min-h-screen xa:bg-gray-50 xa:flex xa:items-center xa:justify-center xa:p-4">
            <div className="xa:max-w-md xa:w-full xa:bg-white xa:rounded-lg xa:shadow-md xa:p-6">
                <div className="xa:text-center xa:mb-6">
                    <h1 className="xa:text-2xl xa:font-bold xa:text-gray-900">Đăng nhập</h1>
                    <p className="xa:text-gray-600 xa:mt-2">Truy cập vào ứng dụng y tế của bạn</p>
                </div>

                <div className="xa:space-y-4">
                    <XInput
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập email của bạn"
                    />

                    <XInput
                        label="Mật khẩu"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Nhập mật khẩu"
                    />

                    <XButton
                        state={isLoading ? "loading" : "default"}
                        onClick={handleLogin}
                        className="xa:w-full"
                        variant="highlight"
                    >
                        Đăng nhập
                    </XButton>

                    <div className="xa:text-center">
                        <span className="xa:text-gray-600">Chưa có tài khoản? </span>
                        <Link to="/register" className="xa:text-blue-600 xa:font-medium">
                            Đăng ký ngay
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
