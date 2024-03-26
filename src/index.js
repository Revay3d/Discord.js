const { Client, Collection } = require("discord.js");
const fs = require("fs");

const client = new Client({ intents: 3276799 });
client.commands = new Collection();



// const config = require("./config.json");
// const { token } = config;


require("dotenv").config();

// Cargar los comandos
client.slashCommands = new Collection();
client.commands = new Collection();

const slashCommandsFiles = fs
  .readdirSync("./src/commands/slashCommands")
  .filter((file) => file.endsWith("js"));
for (const file of slashCommandsFiles) {
  const slash = require(`./commands/slashCommands/${file}`);
  client.slashCommands.set(slash.data.name, slash);
}

const commandFiles = fs
  .readdirSync("./src/commands/prefix")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/prefix/${file}`);
  client.commands.set(command.data.name, command);
}

// Cargar los demás eventos
const eventFiles = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith(".js"));
for (const file of eventFiles) {
  if (file !== "deployCommands.js") {
    const event = require(`./events/${file}`);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    }
  }
}

client.login(process.env.token);
