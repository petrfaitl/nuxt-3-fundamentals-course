export default defineEventHandler(async (event) => {
  const {search, page} = getQuery(event);
  // console.log("Query is:",search);
  // console.log(getQuery(event));
  // console.log(getQuery(event));

  return await $fetch(`http://www.omdbapi.com/?apikey=bfab315d&s=${search}&page=${page}`)
})
