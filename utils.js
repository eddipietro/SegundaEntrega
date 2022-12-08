import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);


export const getDirName = () => {

    const __dirname = path.dirname(__filename);
    console.log('directory-name', __dirname);
    return __dirname
};
