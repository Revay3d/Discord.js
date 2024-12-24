import { readdirSync } from "node:fs";
import { REST, Routes } from "discord.js";
import { clientId, guildId } from "../src/config.js";

const commands = [];
const slashCommandsFiles = readdirSync("./src/commands/slashCommands").filter(
  (file) => file.endsWith("js")
);

const rest = new REST({ version: "10" }).setToken(process.env.token);

async function createSlash() {
  try {
    for (const file of slashCommandsFiles) {
      const { default: slash } = await import(
        `../src/commands/slashCommands/${file}`
      );
      commands.push(slash.data.toJSON());
    }

    await rest.put(Routes.applicationCommands(clientId, guildId), {
      body: commands,
    });
    console.log("[Slash Commands] Agregados.");
  } catch (e) {
    console.error(e);
  }
}

createSlash();
