export function arrayStartsWith(base, current) {
  if (current.length > base.length) {
    return false;
  }

  for (let i = 0; i < current.length; i++) {
    if (base[i] !== current[i]) {
      return false;
    }
  }

  return true;
}

export function shuffleArrayInPlace(arr) {
  let currentIndex = arr.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}
