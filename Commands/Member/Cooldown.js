module.exports = {
    name: "cooldown",
    aliases: ['cd'],
    code: `
$author[1;$userTag;$authorAvatar;]
$title[1;Cooldown Information]
$description[1;This function sets a cooldown to the current command, however, commands that were placed under the "\`Admin\`" folder doesn't have any cooldown. And by default, the developer set the cooldown to 5 seconds.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$cooldown[5s;{newEmbed:{author:$userTag:$authorAvatar}{title:Cooldown Time}{description:Almost every command that is under the "\`Member\`" folder has a cooldown of 5 seconds, so you'd have to wait for %fullTime%.}{color:ORANGE}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
`
}