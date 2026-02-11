import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  // Use your actual config from the Firebase Console
  databaseURL: atob("aHR0cHM6Ly94eW5zcm5nLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbQ=="),
  projectId: "xynsrng",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const usernameBtn = document.getElementById('usernameBtn');
const passwordBtn = document.getElementById('passwordBtn');
const apiBtn = document.getElementById('apiBtn');

usernameBtn.addEventListener('click', async () => {
    const user = document.getElementById('usernameX').value.trim();
    const pass = document.getElementById('passwordX').value.trim();
    const apiDisplay = document.getElementById('apiKeyDisplay');

    if (!user) {
        usernameBtn.style["background-color"]="#990000"
		usernameBtn.innerHTML = "Invalid"
		setTimeout(function(){usernameBtn.style["background-color"]=""
		usernameBtn.innerHTML = "Submit"},750,false)
        return;
    }

    try {
        // We look specifically for accounts/[username]
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `accounts/${user}`));

        if (snapshot.exists()) {
            const data = snapshot.val();

            // Verify the user
            if (data.username === user) {
                usernameBtn.style["background-color"]="#009900"
		usernameBtn.innerHTML = "Success"
		
		usernameBtn.disabled = "disabled"
		usernameBtn.className = "button-dis"
		document.getElementById('usernameX').disabled = "disabled"
		document.getElementById('usernameX').className = "input-dis"
		passwordBtn.disabled = ""
		passwordBtn.className = "button"
		document.getElementById('passwordX').disabled = ""
		document.getElementById('passwordX').className = "input"
		
		DOMParser.username = data.username
		DOMParser.password = data.password
		DOMParser.api = data.api
		DOMParser.locked = data.locked
		
            } else {
                usernameBtn.style["background-color"]="#990000"
		usernameBtn.innerHTML = "Invalid"
		setTimeout(function(){usernameBtn.style["background-color"]=""
		usernameBtn.innerHTML = "Submit"},750,false)
        return;
            }
        } else {
            usernameBtn.style["background-color"]="#990000"
		usernameBtn.innerHTML = "Invalid"
		setTimeout(function(){usernameBtn.style["background-color"]=""
		usernameBtn.innerHTML = "Submit"},750,false)
        return;
        }
    } catch (error) {
        console.error(error);
        alert("Connection error.");
    }
});

passwordBtn.addEventListener('click', async () => {
    const user = document.getElementById('usernameX').value.trim();
    const pass = document.getElementById('passwordX').value.trim();
    const apiDisplay = document.getElementById('apiKeyDisplay');

    if (!pass) {
        passwordBtn.style["background-color"]="#990000"
		passwordBtn.innerHTML = "Invalid"
		setTimeout(function(){passwordBtn.style["background-color"]=""
		passwordBtn.innerHTML = "Submit"},750,false)
        return;
    }

    try {
        // We look specifically for accounts/[username]
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `accounts/${user}`));

        if (snapshot.exists()) {
            const data = snapshot.val();

            // Verify the user
            if (DOMParser.password  === pass) {
                passwordBtn.style["background-color"]="#009900"
		passwordBtn.innerHTML = "Success"
		
		passwordBtn.disabled = "disabled"
		passwordBtn.className = "button-dis"
		document.getElementById('passwordX').disabled = "disabled"
		document.getElementById('passwordX').className = "input-dis"
		apiBtn.disabled = ""
		apiBtn.className = "button"
		document.getElementById('apiX').disabled = ""
		document.getElementById('apiX').className = "input"
		
            } else {
                passwordBtn.style["background-color"]="#990000"
		passwordBtn.innerHTML = "Invalid"
		setTimeout(function(){passwordBtn.style["background-color"]=""
		passwordBtn.innerHTML = "Submit"},750,false)
        return;
            }
        } else {
            passwordBtn.style["background-color"]="#990000"
		passwordBtn.innerHTML = "Invalid"
		setTimeout(function(){passwordBtn.style["background-color"]=""
		passwordBtn.innerHTML = "Submit"},750,false)
        return;
        }
    } catch (error) {
        console.error(error);
        alert("Connection error.");
    }
});

apiBtn.addEventListener('click', async () => {
    const user = document.getElementById('usernameX').value.trim();
    const pass = document.getElementById('passwordX').value.trim();
    const api = document.getElementById('apiX').value.trim();

    if (!api) {
        apiBtn.style["background-color"]="#990000"
		apiBtn.innerHTML = "Invalid"
		setTimeout(function(){apiBtn.style["background-color"]=""
		apiBtn.innerHTML = "Submit"},750,false)
        return;
    }

    try {
        // We look specifically for accounts/[username]
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `accounts/${user}`));

        if (snapshot.exists()) {
            const data = snapshot.val();

            // Verify the user
            if (DOMParser.api  === api) {
                apiBtn.style["background-color"]="#009900"
		apiBtn.innerHTML = "Success"
		
		apiBtn.disabled = "disabled"
		apiBtn.className = "button-dis"
		document.getElementById('apiX').disabled = "disabled"
		document.getElementById('apiX').className = "input-dis"

				if(DOMParser.locked == "true") {
					document.getElementById("shouldntShareThisText").innerHTML = ' Your account is locked. Contact Xynfinity for help. ';
					document.getElementById("shouldntShareThisText").style.color = 'red';
				} else {
		
		setTimeout(function(){DOMParser.okyouregood()},1000,false)

				}
		
            } else {
                apiBtn.style["background-color"]="#990000"
		apiBtn.innerHTML = "Invalid"
		setTimeout(function(){apiBtn.style["background-color"]=""
		apiBtn.innerHTML = "Submit"},750,false)
        return;
            }
        } else {
            apiBtn.style["background-color"]="#990000"
		apiBtn.innerHTML = "Invalid"
		setTimeout(function(){apiBtn.style["background-color"]=""
		apiBtn.innerHTML = "Submit"},750,false)
        return;
        }
    } catch (error) {
        console.error(error);
        alert("Connection error.");
    }
});
