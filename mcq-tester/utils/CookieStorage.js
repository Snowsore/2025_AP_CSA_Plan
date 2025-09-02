export const CookieStorage = {
  setItem: (key, value) => {
    document.cookie = `${key}=${value}; path=/;`;
  },
  getItem: (key) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const [cookieKey, cookieValue] = cookies[i].split("=");
      if (cookieKey === key) {
        return cookieValue;
      }
    }
    return null;
  },
  setJson: (key, value) => {
    CookieStorage.setItem(key, JSON.stringify(value));
  },
  getJson: (key) => {
    const value = CookieStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  removeItem: (key) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  },
};
