import { ActivityType } from "discord.js";

export default {
  name: "ready",
  once: true,
  execute(client) {
    console.log(`El bot: ${client.user.tag} esta listo.`);
    client.user.setPresence({
      status: "dnd",
      activities: [
        {
          name: "RevayBot",
          type: ActivityType.Playing,
        },
      ],
    });
  },
};
