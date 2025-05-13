### Steps to run the test

Install packages:  
```
npm install
```

Run the below script for run each spec separately:  
```
npm run wdio
```

Run the below script for run all spec sequentially:  
```
npm run runForAll
```

### Note
After login chrome browser sometimes shows pop-up warning related to password, provide enough `browser.pause` time to close that pop-up. Pop-up should be closed as soon as possible to sucessfully run the test if you get that pop-up in your browser.
