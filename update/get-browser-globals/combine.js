'use strict';

const fs = require('fs');

const json = require('../../browser_vars.json');

const diff_array = function(oneObj, otherObj){
	const defaultKeys = Object.keys(oneObj);
	const yours = Object.keys(otherObj);

	return defaultKeys.filter(key => !yours.includes(key));
};

const jshint = json['jshint'];
const my = json['my'];

const difference = diff_array(jshint, my);
const { browser } = require('../../globals.json');

// todo: refact
const result = [...Object.keys(browser), ...difference]
									.sort((a, b) => a.localeCompare(b))
									.reduce((acc, cur) =>  ({ ...acc, [cur]: true}), {});

fs.writeFileSync('./result_browser_vars.json', `{ "result": \n\t${JSON.stringify(result, null, '\t\t')}\n}`);

