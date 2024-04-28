const debounce = (fn, delay = 1000) => {
  let timer;
  return (...args) => {
    clearInterval(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const handler = async (e) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${e.target.value}`
  );
  const data = await response.json();
  console.log(data.products);

  console.log("event", e.target.value);
};

const debounced = debounce(handler, 1000);

let inputValue = document.getElementById("input");
inputValue.addEventListener("input", debounced);
