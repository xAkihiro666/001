module.exports = [{
    name: "leave",
    code: `
$author[1;$userTag;$authorAvatar;]
$title[1;Bot Leave]
$description[1;Are you really sure that you wanna make me leave this server?]
$addbutton[1;Button;1;customID_$authorID;no;]
`
}, {
        type: 'interaction',
        prototype: "button",
        code: `
$interactionReply[customID]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{
 "embeds" : "{newEmbed:{description:You cannot use this button!}{color:BLUE}}",
 "ephemeral" : true,
 "options" : {
 "interaction" : true
 }
}]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==$authorID;]
`
    }]

