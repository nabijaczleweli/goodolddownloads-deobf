// Deobfuscate https://goggames.goodolddownloads.com/ links
//
// This is defined at the top of the file:
// <script nonce="54qMTA39DbdKsidJsemlj9I4KhapVdIx">dank = "CAYNE";memes = 4;</script>
//
// Then <a.link> elements have hrefs: call `full_dec()` for each one


let lowerReference = "abcdefghijklmnopqrstuvwxyz",
    upperReference = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function isalpha(e) {
  return /^[a-zA-Z]+$/.test(e);
}

function dec(key, ciphertext, n) {
  key = key.toLowerCase();

  let output = "";
  for (var s = 0, l = 0; s < ciphertext.length; s++) {
    if (isalpha(ciphertext[s])) {
      let i = lowerReference.indexOf(ciphertext[s].toLowerCase()) -
              lowerReference.indexOf(key[l]);
      if (i < 0) {
        i += 26;
      }
      i %= 26;

      if (upperReference.indexOf(ciphertext[s]) !== -1)
        output += upperReference[i];
      else
        output += lowerReference[i];

      if (key.length === l + 1)
        l = 0;
      else
        ++l;
    } else
      output += ciphertext[s];
  }

  return output;
}


function full_dec(todec, dank, memes) {
  for (var a = 0; a < memes; ++a) {
    todec = dec(dank, todec);
  }
  return todec;
}


let argv = process.argv.slice(2);

let todec = argv[0];
let dank = argv[1];
let memes = parseInt(argv[2]);

console.log(full_dec(todec, dank, memes));


// Example known-working cases:
//
// dank = "CALIFORNIUM";memes = 1;
// full_dec("jtexx://rivdy.sqortj.qfz/wjqp?io=1PX2hb8IMDqHRn0uNji496vQ-2DxwXxHw", "CALIORNIUM", 1);
//   -> https://drive.google.com/open?id=1HS2tk8VEJeFRc0mIvr496iI-2JluXmZr
// full_dec("jtexx://rivdy.sqortj.qfz/wjqp?io=19ZB6gjwu3tiOat7Hz5cpbvls1tDjlgAe", "CALIORNIUM", 1);
//   -> https://drive.google.com/open?id=19RW6ssjm3zwMai7Zu5oyonrg1rDydbMn
// full_dec("jtexx://rivdy.sqortj.qfz/wjqp?io=1H0FjRrshYvZFvRiRRgMCjN2JGai3tQ7d", "CALIORNIUM", 1);
//   -> https://drive.google.com/open?id=1Z0AvAeknMtZUnMuAEySQhN2YYvu3cD7v
// full_dec("jtexx://rivdy.sqortj.qfz/wjqp?io=1rBwv3LPi96_BqskWJOmljsGinr_CWEI8", "CALIORNIUM", 1);
//   -> https://drive.google.com/open?id=1jWie3YHo96_PoszOEAvybyUgng_URQR8
// full_dec("jtexx://rivdy.sqortj.qfz/wjqp?io=1RB_vjcbZ-h-BpuC3_sf2vl-vZbGGqDHu", "CALIORNIUM", 1);
//   -> https://drive.google.com/open?id=1JW_hsptF-v-ZpjU3_nr2ey-nFpEGfVCg
// full_dec("jtexx://rivdy.sqortj.qfz/wjqp?io=1WirkYVKFEsGeOOmvEp8Xz54JhziaO3um", "CALIORNIUM", 1);
//   -> https://drive.google.com/open?id=1OddtLNQTCsVwJAviWv8Lx54JwrdmX3he
// full_dec("jtexx://rivdy.sqortj.qfz/wjqp?io=1LjW4jqXh6JZcicIk2Z74TSgek5cXg2SB", "CALIORNIUM", 1);
//   -> https://drive.google.com/open?id=1DeI4sdPn6XXcxuDw2I74GKmsi5cMy2NN

// Example known-working cases:
//
// dank = "INTERSTELLARIA";memes = 2;
// full_dec("xtfxa://ndqra.gwegbe.owu/ybmj?ed=1PI2ta8VQRmPDk0iEvz496yI-2ZlgFuJd", "INTERSTELLARIA", 2);
//   -> https://drive.google.com/open?id=1HS2tk8VEJeFRc0mIvr496iI-2JluXmZr
// full_dec("xtfxa://ndqra.gwegbe.owu/ybmj?ed=19ZM6sijy3heWmq7Vq5ogenhg1dLgnnUj", "INTERSTELLARIA", 2);
//   -> https://drive.google.com/open?id=19RW6ssjm3zwMai7Zu5oyonrg1rDydbMn
// full_dec("xtfxa://ndqra.gwegbe.owu/ybmj?ed=1H0QvQewvUdLCjIuIUyIQtV2GIhc3yZ7v", "INTERSTELLARIA", 2);
//   -> https://drive.google.com/open?id=1Z0AvAeknMtZUnMuAEySQhN2YYvu3cD7v
// full_dec("xtfxa://ndqra.gwegbe.owu/ybmj?ed=1rMiu3YTw96_XyehKAAdoboUsvo_EDYN8", "INTERSTELLARIA", 2);
//   -> https://drive.google.com/open?id=1jWie3YHo96_PoszOEAvybyUgng_URQR8
// full_dec("xtfxa://ndqra.gwegbe.owu/ybmj?ed=1RM_hipfN-d-JbrQ3_jr2mo-nVpQOnFOo", "INTERSTELLARIA", 2);
//   -> https://drive.google.com/open?id=1JW_hsptF-v-ZpjU3_nr2ey-nFpEGfVCg
// full_dec("xtfxa://ndqra.gwegbe.owu/ybmj?ed=1WtdjLZYBMeDsFAdyWl8Lj54RebpuT3de", "INTERSTELLARIA", 2);
//   -> https://drive.google.com/open?id=1OddtLNQTCsVwJAviWv8Lx54JwrdmX3he
// full_dec("xtfxa://ndqra.gwegbe.owu/ybmj?ed=1LuI4idBv6FHofqZw2Q74WKcsu5kUi2ZV", "INTERSTELLARIA", 2);
//   -> https://drive.google.com/open?id=1DeI4sdPn6XXcxuDw2I74GKmsi5cMy2NN
