/*
* Why we use utils?
*   -Readability
*   -Reusability
*/


export function filteredData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}
