import { useLoading, XButton, XTabBar } from 'x-app-ui';

export default function LoadingDemo() {
    const {showLoading, hidenLoading} = useLoading()

    return (
        <div className="demo-section">
            <h2>LoadingDemo</h2>
            <p>Các nút tương tác với nhiều kiểu và trạng thái khác nhau</p>

            <XTabBar tabs={[
                {
                    key: "preview",
                    label: "Xem trước",
                    component: (
                        <div className="demo-container">
                            <h3 className='xa:font-bold'>Nhấn nút để bật loading</h3>
                            <div>
                                <XButton onClick={() => {
                                    showLoading();
                                    setTimeout(hidenLoading, 3000)
                                }}>Show loading</XButton>
                            </div>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { useLoading, XButton } from 'x-app-ui';

const { showLoading, hidenLoading } = useLoading();

// Sử dụng loading
<XButton onClick={() => {
  showLoading();
  setTimeout(hidenLoading, 3000);
}}>
  Bật loading 3s
</XButton>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
