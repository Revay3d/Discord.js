import "dotenv/config";

export const {
  token,
  clientId = "(some default value)",
  guildId = "(some default value)",
  prefix = "+",
} = process.env;
// I recommended get this data from the env variables.
