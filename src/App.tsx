import "x-app-ui/x-app-ui.css"

import { XBottomTab } from "x-app-ui";
import ComponentsPage from "./pages/ComponentsPage";
import SDKPage from "./pages/SDKPage";

function App() {
  const bottomTabs = [
    {
      component: <div />,
      title: "Trang chủ",
      icon: (color: string) => <div style={{ color: color }}>TC</div>
    },
    {
      component: <ComponentsPage />,
      title: "Giao diện",
      icon: (color: string) => <div style={{ color: color }}>CP</div>,
      numberNotifications: 5
    },
    {
      component: <SDKPage />,
      title: "Sdk",
      icon: (color: string) => <div style={{ color: color }}>TK</div>
    }
  ]

  return (
    <div>
      <XBottomTab tabs={bottomTabs} />
    </div>
  )
}

export default App
