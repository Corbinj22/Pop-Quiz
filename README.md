# Deployed at [https://corbinj22.github.io/Pop-Quiz/]

### About App
<br>
Pop Quiz is a code submission for the 2020 Tandem Apprentice Software Engineer posistion. Canidates were challenged with creating a trivia game with a provided data set 
<br>

There were no strict objectives, and canidates were given free roam for styling and respective language/frameworks used.  
<br>

Pop Quiz allows users to challenge themselves against a bank of 21 questions. 
<br>

Each session will randomly pick 10 questions to ask, and at the end of each question the user is given the correct answer, and dynamicaly shown what their current right/wrong amount. 
<br>

At the end of the 10 questions the user is notified of how many of the 10 items they got correct.  

**Technologies Used:**
*React*, *React Router*, *ES6*, *TDD*, *CSS*, *Mock Fetch API for receiving 3rd party data*

**Framing:**
https://www.figma.com/file/uQPTUYMJB4F0NRnoq85e0I/Untitled?node-id=0%3A1

## Setup
1. clone down this repo to desired location
2. `cd` into the new directory
3. run `npm install`
4. run `npm start`
5. Open localhost:3000 in your favorite browser (unless your terminal says otherwise)
6. run 'npm run test' to see tests.


## Future Iterations
1. Go further indepth with intergration testing. Through this I found that my React-Testing-Library knowledge had become rusty. 
2. Create Login for User
3. Create reset button to start game over. 
4. Set media querys for better scalability of resolution on different screen sizes. 
2. Refactor....Reafactor....Refactor.

## Known Bugs
Due to coming down with Corona virus mid-way though the challenge I was not able to track down and fix bugs. 
One bug is in the testing-library for the intergration APP. I cannot seem to grab ahold of my mocked API data and have it show. 

## App Screenshots
### Login
[![2020-11-01-14-18-57.gif](https://i.postimg.cc/3NHSh1G9/2020-11-01-14-18-57.gif)](https://postimg.cc/5YnqqwnF)

### Choosing Answer/End of Game
[![2020-11-01-14-19-40.gif](https://i.postimg.cc/1zkM0BvP/2020-11-01-14-19-40.gif)](https://postimg.cc/Y4x1M6cy)
