module.exports = [{
    name: "role-all",
    code: `
  Wait, I'm giving them $roleName[$findRole[$message] role]
  $forEachMember[1;{};a;]
  $deletecommand
  $onlyIf[$message!=;$randomText[They already have an empty role!!!;For real?! You didn't provide any role;How am I suppose to give them a role?! Try mentioning the role;Okay, here. Try mentioning a role or its ID so that you could give everyone a role;You can't even execute a proper command?!]]
  `
}, {
    type: "awaited",
    name: "a",
    code: `
$giveRole[$guildID;$authorID;$findRole[$message]]

  `
}]