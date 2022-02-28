module.exports = [{
    name: "balance",
    $if: "v4",
    aliases: ['bal'],
    code: `
$if[$message==]
$author[1;$userTag;$authorAvatar;]
$title[1;Balance]
$description[1;**Cash**
\`\`\`$getUserVar[$authorID;cash]\`\`\`]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$cooldown[5s;{newEmbed:{author:$userTag:$authorAvatar}{title:Cooldown Time}{description:Almost every command that is under the "\`Member\`" folder has a cooldown of 5 seconds, so you'd have to wait for %fullTime%.}{color:ORANGE}{footer:Date:https://emoji.gg/assets/emoji/2226-calendar.png}{timestamp}}]
$else

$endIf
`
}]