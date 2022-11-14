import { listUsersService } from "./services/listUsersService";

export default async (req, res) => {
  const users = await listUsersService();

  return res.status(200).json(users);
};
