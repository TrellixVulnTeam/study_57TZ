import { Component } from "@angular/core";

@Component({
    selector: 'russian5',
    templateUrl: './russian-5.component.html',
    styleUrls: ['./russian-5.component.scss']
})

export class Russian5 {
    imgPineapple = false;
    imgIndian = false;
    imgSnail = false;
    imgShark = false;
    imgUdot = false;
    imgIris = false;
    imgLizard = false;
    imgHoop = false;
    imgRaccoon = false;
    imgRaccoon2 = false;
    imgLamb = false;
    imgVegetables = false;
    imgPanda = false;
    imgWhale = false;
    imgCat = false;
    imgPenguin = false;
    imgKiwi = false;
    imgParrot = false;
    imgCactus = false;
    imgGun = false;
    imgMouse = false;
    imgFox = false;
    imgMoose = false;
    imgBear = false;
    imgLemon = false;
    imgJellyfish = false;
    imgOnion = false;
    imgRaspberry = false;
    imgYa = false;
    imgM = false;
    imgU = false;
    a = 1;
    b = 1;
    c = 1;
    imgO3 = false;
    imgO4 = false;
    imgO5 = false;
    imgL5 = false;
    imgK5 = false;
    imgM6 = false;
    imgDonkey = false;
    imgCow = false;
    imgCat2 = false;
    imgGoat = false;
    imgCowAndGoat = false;

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

    clickImgIndian() {
        this.imgIndian = true;
        this.imgPineapple = false;
        this.imgSnail = false;
    };

    clickImgPineapple() {
        this.imgIndian = false;
        this.imgPineapple = true;
        this.imgSnail = false;
    };

    clickImgSnail() {
        this.imgIndian = false;
        this.imgPineapple = false;
        this.imgSnail = true;
    };

    clickImgI() {
        if (this.imgIndian == true) {
            const getImgIndian = document.getElementById('indian');
            const getI = document.getElementById('i');

            getImgIndian!.remove();
            getI!.style.border! = "3px solid green"; 
        };
    };

    clickImgA() {
        if (this.imgPineapple == true) {
            const getImgPineapple = document.getElementById('pineapple');
            const getA = document.getElementById('a');

            getImgPineapple!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    clickImgU() {
        if (this.imgSnail == true) {
            const getImgSnail = document.getElementById('snail');
            const getU = document.getElementById('u');

            getImgSnail!.remove();
            getU!.style.border! = "3px solid green"; 
        };
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

    clickImgI2() {
        if (this.imgIris == true) {
            const getImgIris = document.getElementById('iris');
            const getI = document.getElementById('i2');

            getImgIris!.remove();
            getI!.style.border! = "3px solid green"; 
        };
    };

    clickImgA2() {
        if (this.imgShark == true) {
            const getImgShark = document.getElementById('shark');
            const getA = document.getElementById('a2');

            getImgShark!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    clickImgU2() {
        if (this.imgUdot == true) {
            const getImgUdot = document.getElementById('udot');
            const getU = document.getElementById('u2');

            getImgUdot!.remove();
            getU!.style.border! = "3px solid green"; 
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
            const getImgRaccoon = document.getElementById('raccoon');
            const getE = document.getElementById('e');

            getImgRaccoon!.remove();
            getE!.style.border! = "3px solid green"; 
        };
    };

    clickImgO() {
        if (this.imgHoop == true) {
            const getImgHoop = document.getElementById('hoop');
            const getO = document.getElementById('o');

            getImgHoop!.remove();
            getO!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgLizard == true) {
            const getImgLizard = document.getElementById('lizard');
            const getYa = document.getElementById('ya');

            getImgLizard!.remove();
            getYa!.style.border! = "3px solid green"; 
        };
    };

    clickImgRaccoon2() {
        this.imgRaccoon2 = true;
        this.imgVegetables = false;
        this.imgLamb = false;
    };

    clickImgVegetables() {
        this.imgRaccoon = false;
        this.imgVegetables = true;
        this.imgLamb = false;
    };

    clickImgLamb() {
        this.imgRaccoon = false;
        this.imgVegetables = false;
        this.imgLamb = true;
    };

    clickImgE2() {
        if (this.imgRaccoon2 == true) {
            const getImgRaccoon = document.getElementById('raccoon2');
            const getE = document.getElementById('e2');

            getImgRaccoon!.remove();
            getE!.style.border! = "3px solid green"; 
        };
    };

    clickImgO2() {
        if (this.imgVegetables == true) {
            const getImgVegetables = document.getElementById('vegetables');
            const getO = document.getElementById('o2');

            getImgVegetables!.remove();
            getO!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa2() {
        if (this.imgLamb == true) {
            const getImgLamb = document.getElementById('lamb');
            const getYa = document.getElementById('ya2');

            getImgLamb!.remove();
            getYa!.style.border! = "3px solid green"; 
        };
    };

    clickImgPanda() {
        this.imgPanda = true;
        this.imgCat = false;
        this.imgWhale = false;
        this.imgPenguin = false;
    };

    clickImgCat() {
        this.imgPanda = false;
        this.imgCat = true;
        this.imgWhale = false;
        this.imgPenguin = false;
    };

    clickImgWhale() {
        this.imgPanda = false;
        this.imgCat = false;
        this.imgWhale = true;
        this.imgPenguin = false;
    };

    clickImgPenguin() {
        this.imgPanda = false;
        this.imgCat = false;
        this.imgWhale = false;
        this.imgPenguin = true;
    };

    clickImgP() {
        if (this.imgPanda == true) {
            const getImgPanda = document.getElementById('panda');
            const getP = document.getElementById('p');

            getImgPanda!.remove();
            getP!.style.border! = "3px solid green"; 
        } else if (this.imgPenguin == true) {
            const getImgPenguin = document.getElementById('penguin');
            const getP = document.getElementById('p');

            getImgPenguin!.remove();
            getP!.style.border! = "3px solid green"; 
        };
    };

    clickImgK() {
        if (this.imgCat == true) {
            const getImgCat = document.getElementById('cat');
            const getK = document.getElementById('k');

            getImgCat!.remove();
            getK!.style.border! = "3px solid green"; 
        } else if (this.imgWhale == true) {
            const getImgWhale = document.getElementById('whale');
            const getK = document.getElementById('k');

            getImgWhale!.remove();
            getK!.style.border! = "3px solid green"; 
        };
    };

    clickImgP2() {
        if (this.imgPanda == true) {
            const getImgPanda = document.getElementById('panda');
            const getP = document.getElementById('p2');

            getImgPanda!.remove();
            getP!.style.border! = "3px solid green"; 
        } else if (this.imgPenguin == true) {
            const getImgPenguin = document.getElementById('penguin');
            const getP = document.getElementById('p2');

            getImgPenguin!.remove();
            getP!.style.border! = "3px solid green"; 
        };
    };

    clickImgK2() {
        if (this.imgCat == true) {
            const getImgCat = document.getElementById('cat');
            const getK = document.getElementById('k2');

            getImgCat!.remove();
            getK!.style.border! = "3px solid green"; 
        } else if (this.imgWhale == true) {
            const getImgWhale = document.getElementById('whale');
            const getK = document.getElementById('k2');

            getImgWhale!.remove();
            getK!.style.border! = "3px solid green"; 
        };
    };

    clickImgParrot() {
        this.imgParrot = true;
        this.imgKiwi = false;
        this.imgGun = false;
        this.imgCactus = false;
    };

    clickImgKiwi() {
        this.imgParrot = false;
        this.imgKiwi = true;
        this.imgGun = false;
        this.imgCactus = false;
    };

    clickImgGun() {
        this.imgParrot = false;
        this.imgKiwi = false;
        this.imgGun = true;
        this.imgCactus = false;
    };

    clickImgCactus() {
        this.imgParrot = false;
        this.imgKiwi = false;
        this.imgGun = false;
        this.imgCactus = true;
    };

    clickImgP3() {
        if (this.imgParrot == true) {
            const getImgParrot = document.getElementById('parrot');
            const getP = document.getElementById('p3');

            getImgParrot!.remove();
            getP!.style.border! = "3px solid green"; 
        } else if (this.imgGun == true) {
            const getImgGun = document.getElementById('gun');
            const getP = document.getElementById('p3');

            getImgGun!.remove();
            getP!.style.border! = "3px solid green"; 
        };
    };

    clickImgK3() {
        if (this.imgKiwi == true) {
            const getImgKiwi = document.getElementById('kiwi');
            const getK = document.getElementById('k3');

            getImgKiwi!.remove();
            getK!.style.border! = "3px solid green"; 
        } else if (this.imgCactus == true) {
            const getImgCactus = document.getElementById('cactus');
            const getK = document.getElementById('k3');

            getImgCactus!.remove();
            getK!.style.border! = "3px solid green"; 
        };
    };

    clickImgP4() {
        if (this.imgParrot == true) {
            const getImgParrot = document.getElementById('parrot');
            const getP = document.getElementById('p4');

            getImgParrot!.remove();
            getP!.style.border! = "3px solid green"; 
        } else if (this.imgGun == true) {
            const getImgGun = document.getElementById('gun');
            const getP = document.getElementById('p4');

            getImgGun!.remove();
            getP!.style.border! = "3px solid green"; 
        };
    };

    clickImgK4() {
        if (this.imgKiwi == true) {
            const getImgKiwi = document.getElementById('kiwi');
            const getK = document.getElementById('k4');

            getImgKiwi!.remove();
            getK!.style.border! = "3px solid green"; 
        } else if (this.imgCactus == true) {
            const getImgCactus = document.getElementById('cactus');
            const getK = document.getElementById('k4');

            getImgCactus!.remove();
            getK!.style.border! = "3px solid green"; 
        };
    };

    clickImgMouse() {
        this.imgMouse = true;
        this.imgFox = false;
        this.imgBear = false;
        this.imgMoose = false;
    };

    clickImgFox() {
        this.imgMouse = false;
        this.imgFox = true;
        this.imgBear = false;
        this.imgMoose = false;
    };

    clickImgBear() {
        this.imgMouse = false;
        this.imgFox = false;
        this.imgBear = true;
        this.imgMoose = false;
    };

    clickImgMoose() {
        this.imgMouse = false;
        this.imgFox = false;
        this.imgBear = false;
        this.imgMoose = true;
    };

    clickImgL() {
        if (this.imgMoose == true) {
            const getImgMoose = document.getElementById('moose');
            const getL = document.getElementById('l');

            getImgMoose!.remove();
            getL!.style.border! = "3px solid green"; 
        } else if (this.imgFox == true) {
            const getImgFox = document.getElementById('fox');
            const getL = document.getElementById('l');

            getImgFox!.remove();
            getL!.style.border! = "3px solid green"; 
        };
    };

    clickImgM() {
        if (this.imgMouse == true) {
            const getImgMouse = document.getElementById('mouse');
            const getM = document.getElementById('m');

            getImgMouse!.remove();
            getM!.style.border! = "3px solid green"; 
        } else if (this.imgBear == true) {
            const getImgBear = document.getElementById('bear');
            const getM = document.getElementById('m');

            getImgBear!.remove();
            getM!.style.border! = "3px solid green"; 
        };
    };

    clickImgL2() {
        if (this.imgMoose == true) {
            const getImgMoose = document.getElementById('moose');
            const getL = document.getElementById('l2');

            getImgMoose!.remove();
            getL!.style.border! = "3px solid green"; 
        } else if (this.imgFox == true) {
            const getImgFox = document.getElementById('fox');
            const getL = document.getElementById('l2');

            getImgFox!.remove();
            getL!.style.border! = "3px solid green"; 
        };
    };

    clickImgM2() {
        if (this.imgMouse == true) {
            const getImgMouse = document.getElementById('mouse');
            const getM = document.getElementById('m2');

            getImgMouse!.remove();
            getM!.style.border! = "3px solid green"; 
        } else if (this.imgBear == true) {
            const getImgBear = document.getElementById('bear');
            const getM = document.getElementById('m2');

            getImgBear!.remove();
            getM!.style.border! = "3px solid green"; 
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

    clickImgL3() {
        if (this.imgLemon == true) {
            const getImgLemon = document.getElementById('lemon');
            const getL = document.getElementById('l3');

            getImgLemon!.remove();
            getL!.style.border! = "3px solid green"; 
        } else if (this.imgOnion == true) {
            const getImgOnion = document.getElementById('onion');
            const getL = document.getElementById('l3');

            getImgOnion!.remove();
            getL!.style.border! = "3px solid green"; 
        };
    };

    clickImgM3() {
        if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('m3');

            getImgJellyfish!.remove();
            getM!.style.border! = "3px solid green"; 
        } else if (this.imgRaspberry == true) {
            const getImgRaspberry = document.getElementById('raspberry');
            const getM = document.getElementById('m3');

            getImgRaspberry!.remove();
            getM!.style.border! = "3px solid green"; 
        };
    };

    clickImgL4() {
        if (this.imgLemon == true) {
            const getImgLemon = document.getElementById('lemon');
            const getL = document.getElementById('l4');

            getImgLemon!.remove();
            getL!.style.border! = "3px solid green"; 
        } else if (this.imgOnion == true) {
            const getImgOnion = document.getElementById('onion');
            const getL = document.getElementById('l4');

            getImgOnion!.remove();
            getL!.style.border! = "3px solid green"; 
        };
    };

    clickImgM4() {
        if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('m4');

            getImgJellyfish!.remove();
            getM!.style.border! = "3px solid green"; 
        } else if (this.imgRaspberry == true) {
            const getImgRaspberry = document.getElementById('raspberry');
            const getM = document.getElementById('m4');

            getImgRaspberry!.remove();
            getM!.style.border! = "3px solid green"; 
        };
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

        if(valueOfInput1 == "П") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "М") {
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

        if(valueOfInput4 == "Я") {
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

        if(valueOfInput6 == "У") {
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

        if(valueOfInput9 == "К") {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "Л") {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 10) {
            setTimeout(this.viewDiv11, 1000);
        }
    };

    clickImgM5() {
        this.imgM = true;
        this.imgYa = false;
        this.imgU = false;
    };

    clickImgU5() {
        this.imgM = false;
        this.imgYa = false;
        this.imgU = true;
    };

    clickImgYa5() {
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

    changeImage2() {
        const x = document.getElementById("image3");
        const y = document.getElementById("image4");
        if(this.b % 2 === 0) {
            y!.style.transform = "none";
            x!.style.transform = "none";
            this.b++;
        }
        else {
            x!.style.transform = "translateX(255px)";
            y!.style.transform = "translateX(-255px)";
            this.b++;
        }
    };

    checkImage2() {
        if(this.b % 2 === 0) {
            this.viewDiv17();
        };
    };

    changeImage3() {
        const x = document.getElementById("image5");
        const y = document.getElementById("image6");
        if(this.c % 2 === 0) {
            y!.style.transform = "none";
            x!.style.transform = "none";
            this.c++;
        }
        else {
            x!.style.transform = "translateX(255px)";
            y!.style.transform = "translateX(-255px)";
            this.c++;
        }
    };

    checkImage3() {
        if(this.c % 2 === 0) {
            this.viewDiv19();
        };
    };

    clickImgM6() {
        this.imgM6 = true;
        this.imgO3 = false;
        this.imgL5 = false;
        this.imgO4 = false;
        this.imgK5 = false;
        this.imgO5 = false;
    };

    clickImgO3() {
        this.imgM6 = false;
        this.imgO3 = true;
        this.imgL5 = false;
        this.imgO4 = false;
        this.imgK5 = false;
        this.imgO5 = false;
    };

    clickImgL5() {
        this.imgM6 = false;
        this.imgO3 = false;
        this.imgL5 = true;
        this.imgO4 = false;
        this.imgK5 = false;
        this.imgO5 = false;
    };

    clickImgO4() {
        this.imgM6 = false;
        this.imgO3 = false;
        this.imgL5 = false;
        this.imgO4 = true;
        this.imgK5 = false;
        this.imgO5 = false;
    };

    clickImgK5() {
        this.imgM6 = false;
        this.imgO3 = false;
        this.imgL5 = false;
        this.imgO4 = false;
        this.imgK5 = true;
        this.imgO5 = false;
    };

    clickImgO5() {
        this.imgM6 = false;
        this.imgO3 = false;
        this.imgL5 = false;
        this.imgO4 = false;
        this.imgK5 = false;
        this.imgO5 = true;
    };

    clickDivForM6() {
        if (this.imgM6 == true) {
            const getImgM = document.getElementById('imgM6');
            const getDivM = document.getElementById('divForM6');
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

    clickDivForL5() {
        if (this.imgL5 == true) {
            const getImgL = document.getElementById('imgL5');
            const getDivL = document.getElementById('divForL5');
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

    clickDivForK5() {
        if (this.imgK5 == true) {
            const getImgK = document.getElementById('imgK5');
            const getDivK = document.getElementById('divForK5');
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

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input11')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input12')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input13')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input14')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input15')).value;

        if(valueOfInput1 == "ИА") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "МУ") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "МОЛОКО") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "МЕ") {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "МЯУ") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 5) {
            setTimeout(this.viewDiv23, 1000);
        }
    };

    clickImgDonkey() {
        this.imgDonkey = true;
        this.imgCat2 = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCowAndGoat = false;
    };

    clickImgCat2() {
        this.imgDonkey = false;
        this.imgCat2 = true;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCowAndGoat = false;
    };

    clickImgCow() {
        this.imgDonkey = false;
        this.imgCat2 = false;
        this.imgCow = true;
        this.imgGoat = false;
        this.imgCowAndGoat = false;
    };

    clickImgGoat() {
        this.imgDonkey = false;
        this.imgCat2 = false;
        this.imgCow = false;
        this.imgGoat = true;
        this.imgCowAndGoat = false;
    };

    clickImgCowAndGoat() {
        this.imgDonkey = false;
        this.imgCat2 = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCowAndGoat = true;
    };

    clickDivForDonkey() {
        if (this.imgDonkey == true) {
            const getImgDonkey = document.getElementById('donkey');
            const getDivDonkey = document.getElementById('divForDonkey');
            getImgDonkey!.style.border = "none";
            getDivDonkey!.append(getImgDonkey!);
            getDivDonkey!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForCat2() {
        if (this.imgCat2 == true) {
            const getImgCat2 = document.getElementById('cat2');
            const getDivCat2 = document.getElementById('divForCat2');
            getImgCat2!.style.border = "none";
            getDivCat2!.append(getImgCat2!);
            getDivCat2!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForCow() {
        if (this.imgCow == true) {
            const getImgCow = document.getElementById('cow');
            const getDivCow = document.getElementById('divForCow');
            getImgCow!.style.border = "none";
            getDivCow!.append(getImgCow!);
            getDivCow!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForGoat() {
        if (this.imgGoat == true) {
            const getImgGoat = document.getElementById('goat');
            const getDivGoat = document.getElementById('divForGoat');
            getImgGoat!.style.border = "none";
            getDivGoat!.append(getImgGoat!);
            getDivGoat!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForCowAndGoat() {
        if (this.imgCowAndGoat == true) {
            const getImgCowAndGoat = document.getElementById('cowAndGoat');
            const getDivCowAndGoat = document.getElementById('divForCowAndGoat');
            getImgCowAndGoat!.style.border = "none";
            getDivCowAndGoat!.append(getImgCowAndGoat!);
            getDivCowAndGoat!.parentElement!.style.border! = "3px solid green"; 
        };
    };
}