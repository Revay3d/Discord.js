const fs = require("fs");
const { REST, Routes } = require("discord.js");
const config = require("../src/config.json");
require("dotenv").config();
const commands = [];
const slashCommandsFiles = fs
  .readdirSync("./src/commands/slashCommands")
  .filter((file) => file.endsWith("js"));

for (const file of slashCommandsFiles) {
  const slash = require(`../src/commands/slashCommands/${file}`);
  commands.push(slash.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.token);

createSlash();

async function createSlash() {
  try {
    await rest.put(Routes.applicationCommands(config.clientId, config.guildId), {
      body: commands,
    });
    console.log("[Slash Commands] Agregados.");
  } catch (e) {
    console.error(e);
  }
}