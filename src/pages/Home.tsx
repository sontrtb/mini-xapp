import { Link } from 'react-router-dom';
import { XButton } from 'x-app-ui';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/Card';

const components = [
  {
    name: 'Buttons',
    description: 'Các nút bấm với nhiều kiểu dáng và trạng thái khác nhau',
    path: '/buttons',
  },
  {
    name: 'Input',
    description: 'Trường nhập liệu văn bản với nhiều biến thể và trạng thái',
    path: '/inputs',
  },
  {
    name: 'Bottom Sheet',
    description: 'Bảng điều khiển trượt lên từ dưới màn hình, thường dùng để hiển thị tuỳ chọn hoặc nội dung phụ',
    path: '/bottom-sheet',
  },
  {
    name: 'Modal',
    description: 'Cửa sổ bật lên hiển thị nội dung hoặc yêu cầu người dùng tương tác',
    path: '/modal',
  },
  {
    name: 'CheckBox',
    description: 'Ô vuông cho phép người dùng chọn một hoặc nhiều tuỳ chọn',
    path: '/check-box',
  },
  {
    name: 'Radio',
    description: 'Nút tròn cho phép người dùng chọn một trong nhiều tuỳ chọn',
    path: '/radio',
  },
  {
    name: 'Date Picker',
    description: 'Bộ chọn ngày cho phép người dùng chọn ngày trong lịch',
    path: '/date-picker',
  },
  {
    name: 'Bottom Tab',
    description: 'Thanh điều hướng nằm ở dưới cùng của ứng dụng',
    path: '/bottom-tab',
  },
  {
    name: 'Switch',
    description: 'Nút gạt chuyển đổi trạng thái giữa bật và tắt',
    path: '/switch',
  },
  {
    name: 'Slider',
    description: 'Thanh trượt cho phép người dùng chọn giá trị trong một khoảng',
    path: '/slider',
  },
  {
    name: 'TabBar',
    description: 'Thanh điều hướng dạng tab để chuyển đổi giữa các trang',
    path: '/tab-bar',
  },
  {
    name: 'Loading',
    description: 'Hiển thị tiến trình tải hoặc xử lý dữ liệu',
    path: '/loading',
  },
  {
    name: 'SDK',
    description: 'Hiển thị tiến trình tải hoặc xử lý dữ liệu',
    path: '/sdk-page',
  }
];


export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>XAppUI</h1>
        <p>
          Bộ sưu tập các thành phần React đẹp, tương thích và dễ tùy chỉnh cho dự án của bạn
        </p>
        <div className="hero-buttons">
          <XButton >
            Bắt đầu
          </XButton>
          <XButton>
            Tài liệu
          </XButton>
        </div>
      </section>

      <section className="demo-section">
        <h2>Các thành phần</h2>
        <p>Khám phá bộ sưu tập các thành phần UI của chúng tôi</p>

        <div className="component-grid">
          {components.map((component) => (
            <Card key={component.name}>
              <CardHeader>
                <CardTitle>{component.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{component.description}</p>
              </CardContent>
              <CardFooter>
                <XButton>
                  <Link to={component.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                    Xem chi tiết
                  </Link>
                </XButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2>Bắt đầu</h2>
        <p>Bắt đầu sử dụng các thành phần của chúng tôi trong dự án của bạn</p>

        <div className="demo-container">
          <h3>Cài đặt</h3>
          <div className="code-block">
            <code>npm install x-app-ui</code>
          </div>

          <h3 style={{ marginTop: '1.5rem' }}>Sử dụng</h3>
          <div className="code-block">
            <code>{`import { Button } from 'x-app-ui';

function App() {
  return (
    <Button variant="primary">Click me</Button>
  );
}`}</code>
          </div>
        </div>
      </section>
    </div>
  );
}
