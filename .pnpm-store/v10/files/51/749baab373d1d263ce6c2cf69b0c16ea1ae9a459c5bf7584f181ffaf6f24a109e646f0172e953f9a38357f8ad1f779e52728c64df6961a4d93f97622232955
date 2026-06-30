const C = [
  "Aztec",
  "Codabar",
  "Code128",
  "Code39",
  "Code93",
  "DataBar",
  "DataBarExpanded",
  "DataMatrix",
  "DXFilmEdge",
  "EAN-13",
  "EAN-8",
  "ITF",
  "Linear-Codes",
  "Matrix-Codes",
  "MaxiCode",
  "MicroQRCode",
  "None",
  "PDF417",
  "QRCode",
  "rMQRCode",
  "UPC-A",
  "UPC-E"
];
function T(e) {
  return e.join("|");
}
function p(e) {
  const t = I(e);
  let r = 0, o = C.length - 1;
  for (; r <= o; ) {
    const n = Math.floor((r + o) / 2), a = C[n], s = I(a);
    if (s === t)
      return a;
    s < t ? r = n + 1 : o = n - 1;
  }
  return "None";
}
function I(e) {
  return e.toLowerCase().replace(/_-\[\]/g, "");
}
const v = [
  "LocalAverage",
  "GlobalHistogram",
  "FixedThreshold",
  "BoolCast"
];
function b(e, t) {
  return e.Binarizer[t];
}
const P = [
  "Unknown",
  "ASCII",
  "ISO8859_1",
  "ISO8859_2",
  "ISO8859_3",
  "ISO8859_4",
  "ISO8859_5",
  "ISO8859_6",
  "ISO8859_7",
  "ISO8859_8",
  "ISO8859_9",
  "ISO8859_10",
  "ISO8859_11",
  "ISO8859_13",
  "ISO8859_14",
  "ISO8859_15",
  "ISO8859_16",
  "Cp437",
  "Cp1250",
  "Cp1251",
  "Cp1252",
  "Cp1256",
  "Shift_JIS",
  "Big5",
  "GB2312",
  "GB18030",
  "EUC_JP",
  "EUC_KR",
  "UTF16BE",
  "UTF8",
  "UTF16LE",
  "UTF32BE",
  "UTF32LE",
  "BINARY"
];
function O(e, t) {
  return e.CharacterSet[t];
}
const w = [
  "Text",
  "Binary",
  "Mixed",
  "GS1",
  "ISO15434",
  "UnknownECI"
];
function F(e) {
  return w[e.value];
}
const L = ["Ignore", "Read", "Require"];
function _(e, t) {
  return e.EanAddOnSymbol[t];
}
const M = ["Plain", "ECI", "HRI", "Hex", "Escaped"];
function R(e, t) {
  return e.TextMode[t];
}
const d = {
  formats: [],
  tryHarder: !0,
  tryRotate: !0,
  tryInvert: !0,
  tryDownscale: !0,
  binarizer: "LocalAverage",
  isPure: !1,
  downscaleFactor: 3,
  downscaleThreshold: 500,
  minLineCount: 2,
  maxNumberOfSymbols: 255,
  tryCode39ExtendedMode: !1,
  validateCode39CheckSum: !1,
  validateITFCheckSum: !1,
  returnCodabarStartEnd: !1,
  returnErrors: !1,
  eanAddOnSymbol: "Read",
  textMode: "Plain",
  characterSet: "Unknown"
};
function y(e, t) {
  return {
    ...t,
    formats: T(t.formats),
    binarizer: b(e, t.binarizer),
    eanAddOnSymbol: _(
      e,
      t.eanAddOnSymbol
    ),
    textMode: R(e, t.textMode),
    characterSet: O(
      e,
      t.characterSet
    )
  };
}
const x = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8], W = ["L", "M", "Q", "H"], S = {
  width: 200,
  height: 200,
  format: "QRCode",
  characterSet: "UTF8",
  eccLevel: -1,
  margin: 10
};
function B(e, t) {
  return {
    ...t,
    characterSet: O(
      e,
      t.characterSet
    )
  };
}
function E(e) {
  return {
    ...e,
    format: p(e.format),
    eccLevel: e.eccLevel,
    contentType: F(e.contentType)
  };
}
function A(e) {
  const { image: t, error: r } = e;
  return t ? {
    image: new Blob([new Uint8Array(t)], {
      type: "image/png"
    }),
    error: ""
  } : {
    image: null,
    error: r
  };
}
const U = {
  locateFile: (e, t) => {
    const r = e.match(/_(.+?)\.wasm$/);
    return r ? `https://fastly.jsdelivr.net/npm/zxing-wasm@1.1.3/dist/${r[1]}/${e}` : t + e;
  }
};
let m = /* @__PURE__ */ new WeakMap();
function h(e, t) {
  var a;
  const r = m.get(e);
  if (r != null && r.modulePromise && (t === void 0 || Object.is(t, r.moduleOverrides)))
    return r.modulePromise;
  const o = (a = t != null ? t : r == null ? void 0 : r.moduleOverrides) != null ? a : U, n = e({
    ...o
  });
  return m.set(e, {
    moduleOverrides: o,
    modulePromise: n
  }), n;
}
function X() {
  m = /* @__PURE__ */ new WeakMap();
}
function Z(e, t) {
  m.set(e, {
    moduleOverrides: t
  });
}
async function z(e, t, r = d) {
  const o = {
    ...d,
    ...r
  }, n = await h(e), { size: a } = t, s = new Uint8Array(await t.arrayBuffer()), u = n._malloc(a);
  n.HEAPU8.set(s, u);
  const l = n.readBarcodesFromImage(
    u,
    a,
    y(n, o)
  );
  n._free(u);
  const i = [];
  for (let c = 0; c < l.size(); ++c)
    i.push(
      E(l.get(c))
    );
  return i;
}
async function D(e, t, r = d) {
  const o = {
    ...d,
    ...r
  }, n = await h(e), {
    data: a,
    width: s,
    height: u,
    data: { byteLength: l }
  } = t, i = n._malloc(l);
  n.HEAPU8.set(a, i);
  const c = n.readBarcodesFromPixmap(
    i,
    s,
    u,
    y(n, o)
  );
  n._free(i);
  const g = [];
  for (let f = 0; f < c.size(); ++f)
    g.push(
      E(c.get(f))
    );
  return g;
}
async function H(e, t, r = S) {
  const o = {
    ...S,
    ...r
  }, n = await h(e), a = n.writeBarcodeToImage(
    t,
    B(n, o)
  );
  return A(a);
}
const k = {
  ...d,
  formats: [...d.formats]
}, N = { ...S };
export {
  D as a,
  C as b,
  v as c,
  k as d,
  P as e,
  w as f,
  h as g,
  L as h,
  W as i,
  N as j,
  x as k,
  X as p,
  z as r,
  Z as s,
  M as t,
  H as w
};
