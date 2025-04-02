import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const generatePDF = () => {
  const cvElement = document.getElementById("cv-content"); // Your CV container

  html2canvas(cvElement, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let yPosition = 0;
    let pageHeight = 297; // A4 height in mm

    while (yPosition < imgHeight) {
      pdf.addImage(imgData, "PNG", 0, -yPosition, imgWidth, imgHeight);

      yPosition += pageHeight;
      if (yPosition < imgHeight) {
        pdf.addPage();
      }
    }

    pdf.save("CV.pdf");
  });
};
