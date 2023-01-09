const { assert } = require("chai");
const { disemvowel, disemvowelRegex } = require("../../7kyu/disemvowel");

describe("Disemvowel tests.  Should remove all vowels from string paramenter", () => {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    assert.strictEqual(disemvowelRegex("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowelRegex("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowelRegex("What are you, a communist?"), "Wht r y,  cmmnst?")
})