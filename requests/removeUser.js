export async function removeUser(id) {
  await fetch("http://localhost:3000/api/deleteUser", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });
}
