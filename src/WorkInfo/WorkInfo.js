import moonphaserdemo from "../components/images/projectpreviews/moonphaserdemo.png";
import weatherappdem from "../components/images/projectpreviews/weatherapp.png";
import schedulerdem from "../components/images/projectpreviews/schedulerdem.png";
import quizamidem from "../components/images/projectpreviews/quizami.png";
import userdirectdem from "../components/images/projectpreviews/userdirect.png";
import fittrackdem from "../components/images/projectpreviews/fittrackdem.png"
import gbookdem from "../components/images/projectpreviews/gbookdemo.png"

const WorkInfo = [
    
    { 
        id: 1, 
        href: "https://anth8nyc.github.io/MoonPhases/", 
        title: "MoonPhaser", 
        src: moonphaserdemo, 
        alt: "Preview of MoonPhaser Project", 
        ghref: "https://github.com/anth8nyc/MoonPhases.git",
        info: "MoonPhaser was a collaborative project intent on using Moon phase data from an API as well as information from the NASA Astronomy Picture of the Day (APOD) API to design a web application aimed at piquing interest in the constantly changing information from space. After finding the farmsense API, the User Story was refined to designing a site that allowed a user to view Moon phase information for any given day they might input- and to record recently searched dates in order to more easily compare similar dates across time, such as a birthdays or anniversaries. We decided to generate the NASA APOD from its respective API upon page load as it was the most astronomy beginner friendly API of the many APIs NASA offers." 
    },
    { 
        id: 2, 
        href: "https://anth8nyc.github.io/weatherapp/", 
        title: "Weather Dashboard", 
        src: weatherappdem, 
        alt: "Preview of Weather Dashboard", 
        ghref: "https://github.com/anth8nyc/weatherapp.git",
        info: "This web application was designed to allow users to search the site for weather data in different cities. The site was designed to assist in exercising how to handle weather information gathered from multiple APIs within one page. The site also stores recently searched cities and allows for easy recall of the weather information for these cities. The site was designed to include Moment.js in order to exercise the usage of  Moment.js with site data. Current forecasts display the UV index for the current time of the city in a color coded range for low, medium, and high UV index values." 
    },
    { 
        id: 3, 
        href: "https://polar-headland-03677.herokuapp.com/", 
        title: "Quizami", 
        src: quizamidem, 
        alt: "Preview of Quizami collaborative project", 
        ghref: "https://github.com/universaleric/Quizami.git",
        info: "This site was designed so that anyone can sign up, create a profile, and use the native web application to make quizzes for their friends, as well as take quizzes others have made. Quizami was a collaborative project intent on exercising a knowledge of MVC architecture, and utilizes Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication."
    },
    { 
        id: 4, 
        href: "https://googlebookstoread.herokuapp.com/", 
        title: "Google Books React Reading List", 
        src: gbookdem, 
        alt: "Preview of Google Books Reading List", 
        ghref: "https://github.com/anth8nyc/booksearcher.git",
        info: "This MERN stack site application allows users to search the Google Books API to then save the result entries that they are interested in to a reading list. The application accomplishes this by saving search results that are rendered through a react state to a MongoDB database. The API routes allow for both saving and deleting to the MongoDB database. Books can be searched on the search page, and are simply saved by selecting 'Save' on result entries. To view and delete unwanted saved books, the 'My Books' page allows for either."
    },
    { 
        id: 5, 
        href: "https://anth8nyc.github.io/userdirectory/", 
        title: "Employee User Directory", 
        src: userdirectdem, 
        alt: "Preview of Employee User Directory", 
        ghref: "https://github.com/anth8nyc/userdirectory.git",
        info: "The employee directory allows for a list of employees to easily be filtered through with search criteria. Users should be able to view the entire employee directory at once to have quick access to their information. An employee or manager would benefit greatly from being able to view non-sensitive data about other employees in this manner and it is particularly helpful to be able to filter employees by name. The web application was designed to assist in exercising and demonstrating a knowledge of the React library." 
    },
    { 
        id: 6, 
        href: "https://hidden-falls-38045.herokuapp.com/", 
        title: "Fitness Tracker", 
        src: fittrackdem, 
        alt: "Preview of Fitness Tracker", 
        ghref: "https://github.com/anth8nyc/fitnesstracker.git",
        info: "This application is designed to aid users in tracking data they are able to input to the tracker as well as view data and statistics for the workouts. Users are able to view, create, and track daily workouts with the ability to log multiple exercises in a workout on a given day. A workout is able to contain pertinent data such as the name of the exercises, types of exercises, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, distance traveled may be logged as well. This web application was designed to assist in exercising and demonstrating a knowledge of NoSQL backend database utilization."  
    }

];

export default WorkInfo;