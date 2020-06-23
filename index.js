// Discord Bot Dependencies.
const Discord = require("Discord.js");
const bot = new Discord.Client();

// Show that the bot is running by logging it in the terminal window.
console.clear(); // Clear Console.
console.warn("Server Role Assigner: Running...."); // Show Message.

// Member Role IDs.
const dcv1 = "700385883395981413"; // Dreamcast Version 1.
const dcv2 = "700390319027650610"; // Dreamcast Version 2.
const psogc = "700390658460090389"; // PSO GameCube. 
const psopc = "700386019345956865"; // PSO PC.
const psobb = "713743313701961749"; // PSO BB.
const psox = "713744416367444058"; // PSOX.
const pso2 = "716064125188309024"; // PSOX.

// Server Role Assignment Conditions.
bot.on('message', (message) => {
    if (message.content == "!role dcv1") {
        message.member.roles.add(dcv1);
        message.reply("you have been successfully assigned to PSO Dreamcast Version 1!");
    } else if (message.content == "!role dcv2") {
        message.member.roles.add(dcv2);
        message.reply("you have been successfully assigned to PSO Dreamcast Version 2!");
    } else if (message.content == "!role psogc") {
        message.member.roles.add(psogc);
        message.reply("you have been successfully assigned to PSO GameCube!");
    } else if (message.content == "!role psopc") {
        message.member.roles.add(psopc);
        message.reply("you have been successfully assigned to PSO for PC!");
    } else if (message.content == "!role psobb") {
        message.member.roles.add(psobb);
        message.reply("you have been successfully assigned to PSO Blue Burst!");
    } else if (message.content == "!role psox") {
        message.member.roles.add(psox);
        message.reply("you have been successfully assigned to PSO for Xbox!");
    } else if (message.content == "!role pso2") {
        message.member.roles.add(pso2);
        message.reply("you have been successfully assigned to PSO2!");
    } else if (message.content == "!role info") {
        message.reply("I'm the DreamTeam PSO! role assigner, simply type '!role' followed by the name of a valid role command. If you typed the correct role, you will automatically become assigned to that role, letting other members know which versions of the game you play. If you play multiple versions of PSO, give yourself all roles that apply. You can find all the valid server roles listed under the channel '💬-assign-roles'.");
    }
});

// Bot Login Token.
// bot.login("<TOKEN-HERE>");