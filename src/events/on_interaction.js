export default {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const slashCommand = client.slashCommands.get(interaction.commandName);

      if (!slashCommand) return;

      try {
        await slashCommand.run(client, interaction);
      } catch (e) {
        console.error(e);
      }
    }
  },
};
