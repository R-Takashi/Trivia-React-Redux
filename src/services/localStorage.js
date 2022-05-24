export function getStorage() {
  if (localStorage.length > 0) {
    const storage = JSON.parse(localStorage.getItem('token'));
    return storage;
  }
}

export function setStorage(token) {
  localStorage.setItem('token', token);
}
