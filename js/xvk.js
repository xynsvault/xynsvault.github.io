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
