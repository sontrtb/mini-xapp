import { House, Bell, CircleUser } from 'lucide-react';
import { XBottomTab } from 'x-app-ui';
import HomeTab from './tabs/HomeTab';
import NotificationTab from './tabs/NotificationTab';
import ProfileTab from './tabs/ProfileTab';

export default function Home() {
  const tabs = [
    {
      component: <HomeTab />,
      title: 'Trang chủ',
      icon: (color: string) => <House color={color} />,
    },
    {
      component: <NotificationTab />,
      title: 'Thông báo',
      icon: (color: string) => <Bell color={color} />,
      numberNotifications: 3,
    },
    {
      component: <ProfileTab />,
      title: 'Tài khoản',
      icon: (color: string) => <CircleUser color={color} />,
    },
  ];

  return <XBottomTab tabs={tabs} />;
}
