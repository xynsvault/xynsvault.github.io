DOMParser.retrieveLVL = function (lvl) {
  var downloadLevel = window.open("","_newtab")
downloadLevel.window.location = atob("aHR0cHM6Ly94eW5zdmF1bHQuZ2l0aHViLmlvL2Rhc2gv")+lvl+".gmd";
setTimeout(function(){downloadLevel.window.location="https://www.google.com"},1000,false)
}

async function downloadPrivateLevel(levelName) {
    const owner = "xynsvault";
    const repo = "the-vault";
    const token = atob("Z2l0aHViX3BhdF8xMUI2RlNYNkkwWmtScWs5Z3oxd0JuX1l0cVM1aW1INFROQkpjMUNRS05ZdVJLNkxqRTNMT1BMS3dQTFhsRnh6OG1NRTY1QTJINmRtbUY5MnhF"); // WARNING: See security note below
    
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/dash/${levelName}.gmd`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/vnd.github.v3.raw' // Gets the actual file content
            }
        });

        if (!response.ok) throw new Error("File not found or unauthorized");

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        // Trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = `${levelName}.gmd`;
        document.body.appendChild(a);
        a.click();
        
        // Cleanup and Redirect
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        // Redirect to Google to mask the source
        window.location.replace("https://www.google.com");

    } catch (error) {
        console.error("Download failed:", error);
        alert("Failed to retrieve level.");
    }
}

// Usage
downloadPrivateLevel(downloadBtn.title);
