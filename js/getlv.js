DOMParser.retrieveLVL = function (lvl) {
  var downloadLevel = window.open("","_newtab")
downloadLevel.window.location = atob("aHR0cHM6Ly94eW5zdmF1bHQuZ2l0aHViLmlvL2Rhc2gv")+lvl+".gmd";
setTimeout(function(){downloadLevel.window.location="https://www.google.com"},1000,false)
}

async function downloadPrivateLevel(levelName) {
    const owner = "YOUR_GITHUB_USERNAME";
    const repo = "YOUR_PRIVATE_REPO";
    const token = "YOUR_PERSONAL_ACCESS_TOKEN"; // WARNING: See security note below
    
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
