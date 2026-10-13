import { useNavigate } from 'react-router-dom';
import { XButton } from 'x-app-ui';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <h2>Đăng nhập</h2>
      <XButton onClick={() => navigate(-1)} style={{ marginTop: '16px' }}>
        Quay lại
      </XButton>
    </div>
  );
}
