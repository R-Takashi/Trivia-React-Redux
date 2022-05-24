export const SAVE_DATA = 'SAVE_DATA';

export const saveData = (email, name) => ({
  type: SAVE_DATA,
  email,
  name,
});