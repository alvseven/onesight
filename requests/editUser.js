export async function editUser(id, user) {
  await fetch("http://localhost:3000/api/updateUser", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, user }),
  });
}
