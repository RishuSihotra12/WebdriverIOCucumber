//import {Given,When,Then} from 'cucumber';

// const Given= require('cucumber').default;
// const When= require('cucumber').default;
// const Then= require('cucumber').default;

const {Given, When, Then} = require('cucumber');



Given(/^I'm on the login page$/,function(){
browser.url("https://www.zara.com/in/")
browser.pause(5000)
});

When(/^I log in with default user$/,function(){
$("//span[text()='LOG IN']").click();
browser.pause(5000)
$("//input[@name='email']").setValue("rishu");
$("//input[@name='password']").setValue("rishu");
// browser.pause(5000)
$("//span[text()='LOG IN']").click();
});
Then(/^ I shall be on the Flight finder page$/,function(){

});