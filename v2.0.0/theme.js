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
      <label class="settings__label settings__label--color-primary"> 
        <div class="settings__label__color-placeholder"></div>
        <p> Primary Color </p>
        <input type="color" value="${localStorage.color_primary}">
      </label>
      <br>
      <label class="settings__label settings__label--color-secondary">
        <div class="settings__label__color-placeholder"></div>
        <p> Secondary Color </p>
        <input type="color" value="${localStorage.color_secondary}">
      </label>
      <br>
      <label class="settings__label settings__label--color-accent">
        <div class="settings__label__color-placeholder"></div>
        <p> Accent Color </p>
        <input type="color" value="${localStorage.color_accent}">
      </label>
      <br>
      <br>
      <div class="settings__advanced settings__advanced--closed">
        <h3 class="settings__advanced__header">
          Advanced Settings 
          <div class="settings__advanced__header__arrow settings__advanced__header__arrow--open">⤶</div>
          <div class="settings__advanced__header__arrow settings__advanced__header__arrow--closed">⤵</div>
        </h3>
        <div class="settings__advanced__setting">
          <label class="settings__label settings__label--color-primary-light"> 
            <div class="settings__label__color-placeholder"></div>
            <p> Light Primary Color </p>
            <input type="color" value="${localStorage.color_primary_light}">
          </label>
          <br>
          <label class="settings__label settings__label--color-primary-hover"> 
            <div class="settings__label__color-placeholder"></div>
            <p> Primary Color on Hover </p>
            <input type="color" value="${localStorage.color_primary_hover}">
          </label>
          <br>
          <label class="settings__label settings__label--color-accent-reversed"> 
            <div class="settings__label__color-placeholder"></div>
            <p> Complimentary Accent Color </p>
            <input type="color" value="${localStorage.color_accent_reversed}">
          </label>
        </div>
      </div>
      <br>
      <button> Save </button>
    </div>
    `
    if (element.innerHTML.includes('<div class="settings">')) {
      document.querySelectorAll(".settings__label__color-placeholder").forEach($placeholder => {
        $placeholder.style.background = $placeholder.parentElement.querySelector("input").value;
      });
      if (document.querySelector(".settings__advanced").classList.contains("settings__advanced--closed")) {
        document.querySelector(".settings button").style.marginTop = "-90px";
        document.querySelector(".settings__label--color-primary-light").querySelector("input").disabled = true;
        document.querySelector(".settings__label--color-primary-hover").querySelector("input").disabled = true;
        document.querySelector(".settings__label--color-accent-reversed").querySelector("input").disabled = true;
      } else {
        document.querySelector(".settings button").style.marginTop = "-10px";
        document.querySelector(".settings__label--color-primary-light").querySelector("input").disabled = false;
        document.querySelector(".settings__label--color-primary-hover").querySelector("input").disabled = false;
        document.querySelector(".settings__label--color-accent-reversed").querySelector("input").disabled = false;
      }
      return;
    };

    element.innerHTML = settings;

    element.querySelector(".settings__advanced__header").addEventListener("click", () => {
      const $settings__advanced = document.querySelector('.settings__advanced');
      $settings__advanced.classList = $settings__advanced.classList.contains('settings__advanced--open') ? 'settings__advanced settings__advanced--closed' : 'settings__advanced settings__advanced--open';
    });

    element.querySelector("button").addEventListener("click", () => {
      localStorage.color_primary = element.querySelector(".settings__label--color-primary").querySelector("input").value;
      localStorage.color_secondary = element.querySelector(".settings__label--color-secondary").querySelector("input").value;
      localStorage.color_accent = element.querySelector(".settings__label--color-accent").querySelector("input").value;
      localStorage.color_primary_light = element.querySelector(".settings__label--color-primary-light").querySelector("input").value;
      localStorage.color_primary_hover = element.querySelector(".settings__label--color-primary-hover").querySelector("input").value;
      localStorage.color_accent_reversed = element.querySelector(".settings__label--color-accent-reversed").querySelector("input").value;
      update();
    });
  });

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);