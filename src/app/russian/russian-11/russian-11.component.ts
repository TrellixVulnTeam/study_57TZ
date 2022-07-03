import { Component } from "@angular/core";

@Component({
    selector: 'russian11',
    templateUrl: './russian-11.component.html',
    styleUrls: ['./russian-11.component.scss']
})

export class Russian11 {
    imgYu = false;
    imgL = false;
    imgA = false;
    imgHedgehog = false;
    imgTree = false;
    imgUnicorn = false;
    imgBlackberry = false;
    imgWhirligig = false;
    imgSnake = false;
    imgPit = false;
    imgClod = false;
    imgPow = false;
    imgYa = false;
    imgM = false;
    imgA2 = false;
    imgK = false;
    imgO = false;
    imgM2 = false;
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

        if(valueOfInput1 == "А") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "О") {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "У") {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "Е") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "Я") {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Ё") {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "Ю") {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "И") {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv3, 1000);
        }
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input9')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input10')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input11')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input12')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input13')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input14')).value;

        if(valueOfInput1 == "Д") {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "К") {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "М") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "П") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "Ж") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Л") {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 6) {
            setTimeout(this.viewDiv4, 1000);
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
            const getImgBlackberry = document.getElementById('blackberry');
            const getE = document.getElementById('imgE');

            getImgBlackberry!.remove();
            getE!.style.border! = "3px solid green"; 
        } else if (this.imgUnicorn == true) {
            const getImgUnicorn = document.getElementById('unicorn');
            const getE = document.getElementById('imgE');

            getImgUnicorn!.remove();
            getE!.style.border! = "3px solid green"; 
        };
    };

    clickImgE2() {
        if (this.imgBlackberry == true) {
            const getImgBlackberry = document.getElementById('blackberry');
            const getE = document.getElementById('imgE2');

            getImgBlackberry!.remove();
            getE!.style.border! = "3px solid green"; 
        } else if (this.imgUnicorn == true) {
            const getImgUnicorn = document.getElementById('unicorn');
            const getE = document.getElementById('imgE2');

            getImgUnicorn!.remove();
            getE!.style.border! = "3px solid green"; 
        };
    };

    clickImgYo() {
        if (this.imgHedgehog == true) {
            const getImgHedgehog = document.getElementById('hedgehog');
            const getYo = document.getElementById('imgYo');

            getImgHedgehog!.remove();
            getYo!.style.border! = "3px solid green"; 
        } else if (this.imgTree == true) {
            const getImgTree = document.getElementById('tree');
            const getYo = document.getElementById('imgYo');

            getImgTree!.remove();
            getYo!.style.border! = "3px solid green"; 
        };
    };

    clickImgYo2() {
        if (this.imgHedgehog == true) {
            const getImgHedgehog = document.getElementById('hedgehog');
            const getYo = document.getElementById('imgYo2');

            getImgHedgehog!.remove();
            getYo!.style.border! = "3px solid green"; 
        } else if (this.imgTree == true) {
            const getImgTree = document.getElementById('tree');
            const getYo = document.getElementById('imgYo2');

            getImgTree!.remove();
            getYo!.style.border! = "3px solid green"; 
        };
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

        if(valueOfInput1 == "Ж") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "П") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "М") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "Е") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "Я") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "И") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "А") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "Ё") {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "У") {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "О") {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "К") {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput12 == "Л") {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput13 == "Д") {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput14 == "Ю") {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 14) {
            setTimeout(this.viewDiv9, 1000);
        }
    };

    clickImgYa() {
        this.imgYa = true;
        this.imgM = false;
        this.imgA2 = false;
    };

    clickImgM() {
        this.imgYa = false;
        this.imgM = true;
        this.imgA2 = false;
    };

    clickImgA2() {
        this.imgYa = false;
        this.imgM = false;
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

    clickDivForM() {
        if (this.imgM == true) {
            const getImgM = document.getElementById('imgM');
            const getDivM = document.getElementById('divForM');
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
            this.viewDiv15();
        };
    };

    clickImgK() {
        this.imgK = true;
        this.imgO = false;
        this.imgM2 = false;
    };

    clickImgO() {
        this.imgK = false;
        this.imgO = true;
        this.imgM2 = false;
    };

    clickImgM2() {
        this.imgK = false;
        this.imgO = false;
        this.imgM2 = true;
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

    clickDivForO() {
        if (this.imgO == true) {
            const getImgO = document.getElementById('imgO');
            const getDivO = document.getElementById('divForO');
            getDivO!.append(getImgO!);
            getImgO!.style.border = 'none';
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForM2() {
        if (this.imgM2 == true) {
            const getImgM = document.getElementById('imgM2');
            const getDivM = document.getElementById('divForM2');
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
            getDivPow!.append(getImgPow!);
            getDivPow!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForPit() {
        if (this.imgPit == true) {
            const getImgPit = document.getElementById('pit');
            const getDivPit = document.getElementById('divForPit');
            getDivPit!.append(getImgPit!);
            getDivPit!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForClod() {
        if (this.imgClod == true) {
            const getImgClod = document.getElementById('clod');
            const getDivClod = document.getElementById('divForClod');
            getDivClod!.append(getImgClod!);
            getDivClod!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForSnake() {
        if (this.imgSnake == true) {
            const getImgSnake = document.getElementById('snake');
            const getDivSnake = document.getElementById('divForSnake');
            getDivSnake!.append(getImgSnake!);
            getDivSnake!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForWhirligig() {
        if (this.imgWhirligig == true) {
            const getImgWhirligig = document.getElementById('whirligig');
            const getDivWhirligig = document.getElementById('divForWhirligig');
            getDivWhirligig!.append(getImgWhirligig!);
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

        if(valueOfInput1 == "ЮЛА") {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "ЛАПА") {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "КОМ") {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "УЖ") {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "ЯМА") {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid red";
        };

        function right() {alert('Правильно!')}

        if(checkValue === 5) {
            setTimeout(right, 1000);
        };
    };
}