import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('resume');

next();
export default upload;

