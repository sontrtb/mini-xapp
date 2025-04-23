import { Link } from 'react-router-dom';
import { XButton } from 'x-app-ui';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/Card';

const components = [
  {
    name: 'Buttons',
    description: 'Các nút tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/buttons',
  },
  {
    name: 'Input',
    description: 'Các input tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/inputs',
  },
  {
    name: 'Bottom Sheet',
    description: 'Các input tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/bottom-sheet',
  },
  {
    name: 'Modal',
    description: 'Các input tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/modal',
  },
  {
    name: 'CheckBox',
    description: 'Các input tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/check-box',
  },
  {
    name: 'Radio',
    description: 'Các input tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/radio',
  },
  {
    name: 'Date Picker',
    description: 'Các input tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/date-picker',
  },
  {
    name: 'Bottom Tab',
    description: 'Các input tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/bottom-tab',
  },
  {
    name: 'Switch',
    description: 'Các input tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/switch',
  },
  {
    name: 'Slider',
    description: 'Các input tương tác với nhiều kiểu và trạng thái khác nhau',
    path: '/slider',
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
