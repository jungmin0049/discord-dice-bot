// const quiz = require('./quiz.json');
// // ...
// const item = quiz[Math.floor(Math.random() * quiz.length)];
// const collectorFilter = (response) => {
//   return item.answers.some(
//     (answer) => answer.toLowerCase() === response.content.toLowerCase(),
//   );
// };

// interaction
//   .reply({ content: item.question, withResponse: true })
//   .then((response) => {
//     response.resource.message.channel
//       .awaitMessages({
//         filter: collectorFilter,
//         max: 1,
//         time: 30_000,
//         errors: ['time'],
//       })
//       .then((collected) => {
//         interaction.followUp(
//           `${collected.first().author} got the correct answer!`,
//         );
//       })
//       .catch((collected) => {
//         interaction.followUp('Looks like nobody got the answer this time.');
//       });
//   });

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('delete')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
