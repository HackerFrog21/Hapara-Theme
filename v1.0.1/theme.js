const invertHex = hex => {
	hex=parseInt(Number(hex.replace('#', '0x')), 10)
  hex=~hex
  hex=hex>>>0
  hex=hex&0x00ffffff
  hex='#' + hex.toString(16).padStart(6, "0")
  
  return hex
}

const adjust = (hex, amount) => {
  return '#' + hex.replace(/^#/, '').replace(/../g, hex => ('0'+Math.min(255, Math.max(0, parseInt(hex, 16) + amount)).toString(16)).substr(-2));
}

localStorage.color_primary = localStorage.color_primary || "#3F88C5";
localStorage.color_primary_light = localStorage.color_primary_light || (localStorage.color_primary ? adjust(localStorage.color_primary, 100) : "#a3ecff");
localStorage.color_primary_hover = localStorage.color_primary_hover || (localStorage.color_primary ? adjust(localStorage.color_primary, -30) : "#216aa7");
localStorage.color_secondary = localStorage.color_secondary || "#032B43";
localStorage.color_accent = localStorage.color_accent || "#ffffff";
localStorage.color_accent_reversed = localStorage.color_accent_reversed || (localStorage.color_accent ? invertHex(localStorage.color_accent) : "#000000");

const update = () => {
  document.body.style = `
  --primary-color: ${localStorage.color_primary};
  --primary-light-color: ${localStorage.color_primary_light};
  --primary-hover-color: ${localStorage.color_primary_hover};
  --secondary-color: ${localStorage.color_secondary};
  --accent-color: ${localStorage.color_accent};
  --accent-reversed-color: ${localStorage.color_accent_reversed};
`;
}
update();

const loop = () => {
  document.querySelectorAll(".LeftSidePanel_logo__3qdoA svg g").forEach(element => {
    element.innerHTML = `<use xlink:href="#logo-hapara-small-black"></use>`;
  });

  document.querySelectorAll(".ToolbarPersonaSettingsThemes_root__3w1cV").forEach(element => {
    const settings = `
    <div class="settings">
      <h2>Customize</h2>
      <label class="settings__label settings__label--color-primary"> Primary Color <input type="color" value="${localStorage.color_primary}"></label>
      <br>
      <label class="settings__label settings__label--color-secondary"> Secondary Color <input type="color" value="${localStorage.color_secondary}"></label>
      <br>
      <label class="settings__label settings__label--color-accent"> Accent Color <input type="color" value="${localStorage.color_accent}"></label>
      <br>
      <br>
      <div class="settings__advanced settings__advanced--closed">
        <h3 class="settings__advanced__header">
          Advanced Setting 
          <div class="settings__advanced__header__arrow settings__advanced__header__arrow--open">⤶</div>
          <div class="settings__advanced__header__arrow settings__advanced__header__arrow--closed">⤵</div>
        </h3>
        <div class="settings__advanced__setting">
          <label class="settings__label settings__label--color-primary-light"> Light Primary Color <input type="color" value="${localStorage.color_primary_light}"></label>
          <br>
          <label class="settings__label settings__label--color-primary-hover"> Primary Color on Hover <input type="color" value="${localStorage.color_primary_hover}"></label>
          <br>
          <label class="settings__label settings__label--color-accent-reversed"> Complimentary Accent Color <input type="color" value="${localStorage.color_accent_reversed}"></label>
        </div>
      </div>
      <br>
      <button> Save </button>
    </div>
    `
    if (element.innerHTML.includes('<div class="settings">')) return;
    element.innerHTML = settings;

    element.querySelector(".settings__advanced").addEventListener("click", () => {
      const $settings__advanced = document.querySelector('.settings__advanced');
      $settings__advanced.classList = $settings__advanced.classList.contains('settings__advanced--open') ? 'settings__advanced settings__advanced--closed' : 'settings__advanced settings__advanced--open';
    })

    element.querySelector("button").addEventListener("click", () => {
      localStorage.color_primary = element.querySelector(".settings__label--color-primary").firstElementChild.value;
      localStorage.color_secondary = element.querySelector(".settings__label--color-secondary").firstElementChild.value;
      localStorage.color_accent = element.querySelector(".settings__label--color-accent").firstElementChild.value;
      localStorage.color_primary_light = element.querySelector(".settings__label--color-primary-light").firstElementChild.value;
      localStorage.color_primary_hover = element.querySelector(".settings__label--color-primary-hover").firstElementChild.value;
      localStorage.color_accent_reversed = element.querySelector(".settings__label--color-accent-reversed").firstElementChild.value;
      update();
    })
  });

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);