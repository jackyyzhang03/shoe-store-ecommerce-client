// TODO: Extract URL to variable.
const fetchProductById = async (id) => {
  const response = await fetch("http://localhost:4242/products/" + id);
  const product = await response.json();
  return product;
};

export { fetchProductById };