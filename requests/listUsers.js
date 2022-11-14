export async function listUsers() {
  const data = await fetch("http://localhost:3000/api/listUsers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.json();
}
