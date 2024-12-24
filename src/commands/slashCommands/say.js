import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("dire lo que me pidas")
    .addStringOption((option) =>
      option
        .setName("mensaje")
        .setDescription("El mensaje que se repetirá")
        .setRequired(true)
    ),

  /**
   *
   * @param {import("discord.js").Client<true>} client
   * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction
   */

  async run(client, interaction) {
    const message = interaction.options.getString("mensaje");
    await interaction.reply(message);
  },
};
