import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

 function signToken(payload: object, expiresIn = "1d") {
  return jwt.sign(payload, SECRET, { expiresIn });
}

function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
}

export { signToken, verifyToken };
