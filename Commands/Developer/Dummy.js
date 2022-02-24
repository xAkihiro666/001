module.exports = [{
    name: "ok",
    code: `
$addButton[1;No;4;example1_$authorID]
$addButton[1;Yes;3;example_$authorID]
$author[1;$userTag;$authorAvatar;]
$title[1;Bot Leave]
$description[1;Are you really sure that you wanna make me leave this server?]
`
}, {
    type: "interaction",
    prototype: "button",
        code: `
$deleteMessage[$messageID]

$interactionReply[;{newEmbed:{title:Thanks for the fun time!}{image:https://image.wrongprogram.repl.co/Goodbye.gif}{color:BLUE}};;;;yes]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
 "embeds" : "{newEmbed:{description:You cannot use this button!}{color:RED}}",
 "ephemeral" : true,
 "options" : {
 "interaction" : true
 }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==example;]
 `
}, {
    type: "interaction",
    prototype: "button",
    code: `
$deleteMessage[$messageID]

$interactionReply[;{newEmbed:{title:You made me scared right there.}{image:https://image.wrongprogram.repl.co/Ohhh.gif}{color:BLUE}};;;;yes]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
 "embeds" : "{newEmbed:{description:You cannot use this button!}{color:RED}}",
 "ephemeral" : true,
 "options" : {
 "interaction" : true
 }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==example1;]`
}]

//Here is where I test some random code that I want to test out whether it works or not.