import { XButton } from "x-app-ui";
import { saveFile } from "x-app-sdk";

export default function DownloadFileDemo() {

  const onDownload = async () => {
    const res = await saveFile("https://pdfobject.com/pdf/sample.pdf")

    console.log("res save file", res)
  }

  return (
    <section className="xa:mb-10 xa:bg-white xa:rounded-lg xa:shadow-sm xa:p-4">
      <h2 className='xa:text-xl xa:font-bold xa:mb-2 xa:text-primary'>Download File</h2>

      <XButton
        onClick={onDownload}
        className="xa:w-full"
      >
        Download
      </XButton>
    </section>
  );
}
