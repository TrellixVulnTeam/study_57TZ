import { Component } from "@angular/core";

@Component({
    selector: 'russian13',
    templateUrl: './russian-13.component.html',
    styleUrls: ['./russian-13.component.scss']
})

export class Russian13 {
    imgFox = false;
    imgOnion = false;
    imgLemon = false;
    imgMoose = false;
    imgMagnifier = false;
    imgWateringCan = false;
    imgFrog = false;
    imgSpoon = false;
    imgWoodpecker = false;
    imgDragon = false;
    imgSofa = false;
    imgMelon = false;
    imgDolphin = false;
    imgBlackbird = false;
    imgHouse = false;
    imgTree = false;
    imgHippopotamus = false;
    imgRam = false;
    imgTicket = false;
    imgRunner = false;
    imgSquirrel = false;
    imgDrum = false;
    imgBanana = false;
    imgBarrel = false;
    imgClod = false;
    imgGrandba = false;
    imgSnake = false;
    imgPow = false;
    imgSquirrel2 = false;
    imgB9 = false;
    imgA = false;
    imgB10 = false;
    imgA2 = false;
    imgB11 = false;
    imgE = false;
    imgL9 = false;
    imgK = false;
    imgA3 = false;
    imgK2 = false;
    imgO = false;
    imgM = false;
    imgL10 = false;
    imgA4 = false;
    imgP = false;
    imgA5 = false;
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

        if(valueOfInput1 == "Ю") {
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

        if(valueOfInput3 == "Л") {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "П") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "М") {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Я") {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "О") {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "И") {
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

        if(valueOfInput10 == "Ё") {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "У") {
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

        if(valueOfInput13 == "К") {
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

        if(checkValue === 14) {
            setTimeout(this.viewDiv3, 1000);
        }
    };

    clickImgWateringCan () {
        this.imgWateringCan = true;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgMoose () {
        this.imgWateringCan = false;
        this.imgMoose = true;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgOnion () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = true;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgFrog () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = true;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgLemon () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = true;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgSpoon () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = true;
        this.imgFox = false;
        this.imgMagnifier = false;
    };

    clickImgFox () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = true;
        this.imgMagnifier = false;
    };

    clickImgMagnifier () {
        this.imgWateringCan = false;
        this.imgMoose = false;
        this.imgOnion = false;
        this.imgFrog = false;
        this.imgLemon = false;
        this.imgSpoon = false;
        this.imgFox = false;
        this.imgMagnifier = true;
    };

    clickImgL() {
        if (this.imgOnion == true) {
            document.getElementById('onion')!.remove(); 
        } else if (this.imgMoose == true) {
            document.getElementById('moose')!.remove(); 
        } else if (this.imgSpoon == true) {
            document.getElementById('spoon')!.remove(); 
        } else if (this.imgMagnifier == true) {
            document.getElementById('magnifier')!.remove();
        }
    };

    clickImgL2() {
        if (this.imgFox == true) {
            document.getElementById('fox')!.remove(); 
        } else if (this.imgFrog == true) {
            document.getElementById('frog')!.remove(); 
        } else if (this.imgWateringCan == true) {
            document.getElementById('wateringCan')!.remove(); 
        } else if (this.imgLemon == true) {
            document.getElementById('lemon')!.remove();
        }
    };

    clickImgBlackbird () {
        this.imgBlackbird = true;
        this.imgWoodpecker = false;
        this.imgDragon = false;
        this.imgDolphin = false;
        this.imgSofa = false;
        this.imgHouse = false;
        this.imgTree = false;
        this.imgMelon = false;
    };

    clickImgWoodpecker () {
        this.imgBlackbird = false;
        this.imgWoodpecker = true;
        this.imgDragon = false;
        this.imgDolphin = false;
        this.imgSofa = false;
        this.imgHouse = false;
        this.imgTree = false;
        this.imgMelon = false;
    };

    clickImgDragon () {
        this.imgBlackbird = false;
        this.imgWoodpecker = false;
        this.imgDragon = true;
        this.imgDolphin = false;
        this.imgSofa = false;
        this.imgHouse = false;
        this.imgTree = false;
        this.imgMelon = false;
    };

    clickImgDolphin () {
        this.imgBlackbird = false;
        this.imgWoodpecker = false;
        this.imgDragon = false;
        this.imgDolphin = true;
        this.imgSofa = false;
        this.imgHouse = false;
        this.imgTree = false;
        this.imgMelon = false;
    };

    clickImgSofa () {
        this.imgBlackbird = false;
        this.imgWoodpecker = false;
        this.imgDragon = false;
        this.imgDolphin = false;
        this.imgSofa = true;
        this.imgHouse = false;
        this.imgTree = false;
        this.imgMelon = false;
    };

    clickImgHouse () {
        this.imgBlackbird = false;
        this.imgWoodpecker = false;
        this.imgDragon = false;
        this.imgDolphin = false;
        this.imgSofa = false;
        this.imgHouse = true;
        this.imgTree = false;
        this.imgMelon = false;
    };

    clickImgTree () {
        this.imgBlackbird = false;
        this.imgWoodpecker = false;
        this.imgDragon = false;
        this.imgDolphin = false;
        this.imgSofa = false;
        this.imgHouse = false;
        this.imgTree = true;
        this.imgMelon = false;
    };

    clickImgMelon () {
        this.imgBlackbird = false;
        this.imgWoodpecker = false;
        this.imgDragon = false;
        this.imgDolphin = false;
        this.imgSofa = false;
        this.imgHouse = false;
        this.imgTree = false;
        this.imgMelon = true;
    };

    clickImgD() {
        if (this.imgMelon == true) {
            document.getElementById('melon')!.remove(); 
        } else if (this.imgDragon == true) {
            document.getElementById('dragon')!.remove(); 
        } else if (this.imgBlackbird == true) {
            document.getElementById('blackbird')!.remove(); 
        } else if (this.imgHouse == true) {
            document.getElementById('house')!.remove();
        }
    };

    clickImgD2() {
        if (this.imgSofa == true) {
            const getImgSofa = document.getElementById('sofa')!.remove(); 
        } else if (this.imgWoodpecker == true) {
            const getImgWoodpecker = document.getElementById('woodpecker')!.remove(); 
        } else if (this.imgTree == true) {
            const getImgTree = document.getElementById('tree')!.remove(); 
        } else if (this.imgDolphin == true) {
            const getImgDolphin = document.getElementById('dolphin')!.remove();
        }
    };

    
    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input15')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input16')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input22')).value;

        if(valueOfInput1 == "И") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "Ё") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "У") {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "О") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "А") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Е") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "Я") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "Ю") {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv6, 1000);
        }
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input28')).value;

        if(valueOfInput1 == "Л") {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "П") {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "М") {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "К") {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "Д") {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Ж") {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 6) {
            setTimeout(this.viewDiv7, 1000);
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

    clickImgB9() {
        this.imgB9 = true;
        this.imgA = false;
        this.imgB10 = false;
        this.imgA2 = false;
    };

    clickImgA() {
        this.imgB9 = false;
        this.imgA = true;
        this.imgB10 = false;
        this.imgA2 = false;
    };

    clickImgB10() {
        this.imgB9 = false;
        this.imgA = false;
        this.imgB10 = true;
        this.imgA2 = false;
    };

    clickImgA2() {
        this.imgB9 = false;
        this.imgA = false;
        this.imgB10 = false;
        this.imgA2 = true;
    };

    clickDivForB9() {
        if (this.imgB9 == true) {
            const getImgB = document.getElementById('imgB9');
            const getDivB = document.getElementById('divForB9');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgB10 == true) {
            const getImgB = document.getElementById('imgB10');
            const getDivB = document.getElementById('divForB9');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA() {
        if (this.imgA == true) {
            const getImgA = document.getElementById('imgA');
            const getDivA = document.getElementById('divForA');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA2 == true) {
            const getImgA = document.getElementById('imgA2');
            const getDivA = document.getElementById('divForA');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green";
        };
    };

    clickDivForB10() {
        if (this.imgB9 == true) {
            const getImgB = document.getElementById('imgB9');
            const getDivB = document.getElementById('divForB10');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgB10 == true) {
            const getImgB = document.getElementById('imgB10');
            const getDivB = document.getElementById('divForB10');
            getDivB!.append(getImgB!);
            getImgB!.style.border = 'none';
            getDivB!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA2() {
        if (this.imgA == true) {
            const getImgA = document.getElementById('imgA');
            const getDivA = document.getElementById('divForA2');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA2 == true) {
            const getImgA = document.getElementById('imgA2');
            const getDivA = document.getElementById('divForA2');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green";
        };
    };

    clickImgB11 () {
        this.imgB11 = true;
        this.imgE = false;
        this.imgL9 = false;
        this.imgK = false;
        this.imgA3 = false;
    };

    clickImgE () {
        this.imgB11 = false;
        this.imgE = true;
        this.imgL9 = false;
        this.imgK = false;
        this.imgA3 = false;
    };

    clickImgL9 () {
        this.imgB11 = false;
        this.imgE = false;
        this.imgL9 = true;
        this.imgK = false;
        this.imgA3 = false;
    };

    clickImgK () {
        this.imgB11 = false;
        this.imgE = false;
        this.imgL9 = false;
        this.imgK = true;
        this.imgA3 = false;
    };

    clickImgA3 () {
        this.imgB11 = false;
        this.imgE = false;
        this.imgL9 = false;
        this.imgK = false;
        this.imgA3 = true;
    };

    clickDivForB11() {
        if (this.imgB11 == true) {
            const getImgB = document.getElementById('imgB11');
            const getDivB = document.getElementById('divForB11');
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

    clickDivForL9() {
        if (this.imgL9 == true) {
            const getImgL = document.getElementById('imgL9');
            const getDivL = document.getElementById('divForL9');
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

    clickDivForA3() {
        if (this.imgA3 == true) {
            const getImgA = document.getElementById('imgA3');
            const getDivA = document.getElementById('divForA3');
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

    clickImgK2() {
        this.imgK2 = true;
        this.imgO = false;
        this.imgM = false;
    };

    clickImgO() {
        this.imgK2 = false;
        this.imgO = true;
        this.imgM = false;
    };

    clickImgM() {
        this.imgK2 = false;
        this.imgO = false;
        this.imgM = true;
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

    clickImgL10() {
        this.imgL10 = true;
        this.imgA4 = false;
        this.imgP = false;
        this.imgA5 = false
    };

    clickImgA4() {
        this.imgL10 = false;
        this.imgA4 = true;
        this.imgP = false;
        this.imgA5 = false
    };

    clickImgP() {
        this.imgL10 = false;
        this.imgA4 = false;
        this.imgP = true;
        this.imgA5 = false
    };

    clickImgA5() {
        this.imgL10 = false;
        this.imgA4 = false;
        this.imgP = false;
        this.imgA5 = true;
    };

    clickDivForL10() {
        if (this.imgL10 == true) {
            const getImgL = document.getElementById('imgL10');
            const getDivL = document.getElementById('divForL10');
            getDivL!.append(getImgL!);
            getImgL!.style.border = 'none';
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA4() {
        if (this.imgA4 == true) {
            const getImgA = document.getElementById('imgA4');
            const getDivA = document.getElementById('divForA4');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA5 == true) {
            const getImgA = document.getElementById('imgA5');
            const getDivA = document.getElementById('divForA4');
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

    clickDivForA5() {
        if (this.imgA4 == true) {
            const getImgA = document.getElementById('imgA4');
            const getDivA = document.getElementById('divForA5');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA5 == true) {
            const getImgA = document.getElementById('imgA5');
            const getDivA = document.getElementById('divForA5');
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
    };

    clickImgGrandba() {
        this.imgPow = false;
        this.imgGrandba = true;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgSquirrel2 = false;
    };

    clickImgClod() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = true;
        this.imgSnake = false;
        this.imgSquirrel2 = false;
    };

    clickImgSnake() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = false;
        this.imgSnake = true;
        this.imgSquirrel2 = false;
    };

    clickImgSquirrel2() {
        this.imgPow = false;
        this.imgGrandba = false;
        this.imgClod = false;
        this.imgSnake = false;
        this.imgSquirrel2 = true;
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

    checkInput4() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input29')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input30')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input31')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input32')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input33')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input34')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input35')).value;

        if(valueOfInput1 == "БАБА") {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "БЕЛКА") {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "ЖУК") {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "ЛУК") {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "ЛУПА") {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "ДОМ") {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "ЁЖ") {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        function right() {alert('Правильно!')}

        if(checkValue === 7) {
            setTimeout(right, 1000);
        };
    };
}