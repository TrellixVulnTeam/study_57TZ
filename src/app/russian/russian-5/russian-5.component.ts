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
            document.getElementById('indian')!.remove();
            document.getElementById('i')!.style.border = "3px solid green"; 
        };
    };

    clickImgA() {
        if (this.imgPineapple == true) {
            document.getElementById('pineapple')!.remove();
            document.getElementById('a')!.style.border = "3px solid green"; 
        };
    };

    clickImgU() {
        if (this.imgSnail == true) {
            document.getElementById('snail')!.remove();
            document.getElementById('u')!.style.border = "3px solid green"; 
        };
    };

    clickImgShark() {
        this.imgShark = true;
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
            document.getElementById('iris')!.remove();
            document.getElementById('i2')!.style.border = "3px solid green"; 
        };
    };

    clickImgA2() {
        if (this.imgShark == true) {
            document.getElementById('shark')!.remove();
            document.getElementById('a2')!.style.border = "3px solid green"; 
        };
    };

    clickImgU2() {
        if (this.imgUdot == true) {
            document.getElementById('udot')!.remove();
            document.getElementById('u2')!.style.border = "3px solid green"; 
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
            document.getElementById('e')!.style.border = "3px solid green"; 
        };
    };

    clickImgO() {
        if (this.imgHoop == true) {
            document.getElementById('hoop')!.remove();
            document.getElementById('o')!.style.border = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgLizard == true) {
            document.getElementById('lizard')!.remove();
            document.getElementById('ya')!.style.border = "3px solid green"; 
        };
    };

    clickImgRaccoon2() {
        this.imgRaccoon = true;
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
        if (this.imgRaccoon == true) {
            document.getElementById('raccoon2')!.remove();
            document.getElementById('e2')!.style.border = "3px solid green"; 
        };
    };

    clickImgO2() {
        if (this.imgVegetables == true) {
            document.getElementById('vegetables')!.remove();
            document.getElementById('o2')!.style.border = "3px solid green"; 
        };
    };

    clickImgYa2() {
        if (this.imgLamb == true) {
            document.getElementById('lamb')!.remove();
            document.getElementById('ya2')!.style.border = "3px solid green"; 
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
            document.getElementById('panda')!.remove();
            document.getElementById('p')!.style.border = "3px solid green"; 
        };
    };

    clickImgK() {
        if (this.imgCat == true) {
            document.getElementById('cat')!.remove();
            document.getElementById('k')!.style.border = "3px solid green"; 
        };
    };

    clickImgP2() {
        if (this.imgPenguin == true) {
            document.getElementById('penguin')!.remove();
            document.getElementById('p2')!.style.border = "3px solid green"; 
        };
    };

    clickImgK2() {
        if (this.imgWhale == true) {
            document.getElementById('whale')!.remove();
            document.getElementById('k2')!.style.border = "3px solid green"; 
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
            document.getElementById('parrot')!.remove();
            document.getElementById('p3')!.style.border = "3px solid green"; 
        };
    };

    clickImgK3() {
        if (this.imgCactus == true) {
            document.getElementById('cactus')!.remove();
            document.getElementById('k3')!.style.border = "3px solid green"; 
        };
    };

    clickImgP4() {
        if (this.imgGun == true) {
            document.getElementById('gun')!.remove();
            document.getElementById('p4')!.style.border = "3px solid green"; 
        };
    };

    clickImgK4() {
        if (this.imgKiwi == true) {
            document.getElementById('kiwi')!.remove();
            document.getElementById('k4')!.style.border = "3px solid green"; 
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
            document.getElementById('moose')!.remove();
            document.getElementById('l')!.style.border = "3px solid green"; 
        };
    };

    clickImgM() {
        if (this.imgMouse == true) {
            document.getElementById('mouse')!.remove();
            document.getElementById('m')!.style.border = "3px solid green"; 
        };
    };

    clickImgL2() {
        if (this.imgFox == true) {
            document.getElementById('fox')!.remove();
            document.getElementById('l2')!.style.border = "3px solid green"; 
        };
    };

    clickImgM2() {
        if (this.imgBear == true) {
            document.getElementById('bear')!.remove();
            document.getElementById('m2')!.style.border = "3px solid green"; 
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
        if (this.imgOnion == true) {
            document.getElementById('onion')!.remove();
            document.getElementById('l3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM3() {
        if (this.imgRaspberry == true) {
            document.getElementById('raspberry')!.remove();
            document.getElementById('m3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgL4() {
        if (this.imgLemon == true) {
            document.getElementById('lemon')!.remove();
            document.getElementById('l4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM4() {
        if (this.imgJellyfish == true) {
            document.getElementById('jellyfish')!.remove();
            document.getElementById('m4')!.style.border! = "3px solid green"; 
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

        if((valueOfInput1 == "П") || (valueOfInput1 == "п")) {
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

        if((valueOfInput3 == "Е") || (valueOfInput3 == "е")) {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "Я") || (valueOfInput4 == "я")) {
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

        if((valueOfInput6 == "У") || (valueOfInput6 == "у")) {
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

        if((valueOfInput9 == "К") || (valueOfInput9 == "к")) {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput10 == "Л") || (valueOfInput10 == "л")) {
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
            getDivU!.parentElement!.style.border = "3px solid green"; 
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

        if((valueOfInput1 == "ИА") || (valueOfInput1 == "иа")) {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "МУ") || (valueOfInput2 == "му")) {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "МОЛОКО") || (valueOfInput3 == "молоко")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "МЕ") || (valueOfInput4 == "ме")) {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "МЯУ") || (valueOfInput5 == "мяу")) {
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
        this.imgCat = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCowAndGoat = false;
    };

    clickImgCat2() {
        this.imgDonkey = false;
        this.imgCat = true;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCowAndGoat = false;
    };

    clickImgCow() {
        this.imgDonkey = false;
        this.imgCat = false;
        this.imgCow = true;
        this.imgGoat = false;
        this.imgCowAndGoat = false;
    };

    clickImgGoat() {
        this.imgDonkey = false;
        this.imgCat = false;
        this.imgCow = false;
        this.imgGoat = true;
        this.imgCowAndGoat = false;
    };

    clickImgCowAndGoat() {
        this.imgDonkey = false;
        this.imgCat = false;
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
        if (this.imgCat == true) {
            const getImgCat = document.getElementById('cat2');
            const getDivCat = document.getElementById('divForCat2');
            getImgCat!.style.border = "none";
            getDivCat!.append(getImgCat!);
            getDivCat!.parentElement!.style.border! = "3px solid green"; 
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