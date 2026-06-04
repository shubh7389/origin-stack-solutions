import * as XLSX from "xlsx";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  timestamp: string;
}

export function exportToExcel(data: ContactFormData[], filename: string = "contact-submissions.xlsx") {
  if (data.length === 0) {
    alert("No data to export!");
    return;
  }

  // Create a new workbook
  const worksheet = XLSX.utils.json_to_sheet(data);
  
  // Set column widths
  const columnWidths = [
    { wch: 20 }, // name
    { wch: 30 }, // email
    { wch: 25 }, // company
    { wch: 25 }, // service
    { wch: 40 }, // message
    { wch: 20 }, // timestamp
  ];
  worksheet["!cols"] = columnWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Contact Forms");

  // Generate filename with current date
  const date = new Date().toISOString().split("T")[0];
  const finalFilename = `${date}-${filename}`;

  // Write the file
  XLSX.writeFile(workbook, finalFilename);
}

export function saveContactData(data: ContactFormData) {
  try {
    const existing = localStorage.getItem("contactSubmissions");
    const submissions = existing ? JSON.parse(existing) : [];
    submissions.push(data);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
  } catch (error) {
    console.error("Failed to save contact data:", error);
  }
}

export function getContactData(): ContactFormData[] {
  try {
    const existing = localStorage.getItem("contactSubmissions");
    return existing ? JSON.parse(existing) : [];
  } catch (error) {
    console.error("Failed to retrieve contact data:", error);
    return [];
  }
}

export function clearContactData() {
  try {
    localStorage.removeItem("contactSubmissions");
  } catch (error) {
    console.error("Failed to clear contact data:", error);
  }
}
