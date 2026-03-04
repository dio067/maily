import findOrCreateNewUser from './users';

const initDB = async () => {
  await findOrCreateNewUser();
};

export default initDB;
