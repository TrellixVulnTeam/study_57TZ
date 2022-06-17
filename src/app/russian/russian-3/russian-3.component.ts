import { Component } from "@angular/core";

@Component({
    selector: 'russian3',
    templateUrl: './russian-3.component.html',
    styleUrls: ['./russian-3.component.scss']
})

export class Russian3 {
    imgSnail = false;
    imgFir = false;
    imgDonkey = false;
    imgWatermelon = false;
    imgApple = false;
    imgSpine = false;
    imgAnchor = false;
    imgCow = false;
    imgWasps = false;
    imgDoll = false;
    imgCat = false;
    imgBall = false;
    imgPineapple = false;
    imgIron = false;
    imgIron4 = false;
    imgMom = false;
    imgDad = false;
    imgPineapple4 = false;
    imgChicken = false;
    imgCock = false;
    a = 1;
    b = 1;
    c = 1;
    d = 1;
    e = 1;
    f = 1;

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

    clickImgU() {
        if (this.imgSnail == true) {
            const getImgSnail = document.getElementById('snail');
            const getU = document.getElementById('u');

            getImgSnail!.remove();
            getU!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgApple == true) {
            const getImgApple = document.getElementById('apple');
            const getYa = document.getElementById('ya');

            getImgApple!.remove();
            getYa!.style.border! = "3px solid green"; 
        };
    };

    clickImgI() {
        if (this.imgSpine == true) {
            const getImgSpine = document.getElementById('spine');
            const getI = document.getElementById('i');

            getImgSpine!.remove();
            getI!.style.border! = "3px solid green"; 
        };
    };

    clickImgO() {
        if (this.imgDonkey == true) {
            const getImgDonkey = document.getElementById('donkey');
            const getO = document.getElementById('o');

            getImgDonkey!.remove();
            getO!.style.border! = "3px solid green"; 
        };
    };

    clickImgA() {
        if (this.imgWatermelon == true) {
            const getImgWatermelon = document.getElementById('watermelon');
            const getA = document.getElementById('a');

            getImgWatermelon!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    clickImgE() {
        if (this.imgFir == true) {
            const getImgFir = document.getElementById('fir');
            const getA = document.getElementById('e');

            getImgFir!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    clickImgSnail() {
        this.imgSnail = true;
        this.imgDonkey = false;
        this.imgSpine = false;
        this.imgWatermelon = false;
        this.imgApple = false;
        this.imgFir = false;
    };

    clickImgDonkey() {
        this.imgSnail = false;
        this.imgDonkey = true;
        this.imgSpine = false;
        this.imgWatermelon = false;
        this.imgApple = false;
        this.imgFir = false;
    };

    clickImgSpine() {
        this.imgSnail = false;
        this.imgDonkey = false;
        this.imgSpine = true;
        this.imgWatermelon = false;
        this.imgApple = false;
        this.imgFir = false;
    };

    clickImgWatermelon() {
        this.imgSnail = false;
        this.imgDonkey = false;
        this.imgSpine = false;
        this.imgWatermelon = true;
        this.imgApple = false;
        this.imgFir = false;
    };

    clickImgApple() {
        this.imgSnail = false;
        this.imgDonkey = false;
        this.imgSpine = false;
        this.imgWatermelon = false;
        this.imgApple = true;
        this.imgFir = false;
    };

    clickImgFir() {
        this.imgSnail = false;
        this.imgDonkey = false;
        this.imgSpine = false;
        this.imgWatermelon = false;
        this.imgApple = false;
        this.imgFir = true;
    };

    clickImgYa2() {
        if (this.imgAnchor == true) {
            const getImgAnchor = document.getElementById('anchor');
            const getYa = document.getElementById('ya2');

            getImgAnchor!.remove();
            getYa!.style.border! = "3px solid green"; 
        };
    };

    clickImgM2() {
        if (this.imgDoll == true) {
            const getImgDoll = document.getElementById('doll');
            const getM = document.getElementById('m2');

            getImgDoll!.remove();
            getM!.style.border! = "3px solid green"; 
        };
    };

    clickImgO2() {
        if (this.imgWasps == true) {
            const getImgWasps = document.getElementById('wasps');
            const getO = document.getElementById('o2');

            getImgWasps!.remove();
            getO!.style.border! = "3px solid green"; 
        };
    };

    clickImgK2() {
        if (this.imgCow == true) {
            const getImgCow = document.getElementById('cow');
            const getK = document.getElementById('k2');

            getImgCow!.remove();
            getK!.style.border! = "3px solid green"; 
        };
    };

    clickImgCow() {
        this.imgCow= true;
        this.imgWasps = false;
        this.imgAnchor = false;
        this.imgDoll = false;
    };

    clickImgWasps() {
        this.imgCow= false;
        this.imgWasps = true;
        this.imgAnchor = false;
        this.imgDoll = false;
    };

    clickImgAnchor() {
        this.imgCow=false;
        this.imgWasps = false;
        this.imgAnchor = true;
        this.imgDoll = false;
    };

    clickImgDoll() {
        this.imgCow= false;
        this.imgWasps = false;
        this.imgAnchor = false;
        this.imgDoll = true;
    };

    clickImgU3() {
        if (this.imgIron == true) {
            const getImgIron = document.getElementById('iron');
            const getU = document.getElementById('u3');

            getImgIron!.remove();
            getU!.style.border! = "3px solid green"; 
        };
    };

    clickImgM3() {
        if (this.imgBall == true) {
            const getImgBall = document.getElementById('ball');
            const getM = document.getElementById('m3');

            getImgBall!.remove();
            getM!.style.border! = "3px solid green"; 
        };
    };

    clickImgA3() {
        if (this.imgPineapple == true) {
            const getImgPineapple = document.getElementById('pineapple');
            const getA = document.getElementById('a3');

            getImgPineapple!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    clickImgK3() {
        if (this.imgCat == true) {
            const getImgCat = document.getElementById('cat');
            const getK = document.getElementById('k3');

            getImgCat!.remove();
            getK!.style.border! = "3px solid green"; 
        };
    };

    clickImgCat() {
        this.imgCat= true;
        this.imgIron = false;
        this.imgBall = false;
        this.imgPineapple = false;
    };

    clickImgIron() {
        this.imgCat= false;
        this.imgIron = true;
        this.imgBall = false;
        this.imgPineapple = false;
    };

    clickImgBall() {
        this.imgCat= false;
        this.imgIron = false;
        this.imgBall = true;
        this.imgPineapple = false;
    };

    clickImgPineapple() {
        this.imgCat= false;
        this.imgIron = false;
        this.imgBall = false;
        this.imgPineapple = true;
    };

    changeImage() {
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

    checkImage() {
        if((this.a % 2 === 0) && (this.b % 2 === 0)) {
            this.viewDiv13();
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

    checkImage2() {
        if((this.c % 2 === 0) && (this.d % 2 === 0)) {
            this.viewDiv14();
        };
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

    changeImage6() {
        const x = document.getElementById("image11");
        const y = document.getElementById("image12");
        if(this.f % 2 === 0) {
            y!.style.transform = "none";
            x!.style.transform = "none";
            this.f++;
        }
        else {
            x!.style.transform = "translateX(255px)";
            y!.style.transform = "translateX(-255px)";
            this.f++;
        }
    };

    checkImage3() {
        if((this.e % 2 === 0) && (this.f % 2 === 0)) {
            this.viewDiv15();
        };
    };

    checkInput1() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input1')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input2')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input3')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input4')).value;

        if(valueOfInput1 == "ПАПА") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "МАМА") {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "КУ-КУ") {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "КО-КО") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 4) {
            setTimeout(this.viewDiv16, 1000);
        }
    };

    clickDivForU() {
        if (this.imgIron4 == true) {
            const getImgIron = document.getElementById('iron4');
            const getDivIron = document.getElementById('divForU');
            getDivIron!.append(getImgIron!);
            getDivIron!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForMom() {
        if (this.imgMom == true) {
            const getImgMom = document.getElementById('mom');
            const getDivMom = document.getElementById('divForMom');
            getDivMom!.append(getImgMom!);
            getDivMom!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForDad() {
        if (this.imgDad == true) {
            const getImgDad = document.getElementById('dad');
            const getDivDad = document.getElementById('divForDad');
            getDivDad!.append(getImgDad!);
            getDivDad!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForA() {
        if (this.imgPineapple4 == true) {
            const getImgPineapple = document.getElementById('pineapple4');
            const getDivPineapple = document.getElementById('divForA');
            getDivPineapple!.append(getImgPineapple!);
            getDivPineapple!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForChicken() {
        if (this.imgChicken == true) {
            const getImgChicken = document.getElementById('chicken');
            const getDivChicken = document.getElementById('divForChicken');
            getDivChicken!.append(getImgChicken!);
            getDivChicken!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForP() {
        if (this.imgCock == true) {
            const getImgCock = document.getElementById('cock');
            const getDivCock = document.getElementById('divForP');
            getDivCock!.append(getImgCock!);
            getDivCock!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickImgIron4() {
        this.imgIron4 = true;
        this.imgPineapple4 = false;
        this.imgDad = false;
        this.imgMom = false;
        this.imgCock = false;
        this.imgChicken = false;
    };

    clickImgPineapple4() {
        this.imgIron4 = false;
        this.imgPineapple4 = true;
        this.imgDad = false;
        this.imgMom = false;
        this.imgCock = false;
        this.imgChicken = false;
    };

    clickImgDad() {
        this.imgIron4 = false;
        this.imgPineapple4 = false;
        this.imgDad = true;
        this.imgMom = false;
        this.imgCock = false;
        this.imgChicken = false;
    };

    clickImgMom() {
        this.imgIron4 = false;
        this.imgPineapple4 = false;
        this.imgDad = false;
        this.imgMom = true;
        this.imgCock = false;
        this.imgChicken = false;
    };

    clickImgCock() {
        this.imgIron4 = false;
        this.imgPineapple4 = false;
        this.imgDad = false;
        this.imgMom = false;
        this.imgCock = true;
        this.imgChicken = false;
    };

    clickImgChicken() {
        this.imgIron4 = false;
        this.imgPineapple4 = false;
        this.imgDad = false;
        this.imgMom = false;
        this.imgCock = false;
        this.imgChicken = true;
    };
}