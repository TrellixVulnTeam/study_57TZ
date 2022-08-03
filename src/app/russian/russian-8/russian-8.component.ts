import { Component } from "@angular/core";

@Component({
    selector: 'russian8',
    templateUrl: './russian-8.component.html',
    styleUrls: ['./russian-8.component.scss']
})

export class Russian8 {
    imgIguana = false;
    imgRod = false;
    imgOrange = false;
    imgBus = false;
    imgUdot = false;
    imgTree = false;
    imgTurkey = false;
    imgIsland = false;
    imgJaguar = false;
    imgBlackberry = false;
    imgDonkey = false;
    imgRuff = false;
    imgLamb = false;
    imgRaccoon = false;
    imgWheel = false;
    imgPelican = false;
    imgKangaroo = false;
    imgSunflower = false;
    imgOnion = false;
    imgJellyfish = false;
    imgLemon = false;
    imgRaspberry = false;
    imgFlyswatter = false;
    imgMill = false;
    imgFrog = false;
    imgLama = false;
    imgMoose = false;
    imgDaisy = false;
    imgWateringCan = false;
    imgMatryoshka = false;
    imgBeatle = false;
    imgBear = false;
    imgToad = false;
    imgGiraffe = false;
    imgCrane = false;
    imgHedgehog = false;
    imgM = false;
    imgU = false;
    imgYa = false;
    imgYo3 = false;
    imgJ5 = false;
    imgM12 = false;
    imgO3 = false;
    imgO4 = false;
    imgO5 = false;
    imgK3 = false;
    imgL7 = false;
    imgM13 = false;
    imgO6 = false;
    imgL8 = false;
    imgO7 = false;
    imgK6 = false;
    imgO8 = false;
    imgCat = false;
    imgT = false;
    imgH = false;
    imgM14 = false;
    imgO9 = false;
    imgL9 = false;
    imgO10 = false;
    imgK7 = false;
    imgO11 = false;
    imgT2 = false;
    imgH2 = false;

    viewDiv2() {
        document.getElementById("div1")!.style.display = "none";
        document.getElementById("div2")!.style.display = "block";
    };

    viewDiv3() {
        document.getElementById("div2")!.style.display = "none";
        document.getElementById("div3")!.style.display = "block";
    };

    viewDiv4() {
        document.getElementById("div3")!.style.display = "none";
        document.getElementById("div4")!.style.display = "block";
    };

    viewDiv5() {
        document.getElementById("div4")!.style.display = "none";
        document.getElementById("div5")!.style.display = "block";
    }

    viewDiv6() {
        document.getElementById("div5")!.style.display = "none";
        document.getElementById("div6")!.style.display = "block";
    };

    viewDiv7() {
        document.getElementById("div6")!.style.display = "none";
        document.getElementById("div7")!.style.display = "block";
    };

    viewDiv8() {
        document.getElementById("div7")!.style.display = "none";
        document.getElementById("div8")!.style.display = "block";
    };

    viewDiv9() {
        document.getElementById("div8")!.style.display = "none";
        document.getElementById("div9")!.style.display = "block";
    };

    viewDiv10() {
        document.getElementById("div9")!.style.display = "none";
        document.getElementById("div10")!.style.display = "block";
    };

    viewDiv11() {
        document.getElementById("div10")!.style.display = "none";
        document.getElementById("div11")!.style.display = "block";
    };

    viewDiv12() {
        document.getElementById("div11")!.style.display = "none";
        document.getElementById("div12")!.style.display = "block";
    };

    viewDiv13() {
        document.getElementById("div12")!.style.display = "none";
        document.getElementById("div13")!.style.display = "block";
    };

    viewDiv14() {
        document.getElementById("div13")!.style.display = "none";
        document.getElementById("div14")!.style.display = "block";
    };

    viewDiv15() {
        document.getElementById("div14")!.style.display = "none";
        document.getElementById("div15")!.style.display = "block";
    };

    viewDiv16() {
        document.getElementById("div15")!.style.display = "none";
        document.getElementById("div16")!.style.display = "block";
    };

    viewDiv17() {
        document.getElementById("div16")!.style.display = "none";
        document.getElementById("div17")!.style.display = "block";
    };

    viewDiv18() {
        document.getElementById("div17")!.style.display = "none";
        document.getElementById("div18")!.style.display = "block";
    };

    viewDiv19() {
        document.getElementById("div18")!.style.display = "none";
        document.getElementById("div19")!.style.display = "block";
    };

    viewDiv20() {
        document.getElementById("div19")!.style.display = "none";
        document.getElementById("div20")!.style.display = "block";
    };

    viewDiv21() {
        document.getElementById("div20")!.style.display = "none";
        document.getElementById("div21")!.style.display = "block";
    };

    viewDiv22() {
        document.getElementById("div21")!.style.display = "none";
        document.getElementById("div22")!.style.display = "block";
    };

    viewDiv23() {
        document.getElementById("div22")!.style.display = "none";
        document.getElementById("div23")!.style.display = "block";
    };

    viewDiv24() {
        document.getElementById("div23")!.style.display = "none";
        document.getElementById("div24")!.style.display = "block";
    };

    viewDiv25() {
        document.getElementById("div24")!.style.display = "none";
        document.getElementById("div25")!.style.display = "block";
    };

    viewDiv26() {
        document.getElementById("div25")!.style.display = "none";
        document.getElementById("div26")!.style.display = "block";
    };

    viewDiv27() {
        document.getElementById("div26")!.style.display = "none";
        document.getElementById("div27")!.style.display = "block";
    };

    clickImgOrange() {
        this.imgOrange = true;
        this.imgRod = false;
        this.imgIguana = false;
    };

    clickImgRod() {
        this.imgOrange = false;
        this.imgRod = true;
        this.imgIguana = false;
    };

    clickImgIguana() {
        this.imgOrange = false;
        this.imgRod = false;
        this.imgIguana = true;
    };

    clickImgI() {
        if (this.imgIguana == true) {
            document.getElementById('iguana')!.remove();
            document.getElementById('i')!.style.border! = "3px solid green"; 
        };
    };

    clickImgA() {
        if (this.imgOrange == true) {
            document.getElementById('orange')!.remove();
            document.getElementById('a')!.style.border! = "3px solid green"; 
        };
    };

    clickImgU() {
        if (this.imgRod == true) {
            document.getElementById('rod')!.remove();
            document.getElementById('u')!.style.border! = "3px solid green"; 
        };
    };

    clickImgBus() {
        this.imgBus = true;
        this.imgTree = false;
        this.imgUdot = false;
        this.imgTurkey = false;
    };

    clickImgTree() {
        this.imgBus = false;
        this.imgTree = true;
        this.imgUdot = false;
        this.imgTurkey = false;
    };

    clickImgUdot() {
        this.imgBus = false;
        this.imgTree = false;
        this.imgUdot = true;
        this.imgTurkey = false;
    };

    clickImgTurkey() {
        this.imgBus = false;
        this.imgTree = false;
        this.imgUdot = false;
        this.imgTurkey = true;
    };

    clickImgI2() {
        if (this.imgTurkey == true) {
            document.getElementById('turkey')!.remove();
            document.getElementById('i2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgA2() {
        if (this.imgBus == true) {
            document.getElementById('bus')!.remove();
            document.getElementById('a2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgU2() {
        if (this.imgUdot == true) {
            document.getElementById('udot')!.remove();
            document.getElementById('u2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYo() {
        if (this.imgTree == true) {
            document.getElementById('tree')!.remove();
            document.getElementById('yo2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgJaguar() {
        this.imgJaguar = true;
        this.imgIsland = false;
        this.imgBlackberry = false;
    };

    clickImgIsland() {
        this.imgJaguar = false;
        this.imgIsland = true;
        this.imgBlackberry = false;
    };

    clickImgBlackberry() {
        this.imgJaguar = false;
        this.imgIsland = false;
        this.imgBlackberry = true;
    };

    clickImgE() {
        if (this.imgBlackberry == true) {
            document.getElementById('blackberry')!.remove();
            document.getElementById('e')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO() {
        if (this.imgIsland == true) {
            document.getElementById('island')!.remove();
            document.getElementById('o')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgJaguar == true) {
            document.getElementById('jaguar')!.remove();
            document.getElementById('ya')!.style.border! = "3px solid green"; 
        };
    };

    clickImgLamb() {
        this.imgLamb = true;
        this.imgDonkey = false;
        this.imgRuff = false;
        this.imgRaccoon = false;
    };

    clickImgDonkey() {
        this.imgLamb = false;
        this.imgDonkey = true;
        this.imgRuff = false;
        this.imgRaccoon = false;
    };

    clickImgRuff() {
        this.imgLamb = false;
        this.imgDonkey = false;
        this.imgRuff = true;
        this.imgRaccoon = false;
    };

    clickImgRaccoon() {
        this.imgLamb = false;
        this.imgDonkey = false;
        this.imgRuff = false;
        this.imgRaccoon = true;
    };

    clickImgYa2() {
        if (this.imgLamb == true) {
            document.getElementById('lamb')!.remove();
            document.getElementById('ya2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgE2() {
        if (this.imgRaccoon == true) {
            document.getElementById('raccoon')!.remove();
            document.getElementById('e2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO2() {
        if (this.imgDonkey == true) {
            document.getElementById('donkey')!.remove();
            document.getElementById('o2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYo2() {
        if (this.imgRuff == true) {
            document.getElementById('ruff')!.remove();
            document.getElementById('yo2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgPelican() {
        this.imgPelican = true;
        this.imgKangaroo = false;
        this.imgWheel = false;
        this.imgSunflower = false;
    };

    clickImgKangaroo() {
        this.imgPelican = false;
        this.imgKangaroo = true;
        this.imgWheel = false;
        this.imgSunflower = false;
    };

    clickImgWheel() {
        this.imgPelican = false;
        this.imgKangaroo = false;
        this.imgWheel = true;
        this.imgSunflower = false;
    };

    clickImgSunflower() {
        this.imgPelican = false;
        this.imgKangaroo = false;
        this.imgWheel = false;
        this.imgSunflower = true;
    };

    clickImgP() {
        if (this.imgSunflower == true) {
            document.getElementById('sunflower')!.remove();
            document.getElementById('p')!.style.border! = "3px solid green"; 
        };
    };

    clickImgK() {
        if (this.imgWheel == true) {
            document.getElementById('wheel')!.remove();
            document.getElementById('k')!.style.border! = "3px solid green"; 
        };
    };

    clickImgP2() {
        if (this.imgPelican == true) {
            document.getElementById('pelican')!.remove();
            document.getElementById('p2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgK2() {
        if (this.imgKangaroo == true) {
            document.getElementById('kangaroo')!.remove();
            document.getElementById('k2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgLemon() {
        this.imgLemon = true;
        this.imgRaspberry = false;
        this.imgJellyfish = false;
        this.imgOnion = false;
    };

    clickImgRaspberry() {
        this.imgLemon = false;
        this.imgRaspberry = true;
        this.imgJellyfish = false;
        this.imgOnion = false;
    };

    clickImgJellyfish() {
        this.imgLemon = false;
        this.imgRaspberry = false;
        this.imgJellyfish = true;
        this.imgOnion = false;
    };

    clickImgOnion() {
        this.imgLemon = false;
        this.imgRaspberry = false;
        this.imgJellyfish = false;
        this.imgOnion = true;
    };

    clickImgL() {
        if (this.imgOnion == true) {
            document.getElementById('onion')!.remove();
            document.getElementById('l')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM() {
        if (this.imgRaspberry == true) {
            document.getElementById('raspberry')!.remove();
            document.getElementById('m')!.style.border! = "3px solid green"; 
        };
    };

    clickImgL2() {
        if (this.imgLemon == true) {
            document.getElementById('lemon')!.remove();
            document.getElementById('l2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM2() {
        if (this.imgJellyfish == true) {
            document.getElementById('jellyfish')!.remove();
            document.getElementById('m2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgFrog() {
        this.imgFrog = true;
        this.imgFlyswatter = false;
        this.imgMill = false;
        this.imgLama = false;
    };

    clickImgFlyswatter() {
        this.imgFrog = false;
        this.imgFlyswatter = true;
        this.imgMill = false;
        this.imgLama = false;
    };

    clickImgMill() {
        this.imgFrog = false;
        this.imgFlyswatter = false;
        this.imgMill = true;
        this.imgLama = false;
    };

    clickImgLama() {
        this.imgFrog = false;
        this.imgFlyswatter = false;
        this.imgMill = false;
        this.imgLama = true;
    };

    clickImgL3() {
        if (this.imgLama == true) {
            document.getElementById('lama')!.remove();
            document.getElementById('l3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM3() {
        if (this.imgFlyswatter == true) {
            document.getElementById('flyswatter')!.remove();
            document.getElementById('m3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgL4() {
        if (this.imgFrog == true) {
            document.getElementById('frog')!.remove();
            document.getElementById('l4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM4() {
        if (this.imgMill == true) {
            document.getElementById('mill')!.remove();
            document.getElementById('m4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgDaisy() {
        this.imgDaisy = true;
        this.imgMoose = false;
        this.imgWateringCan = false;
        this.imgMatryoshka = false;
    };

    clickImgMoose() {
        this.imgDaisy = false;
        this.imgMoose = true;
        this.imgWateringCan = false;
        this.imgMatryoshka = false;
    };

    clickImgWateringCan() {
        this.imgDaisy = false;
        this.imgMoose = false;
        this.imgWateringCan = true;
        this.imgMatryoshka = false;
    };

    clickImgMatryoshka() {
        this.imgDaisy = false;
        this.imgMoose = false;
        this.imgWateringCan = false;
        this.imgMatryoshka = true;
    };

    clickImgL5() {
        if (this.imgMoose == true) {
            document.getElementById('moose')!.remove();
            document.getElementById('l5')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM5() {
        if (this.imgMatryoshka == true) {
            document.getElementById('matryoshka')!.remove();
            document.getElementById('m5')!.style.border! = "3px solid green"; 
        };
    };

    clickImgL6() {
        if (this.imgWateringCan == true) {
            document.getElementById('wateringCan')!.remove();
            document.getElementById('l6')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM6() {
        if (this.imgDaisy == true) {
            document.getElementById('daisy')!.remove();
            document.getElementById('m6')!.style.border! = "3px solid green"; 
        };
    };

    clickImgMill2() {
        this.imgMill = true;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgJellyfish = false;
        this.imgBear = false;
        this.imgDaisy = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgToad() {
        this.imgMill = false;
        this.imgToad = true;
        this.imgCrane = false;
        this.imgJellyfish = false;
        this.imgBear = false;
        this.imgDaisy = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgCrane() {
        this.imgMill = false;
        this.imgToad = false;
        this.imgCrane = true;
        this.imgJellyfish = false;
        this.imgBear = false;
        this.imgDaisy = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgJellyfish2() {
        this.imgMill = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgJellyfish = true;
        this.imgBear = false;
        this.imgDaisy = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgBear() {
        this.imgMill = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgJellyfish = false;
        this.imgBear = true;
        this.imgDaisy = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgDaisy2() {
        this.imgMill = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgJellyfish = false;
        this.imgBear = false;
        this.imgDaisy = true;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgBeatle() {
        this.imgMill = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgJellyfish = false;
        this.imgBear = false;
        this.imgDaisy = false;
        this.imgBeatle = true;
        this.imgGiraffe = false;
    };

    clickImgGiraffe() {
        this.imgMill = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgJellyfish = false;
        this.imgBear = false;
        this.imgDaisy = false;
        this.imgBeatle = false;
        this.imgGiraffe = true;
    };

    clickImgM7() {
        if (this.imgMill == true) {
            document.getElementById('mill2')!.remove();
            document.getElementById('imgM7')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgM7')!.style.border = 'none', 500);
        } else if (this.imgJellyfish == true) {
            document.getElementById('jellyfish2')!.remove();
            document.getElementById('imgM7')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgM7')!.style.border = 'none', 500);
        } else if (this.imgBear == true) {
            document.getElementById('bear')!.remove();
            document.getElementById('imgM7')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgM7')!.style.border = 'none', 500);
        } else if (this.imgDaisy == true) {
            document.getElementById('daisy2')!.remove();
            document.getElementById('imgM7')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgM7')!.style.border = 'none', 500);
        }
    };

    clickImgJ() {
        if (this.imgToad == true) {
            document.getElementById('toad')!.remove();
            document.getElementById('imgJ')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgJ')!.style.border = 'none', 500);
        } else if (this.imgCrane == true) {
            document.getElementById('crane')!.remove();
            document.getElementById('imgJ')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgJ')!.style.border = 'none', 500);
        } else if (this.imgGiraffe == true) {
            document.getElementById('giraffe')!.remove();
            document.getElementById('imgJ')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgJ')!.style.border = 'none', 500);
        } else if (this.imgBeatle == true) {
            document.getElementById('beatle')!.remove();
            document.getElementById('imgJ')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgJ')!.style.border = 'none', 500);
        }
    };

    checkInput1() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input1')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input2')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input3')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input4')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input5')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input6')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input7')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input8')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input9')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input10')).value;
        const valueOfInput11 = (<HTMLInputElement>document.getElementById('input11')).value;
        const valueOfInput12 = (<HTMLInputElement>document.getElementById('input12')).value;

        if((valueOfInput1 == "Ж") || (valueOfInput1 == "ж")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "Е") || (valueOfInput2 == "е")) {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "Я") || (valueOfInput3 == "я")) {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "И") || (valueOfInput4 == "и")) {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "А") || (valueOfInput5 == "а")) {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "Ё") || (valueOfInput6 == "ё")) {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "У") || (valueOfInput7 == "у")) {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "О") || (valueOfInput8 == "о")) {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput9 == "М") || (valueOfInput9 == "м")) {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput10 == "П") || (valueOfInput10 == "п")) {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput11 == "К") || (valueOfInput11 == "к")) {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput12 == "Л") || (valueOfInput12 == "л")) {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 12) {
            setTimeout(this.viewDiv13, 1000);
        }
    };

    clickImgM11() {
        this.imgM = true;
        this.imgYa = false;
        this.imgU = false;
    };

    clickImgU3() {
        this.imgM = false;
        this.imgYa = false;
        this.imgU = true;
    };

    clickImgYa3() {
        this.imgM = false;
        this.imgYa = true;
        this.imgU = false;
    };

    clickDivForM() {
        if (this.imgM == true) {
            const getImgM = document.getElementById('imgM');
            const getDivM = document.getElementById('divForM');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForYa() {
        if (this.imgYa == true) {
            const getImgYa = document.getElementById('imgYa');
            const getDivYa = document.getElementById('divForYa');
            getDivYa!.append(getImgYa!);
            getImgYa!.style.border = 'none';
            getDivYa!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForU() {
        if (this.imgU == true) {
            const getImgU = document.getElementById('imgU');
            const getDivU = document.getElementById('divForU');
            getDivU!.append(getImgU!);
            getImgU!.style.border = 'none';
            getDivU!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickImgYo3() {
        this.imgYo3 = true;
        this.imgJ5 = false;
    };

    clickImgJ5() {
        this.imgYo3 = false;
        this.imgJ5 = true;
    };

    clickDivForYo() {
        if (this.imgYo3 == true) {
            const getImgYo = document.getElementById('imgYo3');
            const getDivYo = document.getElementById('divForYo');
            getDivYo!.append(getImgYo!);
            getImgYo!.style.border = 'none';
            getDivYo!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForJ() {
        if (this.imgJ5 == true) {
            const getImgJ = document.getElementById('imgJ5');
            const getDivJ = document.getElementById('divForJ');
            getDivJ!.append(getImgJ!);
            getImgJ!.style.border = 'none';
            getDivJ!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickImgM12() {
        this.imgM12 = true;
        this.imgO3 = false;
        this.imgL7 = false;
        this.imgO4 = false;
        this.imgK3 = false;
        this.imgO5 = false;
    };

    clickImgO3() {
        this.imgM12 = false;
        this.imgO3 = true;
        this.imgL7 = false;
        this.imgO4 = false;
        this.imgK3 = false;
        this.imgO5 = false;
    };

    clickImgL7() {
        this.imgM12 = false;
        this.imgO3 = false;
        this.imgL7 = true;
        this.imgO4 = false;
        this.imgK3 = false;
        this.imgO5 = false;
    };

    clickImgO4() {
        this.imgM12 = false;
        this.imgO3 = false;
        this.imgL7 = false;
        this.imgO4 = true;
        this.imgK3 = false;
        this.imgO5 = false;
    };

    clickImgK3() {
        this.imgM12 = false;
        this.imgO3 = false;
        this.imgL7 = false;
        this.imgO4 = false;
        this.imgK3 = true;
        this.imgO5 = false;
    };

    clickImgO5() {
        this.imgM12 = false;
        this.imgO3 = false;
        this.imgL7 = false;
        this.imgO4 = false;
        this.imgK3 = false;
        this.imgO5 = true;
    };

    clickDivForM12() {
        if (this.imgM12 == true) {
            const getImgM = document.getElementById('imgM12');
            const getDivM = document.getElementById('divForM12');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO3() {
        if (this.imgO3 == true) {
            const getImgO = document.getElementById('imgO3');
            const getDivO = document.getElementById('divForO3');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO4 == true) {
            const getImgO = document.getElementById('imgO4');
            const getDivO = document.getElementById('divForO3');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO5 == true) {
            const getImgO = document.getElementById('imgO5');
            const getDivO = document.getElementById('divForO3');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForL7() {
        if (this.imgL7 == true) {
            const getImgL = document.getElementById('imgL7');
            const getDivL = document.getElementById('divForL7');
            getImgL!.style.border = 'none';
            getDivL!.append(getImgL!);
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO4() {
        if (this.imgO3 == true) {
            const getImgO = document.getElementById('imgO3');
            const getDivO = document.getElementById('divForO4');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO4 == true) {
            const getImgO = document.getElementById('imgO4');
            const getDivO = document.getElementById('divForO4');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO5 == true) {
            const getImgO = document.getElementById('imgO5');
            const getDivO = document.getElementById('divForO4');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK3() {
        if (this.imgK3 == true) {
            const getImgK = document.getElementById('imgK3');
            const getDivK = document.getElementById('divForK3');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO5() {
        if (this.imgO3 == true) {
            const getImgO = document.getElementById('imgO3');
            const getDivO = document.getElementById('divForO5');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO4 == true) {
            const getImgO = document.getElementById('imgO4');
            const getDivO = document.getElementById('divForO5');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO5 == true) {
            const getImgO = document.getElementById('imgO5');
            const getDivO = document.getElementById('divForO5');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgM13() {
        this.imgM13 = true;
        this.imgO6 = false;
        this.imgL8 = false;
        this.imgO7 = false;
        this.imgK6 = false;
        this.imgO8 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgO6() {
        this.imgM13 = false;
        this.imgO6 = true;
        this.imgL8 = false;
        this.imgO7 = false;
        this.imgK6 = false;
        this.imgO8 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgL8() {
        this.imgM13 = false;
        this.imgO6 = false;
        this.imgL8 = true;
        this.imgO7 = false;
        this.imgK6 = false;
        this.imgO8 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgO7() {
        this.imgM13 = false;
        this.imgO6 = false;
        this.imgL8 = false;
        this.imgO7 = true;
        this.imgK6 = false;
        this.imgO8 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgK6() {
        this.imgM13 = false;
        this.imgO6 = false;
        this.imgL8 = false;
        this.imgO7 = false;
        this.imgK6 = true;
        this.imgO8 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgO8() {
        this.imgM13 = false;
        this.imgO6 = false;
        this.imgL8 = false;
        this.imgO7 = false;
        this.imgK6 = false;
        this.imgO8 = true;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgCat() {
        this.imgM13 = false;
        this.imgO6 = false;
        this.imgL8 = false;
        this.imgO7 = false;
        this.imgK6 = false;
        this.imgO8 = false;
        this.imgCat = true;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgT() {
        this.imgM13 = false;
        this.imgO6 = false;
        this.imgL8 = false;
        this.imgO7 = false;
        this.imgK6 = false;
        this.imgO8 = false;
        this.imgCat = false;
        this.imgT = true;
        this.imgH = false;
    };

    clickImgH() {
        this.imgM13 = false;
        this.imgO6 = false;
        this.imgL8 = false;
        this.imgO7 = false;
        this.imgK6 = false;
        this.imgO8 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = true;
    };

    clickDivForM13() {
        if (this.imgM13 == true) {
            const getImgM = document.getElementById('imgM13');
            const getDivM = document.getElementById('divForM13');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO6() {
        if (this.imgO6 == true) {
            const getImgO = document.getElementById('imgO6');
            const getDivO = document.getElementById('divForO6');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO7 == true) {
            const getImgO = document.getElementById('imgO7');
            const getDivO = document.getElementById('divForO6');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO8 == true) {
            const getImgO = document.getElementById('imgO8');
            const getDivO = document.getElementById('divForO6');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForL8() {
        if (this.imgL8 == true) {
            const getImgL = document.getElementById('imgL8');
            const getDivL = document.getElementById('divForL8');
            getImgL!.style.border = 'none';
            getDivL!.append(getImgL!);
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO7() {
        if (this.imgO6 == true) {
            const getImgO = document.getElementById('imgO6');
            const getDivO = document.getElementById('divForO7');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO7 == true) {
            const getImgO = document.getElementById('imgO7');
            const getDivO = document.getElementById('divForO7');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO8 == true) {
            const getImgO = document.getElementById('imgO8');
            const getDivO = document.getElementById('divForO7');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK6() {
        if (this.imgK6 == true) {
            const getImgK = document.getElementById('imgK6');
            const getDivK = document.getElementById('divForK6');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO8() {
        if (this.imgO6 == true) {
            const getImgO = document.getElementById('imgO6');
            const getDivO = document.getElementById('divForO8');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO7 == true) {
            const getImgO = document.getElementById('imgO7');
            const getDivO = document.getElementById('divForO8');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO8 == true) {
            const getImgO = document.getElementById('imgO8');
            const getDivO = document.getElementById('divForO8');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForCat() {
        if (this.imgCat == true) {
            const getImgCat = document.getElementById('imgCat');
            const getDivCat = document.getElementById('divForCat');
            getImgCat!.style.border = 'none';
            getDivCat!.append(getImgCat!);
            getDivCat!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForT() {
        if (this.imgT == true) {
            const getImgT = document.getElementById('imgT');
            const getDivT = document.getElementById('divForT');
            getImgT!.style.border = 'none';
            getDivT!.append(getImgT!);
            getDivT!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForH() {
        if (this.imgH == true) {
            const getImgH = document.getElementById('imgH');
            const getDivH = document.getElementById('divForH');
            getImgH!.style.border = 'none';
            getDivH!.append(getImgH!);
            getDivH!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgM14() {
        this.imgM14 = true;
        this.imgO9 = false;
        this.imgL9 = false;
        this.imgO10 = false;
        this.imgK7 = false;
        this.imgO11 = false;
        this.imgHedgehog = false;
        this.imgT2 = false;
        this.imgH2 = false;
    };

    clickImgO9() {
        this.imgM14 = false;
        this.imgO9 = true;
        this.imgL9 = false;
        this.imgO10 = false;
        this.imgK7 = false;
        this.imgO11 = false;
        this.imgHedgehog = false;
        this.imgT2 = false;
        this.imgH2 = false;
    };

    clickImgL9() {
        this.imgM14 = false;
        this.imgO9 = false;
        this.imgL9 = true;
        this.imgO10 = false;
        this.imgK7 = false;
        this.imgO11 = false;
        this.imgHedgehog = false;
        this.imgT2 = false;
        this.imgH2 = false;
    };

    clickImgO10() {
        this.imgM14 = false;
        this.imgO9 = false;
        this.imgL9 = false;
        this.imgO10 = true;
        this.imgK7 = false;
        this.imgO11 = false;
        this.imgHedgehog = false;
        this.imgT2 = false;
        this.imgH2 = false;
    };

    clickImgK7() {
        this.imgM14 = false;
        this.imgO9 = false;
        this.imgL9 = false;
        this.imgO10 = false;
        this.imgK7 = true;
        this.imgO11 = false;
        this.imgHedgehog = false;
        this.imgT2 = false;
        this.imgH2 = false;
    };

    clickImgO11() {
        this.imgM14 = false;
        this.imgO9 = false;
        this.imgL9 = false;
        this.imgO10 = false;
        this.imgK7 = false;
        this.imgO11 = true;
        this.imgHedgehog = false;
        this.imgT2 = false;
        this.imgH2 = false;
    };

    clickImgHedgehog2() {
        this.imgM14 = false;
        this.imgO9 = false;
        this.imgL9 = false;
        this.imgO10 = false;
        this.imgK7 = false;
        this.imgO11 = false;
        this.imgHedgehog = true;
        this.imgT2 = false;
        this.imgH2 = false;
    };

    clickImgT2() {
        this.imgM14 = false;
        this.imgO9 = false;
        this.imgL9 = false;
        this.imgO10 = false;
        this.imgK7 = false;
        this.imgO11 = false;
        this.imgHedgehog = false;
        this.imgT2 = true;
        this.imgH2 = false;
    };

    clickImgH2() {
        this.imgM14 = false;
        this.imgO9 = false;
        this.imgL9 = false;
        this.imgO10 = false;
        this.imgK7 = false;
        this.imgO11 = false;
        this.imgHedgehog = false;
        this.imgT2 = false;
        this.imgH2 = true;
    };

    clickDivForM14() {
        if (this.imgM14 == true) {
            const getImgM = document.getElementById('imgM14');
            const getDivM = document.getElementById('divForM14');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO9() {
        if (this.imgO9 == true) {
            const getImgO = document.getElementById('imgO9');
            const getDivO = document.getElementById('divForO9');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        }; 
        if (this.imgO10 == true) {
            const getImgO = document.getElementById('imgO10');
            const getDivO = document.getElementById('divForO9');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
        if (this.imgO11 == true) {
            const getImgO = document.getElementById('imgO11');
            const getDivO = document.getElementById('divForO9');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForL9() {
        if (this.imgL9 == true) {
            const getImgL = document.getElementById('imgL9');
            const getDivL = document.getElementById('divForL9');
            getImgL!.style.border = 'none';
            getDivL!.append(getImgL!);
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO10() {
        if (this.imgO9 == true) {
            const getImgO = document.getElementById('imgO9');
            const getDivO = document.getElementById('divForO10');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
        if (this.imgO10 == true) {
            const getImgO = document.getElementById('imgO10');
            const getDivO = document.getElementById('divForO10');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
        if (this.imgO11 == true) {
            const getImgO = document.getElementById('imgO11');
            const getDivO = document.getElementById('divForO10');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK7() {
        if (this.imgK7 == true) {
            const getImgK = document.getElementById('imgK7');
            const getDivK = document.getElementById('divForK7');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO11() {
        if (this.imgO9 == true) {
            const getImgO = document.getElementById('imgO9');
            const getDivO = document.getElementById('divForO11');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
        if (this.imgO10 == true) {
            const getImgO = document.getElementById('imgO10');
            const getDivO = document.getElementById('divForO11');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
        if(this.imgO11 == true) {
            const getImgO = document.getElementById('imgO11');
            const getDivO = document.getElementById('divForO11');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForHedgehog2() {
        if (this.imgHedgehog == true) {
            const getImgHedgehog = document.getElementById('imgHedgehog2');
            const getDivHedgehog = document.getElementById('divForHedgehog2');
            getImgHedgehog!.style.border = 'none';
            getDivHedgehog!.append(getImgHedgehog!);
            getDivHedgehog!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForT2() {
        if (this.imgT2 == true) {
            const getImgT = document.getElementById('imgT2');
            const getDivT = document.getElementById('divForT2');
            getImgT!.style.border = 'none';
            getDivT!.append(getImgT!);
            getDivT!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForH2() {
        if (this.imgH2 == true) {
            const getImgH = document.getElementById('imgH2');
            const getDivH = document.getElementById('divForH2');
            getImgH!.style.border = 'none';
            getDivH!.append(getImgH!);
            getDivH!.parentElement!.style.border = "3px solid green"; 
        };
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input13')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input14')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input15')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input17')).value;

        if((valueOfInput1 == "ПАПА") || (valueOfInput1 == "папа")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "МОЛОКО") || (valueOfInput2 == "молоко")) {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "МЯУ") || (valueOfInput3 == "мяу")) {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "МАМА") || (valueOfInput4 == "мама")) {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "ЁЖ") || (valueOfInput5 == "ёж")) {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 5) {
            setTimeout(this.viewDiv26, 1000);
        }
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input25')).value;

        if((valueOfInput1 == "Ж") || (valueOfInput1 == "ж")) {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "Е") || (valueOfInput2 == "е")) {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "Ё") || (valueOfInput3 == "ё")) {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "КО-КО") || (valueOfInput4 == "ко-ко")) {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "МУ") || (valueOfInput5 == "му")) {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "ЁЖ") || (valueOfInput6 == "ёж")) {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "КУ-КУ") || (valueOfInput7 == "ку-ку")) {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "КАП-КАП") || (valueOfInput8 == "кап-кап")) {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(() => alert('Правильно!'), 1000);
        }
    };
}