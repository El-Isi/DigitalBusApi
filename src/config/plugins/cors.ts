import cors from 'cors';

const config = {
  credentials: true,
  origin: true,
};

export default cors(config);
