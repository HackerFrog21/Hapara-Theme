localStorage.announcement = localStorage.announcement || "";

const version = "2.1.0";

const announcement = 
`Due to recent updates in Hapara Workspace, this extension is currently unfunctional. 
I hope to fix it in the near future, but it has proven difficult to find the time to do so. I'm a solo developer, who is still in school. 
However, I will continue to put in my greatest of efforts. I hope you've enjoyed this extension thus far. I apologize for this inconvenience.`;



const loaded = () => {
    if (localStorage.announcement === announcement) return;

    if (!document.querySelector(".MainContainer_root__cTMFi")) {
        requestAnimationFrame(loaded);
        return;
    };

    setTimeout(async () => {
        document.head.innerHTML += `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap" rel="stylesheet">`;

        document.body.innerHTML += `
        <div class="announcement-wrapper">
            <div class="announcement announcement__show">
                <div class="announcement__heading">ANNOUNCEMENT</div>
                <div class="announcement__content">
                    Dear USERS,<br><br>
                    &emsp; This is the developer of 'Hapara Theme' - chrome extension; speaking.
                    
                    ${announcement}

                    <br><br>
                    Yours truly, <br>
                    DEVELOPER
                    <code>Hapara Theme ${version}</code>
                </div>
                <div class="announcement__button">CLOSE</div>
            </div>
        </div>
        `;
    
        document.querySelector(".announcement__button").addEventListener("click", () => {
            localStorage.announcement = announcement;
    
            document.querySelector(".announcement").classList.remove("announcement__show");
            setTimeout(()=> document.querySelector(".announcement").classList.add("announcement__hide"), 1)
        })
    
    }, 200)
}

loaded();