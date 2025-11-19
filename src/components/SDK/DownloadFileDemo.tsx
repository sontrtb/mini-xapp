import { XButton } from "x-app-ui";

// interface APICallDemoProps {
//     onResult: (data: FlutterMessageResponse) => void;
// }

export default function DownloadFileDemo() {

  const onDownload = async () => {
    try {
      const fileUrl = 'https://geo-test-v2.meey.dev/geo-tool/api/file?file=KHSDD_HANOI_QUANCAUGIAY_2024_BV.pdf&_=1751355077864';
      
      // Fetch the file
      const response = await fetch(fileUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the file as a blob
      const blob = await response.blob();
      
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'KHSDD_HANOI_QUANCAUGIAY_2024_BV.pdf'; // Set the filename
      document.body.appendChild(link);
      
      // Trigger the download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      console.log('File downloaded successfully');
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Failed to download file. Please try again.');
    }
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
