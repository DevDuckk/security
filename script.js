// fetch('https://test1-7399f-default-rtdb.asia-southeast1.firebasedatabase.app')
//     .then(response => response.json())
//     .then(data => {
//         const temperature = data.temperature || 0; // Default to 0 if temperature is not available
//         document.getElementById('temperature-value').innerHTML = `${temperature} <span class="iconC">&deg;C</span>`;
//     })
//     .catch(error => {
//         console.error('Error fetching temperature:', error);
//         document.getElementById('temperature-value').innerHTML = `Error fetching temperature`;
//     });


document.addEventListener("DOMContentLoaded", function() {
    // ...code fetch API ở đây...
    const firebaseConfig = {
        apiKey: "AIzaSyAyccxaZ21dcb7jgHzvPrjZrLro-ro_Yh0",
        authDomain: "test1-7399f.firebaseapp.com",
        databaseURL: "https://test1-7399f-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "test1-7399f",
        storageBucket: "test1-7399f.firebasestorage.app",
        messagingSenderId: "51820488362",
        appId: "1:51820488362:web:3c6be6453a8a55adbb92d3",
        measurementId: "G-ZHK890Q5PP"
    };

    // Khởi tạo Firebase
    firebase.initializeApp(firebaseConfig);
    const db = firebase.database();

    // Lắng nghe thay đổi tại /nhiet_do
    db.ref("/logs/nhiet_do").on("value", (snapshot) => {
        const nhietDo = snapshot.val();
        const newTemp = nhietDo.toFixed(2) || 0; // Mặc định là 0 nếu không có giá trị
        document.getElementById("temperature-value").innerHTML = `${newTemp} <span class="iconC">&deg;C</span>`;
    });
    db.ref("/do_am").on("value", (snapshot) => {
        const doAm = snapshot.val();
        const newHumidity = doAm.toFixed(2) || 0; // Mặc định là 0 nếu không có giá trị
        document.getElementById("humidity-value").innerHTML = `${newHumidity} <span class="icon%">%</span>`;
    });
});