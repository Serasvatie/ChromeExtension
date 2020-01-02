
var scriptToRemove = document.getElementsByTagName("script");
Array.prototype.forEach.call(scriptToRemove, child => {
    if (MatchScript(child))
    {
        child.textContent = "";
    }
});

scriptToRemove = document.getElementById("mdns_async_script_unique_923");
console.log("start");
console.log(scriptToRemove);
Array.prototype.forEach.call(scriptToRemove, child => {
    console.log("Start To Check");
    if (MatchImageUrlGetter(child))
    {
        console.log("InMatch");
        var res = child.src.split("&");
        if (res[2].includes("wu=https%3A%2F%2Fkissmanga.com%2FManga"))
        {
            child.src = res[2].slice(3);
        }
    }
});

function MatchImageUrlGetter(script) 
{
    return script.src.includes("//ads.2mdnsys.com/html");
}

function MatchScript(script)
{
    return script.textContent.includes("LEGAL NOTICE: The content of this website and all associated program code are protected under the Digital Millennium Copyright Act. Intentionally circumventing this code may constitute a violation of the DMCA.");
}
