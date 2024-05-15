export const checkResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
  };

  