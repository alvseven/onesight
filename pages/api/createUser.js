import { createUserService } from "./services/createUserService";

export default async (req, res) => {
  const newUser = await createUserService(req.body);

  if (newUser.message) {
    return res.status(409).json(newUser);
  }

  return res.status(201).json(newUser);
};
