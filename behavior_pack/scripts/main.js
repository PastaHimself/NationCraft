import { world } from "@minecraft/server";

const PREFIX = "§8[§6NationCraft§8]§r";

world.afterEvents.playerSpawn.subscribe((event) => {
  if (!event.initialSpawn) return;

  event.player.sendMessage(`${PREFIX} §aAdd-on template loaded.`);
});
