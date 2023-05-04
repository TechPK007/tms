const getListWithId = list => {
  const listWithId = list.map((data, i) => {
    return {id: i, item: data};
  });
  return listWithId;
};
export default getListWithId;
