export const isJsonString = (data) => {
  try {
    JSON.parse(data);
    return true;
  } catch {
    return false;
  }
};
