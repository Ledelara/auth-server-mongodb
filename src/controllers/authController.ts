import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import { User } from "../models/userModels";


const SECRET_KEY = process.env.JWT_SECRET || "secret-key";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email e senha são obrigatórios." });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Usuário registrado com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao registrar usuário." });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email e senha são obrigatórios." });
    return;
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ message: "Credenciais inválidas." });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Credenciais inválidas." });
      return;
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao autenticar usuário." });
  }
};
