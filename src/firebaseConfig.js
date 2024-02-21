import { initializeApp } from "firebase/app"; //firebase

const firebaseConfig = {
    apiKey: "AIzaSyBrbLWQ1vkAN71Md_9-Os3LzyA7toCtAhA",
    authDomain: "gridisland-login.firebaseapp.com",
    projectId: "gridisland-login",
    storageBucket: "gridisland-login.appspot.com",
    messagingSenderId: "616623300262",
    appId: "1:616623300262:web:ee7cac4cfa10c243951e67",
    measurementId: "G-BFF8ME94EY"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp