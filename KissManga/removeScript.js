
var scriptToRemove = document.getElementsByTagName("script");
Array.prototype.forEach.call(scriptToRemove, child => {
    if (MatchScript(child))
    {
        child.textContent = "";
    }
})

function MatchScript(script)
{
    return script.textContent.includes("LEGAL NOTICE: The content of this website and all associated program code are protected under the Digital Millennium Copyright Act. Intentionally circumventing this code may constitute a violation of the DMCA.");
}
