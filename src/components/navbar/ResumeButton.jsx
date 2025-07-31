const ResumeButton = () => {
  const handleResumeDownload = () => {
    // Open in new tab
    window.open('/Nayan_Hajare_Resume.pdf', '_blank');
    
    // Also trigger download
    const link = document.createElement('a');
    link.href = '/Nayan_Hajare_Resume.pdf';
    link.download = 'Nayan_Hajare_Resume.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <li className="group">
      <button
        onClick={handleResumeDownload}
        className="cursor-pointer text-white hover:text-cyan transition-all duration-500 bg-transparent border-none font-body"
      >
        Resume
      </button>
      <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
    </li>
  );
};

export default ResumeButton; 