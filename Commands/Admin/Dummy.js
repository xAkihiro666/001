module.exports = [{
    name: "d1",
    code: `
    $description[1;Test $let[A;Apple]]
    $addButton[1;Disable Slowmode;4;B2;no;]
`
}, {
    name: "B2",
    type: "interaction",
    prototype: "button",
    code: `
$get[A]
`
}]


//Dummy.js is a testing area of where I code stuffs that I'm not sure whether it works or not.

//Working