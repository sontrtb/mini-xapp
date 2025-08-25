import { Bell, CircleUser, House } from 'lucide-react';
import { XBottomTab, XTabBar } from 'x-app-ui';

export default function BottomTabDemo() {
    const bottomTabs = [
        {
            component: <div>Trang chủ</div>,
            title: "Trang chủ",
            icon: (color: string) => <House color={color} />
        },
        {
            component: <p>Thông báo</p>,
            title: "Thông báo",
            icon: (color: string) => <Bell color={color} />,
            numberNotifications: 5
        },
        {
            component: <p>Tài khoản</p>,
            title: "Tài khoản",
            icon: (color: string) => <CircleUser color={color} />
        }
    ]

    return (
        <div className="demo-section">
            <h2>BottomTabDemo</h2>
            <p>Các nút tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: <XBottomTab tabs={bottomTabs} />
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { Bell, CircleUser, House } from 'lucide-react';
import { XBottomTab } from 'x-app-ui';

const bottomTabs = [
  {
    component: <div>Trang chủ</div>,
    title: "Trang chủ",
    icon: (color: string) => <House color={color} />
  },
  {
    component: <p>Thông báo</p>,
    title: "Thông báo",
    icon: (color: string) => <Bell color={color} />,
    numberNotifications: 5
  },
  {
    component: <p>Tài khoản</p>,
    title: "Tài khoản",
    icon: (color: string) => <CircleUser color={color} />
  }
];

<XBottomTab tabs={bottomTabs} />`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
