import { XTabBar } from 'x-app-ui';

export default function TabBarDemo() {
    return (
        <div className="demo-section">
            <h2>TabBarDemo</h2>
            <p>Các nút tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <XTabBar tabs={[
                                {
                                    key: "Home",
                                    label: "Trang chủ",
                                    component: <div className='xa:p-4'>Trang chủ</div>
                                },
                                {
                                    key: "news",
                                    label: "Tin tức",
                                    component: <div className='xa:p-4'>Tin tức</div>
                                },
                                {
                                    key: "manger",
                                    label: "Quản lý",
                                    component: <div className='xa:p-4'>Quản lý</div>
                                },
                                {
                                    key: "profile",
                                    label: "Trang cá nhân",
                                    component: <div className='xa:p-4'>Trang cá nhân</div>
                                }
                            ]} />
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { XTabBar } from 'x-app-ui';

<XTabBar tabs={[
  {
    key: "Home",
    label: "Trang chủ",
    component: <div className='xa:p-4'>Trang chủ</div>
  },
  {
    key: "news",
    label: "Tin tức",
    component: <div className='xa:p-4'>Tin tức</div>
  },
  {
    key: "manger",
    label: "Quản lý",
    component: <div className='xa:p-4'>Quản lý</div>
  },
  {
    key: "profile",
    label: "Trang cá nhân",
    component: <div className='xa:p-4'>Trang cá nhân</div>
  }
]} />`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
