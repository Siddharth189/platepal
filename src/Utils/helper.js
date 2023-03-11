export function filterData(searchText, restraunts) {
  return restraunts.filter((res) => {
    return res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
  });
}
