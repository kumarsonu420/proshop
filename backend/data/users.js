import bcrypt from "bcryptjs";

const users = [
  {
    name: "Sonu Kumar",
    email: "sonu@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Aman Jain",
    email: "aman@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Shubham Jaiswal",
    email: "shubham@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
