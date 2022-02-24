module.exports = [{
    name: "slowmode",
    $if: "v4",
    aliases: ['sm', 'slow-mode'],
    code: `
$if[$message[2]!=]
$setMessageVar[B1;$findChannel[$message[2];no];$messageID]
$addButton[1;Disable Slowmode;4;B1;no;]
$author[1;$userTag;$authorAvatar;]
$title[1;Slowmode]
$description[1;Members will be restricted to sending one message and creating one thread per this interval, unless they have Manage Channel or Manage Messages permissions.

> Slowmode successfully changed to **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; seconds];m; minutes];h; hours];1 seconds;1 second];1 minutes;1 minute];1 hours;1 hour]** at **<#$findChannel[$message[2];no]>**]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$slowMode[$message[1];$findChannel[$message[2];no]]
$onlyIf[$serverChannelExists[$findChannel[$message[2];no]]==true;Invalid channel provided.]

$elseIf[$message[1]!=]
$author[1;$userTag;$authorAvatar;]
$title[1;Slowmode]
$description[1;Members will be restricted to sending one message and creating one thread per this interval, unless they have Manage Channel or Manage Messages permissions.

> Slowmode successfully changed to **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; seconds];m; minutes];h; hours];1 seconds;1 second];1 minutes;1 minute];1 hours;1 hour]**]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$slowMode[$message[1];$channelID]
$endelseIf

$elseIf[$getChannelSlowmode==0]
Slowmode already disabled on this channel.
$endelseIf

$elseIf[$message==]
$author[1;$userTag;$authorAvatar;]
$title[1;Slowmode Disabled]
$description[1;This function sets a cooldown to the given channel ID. 0 will set the cooldown to none, and if set to none it will set the cooldown to 0.]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$slowMode[0;$channelID]
$endelseIf

$endIf
`
}, {
        name: "B1",
        type: "interaction",
        prototype: "button",
        code: `
$getMessageVar[B1;$messageID]
$interactionReply[$getChannelVar[B1];;;;;yes]
$onlyPerms[admin;{
 "content" : "You are not allowed to use this button.",
 "ephemeral" : true,
 "options" : {
 "interaction" : true
 }
}]
`
    }]

//!sm #time #channel
//!sm #time