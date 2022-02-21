import html from "./file.html";

function test(name) {
    return require('./locale/' + name + '.json');
}
console.log(test("a"));
console.log(html);