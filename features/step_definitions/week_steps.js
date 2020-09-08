const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const duringTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function isItDuringTheWeek(today) {
    return duringTheWeek.indexOf(today) >= -1;
}

function getToday() {
    const d = new Date();
    return days[d.getDay()];
}

Given('today is today', function () {

    this.today = getToday();
});

When(/^I ask whether it's during the week$/, function () {
    this.actualAnswer = isItDuringTheWeek(this.today);
});

Then('I should be told the truth', function () {
    assert.equal(this.actualAnswer, true);
});
