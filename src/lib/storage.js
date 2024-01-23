export const getItem = (key) => {
  const value = window.localStorage.getItem(key) || null;
  try {
    const mainValue = JSON.parse(value)
    return (typeof mainValue === 'boolean' || typeof mainValue === 'number') ? mainValue : (mainValue || null);
  } catch (error) {
    return value || null;
  }
};