import { Component } from "@angular/core";

@Component({
    selector: 'russian9',
    templateUrl: './russian-9.component.html',
    styleUrls: ['./russian-9.component.scss']
})

export class Russian9 {
    imgShark = false;
    imgUdot = false;
    imgIris = false;
    imgLizard = false;
    imgHoop = false;
    imgRaccoon = false;
    imgJellyfish = false;
    imgRaspberry = false;
    imgOnion = false;
    imgBeatle = false;
    imgParrot = false;
    imgGiraffe = false;
    imgGun = false;
    imgCactus = false;
    imgDinosaur = false;
    imgHouse = false;
    imgRain = false;
    imgTree = false;
    imgToad = false;
    imgCrane = false;
    imgHedgehog = false;
    imgM = false;
    imgU = false;
    imgYa = false;
    imgYo = false;
    imgJ7 = false;
    imgM4 = false;
    imgO2 = false;
    imgL2 = false;
    imgO3 = false;
    imgK2 = false;
    imgO4 = false;
    imgM5 = false;
    imgO5 = false;
    imgL3 = false;
    imgO6 = false;
    imgK3 = false;
    imgO7 = false;
    imgH = false;
    imgCat = false;
    imgT = false;
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

    clickImgShark() {
        this.imgShark =true;
        this.imgIris = false;
        this.imgUdot = false;
    };

    clickImgIris() {
        this.imgShark = false;
        this.imgIris = true;
        this.imgUdot = false;
    };

    clickImgUdot() {
        this.imgShark = false;
        this.imgIris = false;
        this.imgUdot = true;
    };

    clickImgI() {
        if (this.imgIris == true) {
            document.getElementById('iris')!.remove();
            document.getElementById('i')!.style.border! = "3px solid green"; 
        };
    };

    clickImgA() {
        if (this.imgShark == true) {
            document.getElementById('shark')!.remove();
            document.getElementById('a')!.style.border! = "3px solid green"; 
        };
    };

    clickImgU() {
        if (this.imgUdot == true) {
            document.getElementById('udot')!.remove();
            document.getElementById('u')!.style.border! = "3px solid green"; 
        };
    };

    clickImgRaccoon() {
        this.imgRaccoon = true;
        this.imgHoop = false;
        this.imgLizard = false;
    };

    clickImgHoop() {
        this.imgRaccoon = false;
        this.imgHoop = true;
        this.imgLizard = false;
    };

    clickImgLizard() {
        this.imgRaccoon = false;
        this.imgHoop = false;
        this.imgLizard = true;
    };

    clickImgE() {
        if (this.imgRaccoon == true) {
            document.getElementById('raccoon')!.remove();
            document.getElementById('e')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO() {
        if (this.imgHoop == true) {
            document.getElementById('hoop')!.remove();
            document.getElementById('o')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgLizard == true) {
            document.getElementById('lizard')!.remove();
            document.getElementById('ya')!.style.border! = "3px solid green"; 
        };
    };

    clickImgBeatle() {
        this.imgBeatle = true;
        this.imgRaspberry = false;
        this.imgJellyfish = false;
        this.imgOnion = false;
    };

    clickImgRaspberry() {
        this.imgBeatle = false;
        this.imgRaspberry = true;
        this.imgJellyfish = false;
        this.imgOnion = false;
    };

    clickImgJellyfish() {
        this.imgBeatle = false;
        this.imgRaspberry = false;
        this.imgJellyfish = true;
        this.imgOnion = false;
    };

    clickImgOnion() {
        this.imgBeatle = false;
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

    clickImgJ() {
        if (this.imgBeatle == true) {
            document.getElementById('beatle')!.remove();
            document.getElementById('j')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM2() {
        if (this.imgJellyfish == true) {
            document.getElementById('jellyfish')!.remove();
            document.getElementById('m2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgParrot() {
        this.imgParrot = true;
        this.imgGiraffe = false;
        this.imgGun = false;
        this.imgCactus = false;
    };

    clickImgGiraffe() {
        this.imgParrot = false;
        this.imgGiraffe = true;
        this.imgGun = false;
        this.imgCactus = false;
    };

    clickImgGun() {
        this.imgParrot = false;
        this.imgGiraffe = false;
        this.imgGun = true;
        this.imgCactus = false;
    };

    clickImgCactus() {
        this.imgParrot = false;
        this.imgGiraffe = false;
        this.imgGun = false;
        this.imgCactus = true;
    };

    clickImgP() {
        if (this.imgParrot == true) {
            document.getElementById('parrot')!.remove();
            document.getElementById('p')!.style.border! = "3px solid green"; 
        };
    };

    clickImgK() {
        if (this.imgCactus == true) {
            document.getElementById('cactus')!.remove();
            document.getElementById('k')!.style.border! = "3px solid green"; 
        };
    };

    clickImgP2() {
        if (this.imgGun == true) {
            document.getElementById('gun')!.remove();
            document.getElementById('p2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgJ2() {
        if (this.imgGiraffe == true) {
            document.getElementById('giraffe')!.remove();
            document.getElementById('j2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgHouse() {
        this.imgHouse = true;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgDinosaur = false;
        this.imgTree = false;
        this.imgRain = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgToad() {
        this.imgHouse = false;
        this.imgToad = true;
        this.imgCrane = false;
        this.imgDinosaur = false;
        this.imgTree = false;
        this.imgRain = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgCrane() {
        this.imgHouse = false;
        this.imgToad = false;
        this.imgCrane = true;
        this.imgDinosaur = false;
        this.imgTree = false;
        this.imgRain = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgDinosaur() {
        this.imgHouse = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgDinosaur = true;
        this.imgTree = false;
        this.imgRain = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgTree() {
        this.imgHouse = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgDinosaur = false;
        this.imgTree = true;
        this.imgRain = false;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgRain() {
        this.imgHouse = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgDinosaur = false;
        this.imgTree = false;
        this.imgRain = true;
        this.imgBeatle = false;
        this.imgGiraffe = false;
    };

    clickImgBeatle2() {
        this.imgHouse = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgDinosaur = false;
        this.imgTree = false;
        this.imgRain = false;
        this.imgBeatle = true;
        this.imgGiraffe = false;
    };

    clickImgGiraffe2() {
        this.imgHouse = false;
        this.imgToad = false;
        this.imgCrane = false;
        this.imgDinosaur = false;
        this.imgTree = false;
        this.imgRain = false;
        this.imgBeatle = false;
        this.imgGiraffe = true;
    };

    clickImgD() {
        if (this.imgDinosaur == true) {
            document.getElementById('dinosaur')!.remove();
            document.getElementById('imgD')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgD')!.style.border = 'none', 500);
        } else if (this.imgHouse == true) {
            document.getElementById('house')!.remove();
            document.getElementById('imgD')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgD')!.style.border = 'none', 500);
        } else if (this.imgTree == true) {
            document.getElementById('tree')!.remove();
            document.getElementById('imgD')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgD')!.style.border = 'none', 500);
        } else if (this.imgRain == true) {
            document.getElementById('rain')!.remove();
            document.getElementById('imgD')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgD')!.style.border = 'none', 500);
        }
    };

    clickImgJ3() {
        if (this.imgToad == true) {
            document.getElementById('toad')!.remove();
            document.getElementById('imgJ3')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgJ3')!.style.border = 'none', 500);
        } else if (this.imgCrane == true) {
            document.getElementById('crane')!.remove();
            document.getElementById('imgJ3')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgJ3')!.style.border = 'none', 500);
        } else if (this.imgGiraffe == true) {
            document.getElementById('giraffe2')!.remove();
            document.getElementById('imgJ3')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgJ3')!.style.border = 'none', 500);
        } else if (this.imgBeatle == true) {
            document.getElementById('beatle2')!.remove();
            document.getElementById('imgJ3')!.style.border! = "3px solid green";
            setTimeout(() => document.getElementById('imgJ3')!.style.border = 'none', 500);
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
        const valueOfInput13 = (<HTMLInputElement>document.getElementById('input13')).value;

        if((valueOfInput1 == "Ж") || (valueOfInput1 == "ж")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "М") || (valueOfInput2 == "м")) {
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

        if((valueOfInput4 == "А") || (valueOfInput4 == "а")) {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "Ё") || (valueOfInput5 == "ё")) {
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

        if((valueOfInput7 == "О") || (valueOfInput7 == "о")) {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "Я") || (valueOfInput8 == "я")) {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput9 == "Е") || (valueOfInput9 == "е")) {
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

        if((valueOfInput13 == "Д") || (valueOfInput13 == "д")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 13) {
            setTimeout(this.viewDiv9, 1000);
        }
    };

    clickImgM3() {
        this.imgM = true;
        this.imgYa = false;
        this.imgU = false;
    };

    clickImgU2() {
        this.imgM = false;
        this.imgYa = false;
        this.imgU = true;
    };

    clickImgYa2() {
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

    clickImgM4() {
        this.imgM4 = true;
        this.imgO2 = false;
        this.imgL2 = false;
        this.imgO3 = false;
        this.imgK2 = false;
        this.imgO4 = false;
    };

    clickImgO2() {
        this.imgM4 = false;
        this.imgO2 = true;
        this.imgL2 = false;
        this.imgO3 = false;
        this.imgK2 = false;
        this.imgO4 = false;
    };

    clickImgL2() {
        this.imgM4 = false;
        this.imgO2 = false;
        this.imgL2 = true;
        this.imgO3 = false;
        this.imgK2 = false;
        this.imgO4 = false;
    };

    clickImgO3() {
        this.imgM4 = false;
        this.imgO2 = false;
        this.imgL2 = false;
        this.imgO3 = true;
        this.imgK2 = false;
        this.imgO4 = false;
    };

    clickImgK2() {
        this.imgM4 = false;
        this.imgO2 = false;
        this.imgL2 = false;
        this.imgO3 = false;
        this.imgK2 = true;
        this.imgO4 = false;
    };

    clickImgO4() {
        this.imgM4 = false;
        this.imgO2 = false;
        this.imgL2 = false;
        this.imgO3 = false;
        this.imgK2 = false;
        this.imgO4 = true;
    };

    clickDivForM4() {
        if (this.imgM4 == true) {
            const getImgM = document.getElementById('imgM4');
            const getDivM = document.getElementById('divForM4');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO2() {
        if (this.imgO2 == true) {
            const getImgO = document.getElementById('imgO2');
            const getDivO = document.getElementById('divForO2');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO3 == true) {
            const getImgO = document.getElementById('imgO3');
            const getDivO = document.getElementById('divForO2');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO4 == true) {
            const getImgO = document.getElementById('imgO4');
            const getDivO = document.getElementById('divForO2');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForL2() {
        if (this.imgL2 == true) {
            const getImgL = document.getElementById('imgL2');
            const getDivL = document.getElementById('divForL2');
            getImgL!.style.border = 'none';
            getDivL!.append(getImgL!);
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO3() {
        if (this.imgO2 == true) {
            const getImgO = document.getElementById('imgO2');
            const getDivO = document.getElementById('divForO3');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO3 == true) {
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
        };
    };

    clickDivForK2() {
        if (this.imgK2 == true) {
            const getImgK = document.getElementById('imgK2');
            const getDivK = document.getElementById('divForK2');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO4() {
        if (this.imgO2 == true) {
            const getImgO = document.getElementById('imgO2');
            const getDivO = document.getElementById('divForO4');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO3 == true) {
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
        };
    };

    clickImgM5() {
        this.imgM5 = true;
        this.imgO5 = false;
        this.imgL3 = false;
        this.imgO6 = false;
        this.imgK3 = false;
        this.imgO7 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgO5() {
        this.imgM5 = false;
        this.imgO5 = true;
        this.imgL3 = false;
        this.imgO6 = false;
        this.imgK3 = false;
        this.imgO7 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgL3() {
        this.imgM5 = false;
        this.imgO5 = false;
        this.imgL3 = true;
        this.imgO6 = false;
        this.imgK3 = false;
        this.imgO7 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgO6() {
        this.imgM5 = false;
        this.imgO5 = false;
        this.imgL3 = false;
        this.imgO6 = true;
        this.imgK3 = false;
        this.imgO7 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgK3() {
        this.imgM5 = false;
        this.imgO5 = false;
        this.imgL3 = false;
        this.imgO6 = false;
        this.imgK3 = true;
        this.imgO7 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgO7() {
        this.imgM5 = false;
        this.imgO5 = false;
        this.imgL3 = false;
        this.imgO6 = false;
        this.imgK3 = false;
        this.imgO7 = true;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgCat() {
        this.imgM5 = false;
        this.imgO5 = false;
        this.imgL3 = false;
        this.imgO6 = false;
        this.imgK3 = false;
        this.imgO7 = false;
        this.imgCat = true;
        this.imgT = false;
        this.imgH = false;
    };

    clickImgT() {
        this.imgM5 = false;
        this.imgO5 = false;
        this.imgL3 = false;
        this.imgO6 = false;
        this.imgK3 = false;
        this.imgO7 = false;
        this.imgCat = false;
        this.imgT = true;
        this.imgH = false;
    };

    clickImgH() {
        this.imgM5 = false;
        this.imgO5 = false;
        this.imgL3 = false;
        this.imgO6 = false;
        this.imgK3 = false;
        this.imgO7 = false;
        this.imgCat = false;
        this.imgT = false;
        this.imgH = true;
    };

    clickDivForM5() {
        if (this.imgM5 == true) {
            const getImgM = document.getElementById('imgM5');
            const getDivM = document.getElementById('divForM5');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO5() {
        if (this.imgO5 == true) {
            const getImgO = document.getElementById('imgO5');
            const getDivO = document.getElementById('divForO5');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO6 == true) {
            const getImgO = document.getElementById('imgO6');
            const getDivO = document.getElementById('divForO5');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO7 == true) {
            const getImgO = document.getElementById('imgO7');
            const getDivO = document.getElementById('divForO5');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForL3() {
        if (this.imgL3 == true) {
            const getImgL = document.getElementById('imgL3');
            const getDivL = document.getElementById('divForL3');
            getImgL!.style.border = 'none';
            getDivL!.append(getImgL!);
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForO6() {
        if (this.imgO5 == true) {
            const getImgO = document.getElementById('imgO5');
            const getDivO = document.getElementById('divForO6');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO6 == true) {
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

    clickDivForO7() {
        if (this.imgO5 == true) {
            const getImgO = document.getElementById('imgO5');
            const getDivO = document.getElementById('divForO7');
            getImgO!.style.border = 'none';
            getDivO!.append(getImgO!);
            getDivO!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgO6 == true) {
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
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input14')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input15')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input18')).value;

        if((valueOfInput1 == "МАМА") || (valueOfInput1 == "мама")) {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "МЯУ") || (valueOfInput2 == "мяу")) {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "МОЛОКО") || (valueOfInput3 == "молоко")) {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "ПАПА") || (valueOfInput4 == "папа")) {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "ЁЖ") || (valueOfInput5 == "ёж")) {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 5) {
            setTimeout(this.viewDiv22, 1000);
        }
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input23')).value;

        if((valueOfInput1 == "ЁЖ") || (valueOfInput1 == "ёж")) {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "КАП-КАП") || (valueOfInput2 == "кап-кап")) {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "МЯУ") || (valueOfInput3 == "мяу")) {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "МАМА") || (valueOfInput4 == "мама")) {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "ПАПА") || (valueOfInput5 == "папа")) {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 5) {
            setTimeout(() => alert('Правильно!'), 1000);
        }
    };
}