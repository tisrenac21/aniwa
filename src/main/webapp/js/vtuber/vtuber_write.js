function previewImage(event, type) {
    const input = event.target;
    const preview = document.getElementById("imagePrivew_" + type);

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
            preview.dataset.originalSize = "false"; // 기본적으로 축소 상태
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        preview.style.display = "none";
    }
}


document.querySelectorAll('.updImg').forEach(function (element) {
    element.addEventListener('click', function () {
        let type = element.id.split('updImg_')[1];
        document.getElementById('imgBtn_' + type).click();
    });
});

function toggleFullSize(img) {
    if (img.dataset.originalSize === "false") {
        img.style.maxWidth = "none";
        img.style.maxHeight = "none";
        img.dataset.originalSize = "true";
    } else {
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100px";
        img.dataset.originalSize = "false";
    }
}

const step2Options_holo = {
    "JP": ["전체", "0기생", "1기생", "2기생", "게이머즈", "3기생(Fantasy)", "4기생(holoForce)", "5기생(holoFive)", "6기생(holoX)"],
    "EN": ["전체", "Myth", "Promise", "Advent", "Justice"],
    "ID": ["전체", "1기생(AREA15)", "2기생(HOLORO)", "3기생(HoloH3RO)"],
    "DEV_IS": ["전체", "ReGLOSS", "FLOW GLOW"]
};

const step3Options_holo = {
    "JP - 0기생": ["전체", "토키노 소라", "로보코씨", "AZKi", "사쿠라 미코", "호시마치 스이세이"],
    "JP - 1기생": ["전체", "아키 로젠탈", "아카이 하아토", "시라카미 후부키", "나츠이로 마츠리"],
    "JP - 2기생": ["전체", "무라사키 시온", "나키리 아야메", "유즈키 초코", "오오조라 스바루"],
    "JP - 게이머즈": ["전체", "시라카미 후부키", "오오카미 미오", "네코마타 오카유", "이누가미 코로네"],
    "JP - 3기생(Fantasy)": ["전체", "우사다 페코라", "시라누이 후레아", "시로가네 노엘", "호쇼 마린"],
    "JP - 4기생(holoForce)": ["전체", "아마네 카나타", "츠노마키 와타메", "토코야미 토와", "히메모리 루나"],
    "JP - 5기생(holoFive)": ["전체", "유키하나 라미", "모모스즈 네네", "시시로 보탄", "오마루 폴카"],
    "JP - 6기생(holoX)": ["전체", "라플라스 다크니스", "타카네 루이", "하쿠이 코요리", "카자마 이로하"],
    "EN - Myth": ["전체", "모리 칼리오페", "타카나시 키아라", "니노마에 이나니스", "가우르 구라"],
    "EN - Promise": ["전체", "아이리스", "오로 크로니", "나나시 무메이", "하코스 벨즈"],
    "EN - Advent": ["전체", "시오리 노벨라", "코세키 비쥬", "네리사 레이븐크로프트", "후와와 어비스가드", "모코코 어비스가드", "후와모코"],
    "EN - Justice": ["전체", "엘리자베스 로즈 블러드플레임", "지지 무린", "세실리아 이머그린", "라오라 판테라"],
    "ID - 1기생(AREA15)": ["전체", "아윤다 리스", "무나 호시노바", "아이라니 이오피프틴"],
    "ID - 2기생(HOLORO)": ["전체", "쿠레이지 올리", "아냐 멜핏사", "파볼리아 레이네"],
    "ID - 3기생(HoloH3RO)": ["전체", "베스티아 제타", "카엘라 코발스키아", "코보 카나에루"],
    "DEV_IS - ReGLOSS": ["전체", "히오도시 아오", "오토노세 카나데", "이치조 리리카", "주우후테이 라덴", "토도로키 하지메"],
    "DEV_IS - FLOW GLOW": ["전체", "이사키 리오나", "코가네이 니코", "미즈미야 스우", "린도 치하야", "키키라라 비비"]
};

function updateStep2_holo() {
    const step1 = document.getElementById("step1_holo").value;
    const step2 = document.getElementById("step2_holo");
    const step3 = document.getElementById("step3_holo");

    step2.innerHTML = "";
    step3.innerHTML = "";
    step3.style.display = "none";

    if (step1 && step1 !== "전체" && step2Options_holo[step1]) {
        // document.querySelector('label[for="step2"]').style.display = "block";
        step2.style.display = "inline-block";

        step2Options_holo[step1].forEach(option => {
            let opt = document.createElement("option");
            opt.value = option;
            opt.textContent = option;
            step2.appendChild(opt);
        });
    } else {
        //        document.querySelector('label[for="step2"]').style.display = "none";
        step2.style.display = "none";
    }
}

function updateStep3_holo() {
    const step1 = document.getElementById("step1_holo").value;
    const step2 = document.getElementById("step2_holo").value;
    const step3 = document.getElementById("step3_holo");

    step3.innerHTML = "";

    if (step2 && step2 !== "전체") {
        let key = `${step1} - ${step2}`;
        if (step3Options_holo[key]) {
            //            document.querySelector('label[for="step3"]').style.display = "block";
            step3.style.display = "inline-block";

            step3Options_holo[key].forEach(option => {
                let opt = document.createElement("option");
                opt.value = option;
                opt.textContent = option;
                step3.appendChild(opt);
            });
        } else {
            //            document.querySelector('label[for="step3"]').style.display = "none";
            step3.style.display = "none";
        }
    } else {
        //      document.querySelector('label[for="step3"]').style.display = "none";
        step3.style.display = "none";
    }
}


const step2Options_stel = {
    "mystic": ["전체", "아야츠노 유니"],
    "universe": ["전체", "시라유키 히나", "네네코 마시로", "아카네 리제", "아라하시 타비비"],
    "cliche": ["전체", "텐코 시부키", "아오쿠모 린", "하나코 나나", "유즈하 리코"]
};

function updateStep2_stel() {
    const step1 = document.getElementById("step1_stel").value;
    const step2 = document.getElementById("step2_stel");

    step2.innerHTML = "";

    if (step1 && step1 !== "전체" && step2Options_stel[step1]) {
        // document.querySelector('label[for="step2"]').style.display = "block";
        step2.style.display = "inline-block";

        step2Options_stel[step1].forEach(option => {
            let opt = document.createElement("option");
            opt.value = option;
            opt.textContent = option;
            step2.appendChild(opt);
        });
    } else {
        //        document.querySelector('label[for="step2"]').style.display = "none";
        step2.style.display = "none";
    }
}