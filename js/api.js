DOMParser.okyouregood = function() {

document.body.innerHTML = `
<div style="display:flex;z-index:10000;background-color:#1b1b1b;position:fixed;top:-0%;width:100%;"><h1 style="margin-left:1%;">Xynfinity's Vault</h1><input style="color:white;background-color:#1b1b1b;text-align:center;font-size:20px;position:fixed;left:36.6%;top:6%;width:500px;height:50px;border-style:none;border-radius:16px;" type="text" id="levelSearch" placeholder="Search Level Name" onkeyup="filterLevels()"><a style="margin-left:1%;position:fixed;left:79%;">Level missing? Give me a name, I'll look for it.</a><input style="position:fixed;width:200px!important;top:2%;left:80%;" id="requestLevelInput" placeholder="Enter Level Name..." class="input">
    <button style="position:fixed;width:100px!important;top:1.5%;left:92%;" class="button" id="requestBtn">Request Level</button></div>
    
<ul class="level-list"><li class="level-container" disabled="" title="KOCMOC UNLEASHED">
<h2 style="font-size:30px;">KOCMOC UNLEASHED</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/mL0y4HWpPlU"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>Level I've been looking for day in and day out. Finally.</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: CherryTeam
Type: FULL LEVEL
Decoration Status: Up To Date
Gameplay Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="KOCMOC UNLEASHED">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li><li class="level-container" disabled="" title="GRIEF">
<h2 style="font-size:30px;">GRIEF</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/jYXxoDywnAE"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>"Just be doggies copy" Brutal.</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: IcEDCave
Type: FULL LEVEL
Decoration Status: Up To Date
Gameplay Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="GRIEF">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li><li disabled="" class="level-container" title="Ascension To Heaven">
<h2 style="font-size:30px;">Ascension To Heaven</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/a9CejN1JuJU"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>Are you ready to ascend?</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: Blueskii
Type: Layout
Decoration Status: Extra Effects
Gameplay Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="Ascension To Heaven">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li><li class="level-container" disabled="" title="Vehemence">
<h2 style="font-size:30px;">Vehemence</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/FwxtJQQocKA"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>wPopoffs copy and whatnot :D</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: MadisonYuko
Type: FULL LEVEL
Decoration Status: Up To Date
Gameplay Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="Vehemence">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li><li class="level-container" disabled="" title="Flashbang">
<h2 style="font-size:30px;">Flashbang</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/2j9nLPyE2Tw"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>This one hurts my eyes</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: LordVadercraft
Type: FULL LEVEL
Decoration Status: Up To Date
Gameplay Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="Flashbang">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li><li class="level-container" disabled="" title="TEETH FORTRESS II">
<h2 style="font-size:30px;">TEETH FORTRESS II</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/QbrkUUSW_H0"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>worst fucking level ive ever seen in my life.</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: Koko
Type: FULL LEVEL
Decoration Status: Up To Date
Gameplay Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="TEETH FORTRESS II">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li><li class="level-container" disabled="" title="I N J U R Y">
<h2 style="font-size:30px;">I N J U R Y</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/bqZL6QKsDZI"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>In the top 5 levels of all time. Change my mind.</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: IcEDCave
Type: FULL LEVEL
Decoration Status: Up To Date
Gameplay Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="I N J U R Y">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li><li class="level-container" disabled="" title="Fire And Flames">
<h2 style="font-size:30px;">Fire And Flames</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/dWHKYN1pfyE"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>Not to be confused with Through The Fire And Flames</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: AkiraaHSR
Type: FULL LEVEL
Decoration Status: Extra Effects
Gameplay Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="Fire And Flames">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li><li class="level-container" disabled="" title="OUROBOROS" style="">
<h2 style="font-size:30px;">OUROBOROS</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/gZz_2r97wzM"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>The new Ouroboros, I'm thinking.</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: Blueskii
Type: FULL LEVEL
Decoration Status: Up To Date
Gameplay Status: Up To Date (pretty sure)
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="OUROBOROS">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li><li class="level-container" disabled="" title="TARON" style="">
<h2 style="font-size:30px;">TARON</h2>
<embed style="width:425px;height:240px;" src="https://www.youtube.com/embed/VqOpPuPdIj0"><p></p><div style="background:#3d3d3d;padding:5px;border-radius:8px;width:550px;"><h3>LEVEL INFO:</h3><p style="user-select:none;opacity:0;"></p><h>Had this one before even the layout was done.</h><p style="user-select:none;opacity:0;"></p><pre style="position:relative;width:150px;text-align:left!important;">Creator: Burgadahz
Type: FULL LEVEL
Decoration Status: Up To Date
Gameplay Status: Up To Date
</pre>
</div>
<div class="button-container">
<input class="input-dis xv-key-input" placeholder="XV Key">
<button class="button-dis download-btn" id="apiBtn" disabled="" title="TARON">Download</button></div><h style="position:relative;top:1.5%;color:#444444" class="isKeyValid">NO KEY ENTERED</h>
</li></ul>
  `

    async function ifTheresReq(xvz) {
    const OWNER = "xynsvault";
    const REP = "the-vault";
    const ISEEYOU = atob("Z2l0aHViX3BhdF8xMUI2RlNYNkkwdVRnZk5LNUkzWXZ1X2dKQ2Q2NmJHczBQQUo5aFFiZlVDb0owN1hKNzdvWkxZZDZzc1lIZ1JBMDlBNVc0UTJQS1BrakE4b2M3");
    
    // levelName should be "Ascension To Heaven" or "KOCMOC UNLEASHED"
    const filePath = `dash/${xvz}.gmd`;
    const apiUrl = `https://api.github.com/repos/${OWNER}/${REP}/contents/${encodeURIComponent(filePath)}`;

    console.log("Requesting URL:", apiUrl);

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${ISEEYOU}`,
                'Accept': 'application/vnd.github.v3.raw'
            }
        });

        if (!response.ok) {
            // If it's 404, the token might not have access to the repo
            const errorText = await response.text();
            throw new Error(`Status: ${response.status} - ${errorText}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${xvz}.gmd`;
        document.body.appendChild(a);
        a.click();
        
        // Cleanup
        setTimeout(() => {
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }, 100);

    } catch (error) {
        console.error("Download failed:", error.message);
    }
}

// Example trigger:
// ifTheresReq

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
    const keyValidText = card.querySelector('.isKeyValid')

    // Watch as the user types in THIS specific card's box
    keyInput.addEventListener('input', (e) => {
        const enteredKey = e.target.value.trim();

        if (enteredKey === "") {
            downloadBtn.disabled = true;
            downloadBtn.className = "button-dis download-btn";
                keyValidText.innerHTML = "NO KEY ENTERED";
                keyValidText.style.color = "#444444";
            return;
        }

        // Check Firebase for this key
        dbRef.orderByChild('key').equalTo(enteredKey).once('value', (snapshot) => {
            if (snapshot.exists()) {
                // Unlock ONLY this card's button
                downloadBtn.disabled = false;
                downloadBtn.className = "button download-btn";
                keyValidText.innerHTML = "KEY IS VALID";
                keyValidText.style.color = "lime";
                // Store the unique Firebase ID (like "key1") on the button itself
                downloadBtn.dataset.keyId = Object.keys(snapshot.val())[0];
            } else {
                downloadBtn.disabled = true;
                downloadBtn.className = "button-dis download-btn";
                keyValidText.innerHTML = "KEY IS INVALID";
                keyValidText.style.color = "red";
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
                    console.log("attempting download")
                    ifTheresReq(downloadBtn.title)

                    // Re-lock the UI for this card
                    downloadBtn.disabled = true;
                    downloadBtn.className = "button-dis download-btn";
                    keyValidText.innerHTML = "NO KEY ENTERED";
                    keyValidText.style.color = "#444444";
                    document.querySelectorAll('.xv-key-input').forEach(input => {
                    input.value = "";
                      });
                    document.querySelectorAll('.download-btn').forEach(button => {
                    button.disabled = "true";
    });
                })
                .catch(err => console.error("Error destroying key:", err));
        }
    });
});
  // Reference to the new requests branch
const requestsRef = firebase.database().ref('requests');

// Select your new Topbar elements
const requestInput = document.getElementById('requestLevelInput');
const requestBtn = document.getElementById('requestBtn');

// Helper to get current user (you can set this based on your login logic)
// In your image, 'xyn' and 'ryy' are the main accounts
let currentUsername = DOMParser.username; 

requestBtn.addEventListener('click', () => {
    const levelName = requestInput.value.trim();

    if (levelName === "") {
        alert("Please enter a level name!");
        return;
    }

    // This matches your Firebase format: requests -> [LevelName] -> sent-by: "[User]"
    requestsRef.child(levelName).set({
        "sent-by": currentUsername
    })
    .then(() => {
        console.log(`Request for ${levelName} sent successfully!`);
        requestInput.value = ""; // Clear input after sending
        alert("Level request submitted.");
    })
    .catch((error) => {
        console.error("Error submitting request: ", error);
    });
});
};
