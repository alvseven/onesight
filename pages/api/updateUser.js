import { updateUserService } from "./services/updateUserService";

export default async (req, res) => {
  const updatedUser = await updateUserService(req.body.id, req.body);

  return res.status(201).json(updatedUser);
};
