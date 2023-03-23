const getScores = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const postScore = async (url, userData) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export { getScores, postScore };