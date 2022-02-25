module.exports = [{
    name: "ticket-setup",
    code: `
$awaitMessages[$channelID;$authorID;60s;everything;category;Err]
Enter the category ID... (If none, just type any key)

`
}, {
        name: "category",
        type: "awaited",
        code: `
Okay...
$onlyIf[$channelType[$message]==category;A2]
$onlyIf[$channelExists[$message]!=false;A1]
`
    }]

//I finally made the sample that is needed to create a nice ticket.