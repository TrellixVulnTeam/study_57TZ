import { Component } from "@angular/core";

@Component({
    selector: 'russian16',
    templateUrl: './russian-16.component.html',
    styleUrls: ['./russian-16.component.scss']
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

        if(valueOfInput1 == "Б") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "Ю") {
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

        if(valueOfInput4 == "К") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "О") {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "И") {
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

        if(valueOfInput10 == "Я") {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "Е") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput12 == "М") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput13 == "П") {
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

        if(valueOfInput15 == "Д") {
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
            const getImgCactus = document.getElementById('cactus');
            const getK = document.getElementById('imgK');

            getImgCactus!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgPencil == true) {
            const getImgPencil = document.getElementById('pencil');
            const getK = document.getElementById('imgK');

            getImgPencil!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgCow == true) {
            const getImgCow = document.getElementById('cow');
            const getK = document.getElementById('imgK');

            getImgCow!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgGoat == true) {
            const getImgGoat = document.getElementById('goat');
            const getK = document.getElementById('imgK');

            getImgGoat!.remove();
            getK!.style.border = "3px solid green";
        }
    };

    clickImgK2() {
        if (this.imgKangaroo == true) {
            const getImgKangaroo = document.getElementById('kangaroo');
            const getK = document.getElementById('imgK2');

            getImgKangaroo!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgCap == true) {
            const getImgCap = document.getElementById('cap');
            const getK = document.getElementById('imgK2');

            getImgCap!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgKiwi == true) {
            const getImgKiwi = document.getElementById('kiwi');
            const getK = document.getElementById('imgK2');

            getImgKiwi!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgWhale == true) {
            const getImgWhale = document.getElementById('whale');
            const getK = document.getElementById('imgK2');

            getImgWhale!.remove();
            getK!.style.border = "3px solid green";
        }
    };

    clickImgK3() {
        if (this.imgCactus == true) {
            const getImgCactus = document.getElementById('cactus');
            const getK = document.getElementById('imgK3');

            getImgCactus!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgPencil == true) {
            const getImgPencil = document.getElementById('pencil');
            const getK = document.getElementById('imgK3');

            getImgPencil!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgCow == true) {
            const getImgCow = document.getElementById('cow');
            const getK = document.getElementById('imgK3');

            getImgCow!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgGoat == true) {
            const getImgGoat = document.getElementById('goat');
            const getK = document.getElementById('imgK3');

            getImgGoat!.remove();
            getK!.style.border = "3px solid green";
        }
    };

    clickImgK4() {
        if (this.imgKangaroo == true) {
            const getImgKangaroo = document.getElementById('kangaroo');
            const getK = document.getElementById('imgK4');

            getImgKangaroo!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgCap == true) {
            const getImgCap = document.getElementById('cap');
            const getK = document.getElementById('imgK4');

            getImgCap!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgKiwi == true) {
            const getImgKiwi = document.getElementById('kiwi');
            const getK = document.getElementById('imgK4');

            getImgKiwi!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgWhale == true) {
            const getImgWhale = document.getElementById('whale');
            const getK = document.getElementById('imgK4');

            getImgWhale!.remove();
            getK!.style.border = "3px solid green";
        }
    };

    clickImgK5() {
        if (this.imgCactus == true) {
            const getImgCactus = document.getElementById('cactus');
            const getK = document.getElementById('imgK5');

            getImgCactus!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgPencil == true) {
            const getImgPencil = document.getElementById('pencil');
            const getK = document.getElementById('imgK5');

            getImgPencil!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgCow == true) {
            const getImgCow = document.getElementById('cow');
            const getK = document.getElementById('imgK5');

            getImgCow!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgGoat == true) {
            const getImgGoat = document.getElementById('goat');
            const getK = document.getElementById('imgK5');

            getImgGoat!.remove();
            getK!.style.border = "3px solid green";
        }
    };

    clickImgK6() {
        if (this.imgKangaroo == true) {
            const getImgKangaroo = document.getElementById('kangaroo');
            const getK = document.getElementById('imgK6');

            getImgKangaroo!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgCap == true) {
            const getImgCap = document.getElementById('cap');
            const getK = document.getElementById('imgK6');

            getImgCap!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgKiwi == true) {
            const getImgKiwi = document.getElementById('kiwi');
            const getK = document.getElementById('imgK6');

            getImgKiwi!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgWhale == true) {
            const getImgWhale = document.getElementById('whale');
            const getK = document.getElementById('imgK6');

            getImgWhale!.remove();
            getK!.style.border = "3px solid green";
        }
    };

    clickImgK7() {
        if (this.imgCactus == true) {
            const getImgCactus = document.getElementById('cactus');
            const getK = document.getElementById('imgK7');

            getImgCactus!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgPencil == true) {
            const getImgPencil = document.getElementById('pencil');
            const getK = document.getElementById('imgK7');

            getImgPencil!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgCow == true) {
            const getImgCow = document.getElementById('cow');
            const getK = document.getElementById('imgK7');

            getImgCow!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgGoat == true) {
            const getImgGoat = document.getElementById('goat');
            const getK = document.getElementById('imgK7');

            getImgGoat!.remove();
            getK!.style.border = "3px solid green";
        }
    };

    clickImgK8() {
        if (this.imgKangaroo == true) {
            const getImgKangaroo = document.getElementById('kangaroo');
            const getK = document.getElementById('imgK8');

            getImgKangaroo!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgCap == true) {
            const getImgCap = document.getElementById('cap');
            const getK = document.getElementById('imgK8');

            getImgCap!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgKiwi == true) {
            const getImgKiwi = document.getElementById('kiwi');
            const getK = document.getElementById('imgK8');

            getImgKiwi!.remove();
            getK!.style.border = "3px solid green"; 
        } else if (this.imgWhale == true) {
            const getImgWhale = document.getElementById('whale');
            const getK = document.getElementById('imgK8');

            getImgWhale!.remove();
            getK!.style.border = "3px solid green";
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
            const getImgCrane = document.getElementById('crane');
            const getJ = document.getElementById('imgJ');

            getImgCrane!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgToad == true) {
            const getImgToad = document.getElementById('toad');
            const getJ = document.getElementById('imgJ');

            getImgToad!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgGiraffe == true) {
            const getImgGiraffe = document.getElementById('giraffe');
            const getJ = document.getElementById('imgJ');

            getImgGiraffe!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgBeatle == true) {
            const getImgBeatle = document.getElementById('beatle');
            const getJ = document.getElementById('imgJ');

            getImgBeatle!.remove();
            getJ!.style.border = "3px solid green";
        }
    };

    clickImgJ2() {
        if (this.imgCrane == true) {
            const getImgCrane = document.getElementById('crane');
            const getJ = document.getElementById('imgJ2');

            getImgCrane!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgToad == true) {
            const getImgToad = document.getElementById('toad');
            const getJ = document.getElementById('imgJ2');

            getImgToad!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgGiraffe == true) {
            const getImgGiraffe = document.getElementById('giraffe');
            const getJ = document.getElementById('imgJ2');

            getImgGiraffe!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgBeatle == true) {
            const getImgBeatle = document.getElementById('beatle');
            const getJ = document.getElementById('imgJ2');

            getImgBeatle!.remove();
            getJ!.style.border = "3px solid green";
        }
    };

    clickImgJ3() {
        if (this.imgCrane == true) {
            const getImgCrane = document.getElementById('crane');
            const getJ = document.getElementById('imgJ3');

            getImgCrane!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgToad == true) {
            const getImgToad = document.getElementById('toad');
            const getJ = document.getElementById('imgJ3');

            getImgToad!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgGiraffe == true) {
            const getImgGiraffe = document.getElementById('giraffe');
            const getJ = document.getElementById('imgJ3');

            getImgGiraffe!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgBeatle == true) {
            const getImgBeatle = document.getElementById('beatle');
            const getJ = document.getElementById('imgJ3');

            getImgBeatle!.remove();
            getJ!.style.border = "3px solid green";
        }
    };

    clickImgJ4() {
        if (this.imgCrane == true) {
            const getImgCrane = document.getElementById('crane');
            const getJ = document.getElementById('imgJ4');

            getImgCrane!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgToad == true) {
            const getImgToad = document.getElementById('toad');
            const getJ = document.getElementById('imgJ4');

            getImgToad!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgGiraffe == true) {
            const getImgGiraffe = document.getElementById('giraffe');
            const getJ = document.getElementById('imgJ4');

            getImgGiraffe!.remove();
            getJ!.style.border = "3px solid green"; 
        } else if (this.imgBeatle == true) {
            const getImgBeatle = document.getElementById('beatle');
            const getJ = document.getElementById('imgJ4');

            getImgBeatle!.remove();
            getJ!.style.border = "3px solid green";
        }
    };

    clickImgM() {
        if (this.imgMill == true) {
            const getImgMill = document.getElementById('mill');
            const getM = document.getElementById('imgM');

            getImgMill!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMimosa == true) {
            const getImgMimosa = document.getElementById('mimosa');
            const getM = document.getElementById('imgM');

            getImgMimosa!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('imgM');

            getImgJellyfish!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgBear == true) {
            const getImgBear = document.getElementById('bear');
            const getM = document.getElementById('imgM');

            getImgBear!.remove();
            getM!.style.border = "3px solid green";
        }
    };

    clickImgM2() {
        if (this.imgMill == true) {
            const getImgMill = document.getElementById('mill');
            const getM = document.getElementById('imgM2');

            getImgMill!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMimosa == true) {
            const getImgMimosa = document.getElementById('mimosa');
            const getM = document.getElementById('imgM2');

            getImgMimosa!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('imgM2');

            getImgJellyfish!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgBear == true) {
            const getImgBear = document.getElementById('bear');
            const getM = document.getElementById('imgM2');

            getImgBear!.remove();
            getM!.style.border = "3px solid green";
        }
    };

    clickImgM3() {
        if (this.imgMill == true) {
            const getImgMill = document.getElementById('mill');
            const getM = document.getElementById('imgM3');

            getImgMill!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMimosa == true) {
            const getImgMimosa = document.getElementById('mimosa');
            const getM = document.getElementById('imgM3');

            getImgMimosa!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('imgM3');

            getImgJellyfish!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgBear == true) {
            const getImgBear = document.getElementById('bear');
            const getM = document.getElementById('imgM3');

            getImgBear!.remove();
            getM!.style.border = "3px solid green";
        }
    };

    clickImgM4() {
        if (this.imgMill == true) {
            const getImgMill = document.getElementById('mill');
            const getM = document.getElementById('imgM4');

            getImgMill!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMimosa == true) {
            const getImgMimosa = document.getElementById('mimosa');
            const getM = document.getElementById('imgM4');

            getImgMimosa!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('imgM4');

            getImgJellyfish!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgBear == true) {
            const getImgBear = document.getElementById('bear');
            const getM = document.getElementById('imgM4');

            getImgBear!.remove();
            getM!.style.border = "3px solid green";
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

        if(valueOfInput1 == "А") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "О") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "У") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "Е") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "Я") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Ё") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "Ю") {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "И") {
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

        if(valueOfInput1 == "К") {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "П") {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "Д") {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "Ж") {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "Л") {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "М") {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "Б") {
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
            const getImgRhinoceros = document.getElementById('rhinoceros');
            const getN = document.getElementById('imgN');

            getImgRhinoceros!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgNarcissus == true) {
            const getImgNarcissus = document.getElementById('narcissus');
            const getN = document.getElementById('imgN');

            getImgNarcissus!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgScissors == true) {
            const getImgScissors = document.getElementById('scissors');
            const getN = document.getElementById('imgN');

            getImgScissors!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgBurbot == true) {
            const getImgBurbot = document.getElementById('burbot');
            const getN = document.getElementById('imgN');

            getImgBurbot!.remove();
            getN!.style.border = "3px solid green";
        }
    };

    clickImgN3() {
        if (this.imgRhinoceros == true) {
            const getImgRhinoceros = document.getElementById('rhinoceros');
            const getN = document.getElementById('imgN3');

            getImgRhinoceros!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgNarcissus == true) {
            const getImgNarcissus = document.getElementById('narcissus');
            const getN = document.getElementById('imgN3');

            getImgNarcissus!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgScissors == true) {
            const getImgScissors = document.getElementById('scissors');
            const getN = document.getElementById('imgN3');

            getImgScissors!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgBurbot == true) {
            const getImgBurbot = document.getElementById('burbot');
            const getN = document.getElementById('imgN3');

            getImgBurbot!.remove();
            getN!.style.border = "3px solid green";
        }
    };

    clickImgN5() {
        if (this.imgRhinoceros == true) {
            const getImgRhinoceros = document.getElementById('rhinoceros');
            const getN = document.getElementById('imgN5');

            getImgRhinoceros!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgNarcissus == true) {
            const getImgNarcissus = document.getElementById('narcissus');
            const getN = document.getElementById('imgN5');

            getImgNarcissus!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgScissors == true) {
            const getImgScissors = document.getElementById('scissors');
            const getN = document.getElementById('imgN5');

            getImgScissors!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgBurbot == true) {
            const getImgBurbot = document.getElementById('burbot');
            const getN = document.getElementById('imgN5');

            getImgBurbot!.remove();
            getN!.style.border = "3px solid green";
        }
    };

    clickImgN7() {
        if (this.imgRhinoceros == true) {
            const getImgRhinoceros = document.getElementById('rhinoceros');
            const getN = document.getElementById('imgN7');

            getImgRhinoceros!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgNarcissus == true) {
            const getImgNarcissus = document.getElementById('narcissus');
            const getN = document.getElementById('imgN7');

            getImgNarcissus!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgScissors == true) {
            const getImgScissors = document.getElementById('scissors');
            const getN = document.getElementById('imgN7');

            getImgScissors!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgBurbot == true) {
            const getImgBurbot = document.getElementById('burbot');
            const getN = document.getElementById('imgN7');

            getImgBurbot!.remove();
            getN!.style.border = "3px solid green";
        }
    };

    clickImgN2() {
        if (this.imgTumbler == true) {
            const getImgTumbler = document.getElementById('tumbler');
            const getN = document.getElementById('imgN2');

            getImgTumbler!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgIgnoramus == true) {
            const getImgIgnoramus = document.getElementById('ignoramus');
            const getN = document.getElementById('imgN2');

            getImgIgnoramus!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgThread == true) {
            const getImgThread = document.getElementById('thread');
            const getN = document.getElementById('imgN2');

            getImgThread!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgForgetmenot == true) {
            const getImgForgetmenot = document.getElementById('forgetmenot');
            const getN = document.getElementById('imgN2');

            getImgForgetmenot!.remove();
            getN!.style.border = "3px solid green";
        }
    };

    clickImgN4() {
        if (this.imgTumbler == true) {
            const getImgTumbler = document.getElementById('tumbler');
            const getN = document.getElementById('imgN4');

            getImgTumbler!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgIgnoramus == true) {
            const getImgIgnoramus = document.getElementById('ignoramus');
            const getN = document.getElementById('imgN4');

            getImgIgnoramus!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgThread == true) {
            const getImgThread = document.getElementById('thread');
            const getN = document.getElementById('imgN4');

            getImgThread!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgForgetmenot == true) {
            const getImgForgetmenot = document.getElementById('forgetmenot');
            const getN = document.getElementById('imgN4');

            getImgForgetmenot!.remove();
            getN!.style.border = "3px solid green";
        }
    };

    clickImgN6() {
        if (this.imgTumbler == true) {
            const getImgTumbler = document.getElementById('tumbler');
            const getN = document.getElementById('imgN6');

            getImgTumbler!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgIgnoramus == true) {
            const getImgIgnoramus = document.getElementById('ignoramus');
            const getN = document.getElementById('imgN6');

            getImgIgnoramus!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgThread == true) {
            const getImgThread = document.getElementById('thread');
            const getN = document.getElementById('imgN6');

            getImgThread!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgForgetmenot == true) {
            const getImgForgetmenot = document.getElementById('forgetmenot');
            const getN = document.getElementById('imgN6');

            getImgForgetmenot!.remove();
            getN!.style.border = "3px solid green";
        }
    };

    clickImgN8() {
        if (this.imgTumbler == true) {
            const getImgTumbler = document.getElementById('tumbler');
            const getN = document.getElementById('imgN8');

            getImgTumbler!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgIgnoramus == true) {
            const getImgIgnoramus = document.getElementById('ignoramus');
            const getN = document.getElementById('imgN8');

            getImgIgnoramus!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgThread == true) {
            const getImgThread = document.getElementById('thread');
            const getN = document.getElementById('imgN8');

            getImgThread!.remove();
            getN!.style.border = "3px solid green"; 
        } else if (this.imgForgetmenot == true) {
            const getImgForgetmenot = document.getElementById('forgetmenot');
            const getN = document.getElementById('imgN8');

            getImgForgetmenot!.remove();
            getN!.style.border = "3px solid green";
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

        if(valueOfInput1 == "НЁ") {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "НЯ") {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "НЕ") {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "НО") {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "НА") {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "НИ") {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "НУ") {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "НЮ") {
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

        if(valueOfInput1 == "НЮ") {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "НЯ") {
            document.getElementById('input40')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input40')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "НИ") {
            document.getElementById('input41')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input41')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "БА") {
            document.getElementById('input42')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input42')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "МА") {
            document.getElementById('input43')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input43')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "ПО") {
            document.getElementById('input44')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input44')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "НА") {
            document.getElementById('input45')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input45')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "НЁ") {
            document.getElementById('input46')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input46')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "МАК") {
            document.getElementById('input47')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input47')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "БАБА") {
            document.getElementById('input48')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input48')!.parentElement!.style.border = "3px solid red";
        };

        function right() {alert('Правильно!')}

        if(checkValue === 10) {
            setTimeout(right, 1000);
        };
    };
}