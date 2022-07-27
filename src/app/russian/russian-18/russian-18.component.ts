import { Component } from "@angular/core";

@Component({
    selector: 'russian18',
    templateUrl: './russian-18.component.html',
    styleUrls: ['./../russian-16/russian-16.component.scss']
})

export class Russian18 {
    imgBanana = false;
    imgTicket = false;
    imgBarrel = false;
    imgRam = false;
    imgDrum = false;
    imgRunner = false;
    imgSquirrel = false;
    imgHippopotamus = false;
    imgWoodpecker = false;
    imgDragon = false;
    imgSofa = false;
    imgMelon = false;
    imgDolphin = false;
    imgBlackbird = false;
    imgHouse = false;
    imgTree = false;
    imgKettlebell = false;
    imgGuitar = false;
    imgHyena = false;
    imgDahlias = false;
    imgGoose = false;
    imgDwarf = false;
    imgRook = false;
    imgPigeon = false;
    imgG3 = false;
    imgN = false;
    imgO = false;
    imgM = false;
    imgG4 = false;
    imgA = false;
    imgL = false;
    imgK = false;
    imgA2 = false;
    imgG5 = false;
    imgI = false;
    imgE = false;
    imgN2 = false;
    imgA3 = false;
    imgJ5 = false;
    imgU = false;
    imgK10 = false;

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
        const valueOfInput16 = (<HTMLInputElement>document.getElementById('input16')).value;

        if(valueOfInput1 == "Б") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "Н") {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "Д") {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "И") {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "У") {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "Ё") {
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

        if(valueOfInput8 == "О") {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "Я") {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput10 == "Е") {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "М") {
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

        if(valueOfInput13 == "К") {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput14 == "Л") {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput15 == "Ж") {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput16 == "Ю") {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 16) {
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
            const getImgBanana = document.getElementById('banana')!.remove();
        } else if (this.imgDrum == true) {
            const getImgDrum = document.getElementById('drum')!.remove();
        } else if (this.imgRam == true) {
            const getImgRam = document.getElementById('ram')!.remove(); 
        } else if (this.imgBarrel == true) {
            const getImgBarrel = document.getElementById('barrel')!.remove();
        }
    };

    clickImgB2() {
        if (this.imgHippopotamus == true) {
            const getImgHippopotamus = document.getElementById('hippopotamus')!.remove();
        } else if (this.imgRunner == true) {
            const getImgRunner = document.getElementById('runner')!.remove();
        } else if (this.imgTicket == true) {
            const getImgTicket = document.getElementById('ticket')!.remove(); 
        } else if (this.imgSquirrel == true) {
            const getImgSquirrel = document.getElementById('squirrel')!.remove();
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
            document.getElementById('sofa')!.remove(); 
        } else if (this.imgWoodpecker == true) {
            document.getElementById('woodpecker')!.remove(); 
        } else if (this.imgTree == true) {
            document.getElementById('tree')!.remove(); 
        } else if (this.imgDolphin == true) {
            document.getElementById('dolphin')!.remove();
        }
    };

    clickImgDwarf () {
        this.imgDwarf = true;
        this.imgPigeon = false;
        this.imgRook = false;
        this.imgGoose = false;
        this.imgKettlebell = false;
        this.imgHyena = false;
        this.imgGuitar = false;
        this.imgDahlias = false;
    };

    clickImgPigeon () {
        this.imgDwarf = false;
        this.imgPigeon = true;
        this.imgRook = false;
        this.imgGoose = false;
        this.imgKettlebell = false;
        this.imgHyena = false;
        this.imgGuitar = false;
        this.imgDahlias = false;
    };

    clickImgRook () {
        this.imgDwarf = false;
        this.imgPigeon = false;
        this.imgRook = true;
        this.imgGoose = false;
        this.imgKettlebell = false;
        this.imgHyena = false;
        this.imgGuitar = false;
        this.imgDahlias = false;
    };

    clickImgGoose () {
        this.imgDwarf = false;
        this.imgPigeon = false;
        this.imgRook = false;
        this.imgGoose = true;
        this.imgKettlebell = false;
        this.imgHyena = false;
        this.imgGuitar = false;
        this.imgDahlias = false;
    };

    clickImgKettlebell () {
        this.imgDwarf = false;
        this.imgPigeon = false;
        this.imgRook = false;
        this.imgGoose = false;
        this.imgKettlebell = true;
        this.imgHyena = false;
        this.imgGuitar = false;
        this.imgDahlias = false;
    };

    clickImgHyena () {
        this.imgDwarf = false;
        this.imgPigeon = false;
        this.imgRook = false;
        this.imgGoose = false;
        this.imgKettlebell = false;
        this.imgHyena = true;
        this.imgGuitar = false;
        this.imgDahlias = false;
    };

    clickImgGuitar () {
        this.imgDwarf = false;
        this.imgPigeon = false;
        this.imgRook = false;
        this.imgGoose = false;
        this.imgKettlebell = false;
        this.imgHyena = false;
        this.imgGuitar = true;
        this.imgDahlias = false;
    };

    clickImgDahlias () {
        this.imgDwarf = false;
        this.imgPigeon = false;
        this.imgRook = false;
        this.imgGoose = false;
        this.imgKettlebell = false;
        this.imgHyena = false;
        this.imgGuitar = false;
        this.imgDahlias = true;
    };

    clickImgG() {
        if (this.imgGoose == true) {
            document.getElementById('goose')!.remove(); 
        } else if (this.imgPigeon == true) {
            document.getElementById('pigeon')!.remove(); 
        } else if (this.imgRook == true) {
            document.getElementById('rook')!.remove(); 
        } else if (this.imgDwarf == true) {
            document.getElementById('dwarf')!.remove();
        }
    };

    clickImgG2() {
        if (this.imgKettlebell == true) {
            document.getElementById('kettlebell')!.remove(); 
        } else if (this.imgHyena == true) {
            document.getElementById('hyena')!.remove(); 
        } else if (this.imgGuitar == true) {
            document.getElementById('guitar')!.remove(); 
        } else if (this.imgDahlias == true) {
            document.getElementById('dahlias')!.remove();
        }
    };

    clickImgG3() {
        this.imgG3 = true;
        this.imgN = false;
        this.imgO = false;
        this.imgM = false;
    };

    clickImgN() {
        this.imgG3 = false;
        this.imgN = true;
        this.imgO = false;
        this.imgM = false;
    };

    clickImgO() {
        this.imgG3 = false;
        this.imgN = false;
        this.imgO = true;
        this.imgM = false;
    };

    clickImgM() {
        this.imgG3 = false;
        this.imgN = false;
        this.imgO = false;
        this.imgM = true;
    };

    clickDivForG3() {
        if (this.imgG3 == true) {
            const getImgG = document.getElementById('imgG3');
            const getDivG = document.getElementById('divForG3');
            getDivG!.append(getImgG!);
            getImgG!.style.border = 'none';
            getDivG!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForN() {
        if (this.imgN == true) {
            const getImgN = document.getElementById('imgN');
            const getDivN = document.getElementById('divForN');
            getDivN!.append(getImgN!);
            getImgN!.style.border = 'none';
            getDivN!.parentElement!.style.border = "3px solid green"; 
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

    clickImgG4() {
        this.imgG4 = true;
        this.imgA = false;
        this.imgL = false;
        this.imgK = false;
        this.imgA2 = false;
    };

    clickImgA() {
        this.imgG4 = false;
        this.imgA = true;
        this.imgL = false;
        this.imgK = false;
        this.imgA2 = false;
    };

    clickImgL() {
        this.imgG4 = false;
        this.imgA = false;
        this.imgL = true;
        this.imgK = false;
        this.imgA2 = false;
    };

    clickImgK() {
        this.imgG4 = false;
        this.imgA = false;
        this.imgL = false;
        this.imgK = true;
        this.imgA2 = false;
    };

    clickImgA2() {
        this.imgG4 = false;
        this.imgA = false;
        this.imgL = false;
        this.imgK = false;
        this.imgA2 = true;
    };

    clickDivForG4() {
        if (this.imgG4 == true) {
            const getImgG = document.getElementById('imgG4');
            const getDivG = document.getElementById('divForG4');
            getDivG!.append(getImgG!);
            getImgG!.style.border = 'none';
            getDivG!.parentElement!.style.border = "3px solid green"; 
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

    clickImgG5() {
        this.imgG5 = true;
        this.imgI = false;
        this.imgE = false;
        this.imgN2 = false;
        this.imgA3 = false;
    };

    clickImgI() {
        this.imgG5 = false;
        this.imgI = true;
        this.imgE = false;
        this.imgN2 = false;
        this.imgA3 = false;
    };

    clickImgE() {
        this.imgG5 = false;
        this.imgI = false;
        this.imgE = true;
        this.imgN2 = false;
        this.imgA3 = false;
    };

    clickImgN2() {
        this.imgG5 = false;
        this.imgI = false;
        this.imgE = false;
        this.imgN2 = true;
        this.imgA3 = false;
    };

    clickImgA3() {
        this.imgG5 = false;
        this.imgI = false;
        this.imgE = false;
        this.imgN2 = false;
        this.imgA3 = true;
    };

    clickDivForG5() {
        if (this.imgG5 == true) {
            const getImgG = document.getElementById('imgG5');
            const getDivG = document.getElementById('divForG5');
            getDivG!.append(getImgG!);
            getImgG!.style.border = 'none';
            getDivG!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForI() {
        if (this.imgI == true) {
            const getImgI = document.getElementById('imgI');
            const getDivI = document.getElementById('divForI');
            getDivI!.append(getImgI!);
            getImgI!.style.border = 'none';
            getDivI!.parentElement!.style.border = "3px solid green"; 
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

    clickDivForN2() {
        if (this.imgN2 == true) {
            const getImgN = document.getElementById('imgN2');
            const getDivN = document.getElementById('divForN2');
            getDivN!.append(getImgN!);
            getImgN!.style.border = 'none';
            getDivN!.parentElement!.style.border = "3px solid green"; 
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

    clickImgJ5() {
        this.imgJ5 = true;
        this.imgU = false;
        this.imgK10 = false;
    };

    clickImgU() {
        this.imgJ5 = false;
        this.imgU = true;
        this.imgK10 = false;
    };

    clickImgK10() {
        this.imgJ5 = false;
        this.imgU = false;
        this.imgK10 = true;
    };

    clickDivForJ5() {
        if (this.imgJ5 == true) {
            const getImgJ = document.getElementById('imgJ5');
            const getDivJ = document.getElementById('divForJ5');
            getImgJ!.style.border = 'none';
            getDivJ!.append(getImgJ!);
            getDivJ!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForU() {
        if (this.imgU == true) {
            const getImgU = document.getElementById('imgU');
            const getDivU = document.getElementById('divForU');
            getImgU!.style.border = 'none';
            getDivU!.append(getImgU!);
            getDivU!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForK10() {
        if (this.imgK10 == true) {
            const getImgK = document.getElementById('imgK10');
            const getDivK = document.getElementById('divForK10');
            getImgK!.style.border = 'none';
            getDivK!.append(getImgK!);
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input17')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input24')).value;

        if(valueOfInput1 == "ГЯ") {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "ГЕ") {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "ГУ") {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "ГА") {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input35')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "ГИ") {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input36')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "ГО") {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input37')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "ГЮ") {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input38')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "ГЁ") {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input39')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv22, 1000);
        };
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input28')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input29')).value;

        if ((valueOfInput1 == "ГНОМ") || (valueOfInput1 == "гном")) {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "ГАЛКА") || (valueOfInput2 == "галка")) {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "ГИЕНА") || (valueOfInput3 == "гиена")) {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "БУЛКА") || (valueOfInput4 == "булка")) {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "БЕЛКА") || (valueOfInput5 == "белка")) {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        function right() {alert('Правильно!')}

        if(checkValue === 5) {
            setTimeout(right, 1000);
        };
    };
}