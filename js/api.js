DOMParser.okyouregood = function() {

document.body.innerHTML = `
<h1>Xynfinity's Vault</h1>
<ul style="list-style:none;display: flex;">
<li class="level-container" disabled="">
<h2 style="font-size:30px;">KOCMOC UNLEASHED</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/mL0y4HWpPlU"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>Level I've been looking for day in and day out. Finally.</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: CherryTeam
Type: FULL LEVEL
Decoration Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="KOCMOC UNLEASHED">Download</button></div>
</li><a style="opacity:0;user-select:none;">seperate</a>
<li class="level-container" disabled="">
<h2 style="font-size:30px;">KOCMOC UNLEASHED</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/mL0y4HWpPlU"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>Level I've been looking for day in and day out. Finally.</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: CherryTeam
Type: FULL LEVEL
Decoration Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="">Download</button></div>
</li></ul>
  `

// 1. Initialize Firebase (Ensure this matches your Firebase Console settings)
const firebaseConfig = {
    databaseURL: "https://xynsrng-default-rtdb.firebaseio.com/"
};

// Start the app if it hasn't been started yet
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const dbRef = firebase.database().ref('xvkeys');

// 2. Loop through every level entry on your page
document.querySelectorAll('.level-container').forEach(card => {
    const keyInput = card.querySelector('.xv-key-input');
    const downloadBtn = card.querySelector('.download-btn');

    // Watch as the user types in THIS specific card's box
    keyInput.addEventListener('input', (e) => {
        const enteredKey = e.target.value.trim();

        if (enteredKey === "") {
            downloadBtn.disabled = true;
            downloadBtn.className = "button-dis download-btn";
            return;
        }

        // Check Firebase for this key
        dbRef.orderByChild('key').equalTo(enteredKey).once('value', (snapshot) => {
            if (snapshot.exists()) {
                // Unlock ONLY this card's button
                downloadBtn.disabled = false;
                downloadBtn.className = "button download-btn";
                // Store the unique Firebase ID (like "key1") on the button itself
                downloadBtn.dataset.keyId = Object.keys(snapshot.val())[0];
            } else {
                downloadBtn.disabled = true;
            }
        });
    });

    // Handle the button click for THIS level
    downloadBtn.addEventListener('click', () => {
        const keyIdToDelete = downloadBtn.dataset.keyId;

        if (keyIdToDelete) {
            // Delete from Firebase so the key dies immediately
            dbRef.child(keyIdToDelete).remove()
                .then(() => {
                    console.log("Key consumed. Starting download...");
                    
                    // Get the unique download link for this specific card
                    var downloadLevel = window.open("","_newtab")
downloadLevel.window.location = atob("aHR0cHM6Ly94eW5zdmF1bHQuZ2l0aHViLmlvL2Rhc2gv")+downloadBtn.title+".gmd";
setTimeout(function(){downloadLevel.window.location="https://www.google.com"},1000,false)

                    // Re-lock the UI for this card
                    downloadBtn.disabled = true;
                    downloadBtn.className = "button-dis download-btn";
                    keyInput.value = "";
                })
                .catch(err => console.error("Error destroying key:", err));
        }
    });
});
};
