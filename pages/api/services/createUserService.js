import bcrypt from "bcryptjs";

import { prisma } from "../database/database";

import { removeObjectProperty } from "../../../utils/removeObjectProperty";

export async function createUserService({ name, email, password, contact }) {
  const emailAlreadyExists = await prisma.users.findFirst({
    where: {
      email,
    },
  });

  if (!emailAlreadyExists) {
    const createdUser = await prisma.users.create({
      data: {
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        contact,
      },
    });

    removeObjectProperty(createdUser, "password");

    return createdUser;
  }
}
