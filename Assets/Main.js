const headerList = document.querySelector("nav");
const menuBtn = document.querySelector(".responsive-btn button");

const quitIcon = `<svg
id="quitIcon"
  xmlns="http://www.w3.org/2000/svg"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  fill="none"
>
  <line x1="5" y1="5" x2="19" y2="19" stroke="#fbd14b" stroke-width="2.5" stroke-linecap="round" />
  <line x1="19" y1="5" x2="5" y2="19" stroke="#fbd14b" stroke-width="2.5" stroke-linecap="round" />
</svg>
`;

const menuIcon = ` <svg
id="menu-icon"
            width="40px"
            height="40px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="honey"
                x1="0"
                y1="0"
                x2="64"
                y2="64"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stop-color="#fbd14b" />
                <stop offset="100%" stop-color="#e89c1c" />
              </linearGradient>
              <linearGradient
                id="lid"
                x1="0"
                y1="0"
                x2="64"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stop-color="#b1782c" />
                <stop offset="100%" stop-color="#d89e39" />
              </linearGradient>
            </defs>

            <!-- Pot shape -->
            <path
              d="M20 18 Q16 28 20 44 Q22 52 32 52 Q42 52 44 44 Q48 28 44 18 Z"
              fill="url(#honey)"
              stroke="#e89c1c"
              stroke-width="2"
            />

            <!-- Lid -->
            <ellipse cx="32" cy="16" rx="16" ry="4" fill="url(#lid)" />
            <rect x="16" y="12" width="32" height="6" rx="3" fill="url(#lid)" />

            <!-- Menu bars (miel à l'intérieur) -->
            <rect x="22" y="28" width="20" height="3" rx="1.5" fill="#fff5cc" />
            <rect x="22" y="34" width="20" height="3" rx="1.5" fill="#fff5cc" />
            <rect x="22" y="40" width="20" height="3" rx="1.5" fill="#fff5cc" />
          </svg> 
          `;
function switchSvg() {
  const svgContainer = document.querySelector(".responsive-btn button");
  const currentSvg = svgContainer.querySelector("svg");

  if (!currentSvg) return;

  const isMenuIcon = currentSvg.id === "menu-icon";

  headerList.classList.toggle("active", isMenuIcon);

  svgContainer.innerHTML = isMenuIcon ? quitIcon : menuIcon;
}

menuBtn.addEventListener("click", () => {
  switchSvg();
});
/*GLIDEJS*/
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 0,
  animationDuration: 1500,
  focusAt: "center",
  keyboard: true,
  peek: { before: 100, after: 100 },
  breakpoints: {
    990: {
      perView: 1,
      peek: { before: 0, after: 0 },
    },
  },
}).mount();
