import { Client, Collection } from "discord.js";
import fs from "node:fs";
import { token } from "./config";

const client = new Client({ intents: 3276799 });
client.commands = new Collection();

// Cargar los comandos
client.slashCommands = new Collection();
client.commands = new Collection();

async function handlers() {
  const slashCommandsFiles = fs
    .readdirSync("./src/commands/slashCommands")
    .filter((file) => file.endsWith("js"));
  for (const file of slashCommandsFiles) {
    const { default: slash } = await import(`./commands/slashCommands/${file}`);
    client.slashCommands.set(slash.data.name, slash);
  }

  const commandFiles = fs
    .readdirSync("./src/commands/prefix")
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const { default: command } = await import(`./commands/prefix/${file}`);
    client.commands.set(command.data.name, command);
  }

  // Cargar los demás eventos
  const eventFiles = fs
    .readdirSync("./src/events")
    .filter((file) => file.endsWith(".js"));
  for (const file of eventFiles) {
    if (file !== "deployCommands.js") {
      const { default: event } = await import(`./events/${file}`);
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
    }
  }
}

handlers().then(() => {
  client.login(token);
});
