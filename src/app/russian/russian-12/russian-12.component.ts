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

        if(valueOfInput1 == "Ю") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "К") {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "Е") {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "У") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "А") {
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

        if(valueOfInput7 == "И") {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "О") {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "Я") {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "М") {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "П") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput12 == "Л") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput13 == "Ж") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput14 == "Д") {
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
            const getImgDoll = document.getElementById('doll');
            const getM = document.getElementById('imgM');

            getImgDoll!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgHammer == true) {
            const getImgHammer = document.getElementById('hammer');
            const getM = document.getElementById('imgM');

            getImgHammer!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMouse == true) {
            const getImgMouse = document.getElementById('mouse');
            const getM = document.getElementById('imgM');

            getImgMouse!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgRaspberry == true) {
            const getImgRaspberry = document.getElementById('raspberry');
            const getM = document.getElementById('imgM');

            getImgRaspberry!.remove();
            getM!.style.border = "3px solid green";
        }
    };

    clickImgM3() {
        if (this.imgDoll == true) {
            const getImgDoll = document.getElementById('doll');
            const getM = document.getElementById('imgM3');

            getImgDoll!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgHammer == true) {
            const getImgHammer = document.getElementById('hammer');
            const getM = document.getElementById('imgM3');

            getImgHammer!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMouse == true) {
            const getImgMouse = document.getElementById('mouse');
            const getM = document.getElementById('imgM3');

            getImgMouse!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgRaspberry == true) {
            const getImgRaspberry = document.getElementById('raspberry');
            const getM = document.getElementById('imgM3');

            getImgRaspberry!.remove();
            getM!.style.border = "3px solid green";
        }
    };

    clickImgM5() {
        if (this.imgDoll == true) {
            const getImgDoll = document.getElementById('doll');
            const getM = document.getElementById('imgM5');

            getImgDoll!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgHammer == true) {
            const getImgHammer = document.getElementById('hammer');
            const getM = document.getElementById('imgM5');

            getImgHammer!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMouse == true) {
            const getImgMouse = document.getElementById('mouse');
            const getM = document.getElementById('imgM5');

            getImgMouse!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgRaspberry == true) {
            const getImgRaspberry = document.getElementById('raspberry');
            const getM = document.getElementById('imgM5');

            getImgRaspberry!.remove();
            getM!.style.border = "3px solid green";
        }
    };

    clickImgM7() {
        if (this.imgDoll == true) {
            const getImgDoll = document.getElementById('doll');
            const getM = document.getElementById('imgM7');

            getImgDoll!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgHammer == true) {
            const getImgHammer = document.getElementById('hammer');
            const getM = document.getElementById('imgM7');

            getImgHammer!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMouse == true) {
            const getImgMouse = document.getElementById('mouse');
            const getM = document.getElementById('imgM7');

            getImgMouse!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgRaspberry == true) {
            const getImgRaspberry = document.getElementById('raspberry');
            const getM = document.getElementById('imgM7');

            getImgRaspberry!.remove();
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

    clickImgM6() {
        if (this.imgMill == true) {
            const getImgMill = document.getElementById('mill');
            const getM = document.getElementById('imgM6');

            getImgMill!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMimosa == true) {
            const getImgMimosa = document.getElementById('mimosa');
            const getM = document.getElementById('imgM6');

            getImgMimosa!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('imgM6');

            getImgJellyfish!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgBear == true) {
            const getImgBear = document.getElementById('bear');
            const getM = document.getElementById('imgM6');

            getImgBear!.remove();
            getM!.style.border = "3px solid green";
        }
    };

    clickImgM8() {
        if (this.imgMill == true) {
            const getImgMill = document.getElementById('mill');
            const getM = document.getElementById('imgM8');

            getImgMill!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgMimosa == true) {
            const getImgMimosa = document.getElementById('mimosa');
            const getM = document.getElementById('imgM8');

            getImgMimosa!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('imgM8');

            getImgJellyfish!.remove();
            getM!.style.border = "3px solid green"; 
        } else if (this.imgBear == true) {
            const getImgBear = document.getElementById('bear');
            const getM = document.getElementById('imgM8');

            getImgBear!.remove();
            getM!.style.border = "3px solid green";
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

        if(valueOfInput1 == "Я") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "А") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "О") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "У") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "Е") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Ё") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "Ю") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "И") {
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

        if(valueOfInput1 == "Ж") {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "П") {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "Д") {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "К") {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "М") {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Л") {
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

        if(valueOfInput1 == "ЯМА") {
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

        if(valueOfInput5 == "ЮЛА") {
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