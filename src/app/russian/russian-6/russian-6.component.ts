import { Component } from "@angular/core";
import { ftruncate } from "fs";

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
    imgParrot2 = false;
    imgKiwi2 = false;
    imgGun2 = false;
    imgCactus2 = false;
    imgLemon2 = false;
    imgRaspberry2 = false;
    imgJellyfish2 = false;
    imgOnion2 = false;

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
            const getImgIris = document.getElementById('iris');
            const getI = document.getElementById('i');

            getImgIris!.remove();
            getI!.style.border! = "3px solid green"; 
        };
    };

    clickImgA() {
        if (this.imgShark == true) {
            const getImgShark = document.getElementById('shark');
            const getA = document.getElementById('a');

            getImgShark!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    clickImgU() {
        if (this.imgUdot == true) {
            const getImgUdot = document.getElementById('udot');
            const getU = document.getElementById('u');

            getImgUdot!.remove();
            getU!.style.border! = "3px solid green"; 
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
            const getImgTurkey = document.getElementById('turkey');
            const getI = document.getElementById('i2');

            getImgTurkey!.remove();
            getI!.style.border! = "3px solid green"; 
        };
    };

    clickImgA2() {
        if (this.imgStork == true) {
            const getImgStork = document.getElementById('stork');
            const getA = document.getElementById('a2');

            getImgStork!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    clickImgU2() {
        if (this.imgDuck == true) {
            const getImgDuck = document.getElementById('duck');
            const getU = document.getElementById('u2');

            getImgDuck!.remove();
            getU!.style.border! = "3px solid green"; 
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
            const getImgRaccoon = document.getElementById('raccoon');
            const getE = document.getElementById('e');

            getImgRaccoon!.remove();
            getE!.style.border! = "3px solid green"; 
        };
    };

    clickImgO() {
        if (this.imgVegetables == true) {
            const getImgVegetables = document.getElementById('vegetables');
            const getO = document.getElementById('o');

            getImgVegetables!.remove();
            getO!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgLamb == true) {
            const getImgLamb = document.getElementById('lamb');
            const getYa = document.getElementById('ya');

            getImgLamb!.remove();
            getYa!.style.border! = "3px solid green"; 
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
            const getImgUnicorn = document.getElementById('unicorn');
            const getE = document.getElementById('e2');

            getImgUnicorn!.remove();
            getE!.style.border! = "3px solid green"; 
        };
    };

    clickImgO2() {
        if (this.imgPerch == true) {
            const getImgPerch = document.getElementById('perch');
            const getO = document.getElementById('o2');

            getImgPerch!.remove();
            getO!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa2() {
        if (this.imgBerries == true) {
            const getImgBerries = document.getElementById('berries');
            const getYa = document.getElementById('ya2');

            getImgBerries!.remove();
            getYa!.style.border! = "3px solid green"; 
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
            const getImgParrot = document.getElementById('parrot');
            const getP = document.getElementById('p');

            getImgParrot!.remove();
            getP!.style.border! = "3px solid green"; 
        } else if (this.imgGun == true) {
            const getImgGun = document.getElementById('gun');
            const getP = document.getElementById('p');

            getImgGun!.remove();
            getP!.style.border! = "3px solid green"; 
        };
    };

    clickImgK() {
        if (this.imgKiwi == true) {
            const getImgKiwi = document.getElementById('kiwi');
            const getK = document.getElementById('k');

            getImgKiwi!.remove();
            getK!.style.border! = "3px solid green"; 
        } else if (this.imgCactus == true) {
            const getImgCactus = document.getElementById('cactus');
            const getK = document.getElementById('k');

            getImgCactus!.remove();
            getK!.style.border! = "3px solid green"; 
        };
    };

    clickImgP2() {
        if (this.imgParrot == true) {
            const getImgParrot = document.getElementById('parrot');
            const getP = document.getElementById('p2');

            getImgParrot!.remove();
            getP!.style.border! = "3px solid green"; 
        } else if (this.imgGun == true) {
            const getImgGun = document.getElementById('gun');
            const getP = document.getElementById('p2');

            getImgGun!.remove();
            getP!.style.border! = "3px solid green"; 
        };
    };

    clickImgK2() {
        if (this.imgKiwi == true) {
            const getImgKiwi = document.getElementById('kiwi');
            const getK = document.getElementById('k2');

            getImgKiwi!.remove();
            getK!.style.border! = "3px solid green"; 
        } else if (this.imgCactus == true) {
            const getImgCactus = document.getElementById('cactus');
            const getK = document.getElementById('k2');

            getImgCactus!.remove();
            getK!.style.border! = "3px solid green"; 
        };
    };

    clickImgParrot2() {
        this.imgParrot2 = true;
        this.imgKiwi2 = false;
        this.imgGun2 = false;
        this.imgCactus2 = false;
    };

    clickImgKiwi2() {
        this.imgParrot2 = false;
        this.imgKiwi2 = true;
        this.imgGun2 = false;
        this.imgCactus2 = false;
    };

    clickImgGun2() {
        this.imgParrot2 = false;
        this.imgKiwi2 = false;
        this.imgGun2 = true;
        this.imgCactus2 = false;
    };

    clickImgCactus2() {
        this.imgParrot2 = false;
        this.imgKiwi2 = false;
        this.imgGun2 = false;
        this.imgCactus2 = true;
    };

    clickImgP4() {
        if (this.imgParrot2 == true) {
            const getImgParrot = document.getElementById('parrot2');
            const getP = document.getElementById('p4');

            getImgParrot!.remove();
            getP!.style.border! = "3px solid green"; 
        } else if (this.imgGun2 == true) {
            const getImgGun = document.getElementById('gun2');
            const getP = document.getElementById('p4');

            getImgGun!.remove();
            getP!.style.border! = "3px solid green"; 
        };
    };

    clickImgK3() {
        if (this.imgKiwi2 == true) {
            const getImgKiwi = document.getElementById('kiwi2');
            const getK = document.getElementById('k3');

            getImgKiwi!.remove();
            getK!.style.border! = "3px solid green"; 
        } else if (this.imgCactus2 == true) {
            const getImgCactus = document.getElementById('cactus2');
            const getK = document.getElementById('k3');

            getImgCactus!.remove();
            getK!.style.border! = "3px solid green"; 
        };
    };

    clickImgP7() {
        if (this.imgParrot2 == true) {
            const getImgParrot = document.getElementById('parrot2');
            const getP = document.getElementById('p7');

            getImgParrot!.remove();
            getP!.style.border! = "3px solid green"; 
        } else if (this.imgGun2 == true) {
            const getImgGun = document.getElementById('gun2');
            const getP = document.getElementById('p7');

            getImgGun!.remove();
            getP!.style.border! = "3px solid green"; 
        };
    };

    clickImgK4() {
        if (this.imgKiwi2 == true) {
            const getImgKiwi = document.getElementById('kiwi2');
            const getK = document.getElementById('k4');

            getImgKiwi!.remove();
            getK!.style.border! = "3px solid green"; 
        } else if (this.imgCactus2 == true) {
            const getImgCactus = document.getElementById('cactus2');
            const getK = document.getElementById('k4');

            getImgCactus!.remove();
            getK!.style.border! = "3px solid green"; 
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
        if (this.imgLemon == true) {
            const getImgLemon = document.getElementById('lemon');
            const getL = document.getElementById('l');

            getImgLemon!.remove();
            getL!.style.border! = "3px solid green"; 
        } else if (this.imgOnion == true) {
            const getImgOnion = document.getElementById('onion');
            const getL = document.getElementById('l');

            getImgOnion!.remove();
            getL!.style.border! = "3px solid green"; 
        };
    };

    clickImgM() {
        if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('m');

            getImgJellyfish!.remove();
            getM!.style.border! = "3px solid green"; 
        } else if (this.imgRaspberry == true) {
            const getImgRaspberry = document.getElementById('raspberry');
            const getM = document.getElementById('m');

            getImgRaspberry!.remove();
            getM!.style.border! = "3px solid green"; 
        };
    };

    clickImgL2() {
        if (this.imgLemon == true) {
            const getImgLemon = document.getElementById('lemon');
            const getL = document.getElementById('l2');

            getImgLemon!.remove();
            getL!.style.border! = "3px solid green"; 
        } else if (this.imgOnion == true) {
            const getImgOnion = document.getElementById('onion');
            const getL = document.getElementById('l2');

            getImgOnion!.remove();
            getL!.style.border! = "3px solid green"; 
        };
    };

    clickImgM2() {
        if (this.imgJellyfish == true) {
            const getImgJellyfish = document.getElementById('jellyfish');
            const getM = document.getElementById('m2');

            getImgJellyfish!.remove();
            getM!.style.border! = "3px solid green"; 
        } else if (this.imgRaspberry == true) {
            const getImgRaspberry = document.getElementById('raspberry');
            const getM = document.getElementById('m2');

            getImgRaspberry!.remove();
            getM!.style.border! = "3px solid green"; 
        };
    };

    clickImgLemon2() {
        this.imgLemon2 = true;
        this.imgRaspberry2 = false;
        this.imgJellyfish2 = false;
        this.imgOnion2 = false;
    };

    clickImgRaspberry2() {
        this.imgLemon2 = false;
        this.imgRaspberry2 = true;
        this.imgJellyfish2 = false;
        this.imgOnion2 = false;
    };

    clickImgJellyfish2() {
        this.imgLemon2 = false;
        this.imgRaspberry2 = false;
        this.imgJellyfish2 = true;
        this.imgOnion2 = false;
    };

    clickImgOnion2() {
        this.imgLemon2 = false;
        this.imgRaspberry2 = false;
        this.imgJellyfish2 = false;
        this.imgOnion2 = true;
    };

    clickImgL3() {
        if (this.imgLemon2 == true) {
            const getImgLemon = document.getElementById('lemon2');
            const getL = document.getElementById('l3');

            getImgLemon!.remove();
            getL!.style.border! = "3px solid green"; 
        } else if (this.imgOnion2 == true) {
            const getImgOnion = document.getElementById('onion2');
            const getL = document.getElementById('l3');

            getImgOnion!.remove();
            getL!.style.border! = "3px solid green"; 
        };
    };

    clickImgM3() {
        if (this.imgJellyfish2 == true) {
            const getImgJellyfish = document.getElementById('jellyfish2');
            const getM = document.getElementById('m3');

            getImgJellyfish!.remove();
            getM!.style.border! = "3px solid green"; 
        } else if (this.imgRaspberry2 == true) {
            const getImgRaspberry = document.getElementById('raspberry2');
            const getM = document.getElementById('m3');

            getImgRaspberry!.remove();
            getM!.style.border! = "3px solid green"; 
        };
    };

    clickImgL4() {
        if (this.imgLemon2 == true) {
            const getImgLemon = document.getElementById('lemon2');
            const getL = document.getElementById('l4');

            getImgLemon!.remove();
            getL!.style.border! = "3px solid green"; 
        } else if (this.imgOnion2 == true) {
            const getImgOnion = document.getElementById('onion2');
            const getL = document.getElementById('l4');

            getImgOnion!.remove();
            getL!.style.border! = "3px solid green"; 
        };
    };

    clickImgM4() {
        if (this.imgJellyfish2 == true) {
            const getImgJellyfish = document.getElementById('jellyfish2');
            const getM = document.getElementById('m4');

            getImgJellyfish!.remove();
            getM!.style.border! = "3px solid green"; 
        } else if (this.imgRaspberry2 == true) {
            const getImgRaspberry = document.getElementById('raspberry2');
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

        if(valueOfInput1 == "КАП-КАП") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "КО-КО") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "КУ-КУ") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "УА") {
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

        if(valueOfInput1 == "КО-КО") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "КАП-КАП") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "КУ-КУ") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "УА") {
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

        function right() {alert('Правильно!');}

        if(valueOfInput1 == "МЕ") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "КАП-КАП") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "КО-КО") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "КУ-КУ") {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "УА") {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "МЯУ") {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "МУ") {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 7) {
            setTimeout(right, 1000);
        }
    };
}