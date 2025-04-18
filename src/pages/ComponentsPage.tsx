import { XInput, XButton, XTextarea, XModal, XBottomSheet } from "x-app-ui"
import { useState } from "react";

function ComponentsPage() {
    const [isOpenBottomSheet, setOpenBottomSheet] = useState({
        isOpen: false,
        isTitle: false
    });
    const [isOpenModal, setIsOpenModal] = useState(false)

    return (
        <div className="xa:p-4">
            <h1 className='xa:text-2xl xa:font-bold'>Component Mini App V1</h1>
            <br />
            <h2 className='xa:text-xl xa:font-bold'>Button</h2>
            <p >Highlight</p>
            <XButton variant="highlight" level="primary">Default</XButton>
            <XButton variant="highlight" level="secondary">Secondary</XButton>
            <XButton variant="highlight" level="tertiary">Tertiary</XButton>
            <p>Danger</p>
            <XButton variant="danger" level="primary">Default</XButton>
            <XButton variant="danger" level="secondary">Secondary</XButton>
            <XButton variant="danger" level="tertiary">Tertiary</XButton>
            <p>Danger</p>
            <XButton variant="neutral" level="primary">Default</XButton>
            <XButton variant="neutral" level="secondary">Secondary</XButton>
            <XButton variant="neutral" level="tertiary">Tertiary</XButton>
            <p>Size</p>
            <XButton size="small">Small</XButton>
            <XButton size="medium">Medium</XButton>
            <XButton size="large">Large</XButton>
            <XButton size="full-width">Full Width</XButton>
            <p>State</p>
            <XButton state="disabled">Disabled</XButton>
            <XButton state="loading">Loading</XButton>
            <br />
            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Input</h2>
            <br />
            <XInput />
            <br />
            <XInput label="Label" placeholder="Placeholder" helperText="Helper Text" />
            <br />
            <XInput label="Error" placeholder="Placeholder" helperText="Helper Text" status="error" />
            <br />
            <XInput label="Warning" placeholder="Placeholder" helperText="Helper Text Warning" status="warning" />
            <br />
            <XInput label="Success" placeholder="Placeholder" helperText="Helper Text Success" status="success" />
            <br />
            <XInput disabled label="Disable" placeholder="Placeholder" value="Disable" />
            <br />
            <XInput type="password" label="Password" placeholder="Placeholder" />
            <br />
            <XTextarea label="Textarea" placeholder="Placeholder" helperText="Helper Text" />
            <br />
            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Bottom Sheet</h2>
            <br />
            <XButton onClick={() => setOpenBottomSheet({
                isOpen: true,
                isTitle: false
            })}>Open sheet</XButton>
            <XButton onClick={() => setOpenBottomSheet({
                isOpen: true,
                isTitle: true
            })}>Open sheet with title</XButton>
            <XBottomSheet
                title={isOpenBottomSheet.isTitle ? "Title Bottom Sheet" : undefined}
                isOpen={isOpenBottomSheet.isOpen}
                onClose={() => setOpenBottomSheet(pre => ({ ...pre, isOpen: false }))}
            >
                <div className="xa:h-[300px] xa:px-4">Bottom Sheet Content</div>
            </XBottomSheet>
            <br />
            <br />
            <br />
            <br />

            <h2 className='xa:text-xl xa:font-bold'>Modal</h2>
            <br />
            <XButton onClick={() => setIsOpenModal(true)}>Open Modal</XButton>
            <XModal
                isOpen={isOpenModal}
                onClose={() => setIsOpenModal(false)}
                title="Title Example Modal"
            >
                <p>This is the content of the modal.</p>
            </XModal>
            <br />
            <br />
            <br />
            <br />

        </div>
    )
}

export default ComponentsPage
