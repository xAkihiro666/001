module.exports = [{
    name: "leave",
    code: `
$author[1;$userTag;$authorAvatar;]
$title[1;Bot Leave]
$description[1;Are you really sure that you wanna make me leave this server?]
$addbutton[1;Button;1;B1;no;]
`
}, {
        type: 'interaction',
        prototype: "button",
        name: "B1",
        code: `
Hey
`
    }]

