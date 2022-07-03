import { Component } from "@angular/core";

@Component({
    selector: 'russian14',
    templateUrl: './russian-14.component.html',
    styleUrls: ['./russian-14.component.scss']
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
    imgSquirrel2 = false;
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

        if(valueOfInput1 == "Б") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "Д") {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "Л") {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "К") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "П") {
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

        if(valueOfInput7 == "У") {
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

        if(valueOfInput9 == "А") {
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

        if(valueOfInput12 == "Е") {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput13 == "М") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput14 == "Ж") {
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
            const getB = document.getElementById('imgB');

            getImgBanana!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgDrum == true) {
            const getImgDrum = document.getElementById('drum');
            const getB = document.getElementById('imgB');

            getImgDrum!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgRam == true) {
            const getImgRam = document.getElementById('ram');
            const getB = document.getElementById('imgB');

            getImgRam!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgBarrel == true) {
            const getImgBarrel = document.getElementById('barrel');
            const getB = document.getElementById('imgB');

            getImgBarrel!.remove();
            getB!.style.border = "3px solid green";
        }
    };

    clickImgB2() {
        if (this.imgHippopotamus == true) {
            const getImgHippopotamus = document.getElementById('hippopotamus');
            const getB = document.getElementById('imgB2');

            getImgHippopotamus!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgRunner == true) {
            const getImgRunner = document.getElementById('runner');
            const getB = document.getElementById('imgB2');

            getImgRunner!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgTicket == true) {
            const getImgTicket = document.getElementById('ticket');
            const getB = document.getElementById('imgB2');

            getImgTicket!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgSquirrel == true) {
            const getImgSquirrel = document.getElementById('squirrel');
            const getB = document.getElementById('imgB2');

            getImgSquirrel!.remove();
            getB!.style.border = "3px solid green";
        }
    };

    clickImgB3() {
        if (this.imgBanana == true) {
            const getImgBanana = document.getElementById('banana');
            const getB = document.getElementById('imgB3');

            getImgBanana!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgDrum == true) {
            const getImgDrum = document.getElementById('drum');
            const getB = document.getElementById('imgB3');

            getImgDrum!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgRam == true) {
            const getImgRam = document.getElementById('ram');
            const getB = document.getElementById('imgB3');

            getImgRam!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgBarrel == true) {
            const getImgBarrel = document.getElementById('barrel');
            const getB = document.getElementById('imgB3');

            getImgBarrel!.remove();
            getB!.style.border = "3px solid green";
        }
    };

    clickImgB5() {
        if (this.imgBanana == true) {
            const getImgBanana = document.getElementById('banana');
            const getB = document.getElementById('imgB5');

            getImgBanana!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgDrum == true) {
            const getImgDrum = document.getElementById('drum');
            const getB = document.getElementById('imgB5');

            getImgDrum!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgRam == true) {
            const getImgRam = document.getElementById('ram');
            const getB = document.getElementById('imgB5');

            getImgRam!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgBarrel == true) {
            const getImgBarrel = document.getElementById('barrel');
            const getB = document.getElementById('imgB5');

            getImgBarrel!.remove();
            getB!.style.border = "3px solid green";
        }
    };

    clickImgB7() {
        if (this.imgBanana == true) {
            const getImgBanana = document.getElementById('banana');
            const getB = document.getElementById('imgB7');

            getImgBanana!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgDrum == true) {
            const getImgDrum = document.getElementById('drum');
            const getB = document.getElementById('imgB7');

            getImgDrum!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgRam == true) {
            const getImgRam = document.getElementById('ram');
            const getB = document.getElementById('imgB7');

            getImgRam!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgBarrel == true) {
            const getImgBarrel = document.getElementById('barrel');
            const getB = document.getElementById('imgB7');

            getImgBarrel!.remove();
            getB!.style.border = "3px solid green";
        }
    };

    clickImgB4() {
        if (this.imgHippopotamus == true) {
            const getImgHippopotamus = document.getElementById('hippopotamus');
            const getB = document.getElementById('imgB4');

            getImgHippopotamus!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgRunner == true) {
            const getImgRunner = document.getElementById('runner');
            const getB = document.getElementById('imgB4');

            getImgRunner!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgTicket == true) {
            const getImgTicket = document.getElementById('ticket');
            const getB = document.getElementById('imgB4');

            getImgTicket!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgSquirrel == true) {
            const getImgSquirrel = document.getElementById('squirrel');
            const getB = document.getElementById('imgB4');

            getImgSquirrel!.remove();
            getB!.style.border = "3px solid green";
        }
    };

    clickImgB6() {
        if (this.imgHippopotamus == true) {
            const getImgHippopotamus = document.getElementById('hippopotamus');
            const getB = document.getElementById('imgB6');

            getImgHippopotamus!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgRunner == true) {
            const getImgRunner = document.getElementById('runner');
            const getB = document.getElementById('imgB6');

            getImgRunner!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgTicket == true) {
            const getImgTicket = document.getElementById('ticket');
            const getB = document.getElementById('imgB6');

            getImgTicket!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgSquirrel == true) {
            const getImgSquirrel = document.getElementById('squirrel');
            const getB = document.getElementById('imgB6');

            getImgSquirrel!.remove();
            getB!.style.border = "3px solid green";
        }
    };

    clickImgB8() {
        if (this.imgHippopotamus == true) {
            const getImgHippopotamus = document.getElementById('hippopotamus');
            const getB = document.getElementById('imgB8');

            getImgHippopotamus!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgRunner == true) {
            const getImgRunner = document.getElementById('runner');
            const getB = document.getElementById('imgB8');

            getImgRunner!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgTicket == true) {
            const getImgTicket = document.getElementById('ticket');
            const getB = document.getElementById('imgB8');

            getImgTicket!.remove();
            getB!.style.border = "3px solid green"; 
        } else if (this.imgSquirrel == true) {
            const getImgSquirrel = document.getElementById('squirrel');
            const getB = document.getElementById('imgB8');

            getImgSquirrel!.remove();
            getB!.style.border = "3px solid green";
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
            const getYu = document.getElementById('imgYu');

            getImgWhirligig!.remove();
            getYu!.style.border! = "3px solid green"; 
        } else if (this.imgSeaCadet == true) {
            const getImgSeaCadet = document.getElementById('seaCadet');
            const getYu = document.getElementById('imgYu');

            getImgSeaCadet!.remove();
            getYu!.style.border! = "3px solid green"; 
        } else if (this.imgSkirt == true) {
            const getImgSkirt = document.getElementById('skirt');
            const getYu = document.getElementById('imgYu');

            getImgSkirt!.remove();
            getYu!.style.border! = "3px solid green";
        } else if (this.imgYurt == true) {
            const getImgYurt = document.getElementById('yurt');
            const getYu = document.getElementById('imgYu');

            getImgYurt!.remove();
            getYu!.style.border! = "3px solid green";
        }
    };

    clickImgYu2() {
        if (this.imgWhirligig == true) {
            const getImgWhirligig = document.getElementById('whirligig');
            const getYu = document.getElementById('imgYu2');

            getImgWhirligig!.remove();
            getYu!.style.border! = "3px solid green"; 
        } else if (this.imgSeaCadet == true) {
            const getImgSeaCadet = document.getElementById('seaCadet');
            const getYu = document.getElementById('imgYu2');

            getImgSeaCadet!.remove();
            getYu!.style.border! = "3px solid green"; 
        } else if (this.imgSkirt == true) {
            const getImgSkirt = document.getElementById('skirt');
            const getYu = document.getElementById('imgYu2');

            getImgSkirt!.remove();
            getYu!.style.border! = "3px solid green";
        } else if (this.imgYurt == true) {
            const getImgYurt = document.getElementById('yurt');
            const getYu = document.getElementById('imgYu2');

            getImgYurt!.remove();
            getYu!.style.border! = "3px solid green";
        }
    };

    clickImgYu3() {
        if (this.imgWhirligig == true) {
            const getImgWhirligig = document.getElementById('whirligig');
            const getYu = document.getElementById('imgYu3');

            getImgWhirligig!.remove();
            getYu!.style.border! = "3px solid green"; 
        } else if (this.imgSeaCadet == true) {
            const getImgSeaCadet = document.getElementById('seaCadet');
            const getYu = document.getElementById('imgYu3');

            getImgSeaCadet!.remove();
            getYu!.style.border! = "3px solid green"; 
        } else if (this.imgSkirt == true) {
            const getImgSkirt = document.getElementById('skirt');
            const getYu = document.getElementById('imgYu3');

            getImgSkirt!.remove();
            getYu!.style.border! = "3px solid green";
        } else if (this.imgYurt == true) {
            const getImgYurt = document.getElementById('yurt');
            const getYu = document.getElementById('imgYu3');

            getImgYurt!.remove();
            getYu!.style.border! = "3px solid green";
        }
    };

    clickImgYu4() {
        if (this.imgWhirligig == true) {
            const getImgWhirligig = document.getElementById('whirligig');
            const getYu = document.getElementById('imgYu4');

            getImgWhirligig!.remove();
            getYu!.style.border! = "3px solid green"; 
        } else if (this.imgSeaCadet == true) {
            const getImgSeaCadet = document.getElementById('seaCadet');
            const getYu = document.getElementById('imgYu4');

            getImgSeaCadet!.remove();
            getYu!.style.border! = "3px solid green"; 
        } else if (this.imgSkirt == true) {
            const getImgSkirt = document.getElementById('skirt');
            const getYu = document.getElementById('imgYu4');

            getImgSkirt!.remove();
            getYu!.style.border! = "3px solid green";
        } else if (this.imgYurt == true) {
            const getImgYurt = document.getElementById('yurt');
            const getYu = document.getElementById('imgYu4');

            getImgYurt!.remove();
            getYu!.style.border! = "3px solid green";
        }
    };

    clickImgU() {
        if (this.imgDuck == true) {
            const getImgDuck = document.getElementById('duck');
            const getU = document.getElementById('imgU');

            getImgDuck!.remove();
            getU!.style.border! = "3px solid green"; 
        } else if (this.imgIron == true) {
            const getImgIron = document.getElementById('iron');
            const getU = document.getElementById('imgU');

            getImgIron!.remove();
            getU!.style.border! = "3px solid green"; 
        } else if (this.imgUdot == true) {
            const getImgUdot = document.getElementById('udot');
            const getU = document.getElementById('imgU');

            getImgUdot!.remove();
            getU!.style.border! = "3px solid green";
        } else if (this.imgRod == true) {
            const getImgRod = document.getElementById('rod');
            const getU = document.getElementById('imgU');

            getImgRod!.remove();
            getU!.style.border! = "3px solid green";
        }
    };

    clickImgU2() {
        if (this.imgDuck == true) {
            const getImgDuck = document.getElementById('duck');
            const getU = document.getElementById('imgU2');

            getImgDuck!.remove();
            getU!.style.border! = "3px solid green"; 
        } else if (this.imgIron == true) {
            const getImgIron = document.getElementById('iron');
            const getU = document.getElementById('imgU2');

            getImgIron!.remove();
            getU!.style.border! = "3px solid green"; 
        } else if (this.imgUdot == true) {
            const getImgUdot = document.getElementById('udot');
            const getU = document.getElementById('imgU2');

            getImgUdot!.remove();
            getU!.style.border! = "3px solid green";
        } else if (this.imgRod == true) {
            const getImgRod = document.getElementById('rod');
            const getU = document.getElementById('imgU2');

            getImgRod!.remove();
            getU!.style.border! = "3px solid green";
        }
    };

    clickImgU3() {
        if (this.imgDuck == true) {
            const getImgDuck = document.getElementById('duck');
            const getU = document.getElementById('imgU3');

            getImgDuck!.remove();
            getU!.style.border! = "3px solid green"; 
        } else if (this.imgIron == true) {
            const getImgIron = document.getElementById('iron');
            const getU = document.getElementById('imgU3');

            getImgIron!.remove();
            getU!.style.border! = "3px solid green"; 
        } else if (this.imgUdot == true) {
            const getImgUdot = document.getElementById('udot');
            const getU = document.getElementById('imgU3');

            getImgUdot!.remove();
            getU!.style.border! = "3px solid green";
        } else if (this.imgRod == true) {
            const getImgRod = document.getElementById('rod');
            const getU = document.getElementById('imgU3');

            getImgRod!.remove();
            getU!.style.border! = "3px solid green";
        }
    };

    clickImgU4() {
        if (this.imgDuck == true) {
            const getImgDuck = document.getElementById('duck');
            const getU = document.getElementById('imgU4');

            getImgDuck!.remove();
            getU!.style.border! = "3px solid green"; 
        } else if (this.imgIron == true) {
            const getImgIron = document.getElementById('iron');
            const getU = document.getElementById('imgU4');

            getImgIron!.remove();
            getU!.style.border! = "3px solid green"; 
        } else if (this.imgUdot == true) {
            const getImgUdot = document.getElementById('udot');
            const getU = document.getElementById('imgU4');

            getImgUdot!.remove();
            getU!.style.border! = "3px solid green";
        } else if (this.imgRod == true) {
            const getImgRod = document.getElementById('rod');
            const getU = document.getElementById('imgU4');

            getImgRod!.remove();
            getU!.style.border! = "3px solid green";
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
        this.imgSquirrel2 = false;
        this.imgBread = false;
    };

    clickImgGrandba() {
        this.imgPow = false;
        this.imgGrandba = true;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgSquirrel2 = false;
        this.imgBread = false;
    };

    clickImgClod() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = true;
        this.imgSnake = false;
        this.imgSquirrel2 = false;
        this.imgBread = false;
    };

    clickImgSnake() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = false;
        this.imgSnake = true;
        this.imgSquirrel2 = false;
        this.imgBread = false;
    };

    clickImgSquirrel2() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgSquirrel2 = true;
        this.imgBread = false;
    };

    clickImgBread() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgSquirrel2 = false;
        this.imgBread = true;
    };

    clickDivForPow() {
        if (this.imgPow == true) {
            const getImgPow = document.getElementById('pow');
            const getDivPow = document.getElementById('divForPow');
            getDivPow!.append(getImgPow!);
            getDivPow!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForGrandba() {
        if (this.imgGrandba == true) {
            const getImgGrandba = document.getElementById('grandba');
            const getDivGrandba = document.getElementById('divForGrandba');
            getDivGrandba!.append(getImgGrandba!);
            getDivGrandba!.parentElement!.style.border! = "3px solid green"; 
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

        if(valueOfInput1 == "БУЛКА") {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "ЛУК") {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "КОМ") {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "ПОЛ") {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "МАМА") {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "ПАПА") {
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