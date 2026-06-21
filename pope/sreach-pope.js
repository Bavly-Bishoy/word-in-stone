const popes = [
  {
    name: " البابا مرقس الأول البابا رقم 1",
    page: "pope1.html"
  },
  {
    name: "البابا أنيانوس البابا رقم 2",
    page: "pope2.html"
  },
  {
    name: "البابا ميليوس البابا رقم 3",
    page: "pope3.html"
  },
  {
    name: "البابا كرذوذوس البابا رقم 4",
    page: "pope4.html"
  },
  {
    name: "البابا بريموس البابا رقم 5",
    page: "pope5.html"
  },
  {
    name: "البابا يسطس البابا رقم 6",
    page: "pope6.html"
  },
  {
    name: "البابا أومانيوس البابا رقم 7",
    page: "pope7.html"
  },
  {
    name: "البابا مرقيانوس البابا رقم 8",
    page: "pope8.html"
  },
  {
    name: "البابا كلاديانوس البابا رقم 9",
    page: "pope9.html"
  },
  {
    name: "البابا أغريبينوس البابا رقم 10",
    page: "pope10.html"
  },
  {
    name: "البابا يوليانوس البابا رقم 11",
    page: "pope11.html"
  },
  {
    name: "البابا ديمتريوس الأول (الكرام) البابا رقم 12",
    page: "pope12.html"
  },
  {
    name: "البابا ياروكلاس البابا رقم 13",
    page: "pope13.html"
  },
  {
    name: "البابا ديونسيوس البابا رقم 14",
    page: "pope14.html"
  },
  {
    name: "البابا مكسيموس البابا رقم 15",
    page: "pope15.html"
  },
  {
    name: "البابا ثاؤنا البابا رقم 16",
    page: "pope16.html"
  },
  {
    name: "البابا بطرس الأول البابا رقم 17",
    page: "pope17.html"
  },
  {
    name: "البابا أرشلاوس البابا رقم 18",
    page: "pope18.html"
  },
  {
    name: "البابا ألكساندروس الأول البابا رقم 19",
    page: "pope19.html"
  },
  {
    name: "البابا أثناسيوس الأول (أثناسيوس الرسولي) البابا رقم 20",
    page: "pope20.html"
  },
  {
    name: "البابا بطرس الثاني البابا رقم 21",
    page: "pope21.html"
  },
  {
    name: "البابا تيموثاوس الأول (الكبير) البابا رقم 22",
    page: "pope22.html"
  },
  {
    name: "البابا ثاؤفيلس البابا رقم 23",
    page: "pope23.html"
  },
  {
    name: "البابا كيرلس الأول (كيرلس عمود الدين | كيرلس الكبير) البابا رقم 24",
    page: "pope24.html"
  },
  {
    name: "البابا ديسقورس الأول (بطل الأرثوذكسية) البابا رقم 25",
    page: "pope25.html"
  },
  {
    name: "البابا تيموثاوس الثاني البابا رقم 26",
    page: "pope26.html"
  },
  {
    name: "البابا بطرس الثالث البابا رقم 27",
    page: "pope27.html"
  },
  {
    name: "البابا أثناسيوس الثاني البابا رقم 28",
    page: "pope28.html"
  },
  {
    name: "البابا يوأنس الأول (البابا يوحنا الأول) البابا رقم 29",
    page: "pope29.html"
  },
  {
    name: "البابا يوأنس الثاني البابا رقم 30",
    page: "pope30.html"
  },
  {
    name: "البابا ديسقورس الثاني البابا رقم 31",
    page: "pope31.html"
  },
  {
    name: "البابا تيموثاوس الثالث البابا رقم 32",
    page: "pope32.html"
  },
  {
    name: "البابا ثيودوسيوس الأول البابا رقم 33",
    page: "pope33.html"
  },
  {
    name: "البابا بطرس الرابع البابا رقم 34",
    page: "pope34.html"
  },
  {
    name: "البابا دميان البابا رقم 35",
    page: "pope35.html"
  },
  {
    name: "البابا أنسطاسيوس البابا رقم 36",
    page: "pope36.html"
  },
  {
    name: "البابا أندرونيقوس البابا رقم 37",
    page: "pope37.html"
  },
  {
    name: "البابا بنيامين الأول البابا رقم 38",
    page: "pope38.html"
  },
  {
    name: "البابا أغاثون البابا رقم 39",
    page: "pope39.html"
  },
  {
    name: "البابا يوأنس الثالث البابا رقم 40",
    page: "pope40.html"
  },
  {
    name: "البابا إسحق البابا رقم 41",
    page: "pope41.html"
  },
  {
    name: "البابا سيمون الأول البابا رقم 42",
    page: "pope42.html"
  },
  {
    name: "البابا الكسندروس الثانى البابا رقم 43",
    page: "pope43.html"
  },
  {
    name: "البابا قزمان الاول البابا رقم 44",
    page: "pope44.html"
  },
  {
    name: "البابا ثيؤذوروس الاول البابا رقم 45",
    page: "pope45.html"
  },
  {
    name: "البابا خائيل الاول البابا رقم 46",
    page: "pope46.html"
  },
  {
    name: "البابا مينا الاول البابا رقم 47",
    page: "pope47.html"
  },
  {
    name: "البابا يوأنس الرابع البابا رقم 48",
    page: "pope48.html"
  },
  {
    name: "البابا مرقس الثاني البابا رقم 49",
    page: "pope49.html"
  },
  {
    name: "البابا يعقوب البابا رقم 50",
    page: "pope50.html"
  },
  {
    name: "البابا سيمون الثاني البابا رقم 51",
    page: "pope51.html"
  },
  {
    name: "البابا يوساب الأول البابا رقم 52",
    page: "pope52.html"
  },
  {
    name: "البابا خائيل الثاني البابا رقم 53",
    page: "pope53.html"
  },
  {
    name: "البابا قزمان الثاني البابا رقم 54",
    page: "pope54.html"
  },
  {
    name: "البابا شنوده الأول البابا رقم 55",
    page: "pope55.html"
  },
  {
    name: "البابا ميخائيل الأول البابا رقم 56",
    page: "pope56.html"
  },
  {
    name: "البابا غبريال الأول البابا رقم 57",
    page: "pope57.html"
  },
  {
    name: "البابا قزمان الثالث البابا رقم 58",
    page: "pope58.html"
  },
  {
    name: "البابا مكاريوس الأول البابا رقم 59",
    page: "pope59.html"
  },
  {
    name: "البابا ثاؤفانيوس البابا رقم 60",
    page: "pope60.html"
  },
  {
    name: "البابا مينا الثاني البابا رقم 61",
    page: "pope61.html"
  },
  {
    name: "البابا ابرآم (ابن زرعة) البابا رقم 62",
    page: "pope62.html"
  },
  {
    name: "البابا فيلوثاؤس البابا رقم 63",
    page: "pope63.html"
  },
  {
    name: "البابا زكريا البابا رقم 64",
    page: "pope64.html"
  },
  {
    name: "البابا شنودة الثاني البابا رقم 65",
    page: "pope65.html"
  },
  {
    name: "البابا خرسطوذولس البابا رقم 66",
    page: "pope66.html"
  },
  {
    name: "البابا كيرلس الثاني البابا رقم 67",
    page: "pope67.html"
  },
  {
    name: "البابا ميخائيل الثاني البابا رقم 68",
    page: "pope68.html"
  },
  {
    name: "البابا مكاريوس الثاني البابا رقم 69",
    page: "pope69.html"
  },
  {
    name: "البابا غبريال الثاني البابا رقم 70",
    page: "pope70.html"
  },
  {
    name: "البابا ميخائيل الثالث البابا رقم 71",
    page: "pope71.html"
  },
  {
    name: "البابا يوأنس الخامس البابا رقم 72",
    page: "pope72.html"
  },
  {
    name: "البابا مرقص الثالث البابا رقم 73",
    page: "pope73.html"
  },
  {
    name: "البابا يوأنس السادس البابا رقم 74",
    page: "pope74.html"
  },
  {
    name: "البابا كيرلس الثالث البابا رقم 75",
    page: "pope75.html"
  },
  {
    name: "البابا اثناسيوس الثالث البابا رقم 76",
    page: "pope76.html"
  },
  {
    name: "البابا غبريال الثالث البابا رقم 77",
    page: "pope77.html"
  },
  {
    name: "البابا يوأنس السابع البابا رقم 78",
    page: "pope78.html"
  },
  {
    name: "البابا ثيؤدوسيوس الثاني البابا رقم 79",
    page: "pope79.html"
  },
  {
    name: "البابا  يوأنس الثامن البابا رقم 80",
    page: "pope80.html"
  },
  {
    name: "البابا  يوأنس التاسع البابا رقم 81",
    page: "pope81.html"
  },
  {
    name: "البابا  بنيامين الثاني البابا رقم 82",
    page: "pope82.html"
  },
  {
    name: "البابا  بطرس الخامس البابا رقم 83",
    page: "pope83.html"
  },
  {
    name: "البابا  مرقس الرابع البابا رقم 84",
    page: "pope84.html"
  },
  {
    name: "البابا  يوأنس العاشر البابا رقم 85",
    page: "pope85.html"
  },
  {
    name: "البابا  غبريال الرابع البابا رقم 86",
    page: "pope86.html"
  },
  {
    name: "البابا  متاؤس الأول البابا رقم 87",
    page: "pope87.html"
  },
  {
    name: "البابا  غبريال الخامس البابا رقم 88",
    page: "pope88.html"
  },
  {
    name: "البابا  يوأنس الحادي عشر البابا رقم 89",
    page: "pope89.html"
  },
  {
    name: "البابا  متاؤس الثاني البابا رقم 90",
    page: "pope90.html"
  },
  {
    name: "البابا  غبريال السادس البابا رقم 91",
    page: "pope91.html"
  },
  {
    name: "البابا  ميخائيل الرابع البابا رقم 92",
    page: "pope92.html"
  },
  {
    name: "البابا  يوأنس الثاني عشر البابا رقم 93",
    page: "pope93.html"
  },
  {
    name: "البابا  يوأنس الثالث عشر البابا رقم 94",
    page: "pope94.html"
  },
  {
    name: "البابا  غبريال السابع البابا رقم 95",
    page: "pope95.html"
  },
  {
    name: "البابا  يوأنس الرابع عشر البابا رقم 96",
    page: "pope96.html"
  },
  {
    name: "البابا  غبريال الثامن البابا رقم 97",
    page: "pope97.html"
  },
  {
    name: "البابا  مرقس الخامس البابا رقم 98",
    page: "pope98.html"
  },
  {
    name: "البابا  يوأنس الخامس عشر البابا رقم 99",
    page: "pope99.html"
  },
  {
    name: "البابا  متاؤس الثالث البابا رقم 100",
    page: "pope100.html"
  },
  {
    name: "البابا  مرقس السادس البابا رقم 101",
    page: "pope101.html"
  },
  {
    name: "البابا  متاؤس الرابع البابا رقم 102",
    page: "pope102.html"
  },
  {
    name: "البابا  يوأنس السادس عشر البابا رقم 103",
    page: "pope103.html"
  },
  {
    name: "البابا  بطرس السادس البابا رقم 104",
    page: "pope104.html"
  },
  {
    name: "البابا  يوأنس السابع عشر البابا رقم 105",
    page: "pope105.html"
  },
  {
    name: "البابا  مرقس السابع البابا رقم 106",
    page: "pope106.html"
  },
  {
    name: "البابا  يوأنس الثامن عشر البابا رقم 107",
    page: "pope107.html"
  },
  {
    name: "البابا  مرقس الثامن البابا رقم 108",
    page: "pope108.html"
  },
  {
    name: "البابا  بطرس السابع (بطرس الجاولي) البابا رقم 109",
    page: "pope109.html"
  },
  {
    name: "البابا  كيرلس الرابع (أبو الإصلاح) البابا رقم 110",
    page: "pope110.html"
  },
  {
    name: "البابا  ديمتريوس الثاني البابا رقم 111",
    page: "pope111.html"
  },
  {
    name: "البابا  كيرلس الخامس البابا رقم 112",
    page: "pope112.html"
  },
  {
    name: "البابا  يوأنس التاسع عشر البابا رقم 113",
    page: "pope113.html"
  },
  {
    name: "البابا  مكاريوس الثالث البابا رقم 114",
    page: "pope114.html"
  },
  {
    name: "البابا  يوساب الثاني البابا رقم 115",
    page: "pope115.html"
  },
  {
    name: "البابا  كيرلس السادس (رجل الصلاة) البابا رقم 116",
    page: "pope116.html"
  },
  {
    name: "البابا  شنوده الثالث (معلم المسكونة) البابا رقم 117",
    page: "pope117.html"
  },
  {
    name: "البابا  تواضروس الثاني البابا رقم 118",
    page: "pope118.html"
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