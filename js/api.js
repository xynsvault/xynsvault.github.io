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

  // Reference to your Firebase keys node
const dbRef = firebase.database().ref('xvkeys');

/**
 * We wrap the logic in a function so it can be applied 
 * to every "level card" on your page automatically.
 */
document.querySelectorAll('.level-container').forEach(card => {
    const keyInput = card.querySelector('.xv-key-input');
    const downloadBtn = card.querySelector('.download-btn');

    // 1. Monitor typing in THIS specific input box
    keyInput.addEventListener('input', (e) => {
        const enteredKey = e.target.value.trim();

        if (enteredKey === "") {
            downloadBtn.disabled = true;
            return;
        }

        // 2. Search Firebase for the matching key
        dbRef.orderByChild('key').equalTo(enteredKey).once('value', (snapshot) => {
            if (snapshot.exists()) {
                // Key valid: Unlock this card's download button
                downloadBtn.disabled = false;
                // Store the unique Firebase ID (e.g., "key1") on the button
                downloadBtn.dataset.keyId = Object.keys(snapshot.val())[0];
            } else {
                downloadBtn.disabled = true;
            }
        });
    });

    // 3. Handle Download and Consumption
    downloadBtn.addEventListener('click', () => {
        const keyIdToDelete = downloadBtn.dataset.keyId;

        if (keyIdToDelete) {
            // Delete the key from Firebase immediately
            dbRef.child(keyIdToDelete).remove()
                .then(() => {
                    console.log(`Key ${keyIdToDelete} consumed.`);
                    
                    // Trigger the download for this specific level
      var downloadLevel = window.open("","_newtab")
      downloadLevel.window.location = atob("aHR0cHM6Ly94eW5zdmF1bHQuZ2l0aHViLmlvL2Rhc2gv")+downloadBtn.title+".gmd";
      setTimeout(function(){downloadLevel.window.location="https://www.google.com"},1000,false)

                    // Reset this specific UI section
                    downloadBtn.disabled = true;
                    keyInput.value = "";
                })
                .catch(err => console.error("Deletion failed:", err));
        }
    });
});
};
