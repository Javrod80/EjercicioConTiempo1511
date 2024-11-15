
/*
A partir del siguiente JSON con los metadatos de los emojis, debes permitir que el usuario cargue la imagen de uno de ellos por código, dale como opción 4.

https://openmoji.org/data/openmoji.json (URL API para el JSON)

https://openmoji.org/data/color/svg/emoji_code.svg (URL API para cada emoji)

Ejemplo:
https://openmoji.org/data/color/svg/1F600.svg (Petición del emoji con código 1F600) 

*/

function makeVisual() {

  let title = document.createElement("h1");
  let text = document.createTextNode("Elige un Emoji");
  title.appendChild(text);


  // crear un select
  let = selectEmoji = document.createElement("select");
  selectEmoji.id = "selectEmoji";

  // crear las opciones
  let emojis = createEmoji();
  emojis.forEach(emoji => {
    let option = document.createElement("option");
    option.value = emoji.hexcode;
    option.textContent = emoji.hexcode;
    selectEmoji.appendChild(option);

  })

  let divGeneralContainer = document.createElement("div");
  divGeneralContainer.id = "generalContainer";
  divGeneralContainer.appendChild(title);
  divGeneralContainer.appendChild(selectEmoji);

  // crear div para la imagen
  let emojiDisplayContainer = document.createElement("div");
  emojiDisplayContainer.id = "emojiDisplayContainer";
  divGeneralContainer.appendChild(emojiDisplayContainer);




  document.body.appendChild(divGeneralContainer);

 // event listener para el select
  selectEmoji.addEventListener("change", (event) => {
    let selectedEmoji = event.target.value;
    let url = `https://openmoji.org/data/color/svg/${selectedEmoji}.svg`;


    emojiDisplayContainer.innerHTML = "";

    let img = document.createElement("img");
    img.src = url;
    img.height = 100;
    img.width = 100;



    emojiDisplayContainer.appendChild(img);
  });




}
makeVisual();

// crear array de emojis
function createEmoji() {

  let emojis = [
    {
      "emoji": "ðŸ˜€",
      "hexcode": "1F600",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "grinning face",
      "tags": "face, grin",
      "openmoji_tags": "smile, happy",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 1,
      "order": 1
    },
    {
      "emoji": "ðŸ˜ƒ",
      "hexcode": "1F603",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "grinning face with big eyes",
      "tags": "face, mouth, open, smile",
      "openmoji_tags": "eyes, teeth",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 2
    },
    {
      "emoji": "ðŸ˜„",
      "hexcode": "1F604",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "grinning face with smiling eyes",
      "tags": "eye, face, mouth, open, smile",
      "openmoji_tags": "happy, teeth",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 3
    },
    {
      "emoji": "ðŸ˜",
      "hexcode": "1F601",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "beaming face with smiling eyes",
      "tags": "eye, face, grin, smile",
      "openmoji_tags": "happy, teeth, mouth",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 4
    },
    {
      "emoji": "ðŸ˜†",
      "hexcode": "1F606",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "grinning squinting face",
      "tags": "face, laugh, mouth, satisfied, smile",
      "openmoji_tags": "",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 5
    },
    {
      "emoji": "ðŸ˜…",
      "hexcode": "1F605",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "grinning face with sweat",
      "tags": "cold, face, open, smile, sweat",
      "openmoji_tags": "laugh",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 6
    },
    {
      "emoji": "ðŸ¤£",
      "hexcode": "1F923",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "rolling on the floor laughing",
      "tags": "face, floor, laugh, rofl, rolling, rotfl",
      "openmoji_tags": "tears",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 3,
      "order": 7
    },
    {
      "emoji": "ðŸ˜‚",
      "hexcode": "1F602",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "face with tears of joy",
      "tags": "face, joy, laugh, tear",
      "openmoji_tags": "",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 8
    },
    {
      "emoji": "ðŸ™‚",
      "hexcode": "1F642",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "slightly smiling face",
      "tags": "face, smile",
      "openmoji_tags": "satisfied",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 1,
      "order": 9
    },
    {
      "emoji": "ðŸ™ƒ",
      "hexcode": "1F643",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "upside-down face",
      "tags": "face, upside-down",
      "openmoji_tags": "turn",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 1,
      "order": 10
    },
    {
      "emoji": "ðŸ« ",
      "hexcode": "1FAE0",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "melting face",
      "tags": "disappear, dissolve, liquid, melt",
      "openmoji_tags": "",
      "openmoji_author": "Liz Bravo",
      "openmoji_date": "2022-02-10",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 14,
      "order": 11
    },
    {
      "emoji": "ðŸ˜‰",
      "hexcode": "1F609",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "winking face",
      "tags": "face, wink",
      "openmoji_tags": "eye",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 12
    },
    {
      "emoji": "ðŸ˜Š",
      "hexcode": "1F60A",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "smiling face with smiling eyes",
      "tags": "blush, eye, face, smile",
      "openmoji_tags": "satisfied",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 13
    },
    {
      "emoji": "ðŸ˜‡",
      "hexcode": "1F607",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "smiling face with halo",
      "tags": "angel, face, fantasy, halo, innocent",
      "openmoji_tags": "",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 1,
      "order": 14
    },
    {
      "emoji": "ðŸ¥°",
      "hexcode": "1F970",
      "group": "smileys-emotion",
      "subgroups": "face-affection",
      "annotation": "smiling face with hearts",
      "tags": "adore, crush, hearts, in love",
      "openmoji_tags": "",
      "openmoji_author": "Antonia Wagner",
      "openmoji_date": "2019-05-03",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 11,
      "order": 15
    },
    {
      "emoji": "ðŸ˜",
      "hexcode": "1F60D",
      "group": "smileys-emotion",
      "subgroups": "face-affection",
      "annotation": "smiling face with heart-eyes",
      "tags": "eye, face, love, smile",
      "openmoji_tags": "hearts, happy",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 16
    },
    {
      "emoji": "ðŸ¤©",
      "hexcode": "1F929",
      "group": "smileys-emotion",
      "subgroups": "face-affection",
      "annotation": "star-struck",
      "tags": "eyes, face, grinning, star",
      "openmoji_tags": "surprised",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 5,
      "order": 17
    },
    {
      "emoji": "ðŸ˜˜",
      "hexcode": "1F618",
      "group": "smileys-emotion",
      "subgroups": "face-affection",
      "annotation": "face blowing a kiss",
      "tags": "face, kiss",
      "openmoji_tags": "love, happy",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 18
    },
    {
      "emoji": "ðŸ˜—",
      "hexcode": "1F617",
      "group": "smileys-emotion",
      "subgroups": "face-affection",
      "annotation": "kissing face",
      "tags": "face, kiss",
      "openmoji_tags": "",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 1,
      "order": 19
    }]
  return emojis;

}
