import createUsersTable from './users';

const initDB = async () => {
  await createUsersTable();
};

export default initDB;
