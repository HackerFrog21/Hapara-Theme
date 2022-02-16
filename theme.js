if (localStorage.color_primary === undefined || 
    localStorage.color_primary_accent === undefined || 
    localStorage.color_secondary === undefined || 
    localStorage.color_text === undefined) {  

    localStorage.setItem("color_primary", "#14213d");
    localStorage.setItem("color_primary_accent", "#000000");
    localStorage.setItem("color_secondary", "#fca211");
    localStorage.setItem("color_text", "#fcdfc7");

}

document.querySelector(".AppLoadingPage_root__36tjD").style.backgroundColor = localStorage.color_primary;
document.querySelector(".AppLoadingPage_header__3W2ND").style.color = localStorage.color_secondary;

function theme() {
    document.querySelectorAll("div").forEach(div => {

        if (div.classList.contains("MainContainer_root__3BBQx")) {
            
            document.querySelector(".MainContainer_rootInner__1pOnY").style.backgroundColor = localStorage.color_primary;

            document.querySelector(".MainContainer_rootInner__1pOnY").querySelectorAll("*").forEach(element => {
                if (element.classList.contains("WorkspacesPage_rootInner__a81ga")) {
                    element.style.color = localStorage.color_primary;
                    element.style.backgroundColor = localStorage.color_secondary;
                } 
                if (element.classList.contains("ToDoPage_rootInner__3z1eo")) {
                    element.style.backgroundColor = localStorage.color_secondary;
                    element.style.color = localStorage.color_primary;

                    document.querySelectorAll(".FilterButtons_choice__TRz7O").forEach(el => {
                        el.style.backgroundColor = localStorage.color_primary;
                        el.querySelector(".FilterButtons_tabName__2AzlF").style.color = localStorage.color_text;

                        el.addEventListener("click", () => {
                            setTimeout(theme, 1);
                        });
                        el.addEventListener("mouseover", () => {
                            el.style.filter = "brightness(150%)";
                        });
                        el.addEventListener("mouseleave", () => {
                            el.style.filter = "brightness(100%)";
                        });
                        document.querySelector(".FilterButtons_active__E6Cmk").style.backgroundColor = localStorage.color_primary_accent;
                        document.querySelector(".FilterButtons_active__E6Cmk").querySelector(".FilterButtons_tabName__2AzlF").style.color = localStorage.color_secondary;
                    });
                    document.querySelectorAll(".ToDoSection_sectionTitle__1pOYe").forEach(el => {
                        el.style.borderColor = localStorage.color_secondary;
                    });
                    document.querySelectorAll(".ToDoTile_rootInner__2ps3k").forEach(el => {
                        el.style.backgroundColor = localStorage.color_primary;
                        el.querySelector("a").style.color = localStorage.color_text;
                        el.querySelector("a").style.borderColor = localStorage.color_primary;
        
                        el.addEventListener("mouseover", () => {
                            el.style.backgroundColor = localStorage.color_primary_accent;
                        });
                        el.addEventListener("mouseleave", () => {
                            el.style.backgroundColor = localStorage.color_primary;
                        });

                        let classList = el.parentElement.className.split(' ');
                        classList.forEach(className => {
                            if (className.includes("ToDoTile_theme")) {
                                el.parentElement.classList.remove(className);
                            }
                        })
                    });

                    document.querySelectorAll("[class*='ToDoTile_date']").forEach(el => {
                        el.style.backgroundColor = localStorage.color_secondary;
                        el.style.color = localStorage.color_primary;
                    });

                    if (document.querySelectorAll(".FilterButtons_choice__TRz7O").length < 1) {
                        setTimeout(theme, 1);
                    }
                }
                if (element.classList.contains("MyFilesPage_rootInner__3xPmg")) {
                    document.querySelector(".MyFilesPage_rootInner__3xPmg").style.backgroundColor = localStorage.color_secondary;
                    
                    if (document.querySelectorAll(".MyFilesTile_rootInner__2FAR0").length < 1) {
                        setTimeout(theme, 1);
                    } else {
                        document.querySelector(".MyFilesPage_rootInner__3xPmg").style.color = localStorage.color_primary;
                        document.querySelectorAll(".FilterButtons_choice__TRz7O ").forEach(el => {
                            el.style.backgroundColor = localStorage.color_primary;
                            el.querySelector(".FilterButtons_tabName__2AzlF").style.color = localStorage.color_text;
                            el.addEventListener("mouseover", () => {
                                el.style.filter = "brightness(150%)";
                            });
                            el.addEventListener("mouseleave", () => {
                                el.style.filter = "brightness(100%)";
                            });

                            document.querySelector(".FilterButtons_active__E6Cmk").style.backgroundColor = localStorage.color_primary_accent;
                            document.querySelector(".FilterButtons_active__E6Cmk").querySelector(".FilterButtons_tabName__2AzlF").style.color = localStorage.color_secondary;

                            el.addEventListener("click", () => {
                                setTimeout(theme, 1);
                            });
                        });
                        document.querySelectorAll(".MyFilesTile_rootInner__2FAR0").forEach(el => {
                            el.style.backgroundColor = localStorage.color_primary;
                            el.querySelector("a").style.color = localStorage.color_text;
                            el.querySelector("a").style.borderColor = localStorage.color_primary;

                            let classList = el.parentElement.className.split(' ');
                            classList.forEach(className => {
                                if (className.includes("MyFilesTile_theme-")) {
                                    el.parentElement.classList.remove(className);
                                }
                            })

                            el.addEventListener("mouseover", () => {
                                el.style.backgroundColor = localStorage.color_primary_accent;
                            });
                            el.addEventListener("mouseleave", () => {
                                el.style.backgroundColor = localStorage.color_primary;
                            });
                        });
                    }
                }
                if (element.classList.contains("Button_root__iDevS") && 
                element.classList.contains("Button_outlined__1d6aR") &&
                element.classList.contains("Button_solid__2_YoH") && 
                element.classList.contains("Button_regular__8IJ0m")) {
                    element.style.borderColor = localStorage.color_primary;
                    element.style.backgroundColor = localStorage.color_secondary;
                    element.style.color = localStorage.color_primary;
                    if (!element.classList.contains("ToolbarPersonaSettings_logout__1q2dw")) {
                        element.addEventListener("click", () => {
                            setTimeout(theme, 1);
                        });
                        element.addEventListener("mouseover", () => {
                            element.style.backgroundColor = localStorage.color_primary;
                            element.style.color = localStorage.color_secondary;
                        });
                        element.addEventListener("mouseleave", () => {
                            element.style.backgroundColor = localStorage.color_secondary;
                            element.style.color = localStorage.color_primary;
                        });
                    } else {
                        element.addEventListener("mouseover", () => {
                            element.style.filter = "contrast(150%)";
                        });
                        element.addEventListener("mouseleave", () => {
                            element.style.filter = "contrast(100%)";
                        });
                    }
                }
            });

            let classList = document.querySelector(".LeftSidePanel_root__3KQoO").className.split(' ');
            classList.forEach(className => {
                if (className.includes("LeftSidePanel_theme-")) {
                    document.querySelector(".LeftSidePanel_root__3KQoO").classList.remove(className);
                    document.querySelector(".LeftSidePanel_root__3KQoO").classList.add("LeftSidePanel_theme-gray_pastel__Uf3ft");
                    document.querySelector(".LeftSidePanel_logo__3qdoA").querySelector("use").setAttribute("xlink:href", "#logo-hapara-small");
                }
            })
            document.querySelectorAll("[data-test-id*='Sd-TabList-SelectTab-']").forEach(element => {
                element.style.color = localStorage.color_secondary;
            });
            
            document.querySelector(".ClassSelection_modalTrigger__15PSf").style.backgroundColor = localStorage.color_primary;
            document.querySelector(".ClassSelection_modalTrigger__15PSf").style.color = localStorage.color_text;
            document.querySelector(".ClassSelection_modalTrigger__15PSf").addEventListener("mouseover", () => {
                document.querySelector(".ClassSelection_modalTrigger__15PSf").style.backgroundColor = localStorage.color_primary_accent;
            });
            document.querySelector(".ClassSelection_modalTrigger__15PSf").addEventListener("mouseleave", () => {
                document.querySelector(".ClassSelection_modalTrigger__15PSf").style.backgroundColor = localStorage.color_primary;
            });

            document.querySelectorAll(".WorkspaceTile_rootInner__Y-mTw").forEach(element => {
                element.style.backgroundColor = localStorage.color_primary;
                element.style.borderColor = localStorage.color_primary;
            });
            document.querySelectorAll("[data-test-id='Sd-WorkspaceTab-Tile-OpenWorkspace']").forEach(element => {
                element.style.color = localStorage.color_text;

                element.addEventListener("mouseover", () => {
                    element.style.backgroundColor = localStorage.color_primary_accent;
                });
                element.addEventListener("mouseleave", () => {
                    element.style.backgroundColor = localStorage.color_primary;
                });
            });

            document.querySelector(".MainContainer_centeredContent__YNI69").querySelectorAll("aside").forEach(element => {
                if (element.classList.contains("MainContainer_rightSidePanel__1il5o")) {
                    document.querySelector(".MainContainer_rightSidePanel__1il5o").style.backgroundColor = localStorage.color_primary;
                    document.querySelector(".MainContainer_rightSidePanel__1il5o").style.color = localStorage.color_secondary;
                    document.querySelectorAll(".ToolbarNotifications_header__2cm49").forEach(el => {
                        el.style.color = localStorage.color_secondary;
                    });
                    document.querySelectorAll(".AssignmentItem_root__3JS4-").forEach(el => {
                        el.style.backgroundColor = localStorage.color_secondary;
                        el.style.color = localStorage.color_primary;
                    });
                    document.querySelectorAll("[class*='ReturnedAssignmentItem_theme-']").forEach(el => {
                        el.style.backgroundColor = localStorage.color_secondary;
                        el.style.color = localStorage.color_primary;
                    });
                    document.querySelectorAll(".GmailCommunicationItem_root__1l8uW").forEach(el => {
                        el.style.backgroundColor = localStorage.color_secondary;
                        el.style.color = localStorage.color_primary;
                    });
                    document.querySelectorAll(".ReturnedAssignmentItem_grade__kON6E").forEach(el => {
                        el.style.backgroundColor = localStorage.color_primary;
                        el.style.color = localStorage.color_secondary;
                    });
                    if (document.querySelectorAll(".NotificationsFilterDropdown_ddTrigger__32-7-").length < 1) {
                        setTimeout(theme, 1);
                    } else {
                        document.querySelectorAll("[class*='NotificationsFilterDropdown_theme']").forEach(el => {
                            let classList = el.className.split(' ');
                            classList.forEach(className => {
                                if (className.includes("NotificationsFilterDropdown_theme")) {
                                    el.classList.remove(className);
                                    el.querySelector(".NotificationsFilterDropdown_ddTrigger__32-7-").style.backgroundColor = localStorage.color_secondary;
                                    el.querySelector(".NotificationsFilterDropdown_ddTrigger__32-7-").style.color = localStorage.color_primary;
                                    el.querySelector(".NotificationsFilterDropdown_ddTrigger__32-7-").addEventListener("mouseover", () => {
                                        el.querySelector(".NotificationsFilterDropdown_ddTrigger__32-7-").style.filter = "contrast(150%)";
                                    });
                                    el.querySelector(".NotificationsFilterDropdown_ddTrigger__32-7-").addEventListener("mouseleave", () => {
                                        el.querySelector(".NotificationsFilterDropdown_ddTrigger__32-7-").style.filter = "contrast(100%)";
                                    });
                                    
                                    el.querySelector(".NotificationsFilterDropdown_ddTrigger__32-7-").addEventListener("click", () => {
                                        setTimeout(() => {
                                            document.querySelectorAll(".NotificationsFilterDropdown_ddContent__3G14x").forEach(div => {
                                                div.style.backgroundColor = localStorage.color_secondary;
                                                div.style.borderColor = localStorage.color_secondary;
                                            })
                                            document.querySelectorAll(".NotificationsFilterDropdown_item__1qf5e").forEach(btn => {
                                                btn.style.backgroundColor = localStorage.color_secondary;
                                                btn.style.color = localStorage.color_primary;
                                                btn.addEventListener("click", () => {
                                                    setTimeout(theme, 1);
                                                });
                                                btn.addEventListener("mouseover", () => {
                                                    btn.style.filter = "contrast(150%)";
                                                });
                                                btn.addEventListener("mouseleave", () => {
                                                    btn.style.filter = "contrast(100%)";
                                                });
                                            });
                                        }), 50;
                                    });    
                                }
                            });
                        });
                    }
                }
            });

            document.querySelector(".MainContainer_gapRight__24KlD").style.backgroundColor = localStorage.color_secondary;
            document.querySelector(".MainContainer_gap__2St9b").style.backgroundColor = localStorage.color_secondary;
            document.querySelector(".MainContainer_toolbar__nz8kV").style.backgroundColor = localStorage.color_secondary;
            document.querySelector(".MainContainer_toolbar__nz8kV").style.borderLeft = localStorage.color_secondary;
            document.querySelector(".ClassSelection_rootInner__QDHl7").style.backgroundColor = localStorage.color_secondary;
            document.querySelector(".MainContainer_contentNav__TbxR0").style.backgroundColor = localStorage.color_secondary;
            document.querySelectorAll(".LeftSidePanel_arrowContainer__1gk0t").forEach(element => {
                element.style.color = localStorage.color_secondary;
                element.style.display = "none";
                if (element.parentElement.classList.contains("LeftSidePanel_active__20aEp")) {
                    element.style.display = "block";
                }
            });

            document.querySelector("a[data-test-id='Sd-TabList-SelectTab-Workspaces']").addEventListener("click", () => {
                setTimeout(theme, 1);
            })
            document.querySelector("a[data-test-id='Sd-TabList-SelectTab-ToDo']").addEventListener("click", () => {
                setTimeout(theme, 1);
            })
            document.querySelector("a[data-test-id='Sd-TabList-SelectTab-MyFiles']").addEventListener("click", () => {
                setTimeout(theme, 1);
            })

            clearInterval(loop);
        }
    });
}

let loop = setInterval(theme, 10);

function customize() {
    document.querySelectorAll(".ToolbarPersonaSettings_rootInner__1JSnG").forEach(element => {
        element.querySelector(".ToolbarPersonaSettingsThemes_themeList__1KjDT").style = `
        display: block;
        text-align: left;
        `;

        element.querySelector(".ToolbarPersonaSettingsThemes_themeList__1KjDT").innerHTML = `
        <label> <div class="placeholder"></div> Primary Color <input type="color" value="${localStorage.color_primary}"></label>
        <br>
        <label> <div class="placeholder"></div> Primary Accent Color <input type="color" value="${localStorage.color_primary_accent}"></label>
        <br>
        <label> <div class="placeholder"></div> Secondary Color <input type="color" value="${localStorage.color_secondary}"></label>
        <br>
        <label> <div class="placeholder"></div> Text Color <input type="color" value="${localStorage.color_text}"></label>
        <br>
        <button class="btn"> Confirm </button>
        `;
        element.querySelectorAll("input[type='color']").forEach(el => {
            el.style.opacity = "0";
            el.addEventListener("input", () => {
                el.parentElement.querySelector(".placeholder").style.backgroundColor = el.value;
            });
        });
        element.querySelectorAll("label").forEach(el => {
            el.style = `
            position: relative;
            margin-left: 30px;
            `;

            el.addEventListener("mouseover", () => {
                el.style.color = localStorage.color_text;
            });
            el.addEventListener("mouseleave", () => {
                el.style.color = localStorage.color_secondary;
            });
        });
        element.querySelectorAll(".placeholder").forEach(el => {
            el.style = `
            display: inline-block;
            position: absolute;
            margin-top: 4px;
            margin-left: -30px;
            width: 25px;
            height: 25px;
            background-color: ${el.parentElement.querySelector("input[type='color']").value};
            border: 2px solid black;
            border-radius: 50%;
            `;
        });
        element.querySelector(".btn").style = `
            background-color: ${localStorage.color_secondary};
            color: ${localStorage.color_primary};
            border-radius: 4px;
            margin-top: 15px;
        `;
        element.querySelector(".btn").addEventListener("click", () => {
            element.querySelectorAll("label").forEach(el => {
                if (el.innerText.includes("Primary Color")) {
                    localStorage.color_primary = el.querySelector("input[type='color']").value;
                }
                if (el.innerText.includes("Primary Accent Color")) {
                    localStorage.color_primary_accent = el.querySelector("input[type='color']").value;
                }
                if (el.innerText.includes("Secondary Color")) {
                    localStorage.color_secondary = el.querySelector("input[type='color']").value;
                }
                if (el.innerText.includes("Text Color")) {
                    localStorage.color_text = el.querySelector("input[type='color']").value;
                }
            });
            theme();
        });
        element.querySelector(".btn").addEventListener("mouseover", () => {
            element.querySelector(".btn").style.filter = "contrast(150%)";
        });
        element.querySelector(".btn").addEventListener("mouseleave", () => {
            element.querySelector(".btn").style.filter = "contrast(100%)";
        });

    });
}

function check() {
    document.querySelectorAll("div").forEach(div => {
        if (div.classList.contains("MainContainer_root__3BBQx")) {
            setTimeout(customize, 1);
            window.addEventListener("keypress", e => {
                if (e.code === "Space") {
                    document.querySelector("[data-test-id='Sd-Persona-Button-OpenDropdown']").click();
                    setTimeout(customize, 1);
                }
            })
            document.querySelectorAll(".Toolbar_icon__1KoH-").forEach(element => {
                if (element.getAttribute("aria-label") === "Open notifications") {
                    element.style.backgroundColor = localStorage.color_primary;
                    element.querySelector("use").setAttribute("xlink:href", "#bell-gradient");
                }
                element.style.borderColor = localStorage.color_primary;
                element.addEventListener("click", () => {
                    setTimeout(theme, 1);
                    setTimeout(customize, 1);
                });
            });

            clearInterval(checking);
        }
    });
}

let checking = setInterval(check, 0);