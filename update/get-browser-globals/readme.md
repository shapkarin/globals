### Usage
- Run `npm run get-jshint-browser`.
- Open an Incognito window in Chrome Canary and paste the above into the console.
- You'll now have a new object in your clipboard.
- Open file `browser_vars.json`
- Paste yours current clipboard to the field `my` at the root of the project.
- run `npm run combine-browser`
- Copy and paste the result from the `result_browser_vars.json` to the field `browser` at the `globals.json`
