import { Component } from "@angular/core";

@Component({
    selector: 'russian14',
    templateUrl: './russian-14.component.html',
    styleUrls: ['./../russian-13/russian-13.component.scss']
})

export class Russian14 {
    imgHippopotamus = false;
    imgBanana = false;
    imgDrum = false;
    imgBarrel = false;
    imgSquirrel = false;
    imgTicket = false;
    imgRunner = false;
    imgRam = false;
    imgDuck = false;
    imgSeaCadet = false;
    imgSkirt = false;
    imgWhirligig = false;
    imgYurt = false;
    imgIron = false;
    imgUdot = false;
    imgRod = false;
    imgSnake = false;
    imgGrandba = false;
    imgBread = false;
    imgPow = false;
    imgClod = false;
    imgB9 = false;
    imgU5 = false;
    imgL = false;
    imgK = false;
    imgA = false;
    imgB10 = false;
    imgA2 = false;
    imgB11 = false;
    imgA3 = false;
    imgB12 = false;
    imgE = false;
    imgL2 = false;
    imgK2 = false;
    imgA4 = false;
    imgK3 = false;
    imgO = false;
    imgM = false;
    imgL3 = false;
    imgA5 = false;
    imgP = false;
    imgA6 = false;
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

    viewDiv25() {
        document.getElementById("div24")!.style.display = "none";
        document.getElementById("div25")!.style.display = "block";
    };

    viewDiv26() {
        document.getElementById("div25")!.style.display = "none";
        document.getElementById("div26")!.style.display = "block";
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

        if((valueOfInput1 == "Б") || (valueOfInput1 == "б")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "Д") || (valueOfInput2 == "д")) {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "Л") || (valueOfInput3 == "л")) {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "К") || (valueOfInput4 == "к")) {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "П") || (valueOfInput5 == "п")) {
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

        if((valueOfInput7 == "У") || (valueOfInput7 == "у")) {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "Ё") || (valueOfInput8 == "ё")) {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput9 == "А") || (valueOfInput9 == "а")) {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput10 == "О") || (valueOfInput10 == "о")) {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput11 == "Я") || (valueOfInput11 == "я")) {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput12 == "Е") || (valueOfInput12 == "е")) {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput13 == "М") || (valueOfInput13 == "м")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput14 == "Ж") || (valueOfInput14 == "ж")) {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput15 == "Ю") || (valueOfInput15 == "ю")) {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 15) {
            setTimeout(this.viewDiv3, 1000);
        }
    };

    clickImgHippopotamus () {
        this.imgHippopotamus = true;
        this.imgRam = false;
        this.imgTicket = false;
        this.imgRunner = false;
        this.imgSquirrel = false;
        this.imgDrum = false;
        this.imgBanana = false;
        this.imgBarrel = false;
    };
    clickImgRam () {
        this.imgHippopotamus = false;
        this.imgRam = true;
        this.imgTicket = false;
        this.imgRunner = false;
        this.imgSquirrel = false;
        this.imgDrum = false;
        this.imgBanana = false;
        this.imgBarrel = false;
    };
    clickImgTicket () {
        this.imgHippopotamus = false;
        this.imgRam = false;
        this.imgTicket = true;
        this.imgRunner = false;
        this.imgSquirrel = false;
        this.imgDrum = false;
        this.imgBanana = false;
        this.imgBarrel = false;
    };
    clickImgRunner () {
        this.imgHippopotamus = false;
        this.imgRam = false;
        this.imgTicket = false;
        this.imgRunner = true;
        this.imgSquirrel = false;
        this.imgDrum = false;
        this.imgBanana = false;
        this.imgBarrel = false;
    };
    clickImgSquirrel () {
        this.imgHippopotamus = false;
        this.imgRam = false;
        this.imgTicket = false;
        this.imgRunner = false;
        this.imgSquirrel = true;
        this.imgDrum = false;
        this.imgBanana = false;
        this.imgBarrel = false;
    };
    clickImgDrum () {
        this.imgHippopotamus = false;
        this.imgRam = false;
        this.imgTicket = false;
        this.imgRunner = false;
        this.imgSquirrel = false;
        this.imgDrum = true;
        this.imgBanana = false;
        this.imgBarrel = false;
    };
    clickImgBanana () {
        this.imgHippopotamus = false;
        this.imgRam = false;
        this.imgTicket = false;
        this.imgRunner = false;
        this.imgSquirrel = false;
        this.imgDrum = false;
        this.imgBanana = true;
        this.imgBarrel = false;
    };
    clickImgBarrel () {
        this.imgHippopotamus = false;
        this.imgRam = false;
        this.imgTicket = false;
        this.imgRunner = false;
        this.imgSquirrel = false;
        this.imgDrum = false;
        this.imgBanana = false;
        this.imgBarrel = true;
    };

    clickImgB() {
        if (this.imgBanana == true) {
            document.getElementById('banana')!.remove();
            document.getElementById('imgB')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgB')!.style.border = 'none', 500);
        } else if (this.imgDrum == true) {
            document.getElementById('drum')!.remove();
            document.getElementById('imgB')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgB')!.style.border = 'none', 500);
        } else if (this.imgRam == true) {
            document.getElementById('ram')!.remove();
            document.getElementById('imgB')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgB')!.style.border = 'none', 500);
        } else if (this.imgBarrel == true) {
            document.getElementById('barrel')!.remove();
            document.getElementById('imgB')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgB')!.style.border = 'none', 500);
        }
    };

    clickImgB2() {
        if (this.imgHippopotamus == true) {
            document.getElementById('hippopotamus')!.remove();
            document.getElementById('imgB2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgB2')!.style.border = 'none', 500);
        } else if (this.imgRunner == true) {
            document.getElementById('runner')!.remove();
            document.getElementById('imgB2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgB2')!.style.border = 'none', 500);
        } else if (this.imgTicket == true) {
            document.getElementById('ticket')!.remove();
            document.getElementById('imgB2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgB2')!.style.border = 'none', 500);
        } else if (this.imgSquirrel == true) {
            document.getElementById('squirrel')!.remove();
            document.getElementById('imgB2')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgB2')!.style.border = 'none', 500);
        }
    };

    clickImgDuck() {
        this.imgDuck = true;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgSeaCadet() {
        this.imgDuck = false;
        this.imgSeaCadet = true;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgSkirt() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = true;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgWhirligig() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = true;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgYurt() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = true;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgIron() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = true;
        this.imgUdot = false;
        this.imgRod = false;
    };

    clickImgUdot() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = true;
        this.imgRod = false;
    };

    clickImgRod() {
        this.imgDuck = false;
        this.imgSeaCadet = false;
        this.imgSkirt = false;
        this.imgWhirligig = false;
        this.imgYurt = false;
        this.imgIron = false;
        this.imgUdot = false;
        this.imgRod = true;
    };

    clickImgYu() {
        if (this.imgWhirligig == true) {
            document.getElementById('whirligig')!.remove();
            document.getElementById('imgYu')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgYu')!.style.border = 'none', 500);
        } else if (this.imgSeaCadet == true) {
            document.getElementById('seaCadet')!.remove();
            document.getElementById('imgYu')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgYu')!.style.border = 'none', 500);
        } else if (this.imgSkirt == true) {
            document.getElementById('skirt')!.remove();
            document.getElementById('imgYu')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgYu')!.style.border = 'none', 500);
        } else if (this.imgYurt == true) {
            document.getElementById('yurt')!.remove();
            document.getElementById('imgYu')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgYu')!.style.border = 'none', 500);
        }
    };

    clickImgU() {
        if (this.imgDuck == true) {
            document.getElementById('duck')!.remove();
            document.getElementById('imgU')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgU')!.style.border = 'none', 500);
        } else if (this.imgIron == true) {
            document.getElementById('iron')!.remove();
            document.getElementById('imgU')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgU')!.style.border = 'none', 500);
        } else if (this.imgUdot == true) {
            document.getElementById('udot')!.remove();
            document.getElementById('imgU')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgU')!.style.border = 'none', 500);
        } else if (this.imgRod == true) {
            document.getElementById('rod')!.remove();
            document.getElementById('imgU')!.style.border = "3px solid green";
            setTimeout(() => document.getElementById('imgU')!.style.border = 'none', 500);
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

        if((valueOfInput1 == "А") || (valueOfInput1 == "а")) {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "О") || (valueOfInput2 == "о")) {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "У") || (valueOfInput3 == "у")) {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "Е") || (valueOfInput4 == "е")) {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "Я") || (valueOfInput5 == "я")) {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "Ё") || (valueOfInput6 == "ё")) {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "Ю") || (valueOfInput7 == "ю")) {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "И") || (valueOfInput8 == "и")) {
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

        if((valueOfInput1 == "К") || (valueOfInput1 == "к")) {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "П") || (valueOfInput2 == "п")) {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "Д") || (valueOfInput3 == "д")) {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "Ж") || (valueOfInput4 == "ж")) {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "Л") || (valueOfInput5 == "л")) {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "М") || (valueOfInput6 == "м")) {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "Б") || (valueOfInput7 == "б")) {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 7) {
            setTimeout(this.viewDiv7, 1000);
        }
    };

    clickImgB9 () {
        this.imgB9 = true;
        this.imgU5 = false;
        this.imgL = false;
        this.imgK = false;
        this.imgA = false;
    };

    clickImgU5 () {
        this.imgB9 = false;
        this.imgU5 = true;
        this.imgL = false;
        this.imgK = false;
        this.imgA = false;
    };

    clickImgL () {
        this.imgB9 = false;
        this.imgU5 = false;
        this.imgL = true;
        this.imgK = false;
        this.imgA = false;
    };

    clickImgK () {
        this.imgB9 = false;
        this.imgU5 = false;
        this.imgL = false;
        this.imgK = true;
        this.imgA = false;
    };

    clickImgA () {
        this.imgB9 = false;
        this.imgU5 = false;
        this.imgL = false;
        this.imgK = false;
        this.imgA = true;
    };

    clickDivForB9() {
        if (this.imgB9 == true) {
            const getImgB = document.getElementById('imgB9');
            const getDivB = document.getElementById('divForB9');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForU5() {
        if (this.imgU5 == true) {
            const getImgU5 = document.getElementById('imgU5');
            const getDivU5 = document.getElementById('divForU5');
            getDivU5!.append(getImgU5!);
            getImgU5!.style.border = 'none';
            getDivU5!.parentElement!.style.border = "3px solid green"; 
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

    clickDivForK() {
        if (this.imgK == true) {
            const getImgK = document.getElementById('imgK');
            const getDivK = document.getElementById('divForK');
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

    clickImgB10() {
        this.imgB10 = true;
        this.imgA2 = false;
        this.imgB11 = false;
        this.imgA3 = false;
    };

    clickImgA2() {
        this.imgB10 = false;
        this.imgA2 = true;
        this.imgB11 = false;
        this.imgA3 = false;
    };

    clickImgB11() {
        this.imgB10 = false;
        this.imgA2 = false;
        this.imgB11 = true;
        this.imgA3 = false;
    };

    clickImgA3() {
        this.imgB10 = false;
        this.imgA2 = false;
        this.imgB11 = false;
        this.imgA3 = true;
    };

    clickDivForB10() {
        if (this.imgB10 == true) {
            const getImgB = document.getElementById('imgB10');
            const getDivB = document.getElementById('divForB10');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgB11 == true) {
            const getImgB = document.getElementById('imgB11');
            const getDivB = document.getElementById('divForB10');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA2() {
        if (this.imgA2 == true) {
            const getImgA = document.getElementById('imgA2');
            const getDivA = document.getElementById('divForA2');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA3 == true) {
            const getImgA = document.getElementById('imgA3');
            const getDivA = document.getElementById('divForA2');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green";
        };
    };

    clickDivForB11() {
        if (this.imgB10 == true) {
            const getImgB = document.getElementById('imgB10');
            const getDivB = document.getElementById('divForB11');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgB11 == true) {
            const getImgB = document.getElementById('imgB11');
            const getDivB = document.getElementById('divForB11');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA3() {
        if (this.imgA2 == true) {
            const getImgA = document.getElementById('imgA2');
            const getDivA = document.getElementById('divForA3');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA3 == true) {
            const getImgA = document.getElementById('imgA3');
            const getDivA = document.getElementById('divForA3');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green";
        };
    };

    clickImgB12 () {
        this.imgB12 = true;
        this.imgE = false;
        this.imgL2 = false;
        this.imgK2 = false;
        this.imgA4 = false;
    };

    clickImgE () {
        this.imgB12 = false;
        this.imgE = true;
        this.imgL2 = false;
        this.imgK2 = false;
        this.imgA4 = false;
    };

    clickImgL2 () {
        this.imgB12 = false;
        this.imgE = false;
        this.imgL2 = true;
        this.imgK2 = false;
        this.imgA4 = false;
    };

    clickImgK2 () {
        this.imgB12 = false;
        this.imgE = false;
        this.imgL2 = false;
        this.imgK2 = true;
        this.imgA4 = false;
    };

    clickImgA4 () {
        this.imgB12 = false;
        this.imgE = false;
        this.imgL2 = false;
        this.imgK2 = false;
        this.imgA4 = true;
    };

    clickDivForB12() {
        if (this.imgB12 == true) {
            const getImgB = document.getElementById('imgB12');
            const getDivB = document.getElementById('divForB12');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForE() {
        if (this.imgE == true) {
            const getImgE = document.getElementById('imgE');
            const getDivE = document.getElementById('divForE');
            getDivE!.append(getImgE!);
            getImgE!.style.border = 'none';
            getDivE!.parentElement!.style.border = "3px solid green"; 
        };
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

    clickDivForK2() {
        if (this.imgK2 == true) {
            const getImgK = document.getElementById('imgK2');
            const getDivK = document.getElementById('divForK2');
            getDivK!.append(getImgK!);
            getImgK!.style.border = 'none';
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA4() {
        if (this.imgA4 == true) {
            const getImgA = document.getElementById('imgA4');
            const getDivA = document.getElementById('divForA4');
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
            this.viewDiv18();
        };
    };

    clickImgK3() {
        this.imgK3 = true;
        this.imgO = false;
        this.imgM = false;
    };

    clickImgO() {
        this.imgK3 = false;
        this.imgO = true;
        this.imgM = false;
    };

    clickImgM() {
        this.imgK3 = false;
        this.imgO = false;
        this.imgM = true;
    };

    clickDivForK3() {
        if (this.imgK3 == true) {
            const getImgK = document.getElementById('imgK3');
            const getDivK = document.getElementById('divForK3');
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

    clickDivForM() {
        if (this.imgM == true) {
            const getImgM = document.getElementById('imgM');
            const getDivM = document.getElementById('divForM');
            getDivM!.append(getImgM!);
            getImgM!.style.border = 'none';
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgL3() {
        this.imgL3 = true;
        this.imgA5 = false;
        this.imgP = false;
        this.imgA6 = false
    };

    clickImgA5() {
        this.imgL3 = false;
        this.imgA5 = true;
        this.imgP = false;
        this.imgA6 = false
    };

    clickImgP() {
        this.imgL3 = false;
        this.imgA5 = false;
        this.imgP = true;
        this.imgA6 = false
    };

    clickImgA6() {
        this.imgL3 = false;
        this.imgA5 = false;
        this.imgP = false;
        this.imgA6 = true;
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

    clickDivForA5() {
        if (this.imgA5 == true) {
            const getImgA = document.getElementById('imgA5');
            const getDivA = document.getElementById('divForA5');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA6 == true) {
            const getImgA = document.getElementById('imgA6');
            const getDivA = document.getElementById('divForA5');
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

    clickDivForA6() {
        if (this.imgA5 == true) {
            const getImgA = document.getElementById('imgA5');
            const getDivA = document.getElementById('divForA6');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA6 == true) {
            const getImgA = document.getElementById('imgA6');
            const getDivA = document.getElementById('divForA6');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        }
    };

    clickImgPow() {
        this.imgPow = true;
        this.imgGrandba = false;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgSquirrel = false;
        this.imgBread = false;
    };

    clickImgGrandba() {
        this.imgPow = false;
        this.imgGrandba = true;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgSquirrel = false;
        this.imgBread = false;
    };

    clickImgClod() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = true;
        this.imgSnake = false;
        this.imgSquirrel = false;
        this.imgBread = false;
    };

    clickImgSnake() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = false;
        this.imgSnake = true;
        this.imgSquirrel = false;
        this.imgBread = false;
    };

    clickImgSquirrel2() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgSquirrel = true;
        this.imgBread = false;
    };

    clickImgBread() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgSquirrel = false;
        this.imgBread = true;
    };

    clickDivForPow() {
        if (this.imgPow == true) {
            const getImgPow = document.getElementById('pow');
            const getDivPow = document.getElementById('divForPow');
            getImgPow!.style.border = 'none';
            getDivPow!.append(getImgPow!);
            getDivPow!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForGrandba() {
        if (this.imgGrandba == true) {
            const getImgGrandba = document.getElementById('grandba');
            const getDivGrandba = document.getElementById('divForGrandba');
            getImgGrandba!.style.border = 'none';
            getDivGrandba!.append(getImgGrandba!);
            getDivGrandba!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForClod() {
        if (this.imgClod == true) {
            const getImgClod = document.getElementById('clod');
            const getDivClod = document.getElementById('divForClod');
            getImgClod!.style.border = 'none';
            getDivClod!.append(getImgClod!);
            getDivClod!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForSnake() {
        if (this.imgSnake == true) {
            const getImgSnake = document.getElementById('snake');
            const getDivSnake = document.getElementById('divForSnake');
            getImgSnake!.style.border = 'none';
            getDivSnake!.append(getImgSnake!);
            getDivSnake!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForSquirrel2() {
        if (this.imgSquirrel == true) {
            const getImgSquirrel = document.getElementById('squirrel2');
            const getDivSquirrel = document.getElementById('divForSquirrel2');
            getImgSquirrel!.style.border = 'none';
            getDivSquirrel!.append(getImgSquirrel!);
            getDivSquirrel!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForBread() {
        if (this.imgBread == true) {
            const getImgBread = document.getElementById('bread');
            const getDivBread = document.getElementById('divForBread');
            getImgBread!.style.border = 'none';
            getDivBread!.append(getImgBread!);
            getDivBread!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    checkInput4() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input31')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input32')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input33')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input34')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input35')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input36')).value;

        if((valueOfInput1 == "БУЛКА") || (valueOfInput1 == "булка")) {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "ЛУК") || (valueOfInput2 == "лук")) {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "КОМ") || (valueOfInput3 == "ком")) {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "ПОЛ") || (valueOfInput4 == "пол")) {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "МАМА") || (valueOfInput5 == "мама")) {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "ПАПА") || (valueOfInput6 == "папа")) {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 6) {
            setTimeout(() => alert('Правильно!'), 1000);
        };
    };
}