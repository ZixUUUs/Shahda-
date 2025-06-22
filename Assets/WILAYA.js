//----------------WILAYA-GET--------------------//

fetch("../DATA/algeria_cities.json")
  .then((res) => res.json())
  .then((data) => {
    const selectWilaya = document.getElementById("Wilaya");
    const selectCommune = document.getElementById("Commune");

    const wilayasMap = {};
    data.forEach((item) => {
      const code = item.wilaya_code;
      if (!wilayasMap[code]) {
        wilayasMap[code] = {
          wilaya_name: item.wilaya_name,
          communes: [],
        };
      }
      wilayasMap[code].communes.push(item);
    });

    Object.entries(wilayasMap).forEach(([code, info]) => {
      selectWilaya.add(new Option(info.wilaya_name, code));
    });

    selectWilaya.onchange = () => {
      selectCommune.innerHTML = "";
      const code = selectWilaya.value;
      const selected = wilayasMap[code];

      selected.communes.forEach((commune) => {
        selectCommune.add(new Option(commune.commune_name, commune.id));
      });
    };
  });

//----------------WILAYA-GET--------------------//
