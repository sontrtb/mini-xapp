import { useNavigate } from 'react-router-dom';
import { XButton } from 'x-app-ui';

export default function ProfileTab() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '16px' }}>
      <p style={{ marginBottom: '16px' }}>Tài khoản</p>
      <XButton onClick={() => navigate('/login')}>
        Đến màn đăng nhập
      </XButton>
    </div>
  );
}

