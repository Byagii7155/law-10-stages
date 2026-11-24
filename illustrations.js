/* Үе шат бүрийн бүрэн хэмжээний вектор иллюстраци (480 × 200 баннер).
   Зураас/дүүргэлтийн үндсэн утгууд нь styles.css дахь .stage-banner svg дүрмээс ирнэ. */
const ILLU = {
  s1: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <circle cx="392" cy="52" r="88" fill="#efd9a4" stroke="none" opacity=".6"/>
    <circle cx="392" cy="52" r="52" fill="#e3c27c" stroke="none" opacity=".5"/>
    <path d="M44 84a12 12 0 0 1 12-12h62l18 18h188a12 12 0 0 1 12 12v62a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V84Z" fill="#c89a34"/>
    <rect x="76" y="42" width="178" height="116" rx="6" fill="#fffaee"/>
    <path d="M96 68h104M96 86h132M96 104h108M96 122h74" stroke="#c0a05f" stroke-width="5"/>
    <path d="M40 116h224a10 10 0 0 1 10 10v38a12 12 0 0 1-12 12H52a12 12 0 0 1-12-12v-38a10 10 0 0 1 10-10Z" fill="#e2b455"/>
    <rect x="64" y="134" width="78" height="13" rx="4" fill="#fffaee" stroke="none" opacity=".85"/>
    <rect x="64" y="154" width="52" height="8" rx="4" fill="#8a5f18" stroke="none" opacity=".35"/>
    <circle cx="222" cy="138" r="20" fill="#f3e0b4" stroke="#8a5f18"/>
    <path d="M213 138l6 6 11-12" stroke="#8a5f18" stroke-width="3"/>
    <g transform="translate(316,44)">
      <rect x="38" y="0" width="28" height="40" rx="9" fill="#8a5f18"/>
      <rect x="6" y="38" width="92" height="16" rx="6" fill="#6b4a1c"/>
      <rect x="4" y="54" width="96" height="13" rx="5" fill="#4a3418"/>
      <ellipse cx="52" cy="88" rx="36" ry="12" fill="#b8862b" opacity=".4" stroke="none"/>
      <path d="M32 88c0-6 9-10 20-10s20 4 20 10" stroke="#8a5f18" stroke-width="2" opacity=".6"/>
    </g>
  </svg>`,

  s2: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <rect x="286" y="20" width="166" height="164" rx="18" fill="#f3e3bb" stroke="none" opacity=".8"/>
    <circle cx="392" cy="46" r="46" fill="#e3c27c" stroke="none" opacity=".45"/>
    <rect x="46" y="56" width="164" height="114" rx="8" fill="#fffaee"/>
    <path d="M68 84h102M68 102h120M68 120h86M68 138h108" stroke="#c0a05f" stroke-width="5"/>
    <path d="M58 46h150" stroke="#c89a34" stroke-width="7" stroke-linecap="round"/>
    <circle cx="250" cy="102" r="54" fill="#fdf3d9" stroke="#4a3418" stroke-width="5"/>
    <circle cx="250" cy="102" r="40" stroke="#d3a33f" stroke-width="2" opacity=".7"/>
    <path d="M228 110a24 24 0 0 1 20-26M264 92a22 22 0 0 1 10 20" stroke="#b8862b" stroke-width="3"/>
    <path d="M232 96h36M232 108h28" stroke="#c0a05f" stroke-width="4"/>
    <path d="M290 142l40 40" stroke="#6b4a1c" stroke-width="17" stroke-linecap="round"/>
    <path d="M290 142l18 18" stroke="#b8862b" stroke-width="17" stroke-linecap="round"/>
    <circle cx="376" cy="140" r="36" fill="#fffaee"/>
    <circle cx="376" cy="140" r="28" fill="#f3e0b4" stroke="none"/>
    <path d="M376 116v24l15 10"/>
    <path d="M376 106v4M376 152v4M342 140h4M406 140h4" stroke="#8a5f18" stroke-width="3"/>
  </svg>`,

  s3: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <defs>
      <g id="illu-s3-cuff">
        <circle r="42" stroke="#4a3418" stroke-width="13"/>
        <circle r="42" stroke="#e2b455" stroke-width="7"/>
        <circle r="28" stroke="#8a5f18" stroke-width="2" stroke-dasharray="4 6"/>
      </g>
    </defs>
    <rect x="30" y="16" width="182" height="168" rx="14" fill="#f6e7c1" stroke="none" opacity=".75"/>
    <rect x="24" y="18" width="196" height="14" rx="6" fill="#6b4a1c"/>
    <rect x="38" y="30" width="11" height="146" rx="5" fill="#c89a34"/>
    <rect x="86" y="30" width="11" height="146" rx="5" fill="#c89a34"/>
    <rect x="134" y="30" width="11" height="146" rx="5" fill="#c89a34"/>
    <rect x="182" y="30" width="11" height="146" rx="5" fill="#c89a34"/>
    <rect x="30" y="94" width="170" height="11" rx="5" fill="#b8862b"/>
    <use href="#illu-s3-cuff" x="272" y="96"/>
    <use href="#illu-s3-cuff" x="374" y="96"/>
    <path d="M308 96h24" stroke="#6b4a1c" stroke-width="10"/>
    <path d="M300 78h40" stroke="#b8862b" stroke-width="6" stroke-linecap="round"/>
    <g transform="translate(236,148)">
      <circle cx="0" cy="0" r="9" fill="#efd9a4"/>
      <path d="M9 0h52M50 0v9M58 0v9" stroke="#8a5f18" stroke-width="4"/>
    </g>
  </svg>`,

  s4: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <circle cx="88" cy="46" r="72" fill="#efd9a4" stroke="none" opacity=".5"/>
    <rect x="104" y="22" width="272" height="158" rx="10" fill="#fffaee"/>
    <path d="M104 32a10 10 0 0 1 10-10h252a10 10 0 0 1 10 10v34H104V32Z" fill="#e2b455"/>
    <path d="M126 38h94" stroke="#fffaee" stroke-width="5"/>
    <circle cx="176" cy="106" r="21" fill="#e2b455"/>
    <path d="M142 154c0-19 15-34 34-34s34 15 34 34" fill="#e2b455"/>
    <path d="M124 154h104" stroke="#c89a34" stroke-width="3"/>
    <path d="M232 88h108M232 106h120M232 124h88M232 142h112" stroke="#c0a05f" stroke-width="5"/>
    <circle cx="332" cy="142" r="23" fill="#f3e0b4" stroke="#8a5f18"/>
    <circle cx="332" cy="142" r="15" stroke="#8a5f18" stroke-width="1.6" stroke-dasharray="3 4"/>
    <path d="M324 142l6 6 11-12" stroke="#8a5f18" stroke-width="3"/>
    <g transform="translate(378,52)">
      <rect x="0" y="0" width="52" height="70" rx="6" fill="#fffaee"/>
      <path d="M10 18h32M10 32h32M10 46h20" stroke="#c0a05f" stroke-width="4"/>
    </g>
  </svg>`,

  s5: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <rect x="38" y="18" width="404" height="164" rx="16" fill="#f6e7c1"/>
    <rect x="52" y="32" width="376" height="136" rx="10" fill="#fdf3d9" stroke="#d3a33f" stroke-width="2"/>
    <rect x="74" y="48" width="96" height="72" rx="4" fill="#fffaee"/>
    <path d="M82 108l22-26 16 18 12-14 24 22" stroke="#c89a34" stroke-width="3"/>
    <circle cx="122" cy="48" r="6" fill="#b8862b"/>
    <rect x="204" y="40" width="92" height="66" rx="4" fill="#fffaee"/>
    <path d="M214 92h34M214 78h58M214 64h46" stroke="#c0a05f" stroke-width="4"/>
    <circle cx="250" cy="40" r="6" fill="#b8862b"/>
    <rect x="324" y="54" width="94" height="76" rx="4" fill="#fffaee"/>
    <path d="M336 106c10-14 18-4 26-14s16 2 24-8" stroke="#c89a34" stroke-width="3"/>
    <path d="M336 74h52" stroke="#c0a05f" stroke-width="4"/>
    <circle cx="371" cy="54" r="6" fill="#b8862b"/>
    <path d="M170 84l34-6M296 74l28 16" stroke="#b8862b" stroke-dasharray="5 6"/>
    <rect x="96" y="132" width="132" height="28" rx="4" fill="#efd9a4"/>
    <path d="M96 132l66 18 66-18" stroke="#8a5f18"/>
    <circle cx="316" cy="146" r="22" fill="#fdf3d9" stroke="#6b4a1c" stroke-width="3"/>
    <path d="M332 162l16 16" stroke="#6b4a1c" stroke-width="7"/>
  </svg>`,

  s6: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <circle cx="392" cy="56" r="80" fill="#efd9a4" stroke="none" opacity=".55"/>
    <rect x="112" y="34" width="204" height="150" rx="8" fill="#f3e0b4" stroke="#8a5f18" stroke-width="2"/>
    <rect x="100" y="22" width="204" height="152" rx="8" fill="#fffaee"/>
    <path d="M304 22v34h-34" fill="#efd9a4"/>
    <path d="M304 22l-34 34" stroke="#c0a05f" stroke-width="2"/>
    <path d="M124 58h92M124 76h140M124 94h104M124 112h136M124 130h80" stroke="#c0a05f" stroke-width="5"/>
    <path d="M126 156c14-12 20 8 34-4s16 8 30-2" stroke="#6b4a1c" stroke-width="3"/>
    <path d="M196 158h78" stroke="#d3a33f" stroke-width="2" stroke-dasharray="4 5"/>
    <circle cx="266" cy="140" r="24" fill="#e2b455" stroke="#6b4a1c"/>
    <path d="M266 126l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1 4-9Z" fill="#fffaee" stroke="#8a5f18" stroke-width="1.8"/>
    <g transform="translate(356,20) rotate(36)">
      <rect x="0" y="0" width="20" height="86" rx="7" fill="#c89a34"/>
      <rect x="0" y="62" width="20" height="8" fill="#6b4a1c" stroke="none"/>
      <path d="M2 86h16l-8 26-8-26Z" fill="#4a3418"/>
      <path d="M7 92h6" stroke="#e2b455" stroke-width="2"/>
    </g>
    <path d="M330 168h44M338 176h28" stroke="#8a5f18" stroke-width="4" opacity=".6"/>
  </svg>`,

  s7: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <circle cx="240" cy="96" r="96" fill="#f3e3bb" stroke="none" opacity=".65"/>
    <rect x="76" y="30" width="140" height="76" rx="16" fill="#fffaee"/>
    <path d="M112 106l-6 20 26-20" fill="#fffaee"/>
    <path d="M98 54h96M98 72h74" stroke="#c0a05f" stroke-width="5"/>
    <rect x="262" y="44" width="142" height="72" rx="16" fill="#e9cf94"/>
    <path d="M368 116l8 20-28-20" fill="#e9cf94"/>
    <path d="M284 68h98M284 86h70" stroke="#8a5f18" stroke-width="5" opacity=".65"/>
    <ellipse cx="240" cy="152" rx="132" ry="24" fill="#c89a34"/>
    <path d="M108 152v22M372 152v22" stroke="#6b4a1c" stroke-width="7"/>
    <g transform="translate(186,124)">
      <rect x="0" y="0" width="70" height="46" rx="4" fill="#fffaee"/>
      <path d="M10 14h50M10 26h34M10 38h44" stroke="#c0a05f" stroke-width="4"/>
    </g>
    <g transform="translate(272,126)">
      <circle cx="0" cy="10" r="8"/>
      <circle cx="22" cy="10" r="8"/>
      <path d="M8 10h6"/>
      <path d="M-12 10h-12" stroke="#8a5f18"/>
    </g>
    <circle cx="64" cy="150" r="16" fill="#e2b455" stroke="none" opacity=".8"/>
    <circle cx="418" cy="140" r="11" fill="#efd9a4" stroke="none"/>
  </svg>`,

  s8: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <circle cx="264" cy="100" r="94" fill="#f3e3bb" stroke="none" opacity=".6"/>
    <path d="M34 72h72M22 100h78M42 128h58" stroke="#c89a34" stroke-width="7" stroke-linecap="round"/>
    <rect x="140" y="24" width="164" height="156" rx="8" fill="#fffaee"/>
    <path d="M160 50h86M160 68h122M160 86h100M160 104h118" stroke="#c0a05f" stroke-width="5"/>
    <path d="M160 134h74" stroke="#c0a05f" stroke-width="5"/>
    <circle cx="262" cy="148" r="24" fill="#e2b455" stroke="#6b4a1c"/>
    <path d="M252 148l7 8 13-15" stroke="#4a3418" stroke-width="3.4"/>
    <path d="M330 62l26 38-26 38" stroke="#b8862b" stroke-width="8" stroke-linejoin="round"/>
    <path d="M372 62l26 38-26 38" stroke="#d3a33f" stroke-width="8" stroke-linejoin="round" opacity=".8"/>
    <path d="M118 158h44" stroke="#8a5f18" stroke-width="4" opacity=".55"/>
  </svg>`,

  s9: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <circle cx="240" cy="92" r="94" fill="#f3e3bb" stroke="none" opacity=".55"/>
    <circle cx="240" cy="92" r="70" stroke="#d3a33f" stroke-width="1.6" opacity=".55"/>
    <circle cx="240" cy="28" r="9" fill="#6b4a1c"/>
    <path d="M240 38v116"/>
    <path d="M146 66h188"/>
    <path d="M166 66l-28 44M166 66l28 44"/>
    <path d="M138 110h56a28 13 0 0 1-56 0Z" fill="#e2b455"/>
    <path d="M314 66l-28 44M314 66l28 44"/>
    <path d="M286 110h56a28 13 0 0 1-56 0Z" fill="#e2b455"/>
    <ellipse cx="240" cy="170" rx="62" ry="13" fill="#c89a34"/>
    <ellipse cx="240" cy="158" rx="30" ry="7" fill="#8a5f18"/>
    <path d="M208 154h64" stroke="#4a3418" stroke-width="3"/>
    <path d="M96 138l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2 6-12Z" fill="#efd9a4" stroke="#8a5f18" stroke-width="2"/>
    <path d="M392 120l4 9 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1 4-9Z" fill="#efd9a4" stroke="#8a5f18" stroke-width="2"/>
  </svg>`,

  s10: `<svg viewBox="0 0 480 200" aria-hidden="true">
    <circle cx="318" cy="82" r="88" fill="#efd9a4" stroke="none" opacity=".55"/>
    <circle cx="318" cy="82" r="56" fill="#e3c27c" stroke="none" opacity=".45"/>
    <rect x="32" y="52" width="106" height="112" rx="6" fill="#fffaee"/>
    <path d="M48 76h66M48 94h74M48 112h56M48 130h68" stroke="#c0a05f" stroke-width="4.5"/>
    <circle cx="112" cy="146" r="14" fill="#e2b455" stroke="#8a5f18" stroke-width="2"/>
    <g transform="rotate(-28 306 84)">
      <rect x="228" y="60" width="120" height="48" rx="10" fill="#c89a34"/>
      <path d="M252 62v44M324 62v44" stroke="#8a5f18" stroke-width="3"/>
      <rect x="348" y="74" width="88" height="20" rx="9" fill="#e2b455"/>
      <path d="M418 80v8" stroke="#8a5f18" stroke-width="2.4"/>
    </g>
    <rect x="172" y="146" width="176" height="18" rx="6" fill="#6b4a1c"/>
    <rect x="196" y="164" width="128" height="10" rx="4" fill="#8a5f18"/>
    <path d="M368 150l12-8M382 158l14-2M356 138l6-12" stroke="#b8862b" stroke-width="3" opacity=".8"/>
    <path d="M36 34l4 10 10 1-8 8 2 10-8-5-8 5 2-10-8-8 10-1 4-10Z" fill="#efd9a4" stroke="#8a5f18" stroke-width="1.8" opacity=".9"/>
  </svg>`
};
