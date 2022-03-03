module.exports = {
    name: "lock",
    $if: "v4",
    code: `
$if[$findChannel[$message;no]==$channelID]
$onlyIf[$hasPermsInChannel[$channelID;$guildID;sendmessage]!=false;{newEmbed:{author:$userTag:$authorAvatar}{title:Already Locked}{description:This channel is already locked.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$elseIf[$message==]
$author[1;$userTag;$authorAvatar;]
$title[1;Lock]
$description[1;Current channel has been locked for members with no \`manage channel\` permission.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$modifyChannelPerms[$guildID;$channelID;-sendmessage]
$onlyIf[$hasPermsInChannel[$channelID;$guildID;sendmessage]!=false;{newEmbed:{author:$userTag:$authorAvatar}{title:Already Locked}{description:This channel is already locked.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$endelseIf
$elseIf[$message!=]
$author[1;$userTag;$authorAvatar;]
$title[1;Lock]
$description[1;The channel <#$findChannel[$message;no]> has been locked for members with no \`manage channel\` permission.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$modifyChannelPerms[$guildID;$findChannel[$message;no];-sendmessage]
$onlyIf[$channelType[$findChannel[$message;no]]==text;]
$onlyIf[$hasPermsInChannel[$findChannel[$message;no];$guildID;sendmessage]!=false;{newEmbed:{author:$userTag:$authorAvatar}{title:Already Locked}{description:That channel is already locked.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$onlyIf[$channelExists[$findChannel[$message;no]]!=false;{newEmbed:{author:$userTag:$authorAvatar}{title:Invalid Channel}{description:It seems like that channel doesn't exist in this server. You could try mentioning the channel, type the channel ID, or type the channel name.}{color:RED}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$endelseIf
$endIf
`
}