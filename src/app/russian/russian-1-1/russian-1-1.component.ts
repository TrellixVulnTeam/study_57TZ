import { Component } from "@angular/core";

@Component({
    selector: 'russian1-1',
    templateUrl: './russian-1-1.component.html',
    styleUrls: ['./russian-1-1.component.scss']
})

export class Russian1_1 {
    imgBerries = false;
    imgIron = false;
    imgVegetables = false;
    imgIndian = false;
    imgOrange = false;
    imgRod = false;
    imgUdot = false;
    imgSnail = false;
    imgDuck = false;
    imgAnchor = false;
    imgLizard = false;
    imgLamb = false;
    imgBus = false;
    imgDonkey = false;
    imgTurkey = false;
    imgPineapple = false;
    imgSpine = false;
    imgWasps = false;
    
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

    clickImgIndian() {
        this.imgIndian = true;
        this.imgOrange = false;
        this.imgBerries = false;
        this.imgIron = false;
        this.imgVegetables = false;
    };

    clickImgBerries() {
        this.imgBerries = true;
        this.imgIndian = false;
        this.imgOrange = false;
        this.imgIron = false;
        this.imgVegetables = false;
    };

    clickImgIron() {
        this.imgIron = true;
        this.imgOrange = false;
        this.imgIndian = false;
        this.imgVegetables = false;
        this.imgBerries = false;
    };

    clickImgVegetables() {
        this.imgVegetables = true;
        this.imgOrange = false;
        this.imgIndian = false;
        this.imgIron = false;
        this.imgBerries = false;
    };

    clickImgOrange() {
        this.imgOrange = true;
        this.imgVegetables = false;
        this.imgIron = false;
        this.imgIndian = false;
        this.imgBerries = false;
    };

    clickImgU() {
        if (this.imgIron == true) {
            const getImgIron = document.getElementById('iron');
            const getU = document.getElementById('u');

            getImgIron!.remove();
            getU!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgBerries == true) {
            const getImgBerries = document.getElementById('berries');
            const getYa = document.getElementById('ya');

            getImgBerries!.remove();
            getYa!.style.border! = "3px solid green"; 
        };
    };

    clickImgI() {
        if (this.imgIndian == true) {
            const getImgIndian = document.getElementById('indian');
            const getI = document.getElementById('i');

            getImgIndian!.remove();
            getI!.style.border! = "3px solid green"; 
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

    clickImgA() {
        if (this.imgOrange == true) {
            const getImgOrange = document.getElementById('orange');
            const getA = document.getElementById('a');

            getImgOrange!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    clickImgRod() {
        this.imgRod = true;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgUdot() {
        this.imgRod = false;
        this.imgUdot = true;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgSnail() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = true;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgDuck() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = true;
        this.imgAnchor = false;
        this.imgBerries = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgAnchor() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = true;
        this.imgBerries = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgBerries2() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries = true;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgLizard() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries = false;
        this.imgLizard = true;
        this.imgLamb = false;
    };

    clickImgLamb() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries = false;
        this.imgLizard = false;
        this.imgLamb = true;
    };

    clickImgU2() {
        if (this.imgRod == true) {
            document.getElementById('rod')!.remove();
            document.getElementById('imgU2')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('imgU2')!.style.border = 'none', 500);
        } else if (this.imgUdot == true) {
            document.getElementById('udot')!.remove();
            document.getElementById('imgU2')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('imgU2')!.style.border = 'none', 500);
        } else if (this.imgSnail == true) {
            document.getElementById('snail')!.remove();
            document.getElementById('imgU2')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('imgU2')!.style.border = 'none', 500);
        } else if (this.imgDuck == true) {
            document.getElementById('duck')!.remove();
            document.getElementById('imgU2')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('imgU2')!.style.border = 'none', 500);
        } else {
            document.getElementById('imgU2')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('imgU2')!.style.border = 'none', 500);
        };
    };

    clickImgYa2() {
        if (this.imgAnchor == true) {
            document.getElementById('anchor')!.remove();
            document.getElementById('imgYa2')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('imgYa2')!.style.border = 'none', 500);
        } else if (this.imgBerries == true) {
            document.getElementById('berries2')!.remove();
            document.getElementById('imgYa2')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('imgYa2')!.style.border = 'none', 500);
        } else if (this.imgLizard == true) {
            document.getElementById('lizard')!.remove();
            document.getElementById('imgYa2')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('imgYa2')!.style.border = 'none', 500);
        } else if (this.imgLamb == true) {
            document.getElementById('lamb')!.remove();
            document.getElementById('imgYa2')!.style.border = '3px solid green';
            setTimeout(() => document.getElementById('imgYa2')!.style.border = 'none', 500);
        } else {
            document.getElementById('imgYa2')!.style.border = '3px solid red';
            setTimeout(() => document.getElementById('imgYa2')!.style.border = 'none', 500);
        };
    };

    clickImgDonkey() {
        this.imgDonkey= true;
        this.imgTurkey = false;
        this.imgDuck = false;
        this.imgBus = false;
        this.imgLizard = false;
    };

    clickImgTurkey() {
        this.imgDonkey= false;
        this.imgTurkey = true;
        this.imgDuck = false;
        this.imgBus = false;
        this.imgLizard = false;
    };

    clickImgDuck3() {
        this.imgDonkey= false;
        this.imgTurkey = false;
        this.imgDuck = true;
        this.imgBus = false;
        this.imgLizard = false;
    };

    clickImgBus() {
        this.imgDonkey= false;
        this.imgTurkey = false;
        this.imgDuck = false;
        this.imgBus = true;
        this.imgLizard = false;
    };

    clickImgLizard3() {
        this.imgDonkey= false;
        this.imgTurkey = false;
        this.imgDuck = false;
        this.imgBus = false;
        this.imgLizard = true;
    };

    clickImgU3() {
        if (this.imgDuck == true) {
            document.getElementById('duck3')!.remove();
            document.getElementById('u3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa3() {
        if (this.imgLizard == true) {
            document.getElementById('lizard3')!.remove();
            document.getElementById('ya3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgI3() {
        if (this.imgTurkey == true) {
            document.getElementById('turkey')!.remove();
            document.getElementById('i3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO3() {
        if (this.imgDonkey == true) {
            document.getElementById('donkey')!.remove();
            document.getElementById('o3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgA3() {
        if (this.imgBus == true) {
            document.getElementById('bus')!.remove();
            document.getElementById('a3')!.style.border! = "3px solid green"; 
        };
    };

    clickImgPineapple() {
        this.imgPineapple= true;
        this.imgSpine = false;
        this.imgWasps = false;
        this.imgLamb = false;
        this.imgSnail = false;
    };

    clickImgSpine() {
        this.imgPineapple= false;
        this.imgSpine = true;
        this.imgWasps = false;
        this.imgLamb = false;
        this.imgSnail = false;
    };

    clickImgWasps() {
        this.imgPineapple= false;
        this.imgSpine = false;
        this.imgWasps = true;
        this.imgLamb = false;
        this.imgSnail = false;
    };

    clickImgLamb4() {
        this.imgPineapple= false;
        this.imgSpine = false;
        this.imgWasps = false;
        this.imgLamb = true;
        this.imgSnail = false;
    };

    clickImgSnail4() {
        this.imgPineapple= false;
        this.imgSpine = false;
        this.imgWasps = false;
        this.imgLamb = false;
        this.imgSnail = true;
    };

    clickImgU4() {
        if (this.imgSnail == true) {
            document.getElementById('snail4')!.remove();
            document.getElementById('u4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa4() {
        if (this.imgLamb == true) {
            document.getElementById('lamb4')!.remove();
            document.getElementById('ya4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgI4() {
        if (this.imgSpine == true) {
            document.getElementById('spine')!.remove();
            document.getElementById('i4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO4() {
        if (this.imgWasps == true) {
            document.getElementById('wasps')!.remove();
            document.getElementById('o4')!.style.border! = "3px solid green"; 
        };
    };

    clickImgA4() {
        if (this.imgPineapple == true) {
            document.getElementById('pineapple')!.remove();
            document.getElementById('a4')!.style.border! = "3px solid green"; 
        };
    };

    checkInput1() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input1')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input2')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input3')).value;

        if((valueOfInput1 == "АУ") || (valueOfInput1 == "ау")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "ИА") || (valueOfInput2 == "иа")) {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "УА") || (valueOfInput3 == "уа")) {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input3')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 3) {
            setTimeout(this.viewDiv15, 1000);
        }
    };

    checkInput2() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input4')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input5')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input6')).value;
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input7')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input8')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input9')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input10')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input11')).value;

        if((valueOfInput1 == "И") || (valueOfInput1 == "и")){
            document.getElementById('input4')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input4')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "А") || (valueOfInput2 == "а")){
            document.getElementById('input5')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input5')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "У") || (valueOfInput3 == "у")){
            document.getElementById('input6')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input6')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput4 == "ИА")|| (valueOfInput4 == "иа")) {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput5 == "АУ")|| (valueOfInput5 == "ау")) {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput6 == "УА")|| (valueOfInput6 == "уа")) {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input9')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput7 == "О") || (valueOfInput7 == "о")){
            document.getElementById('input10')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input10')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput8 == "Я") || (valueOfInput8 == "я")){
            document.getElementById('input11')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input11')!.parentElement!.style.border = "3px solid red";
        };

        if(checkValue === 8) {
            setTimeout(this.viewDiv16, 1000);
        }
    };
}