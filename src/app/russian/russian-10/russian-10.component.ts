import { Component } from "@angular/core";

@Component({
    selector: 'russian10',
    templateUrl: './russian-10.component.html',
    styleUrls: ['./russian-10.component.scss']
})

export class Russian10 {
    imgGiraffe = false;
    imgBeatle = false;
    imgTree = false;
    imgHouse = false;
    imgDuck = false;
    imgSeaCadet = false;
    imgSkirt = false;
    imgWhirligig = false;
    imgYurt = false;
    imgIron = false;
    imgUdot = false;
    imgRod = false;
    imgJ3 = false;
    imgU5 = false;
    imgK = false;
    imgYo = false;
    imgJ7 = true;
    imgD3 = false;
    imgO = false;
    imgM = false;
    imgP = false;
    imgO2 = false;
    imgL = false;
    imgL2 = false;
    imgU6 = false;
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

    checkInput1() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input1')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input2')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input3')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input4')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input5')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input6')).value;

        if((valueOfInput1 == "А")  || (valueOfInput1 == "а")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "О") || (valueOfInput2 == "о")) {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "У") || (valueOfInput3 == "у")) {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "Е") || (valueOfInput4 == "е")) {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "Я") || (valueOfInput5 == "я")) {
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

        if(checkValue === 6) {
            setTimeout(this.viewDiv3, 1000);
        }
    };

    clickImgBeatle() {
        this.imgBeatle = true;
        this.imgGiraffe = false;
        this.imgHouse = false;
        this.imgTree = false;
    };

    clickImgGiraffe() {
        this.imgBeatle = false;
        this.imgGiraffe = true;
        this.imgHouse = false;
        this.imgTree = false;
    };

    clickImgHouse() {
        this.imgBeatle = false;
        this.imgGiraffe = false;
        this.imgHouse = true;
        this.imgTree = false;
    };

    clickImgTree() {
        this.imgBeatle = false;
        this.imgGiraffe = false;
        this.imgHouse = false;
        this.imgTree = true;
    };

    clickImgJ() {
        if (this.imgGiraffe == true) {
            document.getElementById('giraffe')!.remove();
            document.getElementById('j')!.style.border! = "3px solid green"; 
        } else if (this.imgBeatle == true) {
            document.getElementById('beatle')!.remove();
            document.getElementById('j')!.style.border! = "3px solid green"; 
        };
    };

    clickImgJ2() {
        if (this.imgGiraffe == true) {
            document.getElementById('giraffe')!.remove();
            document.getElementById('j2')!.style.border! = "3px solid green"; 
        } else if (this.imgBeatle == true) {
            document.getElementById('beatle')!.remove();
            document.getElementById('j2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgD() {
        if (this.imgTree == true) {
            document.getElementById('tree')!.remove();
            document.getElementById('d')!.style.border! = "3px solid green"; 
        };
    };

    clickImgD2() {
        if (this.imgHouse == true) {
            document.getElementById('house')!.remove();
            document.getElementById('d2')!.style.border! = "3px solid green"; 
        };
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input7')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input8')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input9')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input10')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input11')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input12')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input13')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input14')).value;

        if((valueOfInput1 == "К") || (valueOfInput1 == "к")) {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "П") || (valueOfInput2 == "п")) {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "Д") || (valueOfInput3 == "д")) {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "Ж") || (valueOfInput4 == "ж")) {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "К") || (valueOfInput5 == "к")) {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "Л") || (valueOfInput6 == "л")) {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "Д") || (valueOfInput7 == "д")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "М") || (valueOfInput8 == "м")) {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv5, 1000);
        }
    };

    clickImgDuck() {
        this.imgDuck = true;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgSeaCadet() {
        this.imgDuck = false;
        this.imgSeaCadet = true;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgSkirt() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = true;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgWhirligig() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = true;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgYurt() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = true;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgIron() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = true;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgUdot() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = true;
        this.imgRod = false;
    };

    clickImgRod() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = true;
    };

    clickImgYu() {
        if (this.imgWhirligig == true) {
            document.getElementById('whirligig')!.remove();
            document.getElementById('imgYu')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgYu')!.style.border = 'none', 500);
        } else if (this.imgSeaCadet == true) {
            document.getElementById('seaCadet')!.remove();
            document.getElementById('imgYu')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgYu')!.style.border = 'none', 500);
        } else if (this.imgSkirt == true) {
            document.getElementById('skirt')!.remove();
            document.getElementById('imgYu')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgYu')!.style.border = 'none', 500);
        } else if (this.imgYurt == true) {
            document.getElementById('yurt')!.remove();
            document.getElementById('imgYu')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgYu')!.style.border = 'none', 500);
        }
    };

    clickImgU() {
        if (this.imgDuck == true) {
            document.getElementById('duck')!.remove();
            document.getElementById('imgU')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgU')!.style.border = 'none', 500);
        } else if (this.imgIron == true) {
            document.getElementById('iron')!.remove();
            document.getElementById('imgU')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgU')!.style.border = 'none', 500);
        } else if (this.imgUdot == true) {
            document.getElementById('udot')!.remove();
            document.getElementById('imgU')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgU')!.style.border = 'none', 500);
        } else if (this.imgRod == true) {
            document.getElementById('rod')!.remove();
            document.getElementById('imgU')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgU')!.style.border = 'none', 500);
        }
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input15')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput11 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput12 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput13 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput14 = (<HTMLInputElement>document.getElementById('input28')).value;

        if((valueOfInput1 == "Ю") || (valueOfInput1 == "ю")) {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "Л") || (valueOfInput2 == "л")) {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "М") || (valueOfInput3 == "м")) {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "О") || (valueOfInput4 == "о")) {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "Ё") || (valueOfInput5 == "ё")) {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "А") || (valueOfInput6 == "а")) {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "У") || (valueOfInput7 == "у")) {
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

        if((valueOfInput9 == "Я") || (valueOfInput9 == "я")) {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput10 == "Е") || (valueOfInput10 == "е")) {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput11 == "П") || (valueOfInput11 == "п")) {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput12 == "К") || (valueOfInput12 == "к")) {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput13 == "Ж") || (valueOfInput13 == "ж")) {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput14 == "Д") || (valueOfInput14 == "д")) {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 14) {
            setTimeout(this.viewDiv8, 1000);
        }
    };

    clickImgJ3() {
        this.imgJ3 = true;
        this.imgU5 = false;
        this.imgK = false;
    };

    clickImgU5() {
        this.imgJ3 = false;
        this.imgU5 = true;
        this.imgK = false;
    };

    clickImgK() {
        this.imgJ3 = false;
        this.imgU5 = false;
        this.imgK = true;
    };

    clickDivForJ3() {
        if (this.imgJ3 == true) {
            const getImgJ = document.getElementById('imgJ3');
            const getDivJ = document.getElementById('divForJ3');
            getImgJ!.style.border = 'none';
            getDivJ!.append(getImgJ!);
            getDivJ!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForU5() {
        if (this.imgU5 == true) {
            const getImgU = document.getElementById('imgU5');
            const getDivU = document.getElementById('divForU5');
            getImgU!.style.border = 'none';
            getDivU!.append(getImgU!);
            getDivU!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK() {
        if (this.imgK == true) {
            const getImgK = document.getElementById('imgK');
            const getDivK = document.getElementById('divForK');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgYo() {
        this.imgYo = true;
        this.imgJ7 = false;
    };

    clickImgJ7() {
        this.imgYo = false;
        this.imgJ7 = true;
    };

    clickDivForYo() {
        if (this.imgYo == true) {
            const getImgYo = document.getElementById('imgYo');
            const getDivYo = document.getElementById('divForYo');
            getDivYo!.append(getImgYo!);
            getImgYo!.style.border = 'none';
            getDivYo!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForJ() {
        if (this.imgJ7 == true) {
            const getImgJ = document.getElementById('imgJ7');
            const getDivJ = document.getElementById('divForJ');
            getDivJ!.append(getImgJ!);
            getImgJ!.style.border = 'none';
            getDivJ!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickImgD3() {
        this.imgD3 = true;
        this.imgO = false;
        this.imgM = false;
    };

    clickImgO() {
        this.imgD3 = false;
        this.imgO = true;
        this.imgM = false;
    };

    clickImgM() {
        this.imgD3 = false;
        this.imgO = false;
        this.imgM = true;
    };

    clickDivForD() {
        if (this.imgD3 == true) {
            const getImgD = document.getElementById('imgD3');
            const getDivD = document.getElementById('divForD');
            getDivD!.append(getImgD!);
            getImgD!.style.border = 'none';
            getDivD!.parentElement!.style.border = "3px solid green"; 
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

    clickDivForM() {
        if (this.imgM == true) {
            const getImgM = document.getElementById('imgM');
            const getDivM = document.getElementById('divForM');
            getDivM!.append(getImgM!);
            getImgM!.style.border = 'none';
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgP() {
        this.imgP = true;
        this.imgO2 = false;
        this.imgL = false;
    };

    clickImgO2() {
        this.imgP = false;
        this.imgO2 = true;
        this.imgL = false;
    };

    clickImgL() {
        this.imgP = false;
        this.imgO2 = false;
        this.imgL = true;
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

    clickDivForO2() {
        if (this.imgO2 == true) {
            const getImgO = document.getElementById('imgO2');
            const getDivO = document.getElementById('divForO2');
            getDivO!.append(getImgO!);
            getImgO!.style.border = 'none';
            getDivO!.parentElement!.style.border = "3px solid green"; 
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

    clickImgL2() {
        this.imgL2 = true;
        this.imgU6 = false;
        this.imgK2 = false;
    };

    clickImgU6() {
        this.imgL2 = false;
        this.imgU6 = true;
        this.imgK2 = false;
    };

    clickImgK2() {
        this.imgL2 = false;
        this.imgU6 = false;
        this.imgK2 = true;
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

    clickDivForU6() {
        if (this.imgU6 == true) {
            const getImgU = document.getElementById('imgU6');
            const getDivU = document.getElementById('divForU6');
            getDivU!.append(getImgU!);
            getImgU!.style.border = 'none';
            getDivU!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK2() {
        if (this.imgK2 == true) {
            const getImgK = document.getElementById('imgK2');
            const getDivK = document.getElementById('divForK2');
            getDivK!.append(getImgK!);
            getImgK!.style.border = 'none';
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    checkInput4() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input29')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input30')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input31')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input32')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input33')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input34')).value;

        if((valueOfInput1 == "МАМА") || (valueOfInput1  == "мама")) {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "ЖУК") || (valueOfInput2 == "жук")) {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "ПОЛ") || (valueOfInput3 == "пол")) {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "ДОМ") || (valueOfInput4 == "дом")) {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "ЛУК")|| (valueOfInput5 == "лук")) {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "ПАПА") || (valueOfInput6 == "папа")) {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 6) {
            setTimeout(this.viewDiv20, 1000);
        }
    };

    checkInput5() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input35')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input36')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input37')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input38')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input39')).value;

        if((valueOfInput1 == "ЁЖ") || (valueOfInput1 == "ёж")) {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "ЖУК") || (valueOfInput2 == "жук")) {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "ПОЛ") || (valueOfInput3 == "пол")) {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "ЛУК") || (valueOfInput4 == "лук")) {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "ДОМ") || (valueOfInput5 == "дом")) {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 5) {
            setTimeout(() => alert('Правильно!'), 1000);
        }
    };
}