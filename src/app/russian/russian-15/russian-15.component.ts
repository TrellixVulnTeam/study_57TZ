import { Component } from "@angular/core";

@Component({
    selector: 'russian15',
    templateUrl: './russian-15.component.html',
    styleUrls: ['./russian-15.component.scss']
})

export class Russian15 {
    imgBanana = false;
    imgTicket = false;
    imgBarrel = false;
    imgRam = false;
    imgDrum = false;
    imgRunner = false;
    imgSquirrel = false;
    imgHippopotamus = false;
    imgRod = false;
    imgIron = false;
    imgSeaCadet = false;
    imgDuck = false;
    imgUdot = false;
    imgSkirt = false;
    imgWhirligig = false;
    imgYurt = false;
    imgPit = false;
    imgBread = false;
    imgHedgehog = false;
    imgSquirrel2 = false;
    imgBeatle = false
    imgWhirligig2 = false;
    imgB9 = false;
    imgU5 = false;
    imgL = false;
    imgK = false;
    imgA = false;
    imgB10 = false;
    imgE = false;
    imgL2 = false;
    imgK2 = false;
    imgA2 = false;
    imgYu5 = false;
    imgL3 = false;
    imgA3 = false;
    imgYa = false;
    imgM = false;
    imgA4 = false;
    imgJ = false;
    imgU6 = false;
    imgK3 = false;
    imgYo = false;
    imgJ2 = false;

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

        if(valueOfInput1 == "Б") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "Ж") {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "К") {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "М") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "Е") {
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

        if(valueOfInput7 == "А") {
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

        if(valueOfInput9 == "У") {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "О") {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "Я") {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput12 == "П") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput13 == "Л") {
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

        if(valueOfInput15 == "Ю") {
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
            const getImgBanana = document.getElementById('banana');
            getImgBanana!.remove();
        } else if (this.imgDrum == true) {
            const getImgDrum = document.getElementById('drum');
            getImgDrum!.remove();
        } else if (this.imgRam == true) {
            const getImgRam = document.getElementById('ram');
            getImgRam!.remove(); 
        } else if (this.imgBarrel == true) {
            const getImgBarrel = document.getElementById('barrel');
            getImgBarrel!.remove();
        }
    };

    clickImgB2() {
        if (this.imgHippopotamus == true) {
            const getImgHippopotamus = document.getElementById('hippopotamus');
            getImgHippopotamus!.remove();
        } else if (this.imgRunner == true) {
            const getImgRunner = document.getElementById('runner');
            getImgRunner!.remove();
        } else if (this.imgTicket == true) {
            const getImgTicket = document.getElementById('ticket');
            getImgTicket!.remove(); 
        } else if (this.imgSquirrel == true) {
            const getImgSquirrel = document.getElementById('squirrel');
            getImgSquirrel!.remove();
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
            const getImgWhirligig = document.getElementById('whirligig');
            getImgWhirligig!.remove(); 
        } else if (this.imgSeaCadet == true) {
            const getImgSeaCadet = document.getElementById('seaCadet');
            getImgSeaCadet!.remove();
        } else if (this.imgSkirt == true) {
            const getImgSkirt = document.getElementById('skirt');
            getImgSkirt!.remove();
        } else if (this.imgYurt == true) {
            const getImgYurt = document.getElementById('yurt');
            getImgYurt!.remove();
        }
    };

    clickImgU() {
        if (this.imgDuck == true) {
            const getImgDuck = document.getElementById('duck');
            getImgDuck!.remove(); 
        } else if (this.imgIron == true) {
            const getImgIron = document.getElementById('iron');
            getImgIron!.remove(); 
        } else if (this.imgUdot == true) {
            const getImgUdot = document.getElementById('udot');
            getImgUdot!.remove();
        } else if (this.imgRod == true) {
            const getImgRod = document.getElementById('rod');
            getImgRod!.remove();
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

    clickImgB10 () {
        this.imgB10 = true;
        this.imgE = false;
        this.imgL2 = false;
        this.imgK2 = false;
        this.imgA2 = false;
    };

    clickImgE () {
        this.imgB10 = false;
        this.imgE = true;
        this.imgL2 = false;
        this.imgK2 = false;
        this.imgA2 = false;
    };

    clickImgL2 () {
        this.imgB10 = false;
        this.imgE = false;
        this.imgL2 = true;
        this.imgK2 = false;
        this.imgA2 = false;
    };

    clickImgK2 () {
        this.imgB10 = false;
        this.imgE = false;
        this.imgL2 = false;
        this.imgK2 = true;
        this.imgA2 = false;
    };

    clickImgA2 () {
        this.imgB10 = false;
        this.imgE = false;
        this.imgL2 = false;
        this.imgK2 = false;
        this.imgA2 = true;
    };

    clickDivForB10() {
        if (this.imgB10 == true) {
            const getImgB = document.getElementById('imgB10');
            const getDivB = document.getElementById('divForB10');
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

    clickDivForA2() {
        if (this.imgA2 == true) {
            const getImgA = document.getElementById('imgA2');
            const getDivA = document.getElementById('divForA2');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgYu5() {
        this.imgYu5 = true;
        this.imgL3 = false;
        this.imgA3 = false;
    };

    clickImgL3() {
        this.imgYu5 = false;
        this.imgL3 = true;
        this.imgA3 = false;
    };

    clickImgA3() {
        this.imgYu5 = false;
        this.imgL3 = false;
        this.imgA3 = true;
    };

    clickDivForYu5() {
        if (this.imgYu5 == true) {
            const getImgYu = document.getElementById('imgYu5');
            const getDivYu = document.getElementById('divForYu5');
            getDivYu!.append(getImgYu!);
            getImgYu!.style.border = 'none';
            getDivYu!.parentElement!.style.border = "3px solid green"; 
        };
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

    clickDivForA3() {
        if (this.imgA3 == true) {
            const getImgA = document.getElementById('imgA3');
            const getDivA = document.getElementById('divForA3');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgYa() {
        this.imgYa = true;
        this.imgM = false;
        this.imgA4 = false;
    };

    clickImgM() {
        this.imgYa = false;
        this.imgM = true;
        this.imgA4 = false;
    };

    clickImgA4() {
        this.imgYa = false;
        this.imgM = false;
        this.imgA4 = true;
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

    clickDivForM() {
        if (this.imgM == true) {
            const getImgM = document.getElementById('imgM');
            const getDivM = document.getElementById('divForM');
            getDivM!.append(getImgM!);
            getImgM!.style.border = 'none';
            getDivM!.parentElement!.style.border = "3px solid green"; 
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

    clickImgJ() {
        this.imgJ = true;
        this.imgU6 = false;
        this.imgK3 = false;
    };

    clickImgU6() {
        this.imgJ = false;
        this.imgU6 = true;
        this.imgK3 = false;
    };

    clickImgK3() {
        this.imgJ = false;
        this.imgU6 = false;
        this.imgK3 = true;
    };

    clickDivForJ() {
        if (this.imgJ == true) {
            const getImgJ = document.getElementById('imgJ');
            const getDivJ = document.getElementById('divForJ');
            getImgJ!.style.border = 'none';
            getDivJ!.append(getImgJ!);
            getDivJ!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForU6() {
        if (this.imgU6 == true) {
            const getImgU = document.getElementById('imgU6');
            const getDivU = document.getElementById('divForU6');
            getImgU!.style.border = 'none';
            getDivU!.append(getImgU!);
            getDivU!.parentElement!.style.border = "3px solid green"; 
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

    clickImgYo() {
        this.imgYo = true;
        this.imgJ2 = false;
    };

    clickImgJ2() {
        this.imgYo = false;
        this.imgJ2 = true;
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

    clickDivForJ2() {
        if (this.imgJ2 == true) {
            const getImgJ = document.getElementById('imgJ2');
            const getDivJ = document.getElementById('divForJ2');
            getDivJ!.append(getImgJ!);
            getImgJ!.style.border = 'none';
            getDivJ!.parentElement!.style.border! = "3px solid green"; 
        };
    };
    
    clickImgPit() {
        this.imgPit = true;
        this.imgWhirligig2 = false;
        this.imgBeatle = false;
        this.imgHedgehog = false;
        this.imgSquirrel2 = false;
        this.imgBread = false;
    };

    clickImgWhirligig2() {
        this.imgPit = false;
        this.imgWhirligig2 = true;
        this.imgBeatle = false;
        this.imgHedgehog = false;
        this.imgSquirrel2 = false;
        this.imgBread = false;
    };

    clickImgBeatle() {
        this.imgPit = false;
        this.imgWhirligig2 = false;
        this.imgBeatle = true;
        this.imgHedgehog = false;
        this.imgSquirrel2 = false;
        this.imgBread = false;
    };

    clickImgHedgehog() {
        this.imgPit = false;
        this.imgWhirligig2 = false;
        this.imgBeatle = false;
        this.imgHedgehog = true;
        this.imgSquirrel2 = false;
        this.imgBread = false;
    };

    clickImgSquirrel2() {
        this.imgPit = false;
        this.imgWhirligig2 = false;
        this.imgBeatle = false;
        this.imgHedgehog = false;
        this.imgSquirrel2 = true;
        this.imgBread = false;
    };

    clickImgBread() {
        this.imgPit = false;
        this.imgWhirligig2 = false;
        this.imgBeatle = false;
        this.imgHedgehog = false;
        this.imgSquirrel2 = false;
        this.imgBread = true;
    };

    clickDivForPit() {
        if (this.imgPit == true) {
            const getImgPit = document.getElementById('pit');
            const getDivPit = document.getElementById('divForPit');
            getDivPit!.append(getImgPit!);
            getDivPit!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForWhirligig2() {
        if (this.imgWhirligig2 == true) {
            const getImgWhirligig = document.getElementById('whirligig2');
            const getDivWhirligig = document.getElementById('divForWhirligig2');
            getDivWhirligig!.append(getImgWhirligig!);
            getDivWhirligig!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForBeatle() {
        if (this.imgBeatle == true) {
            const getImgBeatle = document.getElementById('beatle');
            const getDivBeatle = document.getElementById('divForBeatle');
            getDivBeatle!.append(getImgBeatle!);
            getDivBeatle!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForHedgehog() {
        if (this.imgHedgehog == true) {
            const getImgHedgehog = document.getElementById('hedgehog');
            const getDivHedgehog = document.getElementById('divForHedgehog');
            getDivHedgehog!.append(getImgHedgehog!);
            getDivHedgehog!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForSquirrel2() {
        if (this.imgSquirrel2 == true) {
            const getImgSquirrel = document.getElementById('squirrel2');
            const getDivSquirrel = document.getElementById('divForSquirrel2');
            getDivSquirrel!.append(getImgSquirrel!);
            getDivSquirrel!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForBread() {
        if (this.imgBread == true) {
            const getImgBread = document.getElementById('bread');
            const getDivBread = document.getElementById('divForBread');
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

        if(valueOfInput1 == "ЁЖ") {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "ЖУК") {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "ЯМА") {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "ЮЛА") {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "БЕЛКА") {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "БУЛКА") {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        function right() {alert('Правильно!')}

        if(checkValue === 6) {
            setTimeout(right, 1000);
        };
    };
}