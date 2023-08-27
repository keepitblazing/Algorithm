function solution(cacheSize, cities) {
  let cache = [];

  const time = cities.reduce((acc, city) => {
    city = city.toLowerCase();
    const cacheIndex = cache.indexOf(city);

    if (cacheIndex !== -1) {
      cache.splice(cacheIndex, 1);
      cache.unshift(city);
      return acc + 1;
    } else {
      cache.unshift(city);
      if (cache.length > cacheSize) {
        cache.pop();
      }
      return acc + 5;
    }
  }, 0);

  return time;
}
