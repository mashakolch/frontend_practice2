function downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'Резюме_Колеченкова_Мария.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}