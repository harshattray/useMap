const mapHandler = data =>
  data.map(value => {
    return value;
  });

const useHooktest = (data, type, check) => {
  if (!Array.isArray(data)) return;
  if (type === "map") {
    return mapHandler(data);
  }
};

export default useHooktest;
