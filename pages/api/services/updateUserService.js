import { prisma } from "../database/database";

import { removeObjectProperty } from "../../../utils/removeObjectProperty";

export async function updateUserService(id, data) {
  const { name, contact } = data.user;

  const updatedUser = await prisma.users.update({
    data: {
      name,
      contact,
    },
    where: {
      id: id,
    },
  });

  removeObjectProperty(updatedUser, "password");

  return updatedUser;
}
