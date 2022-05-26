export function getStorage() {
  if (localStorage.length > 0) {
    const storage = localStorage.getItem('token');
    return storage;
  }
}

export function setStorage(token) {
  localStorage.setItem('token', token);
}

export function getRanking() {
  if (localStorage.length > 0) {
    const storage = JSON.parse(localStorage.getItem('ranking'));
    return storage;
  }
}

export function setRanking(ranking) {
  localStorage.setItem('ranking', JSON.stringify(ranking));
}
