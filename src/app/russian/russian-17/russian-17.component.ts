import { Component } from "@angular/core";

@Component({
    selector: 'russian17',
    templateUrl: './russian-17.component.html',
    styleUrls: ['./../russian-16/russian-16.component.scss']
})

export class Russian17 {
    imgNarcissus = false;
    imgScissors = false;
    imgBurbot = false;
    imgRhinoceros = false;
    imgIgnoramus = false;
    imgTumbler = false;
    imgThread = false;
    imgForgetmenot = false;
    imgUnicorn = false;
    imgRaccoon = false;
    imgBlackberry = false;
    imgFrog = false;
    imgFox = false;
    imgLemon = false;
    imgTree = false;
    imgHedgehog = false;
    imgRuff = false;
    imgLama = false;
    imgOnion = false;
    imgMoose = false;
    imgM5 = false;
    imgA = false;
    imgK9 = false;
    imgYu = false;
    imgL3 = false;
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
        const valueOfInput16 = (<HTMLInputElement>document.getElementById('input16')).value;

        if(valueOfInput1 == "Ю") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "Д") {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "Л") {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "П") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "М") {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Я") {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "У") {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "Ё") {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "А") {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "И") {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "О") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput12 == "Е") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput13 == "К") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput14 == "Ж") {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput15 == "Н") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput16 == "Б") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 16) {
            setTimeout(this.viewDiv3, 1000);
        }
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
            const getImgRhinoceros = document.getElementById('rhinoceros')!.remove();
        } else if (this.imgNarcissus == true) {
            const getImgNarcissus = document.getElementById('narcissus')!.remove(); 
        } else if (this.imgScissors == true) {
            const getImgScissors = document.getElementById('scissors')!.remove();
        } else if (this.imgBurbot == true) {
            const getImgBurbot = document.getElementById('burbot')!.remove();
        }
    };

    clickImgN2() {
        if (this.imgTumbler == true) {
            const getImgTumbler = document.getElementById('tumbler')!.remove(); 
        } else if (this.imgIgnoramus == true) {
            const getImgIgnoramus = document.getElementById('ignoramus')!.remove();
        } else if (this.imgThread == true) {
            const getImgThread = document.getElementById('thread')!.remove(); 
        } else if (this.imgForgetmenot == true) {
            const getImgForgetmenot = document.getElementById('forgetmenot')!.remove();
        }
    };

    clickImgUnicorn() {
        this.imgUnicorn = true;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgRaccoon() {
        this.imgUnicorn = false;
        this.imgRaccoon = true;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgBlackberry() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = true;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgFrog() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = true;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgFox() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = true;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgLemon() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = true;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgTree() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = true;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgHedgehog() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = true;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgRuff() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = true;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgLama() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = true;
        this.imgOnion = false;
        this.imgMoose = false;
    };

    clickImgOnion() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = true;
        this.imgMoose = false;
    };

    clickImgMoose() {
        this.imgUnicorn = false;
        this.imgRaccoon = false;
        this.imgBlackberry = false;
        this.imgFrog = false;
        this.imgFox = false;
        this.imgLemon = false;
        this.imgTree = false;
        this.imgHedgehog = false;
        this.imgRuff = false;
        this.imgLama = false;
        this.imgOnion = false;
        this.imgMoose = true;
    };

    clickImgE() {
        if (this.imgRaccoon == true) {
            const getImgRaccoon = document.getElementById('raccoon')!.remove(); 
        } else if (this.imgBlackberry == true) {
            const getImgBlackberry = document.getElementById('blackberry')!.remove();
        } else if (this.imgUnicorn == true) {
            const getImgUnicorn = document.getElementById('unicorn')!.remove();
        };
    };

    clickImgYo() {
        if (this.imgRuff == true) {
            const getImgRuff = document.getElementById('ruff')!.remove(); 
        } else if (this.imgHedgehog == true) {
            const getImgHedgehog = document.getElementById('hedgehog')!.remove();
        } else if (this.imgTree == true) {
            const getImgTree = document.getElementById('tree')!.remove();
        };
    };

    clickImgL() {
        if (this.imgFrog == true) {
            const getImgFrog = document.getElementById('frog')!.remove(); 
        } else if (this.imgFox == true) {
            const getImgFox = document.getElementById('fox')!.remove();
        } else if (this.imgLemon == true) {
            const getImgLemon = document.getElementById('lemon')!.remove();
        };
    };

    clickImgL2() {
        if (this.imgOnion == true) {
            const getImgOnion = document.getElementById('onion')!.remove(); 
        } else if (this.imgMoose == true) {
            const getImgMoose = document.getElementById('moose')!.remove();
        } else if (this.imgLama == true) {
            const getImgLama = document.getElementById('lama')!.remove();
        };
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input24')).value;

        if(valueOfInput1 == "А") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "О") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "У") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "Е") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "Я") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Ё") {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "Ю") {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "И") {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv6, 1000);
        }
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input28')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input29')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input30')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input31')).value;

        if(valueOfInput1 == "М") {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "К") {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "Д") {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "Н") {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "П") {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Ж") {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "Л") {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
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
        this.imgL3 = false;
        this.imgA2 = false;
    };

    clickImgL3() {
        this.imgYu = false;
        this.imgL3 = true;
        this.imgA2 = false;
    };

    clickImgA2() {
        this.imgYu = false;
        this.imgL3 = false;
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

    clickDivForL3() {
        if (this.imgL3 == true) {
            const getImgL = document.getElementById('imgL3');
            const getDivL = document.getElementById('divForL3');
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

    checkInput4() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input32')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input33')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input34')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input35')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input36')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input37')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input38')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input39')).value;

        if(valueOfInput1 == "НЁ") {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "НЮ") {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "НУ") {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "НИ") {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "НА") {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "НО") {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "НЕ") {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "НЯ") {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv22, 1000);
        };
    };

    checkInput5() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input40')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input41')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input42')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input43')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input44')).value;

        if(valueOfInput1 == "ЁЖ") {
            document.getElementById('input40')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input40')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "ЖУК") {
            document.getElementById('input41')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input41')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "МАК") {
            document.getElementById('input42')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input42')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "ЮЛА") {
            document.getElementById('input43')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input43')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "БАНАН") {
            document.getElementById('input44')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input44')!.parentElement!.style.border = "3px solid red";
        };

        function right() {alert('Правильно!')}

        if(checkValue === 5) {
            setTimeout(right, 1000);
        };
    };
}