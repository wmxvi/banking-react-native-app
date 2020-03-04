## Bó Front End Programming Challenge

So we can see how you’d fit in as our new front end developer,  we’d like to see how you tackle new challenges.

*Note: This task should take approximately 2 - 4 hours. However, you have up to 24hrs after you fork the repo to submit your work.*

### Preparation

Before getting started we recommend that you have:

- Your favourite computer and development tools / IDE to hand;
- A few hours of uninterrupted time ahead of you;
- Access to the internet;
- A mug of hot coffee (or tea, if you prefer!).

### For this challenge, you can use:

- React or React Native;
- Any other combination of tools and techniques you like;
- The internet, including Google, Stackoverflow etc.

And do feel free to ask us any general questions you might have.

## The Challenge

Good news! - you've been asked to develop a prototype for a new digital banking app.
 
The app will ultimately allow users to trade "Bócoin"; a new crypto-currency (Currency Symbol: Bø) developed by an innovate FinTech startup.
 
The backend team have already developed a simple API to build your app against. Your remit is to create a simple app that will:
 
1. Demonstrate to internal stakeholders what a UI for the new app might look like; and
2. Provide a starting-point technical foundation upon which the full-scale app could potentially develop.

#### Requirements:
 
The must-have feature requirements of the app are:
 
1. To display an account homepage which includes:
   a. The Bócoin transaction list; and
   b. Total Bócoin balance
2. The ability to "add Bócoin" to the account

#### Setup:
 
1. Install Docker (unless you have it already!)
2. Install Postman (unless you have it already!)
3. Get a locally running copy of the API:
 
`docker run -it -p 8080:8081 bochallenges/bocoin-api`
   
4. Check the API is running on your machine using Postman to submit a `GET` request to:
 
`http://localhost:8080/transactions`
 
5. You should receive a list of transactions back from the API
6. To add a transaction, send a matching single transaction payload to the API transactions end point using `POST`

#### Doing your work:
 
1. Fork this repository on Github;
2. Create a simple app to fulfil the requirements described above within your forked repo;
3. Commit and Push your code to your new repository;
4. Send a pull request to this repo;
5. Your code will be reviewed by one of our senior technical front end team and we will get back to you.
 
If you wish to supply instructions on how to run or understand the construction of your app, then please provide those in a new README.md file within a docs folder.
 
If you can provide a link to view or download a demo of your app to go along with your code, then all the better.

### For bonus points:
 
If you find the task above easy, then feel free to improve your app. Here are some ideas:
 
- Allow funds to be withdrawn as well as added;
- Add categorisation / re-categorisation of transactions;
- Allow the user to search or filter their transactions.
 
### Any questions or issues?
 
Please just ask us. A curious and questioning mind is a good one!
 
Good luck and thanks for taking on this challenge!