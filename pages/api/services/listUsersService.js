import { prisma } from "../database/database";

import { removeObjectProperty } from "../../../utils/removeObjectProperty";

export async function listUsersService() {
  const users = await prisma.users.findMany();

  users.forEach((user) => {
    removeObjectProperty(user, "password");
  });

  return users;
}
