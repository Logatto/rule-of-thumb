async function Client(url = "", data = {}, method = "GET") {
  const body = Object.keys(data).length > 0 ? JSON.stringify(data) : null;

  let options = {
    method: method,
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body,
  };

  const response = await fetch(url, options);
  return response.json();
}

export default Client;
