import App from './App.svelte';
import "./main.css";

let days = [
	{ name: "Sunday", furigana: "にちようび", kanji: "日曜日", emoji: "🌞" },
	{ name: "Monday", furigana: "げつようび", kanji: "月曜日", emoji: "🌚" },
	{ name: "Tuesday", furigana: "かようび", kanji: "火曜日", emoji: "🔥" },
	{ name: "Wednesday", furigana: "すいようび", kanji: "水曜日", emoji: "💧 " },
	{ name: "Thursday", furigana: "もくようび", kanji: "木曜日", emoji: "🌲" },
	{ name: "Friday", furigana: "きんようび", kanji: "金曜日", emoji: "🥈" },
	{ name: "Saturday", furigana: "どようび", kanji: "土曜日", emoji: "💀" },
  ];

const app = new App({
	target: document.body,
	props: {days}
});

export default app;