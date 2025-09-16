import { Calendar, House, Bell, CircleUser } from 'lucide-react';
import { XBottomTab } from 'x-app-ui';

// Pages
import Home from '../pages/Home';
import Appointment from '../pages/Appointment';
import Notifications from '../pages/Notifications';
import Account from '../pages/Account';

export default function MainLayout() {
    const bottomTabs = [
        {
            component: <Home />,
            title: "Trang chủ",
            icon: (color: string) => <House color={color} />
        },
        {
            component: <Appointment />,
            title: "Đặt lịch",
            icon: (color: string) => <Calendar color={color} />
        },
        {
            component: <Notifications />,
            title: "Thông báo",
            icon: (color: string) => <Bell color={color} />,
            numberNotifications: 3
        },
        {
            component: <Account />,
            title: "Tài khoản",
            icon: (color: string) => <CircleUser color={color} />
        }
    ];

    return (
        <XBottomTab tabs={bottomTabs} />
    );
}
