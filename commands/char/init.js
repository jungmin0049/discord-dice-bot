const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require('discord.js');

const data = new ContextMenuCommandBuilder()
  .setName('User Information')
  .setType(ApplicationCommandType.User);

// const {
//   LabelBuilder,
//   ModalBuilder,
//   TextInputBuilder,
//   TextInputStyle,
// } = require('discord.js');

// client.on(Events.InteractionCreate, async (interaction) => {
//   if (!interaction.isChatInputCommand()) return;
//   if (interaction.commandName === 'ping') {
//     // Create the modal
//     const modal = new ModalBuilder()
//       .setCustomId('myModal')
//       .setTitle('My Modal');

//     const favoriteStarterSelect = new StringSelectMenuBuilder()
//       .setCustomId('starter')
//       .setPlaceholder('Make a selection!')
//       // Modal only property on select menus to prevent submission, defaults to true
//       .setRequired(true)
//       .addOptions(
//         // String select menu options
//         new StringSelectMenuOptionBuilder()
//           // Label displayed to user
//           .setLabel('Bulbasaur')
//           // Description of option
//           .setDescription('The dual-type Grass/Poison Seed Pokémon.')
//           // Value returned to you in modal submission
//           .setValue('bulbasaur'),
//         new StringSelectMenuOptionBuilder()
//           .setLabel('Charmander')
//           .setDescription('The Fire-type Lizard Pokémon.')
//           .setValue('charmander'),
//         new StringSelectMenuOptionBuilder()
//           .setLabel('Squirtle')
//           .setDescription('The Water-type Tiny Turtle Pokémon.')
//           .setValue('squirtle'),
//       );
//     const hobbiesInput = new TextInputBuilder()
//       .setCustomId('hobbiesInput')
//       // Short means a single line of text.
//       .setStyle(TextInputStyle.Short)
//       // Placeholder text displayed inside the text input box
//       .setPlaceholder('card games, films, books, etc.');

//     const hobbiesLabel = new LabelBuilder()
//       // The label is a large header that identifies the interactive component for the user.
//       .setLabel("What's some of your favorite hobbies?")
//       // The description is an additional optional subtext that aids the label.
//       .setDescription('Activities you like to participate in')
//       // Set text input as the component of the label
//       .setTextInputComponent(hobbiesInput);

//     const favoriteStarterLabel = new LabelBuilder()
//       .setLabel("What's your favorite Gen 1 Pokémon starter?")
//       // Set string select menu as component of the label
//       .setStringSelectMenuComponent(favoriteStarterSelect);
//     const pictureOfTheWeekUpload = new FileUploadBuilder().setCustomId(
//       'picture',
//     );
//     const pictureOfTheWeekLabel = new LabelBuilder()
//       .setLabel('Picture of the Week')
//       .setDescription('The best pictures you have taken this week')
//       // Set file upload as component of the label
//       .setFileUploadComponent(pictureOfTheWeekUpload);

//     const text = new TextDisplayBuilder().setContent(
//       'Text that could not fit in to a label or description\n-# Markdown can also be used',
//     );

//     // Add the label to the modal
//     modal
//       .addLabelComponents(hobbiesLabel, favoriteStarterLabel)
//       .addTextDisplayComponents(text)
//       .addLabelComponents(pictureOfTheWeekLabel);
//   }
// });
