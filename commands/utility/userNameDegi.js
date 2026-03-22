const {
  InteractionContextType,
  PermissionFlagsBits,
  SlashCommandBuilder,
} = require('discord.js');

///https://discordjs.guide/legacy/slash-commands/parsing-options

module.exports = {
  data: new SlashCommandBuilder()
    .setName('사람이름대기')
    .setDescription('사람 선택.')
    .addUserOption((option) =>
      option
        .setName('target')
        .setDescription('The member to ban')
        .setRequired(true),
    )
    .addStringOption((option) =>
      option.setName('이유').setDescription('왜 지목함?'),
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .setContexts(InteractionContextType.Guild)
    //응답을 특정채널로
    .addChannelOption((option) =>
      option.setName('channel').setDescription('The channel to echo into'),
    ),
  //set required 는 유효성 검사
  async execute(interaction) {
    const target = interaction.options.getUser('target');
    const reason =
      interaction.options.getString('reason') ?? 'No reason provided';
    await interaction.reply(`Banning ${target.username} for reason: ${reason}`);
    // await interaction.guild.members.ban(target);
  },
};
