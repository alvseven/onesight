export async function createUser(user) {
  await fetch("http://localhost:3000/api/createUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
