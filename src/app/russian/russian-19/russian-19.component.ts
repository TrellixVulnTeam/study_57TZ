import { Component } from "@angular/core";

@Component({
    selector: 'russian19',
    templateUrl: './russian-19.component.html',
    styleUrls: ['./russian-19.component.scss']
})

export class Russian19 {
    imgKettlebell = false;
    imgGuitar = false;
    imgHyena = false;
    imgDahlias = false;
    imgGoose = false;
    imgDwarf = false;
    imgRook = false;
    imgPigeon = false;
    imgWoodpecker = false;
    imgDragon = false;
    imgSofa = false;
    imgMelon = false;
    imgDolphin = false;
    imgBlackbird = false;
    imgHouse = false;
    imgTree = false;
    imgG3 = false;
    imgA = false;
    imgM = false;
    imgA2 = false;
    imgK = false;
    imgB11 = false;
    imgE = false;
    imgL9 = false;
    imgK2 = false;
    imgA3 = false;
    imgU = false;
    imgD3 = false;
    imgO = false;
    imgD4 = false;
    imgP = false;
    imgA4 = false;
    imgN = false;
    imgD5 = false;
    imgA5 = false;
    imgM2 = false;
    imgA6 = false;
    imgL = false;
    imgI = false;
    imgN2 = false;
    imgA7 = false;

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
        const valueOfInput17 = (<HTMLInputElement>document.getElementById('input17')).value;

        if((valueOfInput1 == "Д") || (valueOfInput1 == "д")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "Ж") || (valueOfInput2 == "ж")) {
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

        if((valueOfInput5 == "И") || (valueOfInput5 == "и")) {
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

        if((valueOfInput7 == "Ё") || (valueOfInput7 == "ё")) {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "А") || (valueOfInput8 == "а")) {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput9 == "О") || (valueOfInput9 == "о")) {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput10 == "Я") || (valueOfInput10 == "я")) {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput11 == "Е") || (valueOfInput11 == "е")) {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput12 == "М") || (valueOfInput12 == "м")) {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input12')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput13 == "П") || (valueOfInput13 == "п")) {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input13')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput14 == "Ю") || (valueOfInput14 == "ю")) {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input14')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput15 == "Н") || (valueOfInput15 == "н")) {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input15')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput16 == "Б") || (valueOfInput16 == "б")) {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input16')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput17 == "Г") || (valueOfInput17 == "г")) {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input17')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 17) {
            setTimeout(this.viewDiv3, 1000);
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

    clickImgG3() {
        this.imgG3 = true;
        this.imgA = false;
        this.imgM = false;
        this.imgA2 = false;
        this.imgK = false;
    };

    clickImgA() {
        this.imgG3 = false;
        this.imgA = true;
        this.imgM = false;
        this.imgA2 = false;
        this.imgK = false;
    };

    clickImgM() {
        this.imgG3 = false;
        this.imgA = false;
        this.imgM = true;
        this.imgA2 = false;
        this.imgK = false;
    };

    clickImgA2() {
        this.imgG3 = false;
        this.imgA = false;
        this.imgM = false;
        this.imgA2 = true;
        this.imgK = false;
    };

    clickImgK() {
        this.imgG3 = false;
        this.imgA = false;
        this.imgM = false;
        this.imgA2 = false;
        this.imgK = true;
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

    clickDivForM() {
        if (this.imgM == true) {
            const getImgM = document.getElementById('imgM');
            const getDivM = document.getElementById('divForM');
            getDivM!.append(getImgM!);
            getImgM!.style.border = 'none';
            getDivM!.parentElement!.style.border = "3px solid green"; 
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

    clickDivForK() {
        if (this.imgK == true) {
            const getImgK = document.getElementById('imgK');
            const getDivK = document.getElementById('divForK');
            getDivK!.append(getImgK!);
            getImgK!.style.border = 'none';
            getDivK!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgB11 () {
        this.imgB11 = true;
        this.imgE = false;
        this.imgL9 = false;
        this.imgK2 = false;
        this.imgA3 = false;
    };

    clickImgE () {
        this.imgB11 = false;
        this.imgE = true;
        this.imgL9 = false;
        this.imgK2 = false;
        this.imgA3 = false;
    };

    clickImgL9 () {
        this.imgB11 = false;
        this.imgE = false;
        this.imgL9 = true;
        this.imgK2 = false;
        this.imgA3 = false;
    };

    clickImgK2 () {
        this.imgB11 = false;
        this.imgE = false;
        this.imgL9 = false;
        this.imgK2 = true;
        this.imgA3 = false;
    };

    clickImgA3 () {
        this.imgB11 = false;
        this.imgE = false;
        this.imgL9 = false;
        this.imgK2 = false;
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

    clickDivForK2() {
        if (this.imgK2 == true) {
            const getImgK = document.getElementById('imgK2');
            const getDivK = document.getElementById('divForK2');
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

    clickImgU () {
        this.imgU = true;
        this.imgD3 = false;
        this.imgO = false;
        this.imgD4 = false;
    };

    clickImgD3 () {
        this.imgU = false;
        this.imgD3 = true;
        this.imgO = false;
        this.imgD4 = false;
    };

    clickImgO () {
        this.imgU = false;
        this.imgD3 = false;
        this.imgO = true;
        this.imgD4 = false;
    };

    clickImgD4 () {
        this.imgU = false;
        this.imgD3 = false;
        this.imgO = false;
        this.imgD4 = true;
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

    clickDivForD3() {
        if (this.imgD3 == true) {
            const getImgD = document.getElementById('imgD3');
            const getDivD = document.getElementById('divForD3');
            getDivD!.append(getImgD!);
            getImgD!.style.border = 'none';
            getDivD!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgD4 == true) {
            const getImgD = document.getElementById('imgD4');
            const getDivD = document.getElementById('divForD3');
            getDivD!.append(getImgD!);
            getImgD!.style.border = 'none';
            getDivD!.parentElement!.style.border = "3px solid green"; 
        }
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

    clickDivForD4() {
        if (this.imgD3 == true) {
            const getImgD = document.getElementById('imgD3');
            const getDivD = document.getElementById('divForD4');
            getDivD!.append(getImgD!);
            getImgD!.style.border = 'none';
            getDivD!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgD4 == true) {
            const getImgD = document.getElementById('imgD4');
            const getDivD = document.getElementById('divForD4');
            getDivD!.append(getImgD!);
            getImgD!.style.border = 'none';
            getDivD!.parentElement!.style.border = "3px solid green"; 
        }
    };

    clickImgP () {
        this.imgP = true;
        this.imgA4 = false;
        this.imgN = false;
        this.imgD5 = false;
        this.imgA5 = false;
    };

    clickImgA4 () {
        this.imgP = false;
        this.imgA4 = true;
        this.imgN = false;
        this.imgD5 = false;
        this.imgA5 = false;
    };

    clickImgN () {
        this.imgP = false;
        this.imgA4 = false;
        this.imgN = true;
        this.imgD5 = false;
        this.imgA5 = false;
    };

    clickImgD5 () {
        this.imgP = false;
        this.imgA4 = false;
        this.imgN = false;
        this.imgD5 = true;
        this.imgA5 = false;
    };

    clickImgA5 () {
        this.imgP = false;
        this.imgA4 = false;
        this.imgN = false;
        this.imgD5 = false;
        this.imgA5 = true;
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
        };
    };

    clickDivForD5() {
        if (this.imgD5 == true) {
            const getImgD = document.getElementById('imgD5');
            const getDivD = document.getElementById('divForD5');
            getDivD!.append(getImgD!);
            getImgD!.style.border = 'none';
            getDivD!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickImgM2 () {
        this.imgM2 = true;
        this.imgA6 = false;
        this.imgL = false;
        this.imgI = false;
        this.imgN2 = false;
        this.imgA7 = false;
    };

    clickImgA6 () {
        this.imgM2 = false;
        this.imgA6 = true;
        this.imgL = false;
        this.imgI = false;
        this.imgN2 = false;
        this.imgA7 = false;
    };

    clickImgL () {
        this.imgM2 = false;
        this.imgA6 = false;
        this.imgL = true;
        this.imgI = false;
        this.imgN2 = false;
        this.imgA7 = false;
    };

    clickImgI () {
        this.imgM2 = false;
        this.imgA6 = false;
        this.imgL = false;
        this.imgI = true;
        this.imgN2 = false;
        this.imgA7 = false;
    };

    clickImgN2 () {
        this.imgM2 = false;
        this.imgA6 = false;
        this.imgL = false;
        this.imgI = false;
        this.imgN2 = true;
        this.imgA7 = false;
    };

    clickImgA7 () {
        this.imgM2 = false;
        this.imgA6 = false;
        this.imgL = false;
        this.imgI = false;
        this.imgN2 = false;
        this.imgA7 = true;
    };

    clickDivForM2() {
        if (this.imgM2 == true) {
            const getImgM = document.getElementById('imgM2');
            const getDivM = document.getElementById('divForM2');
            getDivM!.append(getImgM!);
            getImgM!.style.border = 'none';
            getDivM!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA6() {
        if (this.imgA6 == true) {
            const getImgA = document.getElementById('imgA6');
            const getDivA = document.getElementById('divForA6');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA7 == true) {
            const getImgA = document.getElementById('imgA7');
            const getDivA = document.getElementById('divForA6');
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

    clickDivForI() {
        if (this.imgI == true) {
            const getImgL = document.getElementById('imgI');
            const getDivL = document.getElementById('divForI');
            getDivL!.append(getImgL!);
            getImgL!.style.border = 'none';
            getDivL!.parentElement!.style.border = "3px solid green"; 
        };
    };

    clickDivForA7() {
        if (this.imgA6 == true) {
            const getImgA = document.getElementById('imgA6');
            const getDivA = document.getElementById('divForA7');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green"; 
        } else if (this.imgA7 == true) {
            const getImgA = document.getElementById('imgA7');
            const getDivA = document.getElementById('divForA7');
            getDivA!.append(getImgA!);
            getImgA!.style.border = 'none';
            getDivA!.parentElement!.style.border = "3px solid green";
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

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input18')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input19')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input20')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input21')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input22')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input23')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input24')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input25')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input26')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input27')).value;
        const valueOfInput11 = (<HTMLInputElement>document.getElementById('input28')).value;
        const valueOfInput12 = (<HTMLInputElement>document.getElementById('input29')).value;

        if(valueOfInput1 == "ЯН") {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input18')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "УМ") {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input19')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "ЁЛ") {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input20')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput4 == "ОК") {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input21')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput5 == "ПИ") {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input22')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput6 == "ДО") {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input23')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput7 == "ГА") {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input24')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "ЖУ") {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input25')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "КЕ") {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input26')!.parentElement!.style.border = "3px solid red";
        };
        
        if(valueOfInput10 == "БЕ") {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input27')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput11 == "АД") {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input28')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput12 == "ЮЛ") {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input29')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 12) {
            setTimeout(this.viewDiv20, 1000);
        };
    };

    checkInput3() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input30')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input31')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input32')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input33')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input34')).value;

        if ((valueOfInput1 == "ГАМАК") || (valueOfInput1 == "гамак")) {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input30')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "БЕЛКА") || (valueOfInput2 == "белка")) {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input31')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "УДОД") || (valueOfInput3 == "удод")) {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input32')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "ПАНДА") || (valueOfInput4 == "панда")) {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input33')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "МАЛИНА") || (valueOfInput5 == "малина")) {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input34')!.parentElement!.style.border = "3px solid red";
        };

        function right() {alert('Правильно!')}

        if(checkValue === 5) {
            setTimeout(right, 1000);
        };
    };
}