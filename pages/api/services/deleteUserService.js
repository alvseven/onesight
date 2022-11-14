import { prisma } from "../database/database";

export async function deleteUserService({ id }) {
  await prisma.users.delete({
    where: {
      id: id,
    },
  });
}
