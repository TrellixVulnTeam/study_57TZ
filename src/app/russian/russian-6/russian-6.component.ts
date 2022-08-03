import { Component } from "@angular/core";

@Component({
    selector: 'russian6',
    templateUrl: './russian-6.component.html',
    styleUrls: ['./russian-6.component.scss']
})

export class Russian6 {
    imgShark = false;
    imgUdot = false;
    imgIris = false;
    imgDuck = false;
    imgStork = false;
    imgTurkey = false;
    imgRaccoon = false;
    imgVegetables = false;
    imgLamb = false;
    imgBerries = false;
    imgPerch = false;
    imgUnicorn = false;
    imgParrot = false;
    imgKiwi = false;
    imgGun = false;
    imgCactus = false;
    imgLemon = false;
    imgRaspberry = false;
    imgJellyfish = false;
    imgOnion = false;
    imgK = false;
    imgP = false;
    imgA = false;
    imgK2 = false;
    imgP2 = false;
    imgA2 = false;
    imgT = false;
    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;

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

    viewDiv25() {
        document.getElementById("div24")!.style.display = "none";
        document.getElementById("div25")!.style.display = "block";
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

    clickImgStork() {
        this.imgStork = true;
        this.imgDuck = false;
        this.imgTurkey = false;
    };

    clickImgDuck() {
        this.imgStork = false;
        this.imgDuck = true;
        this.imgTurkey = false;
    };

    clickImgTurkey() {
        this.imgStork = false;
        this.imgDuck = false;
        this.imgTurkey = true;
    };

    clickImgI2() {
        if (this.imgTurkey == true) {
            document.getElementById('turkey')!.remove();
            document.getElementById('i2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgA2() {
        if (this.imgStork == true) {
            document.getElementById('stork')!.remove();
            document.getElementById('a2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgU2() {
        if (this.imgDuck == true) {
            document.getElementById('duck')!.remove();
            document.getElementById('u2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgRaccoon() {
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

    clickImgE() {
        if (this.imgRaccoon == true) {
            document.getElementById('raccoon')!.remove();
            document.getElementById('e')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO() {
        if (this.imgVegetables == true) {
            document.getElementById('vegetables')!.remove();
            document.getElementById('o')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgLamb == true) {
            document.getElementById('lamb')!.remove();
            document.getElementById('ya')!.style.border! = "3px solid green"; 
        };
    };

    clickImgBerries() {
        this.imgBerries = true;
        this.imgPerch = false;
        this.imgUnicorn = false;
    };

    clickImgPerch() {
        this.imgBerries = false;
        this.imgPerch = true;
        this.imgUnicorn = false;
    };

    clickImgUnicorn() {
        this.imgBerries = false;
        this.imgPerch = false;
        this.imgUnicorn = true;
    };

    clickImgE2() {
        if (this.imgUnicorn == true) {
            document.getElementById('unicorn')!.remove();
            document.getElementById('e2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO2() {
        if (this.imgPerch == true) {
            document.getElementById('perch')!.remove();
            document.getElementById('o2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa2() {
        if (this.imgBerries == true) {
            document.getElementById('berries')!.remove();
            document.getElementById('ya2')!.style.border! = "3px solid green"; 
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

    clickImgK2() {
        if (this.imgKiwi == true) {
            document.getElementById('kiwi')!.remove();
            document.getElementById('k2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgP4() {
        if (this.imgParrot == true) {
            document.getElementById('parrot2')!.remove();
            document.getElementById('p4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgK3() {
        if (this.imgCactus == true) {
            document.getElementById('cactus2')!.remove();
            document.getElementById('k3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgP7() {
        if (this.imgGun == true) {
            document.getElementById('gun2')!.remove();
            document.getElementById('p7')!.style.border! = "3px solid green"; 
        };
    };

    clickImgK4() {
        if (this.imgKiwi == true) {
            document.getElementById('kiwi2')!.remove();
            document.getElementById('k4')!.style.border! = "3px solid green"; 
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

    clickImgL2() {
        if (this.imgLemon == true) {
            document.getElementById('lemon')!.remove();
            document.getElementById('l2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM2() {
        if (this.imgJellyfish == true) {
            document.getElementById('jellyfish')!.remove();
            document.getElementById('m2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgL3() {
        if (this.imgOnion == true) {
            document.getElementById('onion2')!.remove();
            document.getElementById('l3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM3() {
        if (this.imgRaspberry == true) {
            document.getElementById('raspberry2')!.remove();
            document.getElementById('m3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgL4() {
        if (this.imgLemon == true) {
            document.getElementById('lemon2')!.remove();
            document.getElementById('l4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM4() {
        if (this.imgJellyfish == true) {
            document.getElementById('jellyfish2')!.remove();
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
            this.viewDiv14();
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

    checkImage2() {
        if ((this.b % 2 === 0) && (this.c % 2 === 0)) {
            this.viewDiv17();
        };
    };

    changeImage4() {
        const x = document.getElementById("image7");
        const y = document.getElementById("image8");
        if(this.d % 2 === 0) {
            y!.style.transform = "none";
            x!.style.transform = "none";
            this.d++;
        }
        else {
            x!.style.transform = "translateX(255px)";
            y!.style.transform = "translateX(-255px)";
            this.d++;
        }
    };

    changeImage5() {
        const x = document.getElementById("image9");
        const y = document.getElementById("image10");
        if(this.e % 2 === 0) {
            y!.style.transform = "none";
            x!.style.transform = "none";
            this.e++;
        }
        else {
            x!.style.transform = "translateX(255px)";
            y!.style.transform = "translateX(-255px)";
            this.e++;
        }
    };

    checkImage3() {
        if ((this.d % 2 === 0) && (this.e % 2 === 0)) {
            this.viewDiv20();
        };
    };

    clickImgK5() {
        this.imgK = true;
        this.imgA = false;
        this.imgP = false;
        this.imgT = false;
        this.imgK2 = false;
        this.imgA2 = false;
        this.imgP2 = false;
    };

    clickImgA5() {
        this.imgK = false;
        this.imgA = true;
        this.imgP = false;
        this.imgT = false;
        this.imgK2 = false;
        this.imgA2 = false;
        this.imgP2 = false;
    };

    clickImgP5() {
        this.imgK = false;
        this.imgA = false;
        this.imgP = true;
        this.imgT = false;
        this.imgK2 = false;
        this.imgA2 = false;
        this.imgP2 = false;
    };

    clickImgT5() {
        this.imgK = false;
        this.imgA = false;
        this.imgP = false;
        this.imgT = true;
        this.imgK2 = false;
        this.imgA2 = false;
        this.imgP2 = false;
    };

    clickImgK6() {
        this.imgK = false;
        this.imgA = false;
        this.imgP = false;
        this.imgT = false;
        this.imgK2 = true;
        this.imgA2 = false;
        this.imgP2 = false;
    };

    clickImgA6() {
        this.imgK = false;
        this.imgA = false;
        this.imgP = false;
        this.imgT = false;
        this.imgK2 = false;
        this.imgA2 = true;
        this.imgP2 = false;
    };

    clickImgP6() {
        this.imgK = false;
        this.imgA = false;
        this.imgP = false;
        this.imgT = false;
        this.imgK2 = false;
        this.imgA2 = false;
        this.imgP2 = true;
    };

    clickDivForK() {
        if (this.imgK == true) {
            const getImgK = document.getElementById('imgK');
            const getDivK = document.getElementById('divForK');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgK2 == true) {
            const getImgK = document.getElementById('imgK2');
            const getDivK = document.getElementById('divForK');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForP() {
        if (this.imgP == true) {
            const getImgP = document.getElementById('imgP');
            const getDivP = document.getElementById('divForP');
            getImgP!.style.border = 'none';
            getDivP!.append(getImgP!);
            getDivP!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgP2 == true) {
            const getImgP = document.getElementById('imgP2');
            const getDivP = document.getElementById('divForP');
            getImgP!.style.border = 'none';
            getDivP!.append(getImgP!);
            getDivP!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForA() {
        if (this.imgA == true) {
            const getImgA = document.getElementById('imgA');
            const getDivA = document.getElementById('divForA');
            getImgA!.style.border = 'none';
            getDivA!.append(getImgA!);
            getDivA!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgA2 == true) {
            const getImgA = document.getElementById('imgA2');
            const getDivA = document.getElementById('divForA');
            getImgA!.style.border = 'none';
            getDivA!.append(getImgA!);
            getDivA!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForT() {
        if (this.imgT == true) {
            const getImgT = document.getElementById('imgT');
            const getDivT = document.getElementById('divForT');
            getImgT!.style.border = 'none';
            getDivT!.append(getImgT!);
            getDivT!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForK2() {
        if (this.imgK == true) {
            const getImgK = document.getElementById('imgK');
            const getDivK = document.getElementById('divForK2');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgK2 == true) {
            const getImgK = document.getElementById('imgK2');
            const getDivK = document.getElementById('divForK2');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForP2() {
        if (this.imgP == true) {
            const getImgP = document.getElementById('imgP');
            const getDivP = document.getElementById('divForP2');
            getImgP!.style.border = 'none';
            getDivP!.append(getImgP!);
            getDivP!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgP2 == true) {
            const getImgP = document.getElementById('imgP2');
            const getDivP = document.getElementById('divForP2');
            getImgP!.style.border = 'none';
            getDivP!.append(getImgP!);
            getDivP!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForA2() {
        if (this.imgA == true) {
            const getImgA = document.getElementById('imgA');
            const getDivA = document.getElementById('divForA2');
            getImgA!.style.border = 'none';
            getDivA!.append(getImgA!);
            getDivA!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgA2 == true) {
            const getImgA = document.getElementById('imgA2');
            const getDivA = document.getElementById('divForA2');
            getImgA!.style.border = 'none';
            getDivA!.append(getImgA!);
            getDivA!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input11')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input12')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input13')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input14')).value;

        if((valueOfInput1 == "КАП-КАП") || (valueOfInput1 == "кап-кап")) {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "КО-КО") || (valueOfInput2 == "ко-ко")) {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "КУ-КУ") || (valueOfInput3 == "ку-ку")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "УА") || (valueOfInput4 == "уа")) {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 4) {
            setTimeout(this.viewDiv23, 1000);
        }
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input15')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input18')).value;

        if((valueOfInput1 == "КО-КО") || (valueOfInput1 == "ко-ко")) {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "КАП-КАП") || (valueOfInput2 == "кап-кап")) {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "КУ-КУ") || (valueOfInput3 == "ку-ку")) {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "УА") || (valueOfInput4 == "уа")) {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 4) {
            setTimeout(this.viewDiv24, 1000);
        }
    };

    checkInput4() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input25')).value;

        if((valueOfInput1 == "МЕ") || (valueOfInput1 == "ме")) {
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

        if((valueOfInput3 == "КО-КО") || (valueOfInput3 == "ко-ко")) {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "КУ-КУ") || (valueOfInput4 == "ку-ку")) {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "УА") || (valueOfInput5 == "уа")) {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "МЯУ") || (valueOfInput6 == "мяу")) {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "МУ") || (valueOfInput7 == "му")) {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 7) {
            setTimeout(() => alert("Правильно!"), 1000);
        }
    };
}