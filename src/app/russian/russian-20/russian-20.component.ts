import { Component } from "@angular/core";

@Component({
    selector: 'russian20',
    templateUrl: './russian-20.component.html',
    styleUrls: ['./../russian-19/russian-19.component.scss']
})

export class Russian20 {
    imgWateringCan = false;
    imgFox = false;
    imgFrog = false;
    imgLemon = false;
    imgSpoon = false;
    imgOnion = false;
    imgMoose = false;
    imgMagnifier = false;
    imgUnicorn = false;
    imgBlackberry = false;
    imgHedgehog = false;
    imgTree = false;
    imgYo = false;
    imgL = false;
    imgK = false;
    imgA = false;
    imgYu = false;
    imgB = false;
    imgD = false;
    imgU = false;
    imgJ = false;
    imgI = false;
    imgK2 = false;

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
        const valueOfInput16 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput17 = (<HTMLInputElement>document.getElementById('input17')).value;

        if((valueOfInput1 == "Г") || (valueOfInput1 == "г")) {
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

        if((valueOfInput3 == "Ж") || (valueOfInput3 == "ж")) {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "Л") || (valueOfInput4 == "л")) {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "П") || (valueOfInput5 == "п")) {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "М") || (valueOfInput6 == "м")) {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "Е") || (valueOfInput7 == "е")) {
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

        if((valueOfInput9 == "Ё") || (valueOfInput9 == "ё")) {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput10 == "А") || (valueOfInput10 == "а")) {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput11 == "У") || (valueOfInput11 == "у")) {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput12 == "И") || (valueOfInput12 == "и")) {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput13 == "Я") || (valueOfInput13 == "я")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput14 == "К") || (valueOfInput14 == "к")) {
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

        if((valueOfInput16 == "Н") || (valueOfInput16 == "н")) {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput17 == "Б") || (valueOfInput17 == "б")) {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 17) {
            setTimeout(this.viewDiv3, 1000);
        }
    };

    clickImgWateringCan () {
        this.imgWateringCan = true;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgMoose () {
        this.imgWateringCan = false;
        this.imgMoose = true;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgOnion () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = true;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgFrog () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = true;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgLemon () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = true;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgSpoon () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = true;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgFox () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = true;
        this.imgMagnifier = false;
    };

    clickImgMagnifier () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = true;
    };

    clickImgL() {
        if (this.imgOnion == true) {
            document.getElementById('onion')!.remove();
            document.getElementById('imgL')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgL')!.style.border = 'none', 500);
        } else if (this.imgMoose == true) {
            document.getElementById('moose')!.remove();
            document.getElementById('imgL')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgL')!.style.border = 'none', 500);
        } else if (this.imgSpoon == true) {
            document.getElementById('spoon')!.remove();
            document.getElementById('imgL')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgL')!.style.border = 'none', 500);
        } else if (this.imgMagnifier == true) {
            document.getElementById('magnifier')!.remove();
            document.getElementById('imgL')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgL')!.style.border = 'none', 500);
        }
    };

    clickImgL2() {
        if (this.imgFox == true) {
            document.getElementById('fox')!.remove();
            document.getElementById('imgL2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgL2')!.style.border = 'none', 500);
        } else if (this.imgFrog == true) {
            document.getElementById('frog')!.remove();
            document.getElementById('imgL2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgL2')!.style.border = 'none', 500);
        } else if (this.imgWateringCan == true) {
            document.getElementById('wateringCan')!.remove();
            document.getElementById('imgL2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgL2')!.style.border = 'none', 500);
        } else if (this.imgLemon == true) {
            document.getElementById('lemon')!.remove();
            document.getElementById('imgL2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgL2')!.style.border = 'none', 500);
        }
    };

    clickImgUnicorn() {
        this.imgUnicorn = true;
        this.imgBlackberry = false;
        this.imgHedgehog = false;
        this.imgTree = false;
    };

    clickImgBlackberry() {
        this.imgUnicorn = false;
        this.imgBlackberry = true;
        this.imgHedgehog = false;
        this.imgTree = false;
    };

    clickImgHedgehog() {
        this.imgUnicorn = false;
        this.imgBlackberry = false;
        this.imgHedgehog = true;
        this.imgTree = false;
    };

    clickImgTree() {
        this.imgUnicorn = false;
        this.imgBlackberry = false;
        this.imgHedgehog = false;
        this.imgTree = true;
    };

    clickImgE() {
        if (this.imgBlackberry == true) {
            document.getElementById('blackberry')!.remove();
            document.getElementById('imgE')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgE')!.style.border = 'none', 500);
        } else if (this.imgUnicorn == true) {
            document.getElementById('unicorn')!.remove();
            document.getElementById('imgE')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgE')!.style.border = 'none', 500);
        };
    };

    clickImgYo() {
        if (this.imgHedgehog == true) {
            document.getElementById('hedgehog')!.remove();
            document.getElementById('imgYo')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgYo')!.style.border = 'none', 500);
        } else if (this.imgTree == true) {
            document.getElementById('tree')!.remove();
            document.getElementById('imgYo')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgYo')!.style.border = 'none', 500);
        };
    };

    clickImgYo2() {
        this.imgYo = true;
        this.imgL = false;
        this.imgK = false;
        this.imgA = false;
    };

    clickImgL3() {
        this.imgYo = false;
        this.imgL = true;
        this.imgK = false;
        this.imgA = false;
    };

    clickImgK() {
        this.imgYo = false;
        this.imgL = false;
        this.imgK = true;
        this.imgA = false;
    };

    clickImgA() {
        this.imgYo = false;
        this.imgL = false;
        this.imgK = false;
        this.imgA = true;
    };

    clickDivForYo2() {
        if (this.imgYo == true) {
            const getImgYo = document.getElementById('imgYo2');
            const getDivYo = document.getElementById('divForYo2');
            getDivYo!.append(getImgYo!);
            getImgYo!.style.border = 'none';
            getDivYo!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForL3() {
        if (this.imgL == true) {
            const getImgL = document.getElementById('imgL3');
            const getDivL = document.getElementById('divForL3');
            getDivL!.append(getImgL!);
            getImgL!.style.border = 'none';
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK() {
        if (this.imgK == true) {
            const getImgK = document.getElementById('imgK');
            const getDivK = document.getElementById('divForK');
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
        this.imgB= false;
        this.imgK = false;
        this.imgA = false;
    };

    clickImgB() {
        this.imgYu = false;
        this.imgB= true;
        this.imgK = false;
        this.imgA = false;
    };

    clickImgK2() {
        this.imgYu = false;
        this.imgB= false;
        this.imgK = true;
        this.imgA = false;
    };

    clickImgA2() {
        this.imgYu = false;
        this.imgB= false;
        this.imgK = false;
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

    clickDivForB() {
        if (this.imgB == true) {
            const getImgB = document.getElementById('imgB');
            const getDivB = document.getElementById('divForB');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK2() {
        if (this.imgK == true) {
            const getImgK = document.getElementById('imgK2');
            const getDivK = document.getElementById('divForK2');
            getDivK!.append(getImgK!);
            getImgK!.style.border = 'none';
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA2() {
        if (this.imgA == true) {
            const getImgA = document.getElementById('imgA2');
            const getDivA = document.getElementById('divForA2');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgD() {
        this.imgD = true;
        this.imgU= false;
        this.imgB = false;
    };

    clickImgU() {
        this.imgD = false;
        this.imgU= true;
        this.imgB = false;
    };

    clickImgB2() {
        this.imgD = false;
        this.imgU= false;
        this.imgB = true;
    };

    clickDivForD() {
        if (this.imgD == true) {
            const getImgD = document.getElementById('imgD');
            const getDivD = document.getElementById('divForD');
            getDivD!.append(getImgD!);
            getImgD!.style.border = 'none';
            getDivD!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForU() {
        if (this.imgU == true) {
            const getImgU = document.getElementById('imgU');
            const getDivU = document.getElementById('divForU');
            getDivU!.append(getImgU!);
            getImgU!.style.border = 'none';
            getDivU!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForB2() {
        if (this.imgB == true) {
            const getImgB = document.getElementById('imgB2');
            const getDivB = document.getElementById('divForB2');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgJ() {
        this.imgJ = true;
        this.imgYo = false;
        this.imgL = false;
        this.imgU = false;
        this.imgD = false;
        this.imgI = false;
    };

    clickImgYo3() {
        this.imgJ = false;
        this.imgYo = true;
        this.imgL = false;
        this.imgU = false;
        this.imgD = false;
        this.imgI = false;
    };

    clickImgL4() {
        this.imgJ = false;
        this.imgYo = false;
        this.imgL = true;
        this.imgU = false;
        this.imgD = false;
        this.imgI = false;
    };

    clickImgU2() {
        this.imgJ = false;
        this.imgYo = false;
        this.imgL = false;
        this.imgU = true;
        this.imgD = false;
        this.imgI = false;
    };

    clickImgD2() {
        this.imgJ = false;
        this.imgYo = false;
        this.imgL = false;
        this.imgU = false;
        this.imgD = true;
        this.imgI = false;
    };

    clickImgI() {
        this.imgJ = false;
        this.imgYo = false;
        this.imgL = false;
        this.imgU = false;
        this.imgD = false;
        this.imgI = true;
    };

    clickDivForJ() {
        if (this.imgJ == true) {
            const getImgJ = document.getElementById('imgJ');
            const getDivJ = document.getElementById('divForJ');
            getDivJ!.append(getImgJ!);
            getImgJ!.style.border = 'none';
            getDivJ!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForYo3() {
        if (this.imgYo == true) {
            const getImgYo = document.getElementById('imgYo3');
            const getDivYo = document.getElementById('divForYo3');
            getDivYo!.append(getImgYo!);
            getImgYo!.style.border = 'none';
            getDivYo!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForL4() {
        if (this.imgL == true) {
            const getImgL = document.getElementById('imgL4');
            const getDivL = document.getElementById('divForL4');
            getDivL!.append(getImgL!);
            getImgL!.style.border = 'none';
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForU2() {
        if (this.imgU == true) {
            const getImgU = document.getElementById('imgU2');
            const getDivU = document.getElementById('divForU2');
            getDivU!.append(getImgU!);
            getImgU!.style.border = 'none';
            getDivU!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForD2() {
        if (this.imgD == true) {
            const getImgD = document.getElementById('imgD2');
            const getDivD = document.getElementById('divForD2');
            getDivD!.append(getImgD!);
            getImgD!.style.border = 'none';
            getDivD!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForI() {
        if (this.imgI == true) {
            const getImgI = document.getElementById('imgI');
            const getDivI = document.getElementById('divForI');
            getDivI!.append(getImgI!);
            getImgI!.style.border = 'none';
            getDivI!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgK3() {
        this.imgK = true;
        this.imgU = false;
        this.imgK2 = false;
        this.imgL = false;
        this.imgA = false;
    };

    clickImgU3() {
        this.imgK = false;
        this.imgU = true;
        this.imgK2 = false;
        this.imgL = false;
        this.imgA = false;
    };

    clickImgK4() {
        this.imgK = false;
        this.imgU = false;
        this.imgK2 = true;
        this.imgL = false;
        this.imgA = false;
    };

    clickImgL5() {
        this.imgK = false;
        this.imgU = false;
        this.imgK2 = false;
        this.imgL = true;
        this.imgA = false;
    };

    clickImgA3() {
        this.imgK = false;
        this.imgU = false;
        this.imgK2 = false;
        this.imgL = false;
        this.imgA = true;
    };

    clickDivForK3() {
        if (this.imgK == true) {
            const getImgK = document.getElementById('imgK3');
            const getDivK = document.getElementById('divForK3');
            getDivK!.append(getImgK!);
            getImgK!.style.border = 'none';
            getDivK!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgK2 == true) {
            const getImgK = document.getElementById('imgK4');
            const getDivK = document.getElementById('divForK3');
            getDivK!.append(getImgK!);
            getImgK!.style.border = 'none';
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForU3() {
        if (this.imgU == true) {
            const getImgU = document.getElementById('imgU3');
            const getDivU = document.getElementById('divForU3');
            getDivU!.append(getImgU!);
            getImgU!.style.border = 'none';
            getDivU!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK4() {
        if (this.imgK == true) {
            const getImgK = document.getElementById('imgK3');
            const getDivK = document.getElementById('divForK4');
            getDivK!.append(getImgK!);
            getImgK!.style.border = 'none';
            getDivK!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgK2 == true) {
            const getImgK = document.getElementById('imgK4');
            const getDivK = document.getElementById('divForK4');
            getDivK!.append(getImgK!);
            getImgK!.style.border = 'none';
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForL5() {
        if (this.imgL == true) {
            const getImgL = document.getElementById('imgL5');
            const getDivL = document.getElementById('divForL5');
            getDivL!.append(getImgL!);
            getImgL!.style.border = 'none';
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA3() {
        if (this.imgA == true) {
            const getImgA = document.getElementById('imgA3');
            const getDivA = document.getElementById('divForA3');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        };
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput11 = (<HTMLInputElement>document.getElementById('input28')).value;
        const valueOfInput12 = (<HTMLInputElement>document.getElementById('input29')).value;

        if((valueOfInput1 == "БУ") || (valueOfInput1 == "бу")) {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "ОК") || (valueOfInput2 == "ок")) {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "ЮД") || (valueOfInput3 == "юд")) {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "МИ") || (valueOfInput4 == "ми")) {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "ДИ") || (valueOfInput5 == "ди")) {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "ЖЁЛ") || (valueOfInput6 == "жёл")) {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "УМ") || (valueOfInput7 == "ум")) {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "ГОЛ") || (valueOfInput8 == "гол")) {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput9 == "КОЛ") || (valueOfInput9 == "кол")) {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };
        
        if((valueOfInput10 == "БЕ") || (valueOfInput10 == "бе")) {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput11 == "УБ") || (valueOfInput11 == "уб")) {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput12 == "ЁЛ") || (valueOfInput12 == "ёл")) {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 12) {
            setTimeout(this.viewDiv21, 1000);
        };
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input30')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input31')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input32')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input33')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input34')).value;

        if ((valueOfInput1 == "ЁЛКА") || (valueOfInput1 == "ёлка")) {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "ЮБКА") || (valueOfInput2 == "юбка")) {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "ДУБ") || (valueOfInput3 == "дуб")) {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "ЖЁЛУДИ") || (valueOfInput4 == "жёлуди")) {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "КУКЛА") || (valueOfInput5 == "кукла")) {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 5) {
            setTimeout(() => alert('Правильно!'), 1000);
        };
    };
}