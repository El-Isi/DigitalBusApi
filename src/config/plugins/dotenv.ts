import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();
let _path = path.join(__dirname, '..', '..', '..');
switch (process.env.NODE_ENV) {
  case 'test':
    _path = path.join(_path, '.env.test');
    break;
  case 'production':
    _path = path.join(_path, '.env.production');
    break;
  default:
    _path = path.join(_path, '.env.development');
}

dotenv.config({ path: _path });
