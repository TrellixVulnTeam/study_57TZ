import { Component } from "@angular/core";

@Component({
    selector: 'russian12',
    templateUrl: './russian-12.component.html',
    styleUrls: ['./russian-12.component.scss']
})

export class Russian12 {
    imgPencil = false;
    imgCow = false;
    imgGoat = false;
    imgCap = false;
    imgCactus = false;
    imgKangaroo = false;
    imgKiwi = false;
    imgWhale = false;
    imgMill = false;
    imgDoll = false;
    imgMouse = false;
    imgRaspberry = false;
    imgBear = false;
    imgMimosa = false;
    imgJellyfish = false;
    imgHammer = false;
    imgSnake = false;
    imgWhirligig = false;
    imgClod = false;
    imgPit = false;
    imgPow = false
    imgYu = false;
    imgL = false;
    imgA = false;
    imgYa = false;
    imgM9 = false;
    imgA2 = false;
    imgK9 = false;
    imgO = false;
    imgM10 = false;
    imgL2 = false;
    imgA3 = false;
    imgP = false;
    imgA4 = false;
    a = 1;

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

        if((valueOfInput1 == "Ю") || (valueOfInput1 == "ю")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "К") || (valueOfInput2 == "к")) {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "Е") || (valueOfInput3 == "е")) {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "У") || (valueOfInput4 == "у")) {
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

        if((valueOfInput7 == "И") || (valueOfInput7 == "и")) {
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

        if((valueOfInput9 == "Я") || (valueOfInput9 == "я")) {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput10 == "М") || (valueOfInput10 == "м")) {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput11 == "П") || (valueOfInput11 == "п")) {
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

        if((valueOfInput13 == "Ж") || (valueOfInput13 == "ж")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput14 == "Д") || (valueOfInput14 == "д")) {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 14) {
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
            setTimeout(() => document.getElementById('imgK2')!.style.border = 'none', 500);
        }
    };

    clickImgDoll () {
        this.imgDoll = true;
        this.imgMouse = false;
        this.imgRaspberry = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgHammer = false;
        this.imgMill = false;
    };

    clickImgMouse () {
        this.imgDoll = false;
        this.imgMouse = true;
        this.imgRaspberry = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgHammer = false;
        this.imgMill = false;
    };

    clickImgRaspberry () {
        this.imgDoll = false;
        this.imgMouse = false;
        this.imgRaspberry = true;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgHammer = false;
        this.imgMill = false;
    };

    clickImgBear () {
        this.imgDoll = false;
        this.imgMouse = false;
        this.imgRaspberry = false;
        this.imgBear = true;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgHammer = false;
        this.imgMill = false;
    };

    clickImgMimosa () {
        this.imgDoll = false;
        this.imgMouse = false;
        this.imgRaspberry = false;
        this.imgBear = false;
        this.imgMimosa = true;
        this.imgJellyfish = false;
        this.imgHammer = false;
        this.imgMill = false;
    };

    clickImgJellyfish () {
        this.imgDoll = false;
        this.imgMouse = false;
        this.imgRaspberry = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = true;
        this.imgHammer = false;
        this.imgMill = false;
    };

    clickImgHammer () {
        this.imgDoll = false;
        this.imgMouse = false;
        this.imgRaspberry = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgHammer = true;
        this.imgMill = false;
    };

    clickImgMill () {
        this.imgDoll = false;
        this.imgMouse = false;
        this.imgRaspberry = false;
        this.imgBear = false;
        this.imgMimosa = false;
        this.imgJellyfish = false;
        this.imgHammer = false;
        this.imgMill = true;
    };

    clickImgM() {
        if (this.imgDoll == true) {
            document.getElementById('doll')!.remove();
            document.getElementById('imgM')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM')!.style.border = 'none', 500);
        } else if (this.imgHammer == true) {
            document.getElementById('hammer')!.remove();
            document.getElementById('imgM')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM')!.style.border = 'none', 500);
        } else if (this.imgMouse == true) {
            document.getElementById('mouse')!.remove();
            document.getElementById('imgM')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM')!.style.border = 'none', 500);
        } else if (this.imgRaspberry == true) {
            document.getElementById('raspberry')!.remove();
            document.getElementById('imgM')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM')!.style.border = 'none', 500);
        }
    };

    clickImgM2() {
        if (this.imgMill == true) {
            document.getElementById('mill')!.remove();
            document.getElementById('imgM2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM2')!.style.border = 'none', 500);
        } else if (this.imgMimosa == true) {
            document.getElementById('mimosa')!.remove();
            document.getElementById('imgM2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM2')!.style.border = 'none', 500);
        } else if (this.imgJellyfish == true) {
            document.getElementById('jellyfish')!.remove();
            document.getElementById('imgM2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM2')!.style.border = 'none', 500);
        } else if (this.imgBear == true) {
            document.getElementById('bear')!.remove();
            document.getElementById('imgM2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgM2')!.style.border = 'none', 500);
        }
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input15')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input22')).value;

        if((valueOfInput1 == "Я") || (valueOfInput1 == "я")) {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "А") || (valueOfInput2 == "а")) {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "О") || (valueOfInput3 == "о")) {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "У") || (valueOfInput4 == "у")) {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "Е") || (valueOfInput5 == "е")) {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "Ё") || (valueOfInput6 == "ё")) {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "Ю") || (valueOfInput7 == "ю")) {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "И") || (valueOfInput8 == "и")) {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv6, 1000);
        }
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input28')).value;

        if((valueOfInput1 == "Ж") || (valueOfInput1 == "ж")) {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "П") || (valueOfInput2 == "п")) {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "Д") || (valueOfInput3 == "д")) {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "К") || (valueOfInput4 == "к")) {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "М") || (valueOfInput5 == "м")) {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "Л") || (valueOfInput6 == "л")) {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 6) {
            setTimeout(this.viewDiv7, 1000);
        }
    };

    clickImgYu() {
        this.imgYu = true;
        this.imgL = false;
        this.imgA = false;
    };

    clickImgL() {
        this.imgYu = false;
        this.imgL = true;
        this.imgA = false;
    };

    clickImgA() {
        this.imgYu = false;
        this.imgL = false;
        this.imgA = true;
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

    clickDivForA() {
        if (this.imgA == true) {
            const getImgA = document.getElementById('imgA');
            const getDivA = document.getElementById('divForA');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgYa() {
        this.imgYa = true;
        this.imgM9 = false;
        this.imgA2 = false;
    };

    clickImgM9() {
        this.imgYa = false;
        this.imgM9 = true;
        this.imgA2 = false;
    };

    clickImgA2() {
        this.imgYa = false;
        this.imgM9 = false;
        this.imgA2 = true;
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

    clickDivForM9() {
        if (this.imgM9 == true) {
            const getImgM = document.getElementById('imgM9');
            const getDivM = document.getElementById('divForM9');
            getDivM!.append(getImgM!);
            getImgM!.style.border = 'none';
            getDivM!.parentElement!.style.border = "3px solid green"; 
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

    changeImage1() {
        const x = document.getElementById("image1");
        const y = document.getElementById("image2");
        if(this.a % 2 === 0) {
            y!.style.transform = "none";
            x!.style.transform = "none";
            this.a++;
        }
        else {
            x!.style.transform = "translateX(255px)";
            y!.style.transform = "translateX(-255px)";
            this.a++;
        }
    };

    checkImage1() {
        if(this.a % 2 === 0) {
            this.viewDiv16();
        };
    };

    clickImgK9() {
        this.imgK9 = true;
        this.imgO = false;
        this.imgM10 = false;
    };

    clickImgO() {
        this.imgK9 = false;
        this.imgO = true;
        this.imgM10 = false;
    };

    clickImgM10() {
        this.imgK9 = false;
        this.imgO = false;
        this.imgM10 = true;
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

    clickDivForO() {
        if (this.imgO == true) {
            const getImgO = document.getElementById('imgO');
            const getDivO = document.getElementById('divForO');
            getDivO!.append(getImgO!);
            getImgO!.style.border = 'none';
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForM10() {
        if (this.imgM10 == true) {
            const getImgM = document.getElementById('imgM10');
            const getDivM = document.getElementById('divForM10');
            getDivM!.append(getImgM!);
            getImgM!.style.border = 'none';
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgL2() {
        this.imgL2 = true;
        this.imgA3 = false;
        this.imgP = false;
        this.imgA4 = false
    };

    clickImgA3() {
        this.imgL2 = false;
        this.imgA3 = true;
        this.imgP = false;
        this.imgA4 = false
    };

    clickImgP() {
        this.imgL2 = false;
        this.imgA3 = false;
        this.imgP = true;
        this.imgA4 = false
    };

    clickImgA4() {
        this.imgL2 = false;
        this.imgA3 = false;
        this.imgP = false;
        this.imgA4 = true;
    };

    clickDivForL2() {
        if (this.imgL2 == true) {
            const getImgL = document.getElementById('imgL2');
            const getDivL = document.getElementById('divForL2');
            getDivL!.append(getImgL!);
            getImgL!.style.border = 'none';
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA3() {
        if (this.imgA3 == true) {
            const getImgA = document.getElementById('imgA3');
            const getDivA = document.getElementById('divForA3');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA4 == true) {
            const getImgA = document.getElementById('imgA4');
            const getDivA = document.getElementById('divForA3');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        }
    };

    clickDivForP() {
        if (this.imgP == true) {
            const getImgP = document.getElementById('imgP');
            const getDivP = document.getElementById('divForP');
            getDivP!.append(getImgP!);
            getImgP!.style.border = 'none';
            getDivP!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA4() {
        if (this.imgA3 == true) {
            const getImgA = document.getElementById('imgA3');
            const getDivA = document.getElementById('divForA4');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA4 == true) {
            const getImgA = document.getElementById('imgA4');
            const getDivA = document.getElementById('divForA4');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        }
    };

    clickImgPow() {
        this.imgPow = true;
        this.imgPit = false;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgWhirligig = false;
    };

    clickImgPit() {
        this.imgPow = false;
        this.imgPit = true;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgWhirligig = false;
    };

    clickImgClod() {
        this.imgPow = false;
        this.imgPit = false;
        this.imgClod = true;
        this.imgSnake = false;
        this.imgWhirligig = false;
    };

    clickImgSnake() {
        this.imgPow = false;
        this.imgPit = false;
        this.imgClod = false;
        this.imgSnake = true;
        this.imgWhirligig = false;
    };

    clickImgWhirligig() {
        this.imgPow = false;
        this.imgPit = false;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgWhirligig = true;
    };

    clickDivForPow() {
        if (this.imgPow == true) {
            const getImgPow = document.getElementById('pow');
            const getDivPow = document.getElementById('divForPow');
            getImgPow!.style.border = 'none';
            getDivPow!.append(getImgPow!);
            getDivPow!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForPit() {
        if (this.imgPit == true) {
            const getImgPit = document.getElementById('pit');
            const getDivPit = document.getElementById('divForPit');
            getImgPit!.style.border = 'none';
            getDivPit!.append(getImgPit!);
            getDivPit!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForClod() {
        if (this.imgClod == true) {
            const getImgClod = document.getElementById('clod');
            const getDivClod = document.getElementById('divForClod');
            getImgClod!.style.border = 'none';
            getDivClod!.append(getImgClod!);
            getDivClod!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForSnake() {
        if (this.imgSnake == true) {
            const getImgSnake = document.getElementById('snake');
            const getDivSnake = document.getElementById('divForSnake');
            getDivSnake!.append(getImgSnake!);
            getImgSnake!.style.border = 'none';
            getDivSnake!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForWhirligig() {
        if (this.imgWhirligig == true) {
            const getImgWhirligig = document.getElementById('whirligig');
            const getDivWhirligig = document.getElementById('divForWhirligig');
            getDivWhirligig!.append(getImgWhirligig!);
            getImgWhirligig!.style.border = 'none';
            getDivWhirligig!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    checkInput4() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input35')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input36')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input37')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input38')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input39')).value;

        if((valueOfInput1 == "ЯМА") || (valueOfInput1 == "яма")) {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "ЛАПА") || (valueOfInput2 == "лапа")) {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "КОМ") || (valueOfInput3 == "ком")) {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "УЖ") || (valueOfInput4 == "уж")) {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "ЮЛА") || (valueOfInput5 == "юла")) {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 5) {
            setTimeout(() => alert('Правильно!'), 1000);
        };
    };
}