# Hyper's React App Playground

This project contains a simple React App that demonstrates several functionalities through different pages.

This is also the foundation of my self-learning for ReactJS. I started learning ReactJS by following a [ReactJS Tutorial](https://www.youtube.com/watch?v=f55qeKGgB_M) and my progress can be found [here](https://github.com/Hyper-TH/react-app).

## The different pages of the App and their functionalities

List of functionalities demonstrated:
[TBE]

Below are the list of pages:

### CounterPage
Users can input a number and decide to either add, reduce or reset the input number to 0.

[Page](https://github.com/Hyper-TH/to-do/blob/master/src/pages/CounterPage.js) <br>
[Counter component](https://github.com/Hyper-TH/to-do/blob/master/src/components/useCounter.js)

### ServerTest
The first playground for learning on how to connect to a local server using <b>Express JS</b> and through the server connecting to the Firestore.

Page allows a user to input a category and generate an excuse using the [excuse generator API](https://excuser-three.vercel.app/v1/excuse/).

It is then stored into a Firestore database.

[Page](https://github.com/Hyper-TH/to-do/blob/master/src/pages/ServerTest.js) <br>
[Server](https://github.com/Hyper-TH/to-do/blob/master/server/server.js)

### ExcusesPage
Page that displays a list of stored excuses from the Firestore.

[Page](https://github.com/Hyper-TH/to-do/blob/master/src/pages/ExcusesPage.js)

### GitHubPage
A ReactJS implementation of [this lab from my coursework](https://github.com/Hyper-TH/Rich-Web-Applications-Labs/tree/master/github-api/src).

[Page](https://github.com/Hyper-TH/to-do/blob/master/src/pages/GitHubPage.js) <br>
[Repo Component](https://github.com/Hyper-TH/to-do/blob/master/src/components/GitHub/RepoInfo.js) <br>
[User Component](https://github.com/Hyper-TH/to-do/blob/master/src/components/GitHub/UserInfo.js) <br>

### TaskPage
Users can add, update and delete their own tasks.

[Page](https://github.com/Hyper-TH/to-do/blob/master/src/pages/TaskPage.js) <br>
[Task component](https://github.com/Hyper-TH/to-do/blob/master/src/components/Task.js) <br>

