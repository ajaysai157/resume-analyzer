import pdfParse from 'pdf-parse';

 const parse = async (fileBuffer) => {
     try {
         const pdfData = await  pdfParse(fileBuffer);    
        return pdfData.text;
        } catch (error) {
            console.error("Error parsing PDF:", error);
            throw new Error("Failed to parse PDF");
        }
    }

export default  parse;