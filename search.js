const popes = [
  {
    name: " البابا مرقس الأول البابا رقم 1",
    page: "pope/pope1.html"
  },
  {
    name: "البابا أنيانوس البابا رقم 2",
    page: "pope/pope2.html"
  },
  {
    name: "البابا ميليوس البابا رقم 3",
    page: "pope/pope3.html"
  },
  {
    name: "البابا كرذوذوس البابا رقم 4",
    page: "pope/pope4.html"
  },
  {
    name: "البابا بريموس البابا رقم 5",
    page: "pope/pope5.html"
  },
  {
    name: "البابا يسطس البابا رقم 6",
    page: "pope/pope6.html"
  },
  {
    name: "البابا أومانيوس البابا رقم 7",
    page: "pope/pope7.html"
  },
  {
    name: "البابا مرقيانوس البابا رقم 8",
    page: "pope/pope8.html"
  },
  {
    name: "البابا كلاديانوس البابا رقم 9",
    page: "pope/pope9.html"
  },
  {
    name: "البابا أغريبينوس البابا رقم 10",
    page: "pope/pope10.html"
  },
  {
    name: "البابا يوليانوس البابا رقم 11",
    page: "pope/pope11.html"
  },
  {
    name: "البابا ديمتريوس الأول (الكرام) البابا رقم 12",
    page: "pope/pope12.html"
  },
  {
    name: "البابا ياروكلاس البابا رقم 13",
    page: "pope/pope13.html"
  },
  {
    name: "البابا ديونسيوس البابا رقم 14",
    page: "pope/pope14.html"
  },
  {
    name: "البابا مكسيموس البابا رقم 15",
    page: "pope/pope15.html"
  },
  {
    name: "البابا ثاؤنا البابا رقم 16",
    page: "pope/pope16.html"
  },
  {
    name: "البابا بطرس الأول البابا رقم 17",
    page: "pope/pope17.html"
  },
  {
    name: "البابا أرشلاوس البابا رقم 18",
    page: "pope/pope18.html"
  },
  {
    name: "البابا ألكساندروس الأول البابا رقم 19",
    page: "pope/pope19.html"
  },
  {
    name: "البابا أثناسيوس الأول (أثناسيوس الرسولي) البابا رقم 20",
    page: "pope/pope20.html"
  },
  {
    name: "البابا بطرس الثاني البابا رقم 21",
    page: "pope/pope21.html"
  },
  {
    name: "البابا تيموثاوس الأول (الكبير) البابا رقم 22",
    page: "pope/pope22.html"
  },
  {
    name: "البابا ثاؤفيلس البابا رقم 23",
    page: "pope/pope23.html"
  },
  {
    name: "البابا كيرلس الأول (كيرلس عمود الدين | كيرلس الكبير) البابا رقم 24",
    page: "pope/pope24.html"
  },
  {
    name: "البابا ديسقورس الأول (بطل الأرثوذكسية) البابا رقم 25",
    page: "pope/pope25.html"
  },
  {
    name: "البابا تيموثاوس الثاني البابا رقم 26",
    page: "pope/pope26.html"
  },
  {
    name: "البابا بطرس الثالث البابا رقم 27",
    page: "pope/pope27.html"
  },
  {
    name: "البابا أثناسيوس الثاني البابا رقم 28",
    page: "pope/pope28.html"
  },
  {
    name: "البابا يوأنس الأول (البابا يوحنا الأول) البابا رقم 29",
    page: "pope/pope29.html"
  },
  {
    name: "البابا يوأنس الثاني البابا رقم 30",
    page: "pope/pope30.html"
  },
  {
    name: "البابا ديسقورس الثاني البابا رقم 31",
    page: "pope/pope31.html"
  },
  {
    name: "البابا تيموثاوس الثالث البابا رقم 32",
    page: "pope/pope32.html"
  },
  {
    name: "البابا ثيودوسيوس الأول البابا رقم 33",
    page: "pope/pope33.html"
  },
  {
    name: "البابا بطرس الرابع البابا رقم 34",
    page: "pope/pope34.html"
  },
  {
    name: "البابا دميان البابا رقم 35",
    page: "pope/pope35.html"
  },
  {
    name: "البابا أنسطاسيوس البابا رقم 36",
    page: "pope/pope36.html"
  },
  {
    name: "البابا أندرونيقوس البابا رقم 37",
    page: "pope/pope37.html"
  },
  {
    name: "البابا بنيامين الأول البابا رقم 38",
    page: "pope/pope38.html"
  },
  {
    name: "البابا أغاثون البابا رقم 39",
    page: "pope/pope39.html"
  },
  {
    name: "البابا يوأنس الثالث البابا رقم 40",
    page: "pope/pope40.html"
  },
  {
    name: "البابا إسحق البابا رقم 41",
    page: "pope/pope41.html"
  },
  {
    name: "البابا سيمون الأول البابا رقم 42",
    page: "pope/pope42.html"
  },
  {
    name: "البابا الكسندروس الثانى البابا رقم 43",
    page: "pope/pope43.html"
  },
  {
    name: "البابا قزمان الاول البابا رقم 44",
    page: "pope/pope44.html"
  },
  {
    name: "البابا ثيؤذوروس الاول البابا رقم 45",
    page: "pope/pope45.html"
  },
  {
    name: "البابا خائيل الاول البابا رقم 46",
    page: "pope/pope46.html"
  },
  {
    name: "البابا مينا الاول البابا رقم 47",
    page: "pope/pope47.html"
  },
  {
    name: "البابا يوأنس الرابع البابا رقم 48",
    page: "pope/pope48.html"
  },
  {
    name: "البابا مرقس الثاني البابا رقم 49",
    page: "pope/pope49.html"
  },
  {
    name: "البابا يعقوب البابا رقم 50",
    page: "pope/pope50.html"
  },
  {
    name: "البابا سيمون الثاني البابا رقم 51",
    page: "pope/pope51.html"
  },
  {
    name: "البابا يوساب الأول البابا رقم 52",
    page: "pope/pope52.html"
  },
  {
    name: "البابا خائيل الثاني البابا رقم 53",
    page: "pope/pope53.html"
  },
  {
    name: "البابا قزمان الثاني البابا رقم 54",
    page: "pope/pope54.html"
  },
  {
    name: "البابا شنوده الأول البابا رقم 55",
    page: "pope/pope55.html"
  },
  {
    name: "البابا ميخائيل الأول البابا رقم 56",
    page: "pope/pope56.html"
  },
  {
    name: "البابا غبريال الأول البابا رقم 57",
    page: "pope/pope57.html"
  },
  {
    name: "البابا قزمان الثالث البابا رقم 58",
    page: "pope/pope58.html"
  },
  {
    name: "البابا مكاريوس الأول البابا رقم 59",
    page: "pope/pope59.html"
  },
  {
    name: "البابا ثاؤفانيوس البابا رقم 60",
    page: "pope/pope60.html"
  },
  {
    name: "البابا مينا الثاني البابا رقم 61",
    page: "pope/pope61.html"
  },
  {
    name: "البابا ابرآم (ابن زرعة) البابا رقم 62",
    page: "pope/pope62.html"
  },
  {
    name: "البابا فيلوثاؤس البابا رقم 63",
    page: "pope/pope63.html"
  },
  {
    name: "البابا زكريا البابا رقم 64",
    page: "pope/pope64.html"
  },
  {
    name: "البابا شنودة الثاني البابا رقم 65",
    page: "pope/pope65.html"
  },
  {
    name: "البابا خرسطوذولس البابا رقم 66",
    page: "pope/pope66.html"
  },
  {
    name: "البابا كيرلس الثاني البابا رقم 67",
    page: "pope/pope67.html"
  },
  {
    name: "البابا ميخائيل الثاني البابا رقم 68",
    page: "pope/pope68.html"
  },
  {
    name: "البابا مكاريوس الثاني البابا رقم 69",
    page: "pope/pope69.html"
  },
  {
    name: "البابا غبريال الثاني البابا رقم 70",
    page: "pope/pope70.html"
  },
  {
    name: "البابا ميخائيل الثالث البابا رقم 71",
    page: "pope/pope71.html"
  },
  {
    name: "البابا يوأنس الخامس البابا رقم 72",
    page: "pope/pope72.html"
  },
  {
    name: "البابا مرقص الثالث البابا رقم 73",
    page: "pope/pope73.html"
  },
  {
    name: "البابا يوأنس السادس البابا رقم 74",
    page: "pope/pope74.html"
  },
  {
    name: "البابا كيرلس الثالث البابا رقم 75",
    page: "pope/pope75.html"
  },
  {
    name: "البابا اثناسيوس الثالث البابا رقم 76",
    page: "pope/pope76.html"
  },
  {
    name: "البابا غبريال الثالث البابا رقم 77",
    page: "pope/pope77.html"
  },
  {
    name: "البابا يوأنس السابع البابا رقم 78",
    page: "pope/pope78.html"
  },
  {
    name: "البابا ثيؤدوسيوس الثاني البابا رقم 79",
    page: "pope/pope79.html"
  },
  {
    name: "البابا  يوأنس الثامن البابا رقم 80",
    page: "pope/pope80.html"
  },
  {
    name: "البابا  يوأنس التاسع البابا رقم 81",
    page: "pope/pope81.html"
  },
  {
    name: "البابا  بنيامين الثاني البابا رقم 82",
    page: "pope/pope82.html"
  },
  {
    name: "البابا  بطرس الخامس البابا رقم 83",
    page: "pope/pope83.html"
  },
  {
    name: "البابا  مرقس الرابع البابا رقم 84",
    page: "pope/pope84.html"
  },
  {
    name: "البابا  يوأنس العاشر البابا رقم 85",
    page: "pope/pope85.html"
  },
  {
    name: "البابا  غبريال الرابع البابا رقم 86",
    page: "pope/pope86.html"
  },
  {
    name: "البابا  متاؤس الأول البابا رقم 87",
    page: "pope/pope87.html"
  },
  {
    name: "البابا  غبريال الخامس البابا رقم 88",
    page: "pope/pope88.html"
  },
  {
    name: "البابا  يوأنس الحادي عشر البابا رقم 89",
    page: "pope/pope89.html"
  },
  {
    name: "البابا  متاؤس الثاني البابا رقم 90",
    page: "pope/pope90.html"
  },
  {
    name: "البابا  غبريال السادس البابا رقم 91",
    page: "pope/pope91.html"
  },
  {
    name: "البابا  يوأنس الثاني عشر البابا رقم 93",
    page: "pope/pope93.html"
  },
  {
    name: "البابا  يوأنس الثالث عشر البابا رقم 94",
    page: "pope/pope94.html"
  },
  {
    name: "البابا  غبريال السابع البابا رقم 95",
    page: "pope/pope95.html"
  },
  {
    name: "البابا  يوأنس الرابع عشر البابا رقم 96",
    page: "pope/pope96.html"
  },
  {
    name: "البابا  غبريال الثامن البابا رقم 97",
    page: "pope/pope97.html"
  },
  {
    name: "البابا  مرقس الخامس البابا رقم 98",
    page: "pope/pope98.html"
  },
  {
    name: "البابا  يوأنس الخامس عشر البابا رقم 99",
    page: "pope/pope99.html"
  },
  {
    name: "البابا  متاؤس الثالث البابا رقم 100",
    page: "pope/pope100.html"
  },
  {
    name: "البابا  مرقس السادس البابا رقم 101",
    page: "pope/pope101.html"
  },
  {
    name: "البابا  متاؤس الرابع البابا رقم 102",
    page: "pope/pope102.html"
  },
  {
    name: "البابا  يوأنس السادس عشر البابا رقم 103",
    page: "pope/pope103.html"
  },
  {
    name: "البابا  بطرس السادس البابا رقم 104",
    page: "pope/pope104.html"
  },
  {
    name: "البابا  يوأنس السابع عشر البابا رقم 105",
    page: "pope/pope105.html"
  },
  {
    name: "البابا  مرقس السابع البابا رقم 106",
    page: "pope/pope106.html"
  },
  {
    name: "البابا  يوأنس الثامن عشر البابا رقم 107",
    page: "pope/pope107.html"
  },
  {
    name: "البابا  مرقس الثامن البابا رقم 108",
    page: "pope/pope108.html"
  },
  {
    name: "البابا  بطرس السابع (بطرس الجاولي) البابا رقم 109",
    page: "pope/pope109.html"
  },
  {
    name: "البابا  كيرلس الرابع (أبو الإصلاح) البابا رقم 110",
    page: "pope/pope110.html"
  },
  {
    name: "البابا  ديمتريوس الثاني البابا رقم 111",
    page: "pope/pope111.html"
  },
  {
    name: "البابا  كيرلس الخامس البابا رقم 112",
    page: "pope/pope112.html"
  },
  {
    name: "البابا  يوأنس التاسع عشر البابا رقم 113",
    page: "pope/pope113.html"
  },
  {
    name: "البابا  مكاريوس الثالث البابا رقم 114",
    page: "pope/pope114.html"
  },
  {
    name: "البابا  يوساب الثاني البابا رقم 115",
    page: "pope/pope115.html"
  },
  {
    name: "البابا  كيرلس السادس (رجل الصلاة) البابا رقم 116",
    page: "pope/pope116.html"
  },
  {
    name: "البابا  شنوده الثالث (معلم المسكونة) البابا رقم 117",
    page: "pope/pope117.html"
  },
  {
    name: "البابا  تواضروس الثاني البابا رقم 118",
    page: "pope/pope118.html"
  }
];

const searchInput = document.getElementById("search");
const results = document.getElementById("results");

function showResults(list) {
  results.innerHTML = "";

  list.forEach((pope) => {
    const item = document.createElement("a");

    item.href = pope.page;
    item.textContent = pope.name;

    results.appendChild(item);
  });

  results.style.display = list.length ? "block" : "none";
}

// أول ما المستخدم يدوس على البحث تظهر كل الأسماء
searchInput.addEventListener("focus", () => {
  showResults(popes);
});

// أثناء الكتابة يتم الفلترة
searchInput.addEventListener("input", () => {
  const value = searchInput.value.trim();

  if (!value) {
    showResults(popes);
    return;
  }

  const filtered = popes.filter((pope) =>
    pope.name.includes(value)
  );

  showResults(filtered);
});

// إخفاء القائمة عند الضغط خارج البحث
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container")) {
    results.style.display = "none";
  }
});