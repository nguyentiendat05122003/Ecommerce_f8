export const formatFilterFollow = ({ title, activeData }) => {
  const valueActive = activeData.join(" | ");
  return title + " : " + valueActive;
};
