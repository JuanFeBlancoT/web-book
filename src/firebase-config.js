const firebaseConfig = {
    apiKey: "AIzaSyBOr53inn1d6A8TdQzQFYbWDSb6WC-3Cgw",
    authDomain: "quiz2-7a9fb.firebaseapp.com",
    databaseURL: "https://quiz2-7a9fb-default-rtdb.firebaseio.com",
    projectId: "quiz2-7a9fb",
    storageBucket: "quiz2-7a9fb.appspot.com",
    messagingSenderId: "452639542908",
    appId: "1:452639542908:web:723039698a1b2576b783f9"
};

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
