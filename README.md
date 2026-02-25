# 📄 Image to PDF Tool

> A powerful Node.js application that converts images to PDF documents with easy image embedding, PDF manipulation, and text annotation capabilities.

## ✨ Features

- **Create New PDFs**: Generate brand new PDF documents from scratch
- **Image Embedding**: Embed JPEG and other image formats directly into PDF documents
- **PDF Modification**: Load and modify existing PDF files with new content
- **Text Annotation**: Add custom text with color formatting to PDF pages
- **Image Scaling**: Scale and position images precisely within PDF pages
- **Auto-cleanup**: Automatic deletion of temporary files after generation
- **Express Integration**: Built with Express.js for easy server integration
- **File Upload Support**: Handle file uploads with Multer middleware

## 🛠️ Tools & Technologies Used

| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | Web application framework |
| **pdf-lib** | PDF creation and manipulation library |
| **Multer** | Middleware for handling file uploads |
| **fs/promises** | File system operations with async/await |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ASHENEE123/Image_to_Pdf-tool.git
   cd Image_to_Pdf-tool
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install required packages**
   ```bash
   npm install express pdf-lib multer
   ```

## 📝 How to Run

1. **Create the output directory** (required for saving PDFs)
   ```bash
   mkdir views
   ```

2. **Start the application**
   ```bash
   node pdflib.js
   ```

3. **Access the application**
   - The server will run on your configured port
   - Check console output for the running port and status messages

## 💻 Usage Examples

### Creating a New PDF with Text

```javascript
import { PDFDocument, rgb } from "pdf-lib";

const pdf = await PDFDocument.create();
const page = pdf.addPage();
const { width, height } = page.getSize();

page.drawText("Hello PDF!", {
  x: 200,
  y: height - 120,
  color: rgb(0, 0.56, 0.34)
});
```

### Embedding an Image

```javascript
const imgPath = "path/to/image.jpg";
const imgData = await fs.readFile(imgPath);
const embeddedImage = await pdf.embedJpg(imgData);

const page = pdf.addPage();
const scaledImage = embeddedImage.scale(0.5);

page.drawImage(embeddedImage, {
  x: page.getWidth() / 2 - scaledImage.width / 2,
  y: page.getHeight() / 2 - scaledImage.height / 2,
  width: scaledImage.width,
  height: scaledImage.height
});
```

### Modifying Existing PDF

```javascript
const existingPdfPath = "path/to/existing.pdf";
const pdfData = await fs.readFile(existingPdfPath);
const modifiedPdf = await PDFDocument.load(pdfData);

const pages = modifiedPdf.getPages();
const firstPage = pages[0];

firstPage.drawText("Modified Content", {
  x: 50,
  y: 100,
  color: rgb(1, 0, 0)
});
```

## 📁 Project Structure

```
Image_to_Pdf-tool/
├── README.md              # Project documentation
├── pdflib.js             # Main application file
├── package.json          # Project dependencies
└── views/                # Output directory for generated PDFs
```

## 🔄 File Auto-cleanup

Generated PDF files are automatically deleted after 60 seconds:
```javascript
setTimeout(async function clear(){
    await fs.unlink(filePath);
    console.log("file deleted");
}, 60000); // 60 seconds
```

## 🎨 Color Customization

Use the `rgb()` function to set custom colors:
```javascript
rgb(red, green, blue)  // Values between 0 and 1
// Example: rgb(0, 0.56, 0.34) = Green
```

## 📖 API Reference

### Key pdf-lib Methods

- `PDFDocument.create()` - Create a new PDF document
- `PDFDocument.load(data)` - Load an existing PDF
- `addPage()` - Add a new page to the PDF
- `drawText(text, options)` - Draw text on a page
- `drawImage(image, options)` - Draw an image on a page
- `embedJpg(imageData)` - Embed a JPEG image
- `save()` - Serialize the PDF to bytes
- `getSize()` - Get page dimensions
- `getPages()` - Get all pages from a PDF

## 🐛 Troubleshooting

**Issue**: File path errors
- **Solution**: Ensure files exist and use correct file paths

**Issue**: Image embedding fails
- **Solution**: Verify the image format is supported (JPEG, PNG)

**Issue**: Module not found errors
- **Solution**: Run `npm install` to install all dependencies

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

**ASHENEE123** - Image to PDF Tool Creator

## 💡 Future Enhancements

- [ ] Support for PNG and PDF image formats
- [ ] Batch image to PDF conversion
- [ ] Web UI for easier interaction
- [ ] PDF compression options
- [ ] Watermark support
- [ ] Multi-page PDF handling

---

**⭐ If you find this project useful, please consider giving it a star!**