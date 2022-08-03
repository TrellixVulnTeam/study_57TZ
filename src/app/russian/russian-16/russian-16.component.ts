import { Component } from "@angular/core";

@Component({
    selector: 'russian16',
    templateUrl: './russian-16.component.html',
    styleUrls: ['./../russian-11/russian-11.component.scss']
})

export class Russian16 {
    imgPencil = false;
    imgCow = false;
    imgGoat = false;
    imgCap = false;
    imgCactus = false;
    imgKangaroo = false;
    imgKiwi = false;
    imgWhale = false;
    imgCrane = false;
    imgGiraffe = false;
    imgToad = false;
    imgBeatle = false;
    imgMill = false;
    imgBear = false;
    imgMimosa = false;
    imgJellyfish = false;
    imgNarcissus = false;
    imgScissors = false;
    imgBurbot = false;
    imgRhinoceros = false;
    imgIgnoramus = false;
    imgTumbler = false;
    imgThread = false;
    imgForgetmenot = false;
    imgM5 = false;
    imgA = false;
    imgK9 = false;
    imgYu = false;
    imgL = false;
    imgA2 = false;
    imgYa = false;
    imgM6 = false;
    imgA3 = false;
    imgJ5 = false;
    imgU = false;
    imgK10 = false;

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
        const valueOfInput13 = (<HTMLInputElement>document.getElementById('input13')).value;
        const valueOfInput14 = (<HTMLInputElement>document.getElementById('input14')).value;
        const valueOfInput15 = (<HTMLInputElement>document.getElementById('input15')).value;

        if((valueOfInput1 == "Б") || (valueOfInput1 == "б")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "Ю") || (valueOfInput2 == "ю")) {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "Л") || (valueOfInput3 == "л")) {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "К") || (valueOfInput4 == "к")) {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "О") || (valueOfInput5 == "о")) {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "И") || (valueOfInput6 == "и")) {
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

        if((valueOfInput8 == "Ё") || (valueOfInput8 == "ё")) {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput9 == "А") || (valueOfInput9 == "а")) {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput10 == "Я") || (valueOfInput10 == "я")) {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput11 == "Е") || (valueOfInput11 == "е")) {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput12 == "М") || (valueOfInput12 == "м")) {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput13 == "П") || (valueOfInput13 == "п")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput14 == "Ж") || (valueOfInput14 == "ж")) {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput15 == "Д") || (valueOfInput15 == "д")) {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 15) {
            setTimeout(this.viewDiv3, 1000);
        }
    };

    clickImgPencil () {
        this.imgPencil = true;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCap = false;
        this.imgCactus = false;
        this.imgKangaroo = false;
        this.imgKiwi = false;
        this.imgWhale = false;
    };

    clickImgCow () {
        this.imgPencil = false;
        this.imgCow = true;
        this.imgGoat = false;
        this.imgCap = false;
        this.imgCactus = false;
        this.imgKangaroo = false;
        this.imgKiwi = false;
        this.imgWhale = false;
    };

    clickImgGoat () {
        this.imgPencil = false;
        this.imgCow = false;
        this.imgGoat = true;
        this.imgCap = false;
        this.imgCactus = false;
        this.imgKangaroo = false;
        this.imgKiwi = false;
        this.imgWhale = false;
    };

    clickImgCap () {
        this.imgPencil = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCap = true;
        this.imgCactus = false;
        this.imgKangaroo = false;
        this.imgKiwi = false;
        this.imgWhale = false;
    };

    clickImgCactus () {
        this.imgPencil = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCap = false;
        this.imgCactus = true;
        this.imgKangaroo = false;
        this.imgKiwi = false;
        this.imgWhale = false;
    };

    clickImgKangaroo () {
        this.imgPencil = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCap = false;
        this.imgCactus = false;
        this.imgKangaroo = true;
        this.imgKiwi = false;
        this.imgWhale = false;
    };

    clickImgKiwi () {
        this.imgPencil = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCap = false;
        this.imgCactus = false;
        this.imgKangaroo = false;
        this.imgKiwi = true;
        this.imgWhale = false;
    };

    clickImgWhale () {
        this.imgPencil = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCap = false;
        this.imgCactus = false;
        this.imgKangaroo = false;
        this.imgKiwi = false;
        this.imgWhale = true;
    };

    clickImgK() {
        if (this.imgCactus == true) {
            document.getElementById('cactus')!.remove();
            document.getElementById('imgK')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgK')!.style.border = 'none', 500);
        } else if (this.imgPencil == true) {
            document.getElementById('pencil')!.remove();
            document.getElementById('imgK')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgK')!.style.border = 'none', 500);
        } else if (this.imgCow == true) {
            document.getElementById('cow')!.remove();
            document.getElementById('imgK')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgK')!.style.border = 'none', 500);
        } else if (this.imgGoat == true) {
            document.getElementById('goat')!.remove();
            document.getElementById('imgK')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgK')!.style.border = 'none', 500);
        }
    };

    clickImgK2() {
        if (this.imgKangaroo == true) {
            document.getElementById('kangaroo')!.remove();
            document.getElementById('imgK2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgK2')!.style.border = 'none', 500);
        } else if (this.imgCap == true) {
            document.getElementById('cap')!.remove();
            document.getElementById('imgK2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgK2')!.style.border = 'none', 500);
        } else if (this.imgKiwi == true) {
            document.getElementById('kiwi')!.remove();
            document.getElementById('imgK2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgK2')!.style.border = 'none', 500);
        } else if (this.imgWhale == true) {
            document.getElementById('whale')!.remove();
            document.getElementById('imgK2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('K2')!.style.border = 'none', 500);
        }
    };

    clickImgCrane () {
        this.imgCrane = true;
        this.imgGiraffe = false;
        this.imgBeatle = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgToad = false;
        this.imgMill = false;
    };

    clickImgGiraffe () {
        this.imgCrane = false;
        this.imgGiraffe = true;
        this.imgBeatle = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgToad = false;
        this.imgMill = false;
    };

    clickImgBeatle () {
        this.imgCrane = false;
        this.imgGiraffe = false;
        this.imgBeatle = true;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgToad = false;
        this.imgMill = false;
    };

    clickImgBear () {
        this.imgCrane = false;
        this.imgGiraffe = false;
        this.imgBeatle = false;
        this.imgBear = true;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgToad = false;
        this.imgMill = false;
    };

    clickImgMimosa () {
        this.imgCrane = false;
        this.imgGiraffe = false;
        this.imgBeatle = false;
        this.imgBear = false;
        this.imgMimosa = true;
        this.imgJellyfish = false;
        this.imgToad = false;
        this.imgMill = false;
    };

    clickImgJellyfish () {
        this.imgCrane = false;
        this.imgGiraffe = false;
        this.imgBeatle = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = true;
        this.imgToad = false;
        this.imgMill = false;
    };

    clickImgToad () {
        this.imgCrane = false;
        this.imgGiraffe = false;
        this.imgBeatle = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgToad = true;
        this.imgMill = false;
    };

    clickImgMill () {
        this.imgCrane = false;
        this.imgGiraffe = false;
        this.imgBeatle = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgToad = false;
        this.imgMill = true;
    };

    clickImgJ() {
        if (this.imgCrane == true) {
            document.getElementById('crane')!.remove();
            document.getElementById('imgJ')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgJ')!.style.border = 'none', 500);
        } else if (this.imgToad == true) {
            document.getElementById('toad')!.remove();
            document.getElementById('imgJ')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgJ')!.style.border = 'none', 500);
        } else if (this.imgGiraffe == true) {
            document.getElementById('giraffe')!.remove();
            document.getElementById('imgJ')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgJ')!.style.border = 'none', 500);
        } else if (this.imgBeatle == true) {
            document.getElementById('beatle')!.remove();
            document.getElementById('imgJ')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgJ')!.style.border = 'none', 500);
        }
    };

    clickImgM() {
        if (this.imgMill == true) {
            document.getElementById('mill')!.remove();
            document.getElementById('imgM')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM')!.style.border = 'none', 500);
        } else if (this.imgMimosa == true) {
            document.getElementById('mimosa')!.remove();
            document.getElementById('imgM')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM')!.style.border = 'none', 500);
        } else if (this.imgJellyfish == true) {
            document.getElementById('jellyfish')!.remove();
            document.getElementById('imgM')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM')!.style.border = 'none', 500);
        } else if (this.imgBear == true) {
            document.getElementById('bear')!.remove();
            document.getElementById('imgM')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM')!.style.border = 'none', 500);
        }
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input23')).value;

        if((valueOfInput1 == "А") || (valueOfInput1 == "а")) {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "О") || (valueOfInput2 == "о")) {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "У") || (valueOfInput3 == "у")) {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "Е") || (valueOfInput4 == "е")) {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "Я") || (valueOfInput5 == "я")) {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "Ё") || (valueOfInput6 == "ё")) {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "Ю") || (valueOfInput7 == "ю")) {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "И") || (valueOfInput8 == "и")) {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv6, 1000);
        }
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input28')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input29')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input30')).value;

        if((valueOfInput1 == "К") || (valueOfInput1 == "к")) {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "П") || (valueOfInput2 == "п")) {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "Д") || (valueOfInput3 == "д")) {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "Ж") || (valueOfInput4 == "ж")) {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "Л") || (valueOfInput5 == "л")) {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "М") || (valueOfInput6 == "м")) {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "Б") || (valueOfInput7 == "б")) {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 7) {
            setTimeout(this.viewDiv7, 1000);
        }
    };

    clickImgM5 () {
        this.imgM5 = true;
        this.imgK9 = false;
        this.imgA = false;
    };

    clickImgK9 () {
        this.imgM5 = false;
        this.imgK9 = true;
        this.imgA = false;
    };

    clickImgA () {
        this.imgM5 = false;
        this.imgK9 = false;
        this.imgA = true;
    };

    clickDivForM5() {
        if (this.imgM5 == true) {
            const getImgM = document.getElementById('imgM5');
            const getDivM = document.getElementById('divForM5');
            getDivM!.append(getImgM!);
            getImgM!.style.border = 'none';
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK9() {
        if (this.imgK9 == true) {
            const getImgK = document.getElementById('imgK9');
            const getDivK = document.getElementById('divForK9');
            getDivK!.append(getImgK!);
            getImgK!.style.border = 'none';
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA() {
        if (this.imgA == true) {
            const getImgA = document.getElementById('imgA');
            const getDivA = document.getElementById('divForA');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgYu() {
        this.imgYu = true;
        this.imgL = false;
        this.imgA2 = false;
    };

    clickImgL() {
        this.imgYu = false;
        this.imgL = true;
        this.imgA2 = false;
    };

    clickImgA2() {
        this.imgYu = false;
        this.imgL = false;
        this.imgA2 = true;
    };

    clickDivForYu() {
        if (this.imgYu == true) {
            const getImgYu = document.getElementById('imgYu');
            const getDivYu = document.getElementById('divForYu');
            getDivYu!.append(getImgYu!);
            getImgYu!.style.border = 'none';
            getDivYu!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForL() {
        if (this.imgL == true) {
            const getImgL = document.getElementById('imgL');
            const getDivL = document.getElementById('divForL');
            getDivL!.append(getImgL!);
            getImgL!.style.border = 'none';
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA2() {
        if (this.imgA2 == true) {
            const getImgA = document.getElementById('imgA2');
            const getDivA = document.getElementById('divForA2');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgYa() {
        this.imgYa = true;
        this.imgM6 = false;
        this.imgA3 = false;
    };

    clickImgM6() {
        this.imgYa = false;
        this.imgM6 = true;
        this.imgA3 = false;
    };

    clickImgA3() {
        this.imgYa = false;
        this.imgM6 = false;
        this.imgA3 = true;
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

    clickDivForM6() {
        if (this.imgM6 == true) {
            const getImgM = document.getElementById('imgM6');
            const getDivM = document.getElementById('divForM6');
            getDivM!.append(getImgM!);
            getImgM!.style.border = 'none';
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA3() {
        if (this.imgA3 == true) {
            const getImgA = document.getElementById('imgA3');
            const getDivA = document.getElementById('divForA3');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgJ5() {
        this.imgJ5 = true;
        this.imgU = false;
        this.imgK10 = false;
    };

    clickImgU() {
        this.imgJ5 = false;
        this.imgU = true;
        this.imgK10 = false;
    };

    clickImgK10() {
        this.imgJ5 = false;
        this.imgU = false;
        this.imgK10 = true;
    };

    clickDivForJ5() {
        if (this.imgJ5 == true) {
            const getImgJ = document.getElementById('imgJ5');
            const getDivJ = document.getElementById('divForJ5');
            getImgJ!.style.border = 'none';
            getDivJ!.append(getImgJ!);
            getDivJ!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForU() {
        if (this.imgU == true) {
            const getImgU = document.getElementById('imgU');
            const getDivU = document.getElementById('divForU');
            getImgU!.style.border = 'none';
            getDivU!.append(getImgU!);
            getDivU!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK10() {
        if (this.imgK10 == true) {
            const getImgK = document.getElementById('imgK10');
            const getDivK = document.getElementById('divForK10');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgIgnoramus() {
        this.imgIgnoramus = true;
        this.imgForgetmenot = false;
        this.imgThread = false;
        this.imgTumbler = false;
        this.imgRhinoceros = false;
        this.imgNarcissus = false;
        this.imgScissors = false;
        this.imgBurbot = false;
    };

    clickImgForgetmenot() {
        this.imgIgnoramus = false;
        this.imgForgetmenot = true;
        this.imgThread = false;
        this.imgTumbler = false;
        this.imgRhinoceros = false;
        this.imgNarcissus = false;
        this.imgScissors = false;
        this.imgBurbot = false;
    };

    clickImgThread() {
        this.imgIgnoramus = false;
        this.imgForgetmenot = false;
        this.imgThread = true;
        this.imgTumbler = false;
        this.imgRhinoceros = false;
        this.imgNarcissus = false;
        this.imgScissors = false;
        this.imgBurbot = false;
    };

    clickImgTumbler() {
        this.imgIgnoramus = false;
        this.imgForgetmenot = false;
        this.imgThread = false;
        this.imgTumbler = true;
        this.imgRhinoceros = false;
        this.imgNarcissus = false;
        this.imgScissors = false;
        this.imgBurbot = false;
    };

    clickImgRhinoceros() {
        this.imgIgnoramus = false;
        this.imgForgetmenot = false;
        this.imgThread = false;
        this.imgTumbler = false;
        this.imgRhinoceros = true;
        this.imgNarcissus = false;
        this.imgScissors = false;
        this.imgBurbot = false;
    };

    clickImgNarcissus() {
        this.imgIgnoramus = false;
        this.imgForgetmenot = false;
        this.imgThread = false;
        this.imgTumbler = false;
        this.imgRhinoceros = false;
        this.imgNarcissus = true;
        this.imgScissors = false;
        this.imgBurbot = false;
    };

    clickImgScissors() {
        this.imgIgnoramus = false;
        this.imgForgetmenot = false;
        this.imgThread = false;
        this.imgTumbler = false;
        this.imgRhinoceros = false;
        this.imgNarcissus = false;
        this.imgScissors = true;
        this.imgBurbot = false;
    };

    clickImgBurbot() {
        this.imgIgnoramus = false;
        this.imgForgetmenot = false;
        this.imgThread = false;
        this.imgTumbler = false;
        this.imgRhinoceros = false;
        this.imgNarcissus = false;
        this.imgScissors = false;
        this.imgBurbot = true;
    };

    clickImgN() {
        if (this.imgRhinoceros == true) {
            document.getElementById('rhinoceros')!.remove();
            document.getElementById('imgN')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgN')!.style.border = 'none', 500);
        } else if (this.imgNarcissus == true) {
            document.getElementById('narcissus')!.remove();
            document.getElementById('imgN')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgN')!.style.border = 'none', 500);
        } else if (this.imgScissors == true) {
            document.getElementById('scissors')!.remove();
            document.getElementById('imgN')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgN')!.style.border = 'none', 500);
        } else if (this.imgBurbot == true) {
            document.getElementById('burbot')!.remove();
            document.getElementById('imgN')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgN')!.style.border = 'none', 500);
        }
    };

    clickImgN2() {
        if (this.imgTumbler == true) {
            document.getElementById('tumbler')!.remove();
            document.getElementById('imgN2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgN2')!.style.border = 'none', 500);
        } else if (this.imgIgnoramus == true) {
            document.getElementById('ignoramus')!.remove();
            document.getElementById('imgN2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgN2')!.style.border = 'none', 500);
        } else if (this.imgThread == true) {
            document.getElementById('thread')!.remove();
            document.getElementById('imgN2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgN2')!.style.border = 'none', 500);
        } else if (this.imgForgetmenot == true) {
            document.getElementById('forgetmenot')!.remove();
            document.getElementById('imgN2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgN2')!.style.border = 'none', 500);
        }
    };

    checkInput4() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input31')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input32')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input33')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input34')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input35')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input36')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input37')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input38')).value;

        if((valueOfInput1 == "НЁ") || (valueOfInput1 == "нё")) {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "НЯ") || (valueOfInput2 == "ня")) {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "НЕ") || (valueOfInput3 == "не")) {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "НО") || (valueOfInput4 == "но")) {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "НА") || (valueOfInput5 == "на")) {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "НИ") || (valueOfInput6 == "ни")) {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "НУ") || (valueOfInput7 == "ну")) {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "НЮ") || (valueOfInput8 == "ню")) {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv22, 1000);
        };
    };

    checkInput5() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input39')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input40')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input41')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input42')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input43')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input44')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input45')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input46')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input47')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input48')).value;

        if((valueOfInput1 == "НЮ") || (valueOfInput1 == "ню")) {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "НЯ") || (valueOfInput2 == "ня")) {
            document.getElementById('input40')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input40')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "НИ") || (valueOfInput3 == "ни")) {
            document.getElementById('input41')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input41')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "БА") || (valueOfInput4 == "ба")) {
            document.getElementById('input42')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input42')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "МА") || (valueOfInput5 == "ма")) {
            document.getElementById('input43')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input43')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "ПО") || (valueOfInput6 == "по")) {
            document.getElementById('input44')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input44')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "НА") || (valueOfInput7 == "на")) {
            document.getElementById('input45')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input45')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "НЁ") || (valueOfInput8 == "нё")) {
            document.getElementById('input46')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input46')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput9 == "МАК") || (valueOfInput9 == "мак")) {
            document.getElementById('input47')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input47')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput10 == "БАБА") || (valueOfInput10 == "баба")) {
            document.getElementById('input48')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input48')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(() => alert('Правильно!'), 1000);
        };
    };
}