module.exports = {
    name: "restart",
    aliases: ['reboot'],
    code: `
$reboot
$wait[1s]
$deletecommand
$onlyForIds[689364013297041409;801489372322332732;]
    `
}