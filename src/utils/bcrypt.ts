import bcrypt from 'bcrypt';

const { BCRYPT_SALT_ROUDS = '8' } = process.env;
const SALT_ROUNDS = Number.parseInt(BCRYPT_SALT_ROUDS, 10);

export const encrypt = async (
  text: string,
  saltRounds: number = SALT_ROUNDS,
): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(text, salt);
  return hash;
};

export const encryptSync = (
  text: string,
  saltRounds: number = SALT_ROUNDS,
): string => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(text, salt);
  return hash;
};

export const compare = async (
  text: string,
  hash: string,
): Promise<boolean>  => {
  const isValid = bcrypt.compare(text, hash);
  return isValid;
};

export const compareSync = (
  text: string,
  hash: string,
): boolean  => {
  const isValid = bcrypt.compareSync(text, hash);
  return isValid;
};
