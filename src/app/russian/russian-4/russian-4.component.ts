import { Component } from "@angular/core";

@Component({
    selector: 'russian4',
    templateUrl: './russian-4.component.html',
    styleUrls: ['./russian-4.component.scss']
})

export class Russian4 {
    imgTurkey = false;
    imgBall = false;
    imgAnchor = false;
    imgBubble = false;
    imgWasps = false;
    imgDuck = false;
    imgBus = false;
    imgLizard = false;
    imgHoop = false;
    imgIndian = false;
    imgPenguin = false;
    imgPanda = false;
    imgBear = false;
    imgMouse = false;
    imgWhale = false;
    imgCat = false;
    imgM = false;
    imgYa = false;
    imgU = false;
    imgK = false;
    imgA = false;
    imgP = false;
    imgT = false;
    imgK2 = false;
    imgP2 = false;
    imgA2 = false;
    imgYa3 = false;
    imgH3 = false;
    imgM3 = false;
    imgA3 = false;
    imgM4 = false;
    imgU3 = false;
    imgT3 = false;
    imgYa4 = false;
    imgH4 = false;
    imgP7 = false;
    imgA4 = false;
    imgP8 = false;
    imgU4 = false;
    imgT4 = false;
    imgMagnifier = false;
    imgPaw = false;
    imgRain = false;

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

    clickImgTurkey() {
        this.imgTurkey = true;
        this.imgAnchor = false;
        this.imgBall = false;
        this.imgBubble = false;
        this.imgWasps = false;
    };

    clickImgAnchor() {
        this.imgTurkey = false;
        this.imgAnchor = true;
        this.imgBall = false;
        this.imgBubble = false;
        this.imgWasps = false;
    };

    clickImgBall() {
        this.imgTurkey = false;
        this.imgAnchor = false;
        this.imgBall = true;
        this.imgBubble = false;
        this.imgWasps = false;
    };

    clickImgBubble() {
        this.imgTurkey = false;
        this.imgAnchor = false;
        this.imgBall = false;
        this.imgBubble = true;
        this.imgWasps = false;
    };

    clickImgWasps() {
        this.imgTurkey = false;
        this.imgAnchor = false;
        this.imgBall = false;
        this.imgBubble = false;
        this.imgWasps = true;
    };

    clickImgP() {
        if (this.imgBubble == true) {
            document.getElementById('bubble')!.remove();
            document.getElementById('p')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgAnchor == true) {
            document.getElementById('anchor')!.remove();
            document.getElementById('ya')!.style.border! = "3px solid green"; 
        };
    };

    clickImgI() {
        if (this.imgTurkey == true) {
            document.getElementById('turkey')!.remove();
            document.getElementById('i')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO() {
        if (this.imgWasps == true) {
            document.getElementById('wasps')!.remove();
            document.getElementById('o')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM() {
        if (this.imgBall == true) {
            document.getElementById('ball')!.remove();
            document.getElementById('m')!.style.border! = "3px solid green"; 
        };
    };

    clickImgDuck() {
        this.imgDuck = true;
        this.imgBus = false;
        this.imgHoop = false;
        this.imgIndian = false;
        this.imgLizard = false;
    };

    clickImgBus() {
        this.imgDuck = false;
        this.imgBus = true;
        this.imgHoop = false;
        this.imgIndian = false;
        this.imgLizard = false;
    };

    clickImgHoop() {
        this.imgDuck = false;
        this.imgBus = false;
        this.imgHoop = true;
        this.imgIndian = false;
        this.imgLizard = false;
    };

    clickImgIndian() {
        this.imgDuck = false;
        this.imgBus = false;
        this.imgHoop = false;
        this.imgIndian = true;
        this.imgLizard = false;
    };

    clickImgLizard() {
        this.imgDuck = false;
        this.imgBus = false;
        this.imgHoop = false;
        this.imgIndian = false;
        this.imgLizard = true;
    };

    clickImgU2() {
        if (this.imgDuck == true) {
            document.getElementById('duck')!.remove();
            document.getElementById('u2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa2() {
        if (this.imgLizard == true) {
            document.getElementById('lizard')!.remove();
            document.getElementById('ya2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgI2() {
        if (this.imgIndian == true) {
            document.getElementById('indian')!.remove();
            document.getElementById('i2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO2() {
        if (this.imgHoop == true) {
            document.getElementById('hoop')!.remove();
            document.getElementById('o2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgA2() {
        if (this.imgBus == true) {
            document.getElementById('bus')!.remove();
            document.getElementById('a2')!.style.border! = "3px solid green"; 
        };
    };

    clickImgPanda() {
        this.imgPanda = true;
        this.imgCat = false;
        this.imgWhale = false;
        this.imgBear = false;
        this.imgMouse = false;
        this.imgPenguin = false;
    };

    clickImgCat() {
        this.imgPanda = false;
        this.imgCat = true;
        this.imgWhale = false;
        this.imgBear = false;
        this.imgMouse = false;
        this.imgPenguin = false;
    };

    clickImgWhale() {
        this.imgPanda = false;
        this.imgCat = false;
        this.imgWhale = true;
        this.imgBear = false;
        this.imgMouse = false;
        this.imgPenguin = false;
    };

    clickImgBear() {
        this.imgPanda = false;
        this.imgCat = false;
        this.imgWhale = false;
        this.imgBear = true;
        this.imgMouse = false;
        this.imgPenguin = false;
    };

    clickImgMouse() {
        this.imgPanda = false;
        this.imgCat = false;
        this.imgWhale = false;
        this.imgBear = false;
        this.imgMouse = true;
        this.imgPenguin = false;
    };

    clickImgPenguin() {
        this.imgPanda = false;
        this.imgCat = false;
        this.imgWhale = false;
        this.imgBear = false;
        this.imgMouse = false;
        this.imgPenguin = true;
    };

    clickImgP3() {
        if (this.imgPanda == true) {
            document.getElementById('panda')!.remove();
            document.getElementById('p3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgK3() {
        if (this.imgCat == true) {
            document.getElementById('cat')!.remove();
            document.getElementById('k3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM3() {
        if (this.imgMouse == true) {
            document.getElementById('mouse')!.remove();
            document.getElementById('m3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgP4() {
        if (this.imgPenguin == true) {
            document.getElementById('penguin')!.remove();
            document.getElementById('p4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgK4() {
        if (this.imgWhale == true) {
            document.getElementById('whale')!.remove();
            document.getElementById('k4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgM4() {
        if (this.imgBear == true) {
            document.getElementById('bear')!.remove();
            document.getElementById('m4')!.style.border! = "3px solid green"; 
        };
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

    clickImgYa3() {
        this.imgYa3 = true;
        this.imgH3 = false;
        this.imgM3 = false;
        this.imgA3 = false;
        this.imgM4 = false;
        this.imgU3 = false;
        this.imgT3 = false;
    };

    clickImgH3() {
        this.imgYa3 = false;
        this.imgH3 = true;
        this.imgM3 = false;
        this.imgA3 = false;
        this.imgM4 = false;
        this.imgU3 = false;
        this.imgT3 = false;
    };

    clickImgM6() {
        this.imgYa3 = false;
        this.imgH3 = false;
        this.imgM3 = true;
        this.imgA3 = false;
        this.imgM4 = false;
        this.imgU3 = false;
        this.imgT3 = false;
    };

    clickImgA3() {
        this.imgYa3 = false;
        this.imgH3 = false;
        this.imgM3 = false;
        this.imgA3 = true;
        this.imgM4 = false;
        this.imgU3 = false;
        this.imgT3 = false;
    };

    clickImgM7() {
        this.imgYa3 = false;
        this.imgH3 = false;
        this.imgM3 = false;
        this.imgA3 = false;
        this.imgM4 = true;
        this.imgU3 = false;
        this.imgT3 = false;
    };

    clickImgU3() {
        this.imgYa3 = false;
        this.imgH3 = false;
        this.imgM3 = false;
        this.imgA3 = false;
        this.imgM4 = false;
        this.imgU3 = true;
        this.imgT3 = false;
    };

    clickImgT3() {
        this.imgYa3 = false;
        this.imgH3 = false;
        this.imgM3 = false;
        this.imgA3 = false;
        this.imgM4 = false;
        this.imgU3 = false;
        this.imgT3 = true;
    };

    clickDivForYa3() {
        if (this.imgYa3 == true) {
            const getImgYa = document.getElementById('imgYa3');
            const getDivYa = document.getElementById('divForYa3');
            getImgYa!.style.border = 'none';
            getDivYa!.append(getImgYa!);
            getDivYa!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForH3() {
        if (this.imgH3 == true) {
            const getImgH = document.getElementById('imgH3');
            const getDivH = document.getElementById('divForH3');
            getImgH!.style.border = 'none';
            getDivH!.append(getImgH!);
            getDivH!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForM6() {
        if (this.imgM3 == true) {
            const getImgM = document.getElementById('imgM3');
            const getDivM = document.getElementById('divForM3');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgM4 == true) {
            const getImgM = document.getElementById('imgM4');
            const getDivM = document.getElementById('divForM3');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForA3() {
        if (this.imgA3 == true) {
            const getImgA = document.getElementById('imgA3');
            const getDivA = document.getElementById('divForA3');
            getImgA!.style.border = 'none';
            getDivA!.append(getImgA!);
            getDivA!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForM7() {
        if (this.imgM3 == true) {
            const getImgM = document.getElementById('imgM3');
            const getDivM = document.getElementById('divForM4');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgM4 == true) {
            const getImgM = document.getElementById('imgM4');
            const getDivM = document.getElementById('divForM4');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForU3() {
        if (this.imgU3 == true) {
            const getImgU = document.getElementById('imgU3');
            const getDivU = document.getElementById('divForU3');
            getImgU!.style.border = 'none';
            getDivU!.append(getImgU!);
            getDivU!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForT3() {
        if (this.imgT3 == true) {
            const getImgT = document.getElementById('imgT3');
            const getDivT = document.getElementById('divForT3');
            getImgT!.style.border = 'none';
            getDivT!.append(getImgT!);
            getDivT!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa4() {
        this.imgYa4 = true;
        this.imgH4 = false;
        this.imgP7 = false;
        this.imgA4 = false;
        this.imgP8 = false;
        this.imgU4 = false;
        this.imgT4 = false;
    };

    clickImgH4() {
        this.imgYa4 = false;
        this.imgH4 = true;
        this.imgP7 = false;
        this.imgA4 = false;
        this.imgP8 = false;
        this.imgU4 = false;
        this.imgT4 = false;
    };

    clickImgP7() {
        this.imgYa4 = false;
        this.imgH4 = false;
        this.imgP7 = true;
        this.imgA4 = false;
        this.imgP8 = false;
        this.imgU4 = false;
        this.imgT4 = false;
    };

    clickImgA4() {
        this.imgYa4 = false;
        this.imgH4 = false;
        this.imgP7 = false;
        this.imgA4 = true;
        this.imgP8 = false;
        this.imgU4 = false;
        this.imgT4 = false;
    };

    clickImgP8() {
        this.imgYa4 = false;
        this.imgH4 = false;
        this.imgP7 = false;
        this.imgA4 = false;
        this.imgP8 = true;
        this.imgU4 = false;
        this.imgT4 = false;
    };

    clickImgU4() {
        this.imgYa4 = false;
        this.imgH4 = false;
        this.imgP7 = false;
        this.imgA4 = false;
        this.imgP8 = false;
        this.imgU4 = true;
        this.imgT4 = false;
    };

    clickImgT4() {
        this.imgYa4 = false;
        this.imgH4 = false;
        this.imgP7 = false;
        this.imgA4 = false;
        this.imgP8 = false;
        this.imgU4 = false;
        this.imgT4 = true;
    };

    clickDivForYa4() {
        if (this.imgYa4 == true) {
            const getImgYa = document.getElementById('imgYa4');
            const getDivYa = document.getElementById('divForYa4');
            getImgYa!.style.border = 'none';
            getDivYa!.append(getImgYa!);
            getDivYa!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForH4() {
        if (this.imgH4 == true) {
            const getImgH = document.getElementById('imgH4');
            const getDivH = document.getElementById('divForH4');
            getImgH!.style.border = 'none';
            getDivH!.append(getImgH!);
            getDivH!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForP7() {
        if (this.imgP7 == true) {
            const getImgM = document.getElementById('imgP7');
            const getDivM = document.getElementById('divForP7');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgP8 == true) {
            const getImgM = document.getElementById('imgP8');
            const getDivM = document.getElementById('divForP7');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForA4() {
        if (this.imgA4 == true) {
            const getImgA = document.getElementById('imgA4');
            const getDivA = document.getElementById('divForA4');
            getImgA!.style.border = 'none';
            getDivA!.append(getImgA!);
            getDivA!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForP8() {
        if (this.imgP7 == true) {
            const getImgM = document.getElementById('imgP7');
            const getDivM = document.getElementById('divForP8');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border! = "3px solid green"; 
        } else if (this.imgP8 == true) {
            const getImgM = document.getElementById('imgP8');
            const getDivM = document.getElementById('divForP8');
            getImgM!.style.border = 'none';
            getDivM!.append(getImgM!);
            getDivM!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForU4() {
        if (this.imgU4 == true) {
            const getImgU = document.getElementById('imgU4');
            const getDivU = document.getElementById('divForU4');
            getImgU!.style.border = 'none';
            getDivU!.append(getImgU!);
            getDivU!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForT4() {
        if (this.imgT4 == true) {
            const getImgT = document.getElementById('imgT4');
            const getDivT = document.getElementById('divForT4');
            getImgT!.style.border = 'none';
            getDivT!.append(getImgT!);
            getDivT!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    checkInput1() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input1')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input2')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input3')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input4')).value;

        if((valueOfInput1 == "ЛУПА") || (valueOfInput1 == "лупа")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "МЯУ") || (valueOfInput2 == "мяу")) {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "КАП-КАП") || (valueOfInput3 == "кап-кап")) {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "ЛАПА") || (valueOfInput4 == "лапа")) {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 4) {
            setTimeout(this.viewDiv21, 1000);
        }
    };

    clickImgPaw() {
        this.imgPaw = true;
        this.imgCat = false;
        this.imgMagnifier = false;
        this.imgRain = false;
    };

    clickImgCat2() {
        this.imgPaw = false;
        this.imgCat = true;
        this.imgMagnifier = false;
        this.imgRain = false;
    };

    clickImgMagnifier() {
        this.imgPaw = false;
        this.imgCat = false;
        this.imgMagnifier = true;
        this.imgRain = false;
    };

    clickImgRain() {
        this.imgPaw = false;
        this.imgCat = false;
        this.imgMagnifier = false;
        this.imgRain = true;
    };

    clickDivForPaw() {
        if (this.imgPaw == true) {
            const getImgPaw = document.getElementById('paw');
            const getDivPaw = document.getElementById('divForPaw');
            getImgPaw!.style.border = "none";
            getDivPaw!.append(getImgPaw!);
            getDivPaw!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForCat() {
        if (this.imgCat == true) {
            const getImgCat = document.getElementById('cat2');
            const getDivCat = document.getElementById('divForCat');
            getImgCat!.style.border = "none";
            getDivCat!.append(getImgCat!);
            getDivCat!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForMagnifier() {
        if (this.imgMagnifier == true) {
            const getImgMagnifier = document.getElementById('magnifier');
            const getDivMagnifier = document.getElementById('divForMagnifier');
            getImgMagnifier!.style.border = "none";
            getDivMagnifier!.append(getImgMagnifier!);
            getDivMagnifier!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForRain() {
        if (this.imgRain == true) {
            const getImgRain = document.getElementById('rain');
            const getDivRain = document.getElementById('divForRain');
            getImgRain!.style.border = "none";
            getDivRain!.append(getImgRain!);
            getDivRain!.parentElement!.style.border! = "3px solid green"; 
        };
    };
}