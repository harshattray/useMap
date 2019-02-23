const mapHandler = data =>
  data.map(value => {
    return value;
  });

const useMap = (data, type, check) => {
  if (!Array.isArray(data)) return;
  return mapHandler(data);
};

export default useMap;
