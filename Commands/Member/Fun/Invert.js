module.exports = {
    name: "inverted-image",
    aliases: ['ii', 'invert'],
    $if: "v4",
    code: `
$if[$message==]
$author[1;$userTag;$authorAvatar;]
$title[1;Inverted Image]
$description[1;Since you didn't enter any message(URL) after the command, I'll just return an inverted image of your profile picture.]
$image[1;https://api.popcat.xyz/invert?image=$replaceText[$authorAvatar;.webp;.png]]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]

$else
$author[1;$userTag;$authorAvatar;]
$title[1;Inverted Image]
$description[1;Here's the inverted image that you requested.]
$image[1;https://api.popcat.xyz/invert?image=$message]
$color[1;BLUE]
$footer[1;Date;https://emoji.gg/assets/emoji/2226-calendar.png]
$addTimeStamp[1]
$endIf
`
}