import { deleteUserService } from "./services/deleteUserService";

export default async (req, res) => {
  await deleteUserService(req.body);

  return res.status(204).send();
};
