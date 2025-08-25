import { useToast, XButton, XTabBar } from 'x-app-ui';

export default function ToastDemo() {
    const { showToast } = useToast()

    return (
        <div className="demo-section">
            <h2>ToastDemo</h2>
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
                                    showToast("Thôngbáothànhcông!ThôngbáothànhThôngbáothànhThôngbáothànhThôngbáothành", { status: "success" });
                                }}>Thành công</XButton>
                                <br />
                                <br />
                                <XButton onClick={() => {
                                    showToast("Thông báo thất bại!", { status: "error" });
                                }}>Thất bại</XButton>
                                <br />
                                <br />
                                <XButton onClick={() => {
                                    showToast("Thông báo !");
                                }}>Thông tin</XButton>
                            </div>
                        </div>
                    )
                },
                {
                    key: "code",
                    label: "Code",
                    component: (
                        <div className="code-block">
                            <pre><code>{`import { useToast, XButton } from 'x-app-ui';

const { showToast } = useToast();

// Toast thành công
<XButton onClick={() => {
  showToast("Thông báo thành công!", { status: "success" });
}}>Thành công</XButton>

// Toast thất bại
<XButton onClick={() => {
  showToast("Thông báo thất bại!", { status: "error" });
}}>Thất bại</XButton>

// Toast thông tin
<XButton onClick={() => {
  showToast("Thông báo !");
}}>Thông tin</XButton>`}</code></pre>
                        </div>
                    )
                }
            ]} />
        </div>
    );
}
