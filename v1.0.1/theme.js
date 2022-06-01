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

document.body.style = `
  --primary-color: ${localStorage.color_primary};
  --primary-light-color: ${localStorage.color_primary_light};
  --primary-hover-color: ${localStorage.color_primary_hover};
  --secondary-color: ${localStorage.color_secondary};
  --accent-color: ${localStorage.color_accent};
  --accent-reversed-color: ${localStorage.color_accent_reversed};
`;

const loop = () => {
  document.querySelectorAll(".LeftSidePanel_logo__3qdoA svg g").forEach(element => {
    element.innerHTML = `<use xlink:href="#logo-hapara-small-black"></use>`;
  });

  document.querySelectorAll(".ToolbarPersonaSettingsThemes_root__3w1cV").forEach(element => {
    const settings = `
    <div class="settings">
      <h2>Customize</h2>
      <label> Primary Color <input type="color" value="${localStorage.color_primary}"></label>
      <br>
      <label> Secondary Color <input type="color" value="${localStorage.color_secondary}"></label>
      <br>
      <label> Accent Color <input type="color" value="${localStorage.color_accent}"></label>
      <br>
      <button class="btn"> Confirm </button>
      <br>
      <h3>Advanced Setting ⤸</h3>
      <div class="settings__advanced">
      
      
      </div>
    </div>
    `
    if (element.innerHTML === settings) return;
    element.innerHTML = settings;
  });

  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);