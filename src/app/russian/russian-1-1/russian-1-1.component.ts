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
    imgBerries2 = false;
    imgLizard = false;
    imgLamb = false;
    imgBus = false;
    imgDonkey = false;
    imgTurkey = false;
    imgDuck3 = false;
    imgLizard3 = false;
    imgPineapple = false;
    imgSpine = false;
    imgSnail4 = false;
    ImgWasps = false;
    ImgLamb4 = false;
    
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
        this.imgBerries2 = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgUdot() {
        this.imgRod = false;
        this.imgUdot = true;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries2 = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgSnail() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = true;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries2 = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgDuck() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = true;
        this.imgAnchor = false;
        this.imgBerries2 = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgAnchor() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = true;
        this.imgBerries2 = false;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgBerries2() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries2 = true;
        this.imgLizard = false;
        this.imgLamb = false;
    };

    clickImgLizard() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries2 = false;
        this.imgLizard = true;
        this.imgLamb = false;
    };

    clickImgLamb() {
        this.imgRod = false;
        this.imgUdot = false;
        this.imgSnail = false;
        this.imgDuck = false;
        this.imgAnchor = false;
        this.imgBerries2 = false;
        this.imgLizard = false;
        this.imgLamb = true;
    };

    clickImgU2() {
        if ((this.imgRod == true) || (this.imgUdot == true) || (this.imgSnail == true)  || (this.imgDuck == true)) {
            if (this.imgRod == true) document.getElementById('rod')!.remove();
            if (this.imgUdot == true) document.getElementById('udot')!.remove();
            if (this.imgSnail == true) document.getElementById('snail')!.remove();
            if (this.imgDuck == true) document.getElementById('duck')!.remove();
        }
    };

    clickImgYa2() {
        if ((this.imgAnchor == true) || (this.imgBerries2 == true) || (this.imgLizard == true)  || (this.imgLamb == true)) {
            if (this.imgAnchor == true) document.getElementById('anchor')!.remove();
            if (this.imgBerries2 == true) document.getElementById('berries2')!.remove();
            if (this.imgLizard == true) document.getElementById('lizard')!.remove();
            if (this.imgLamb == true) document.getElementById('lamb')!.remove();
        }
    };

    clickImgU3() {
        if (this.imgDuck3 == true) {
            const getImgDuck3 = document.getElementById('duck3');
            const getU = document.getElementById('u3');

            getImgDuck3!.remove();
            getU!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa3() {
        if (this.imgLizard3 == true) {
            const getImgLizard3 = document.getElementById('lizard3');
            const getYa = document.getElementById('ya3');

            getImgLizard3!.remove();
            getYa!.style.border! = "3px solid green"; 
        };
    };

    clickImgI3() {
        if (this.imgTurkey == true) {
            const getImgTurkey = document.getElementById('turkey');
            const getI = document.getElementById('i3');

            getImgTurkey!.remove();
            getI!.style.border! = "3px solid green"; 
        };
    };

    clickImgO3() {
        if (this.imgDonkey == true) {
            const getImgDonkey = document.getElementById('donkey');
            const getO = document.getElementById('o3');

            getImgDonkey!.remove();
            getO!.style.border! = "3px solid green"; 
        };
    };

    clickImgA3() {
        if (this.imgBus == true) {
            const getImgBus = document.getElementById('bus');
            const getA = document.getElementById('a3');

            getImgBus!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    clickImgDonkey() {
        this.imgDonkey= true;
        this.imgTurkey = false;
        this.imgDuck3 = false;
        this.imgBus = false;
        this.imgLizard3 = false;
    };

    clickImgTurkey() {
        this.imgDonkey= false;
        this.imgTurkey = true;
        this.imgDuck3 = false;
        this.imgBus = false;
        this.imgLizard3 = false;
    };

    clickImgDuck3() {
        this.imgDonkey= false;
        this.imgTurkey = false;
        this.imgDuck3 = true;
        this.imgBus = false;
        this.imgLizard3 = false;
    };

    clickImgBus() {
        this.imgDonkey= false;
        this.imgTurkey = false;
        this.imgDuck3 = false;
        this.imgBus = true;
        this.imgLizard3 = false;
    };

    clickImgLizard3() {
        this.imgDonkey= false;
        this.imgTurkey = false;
        this.imgDuck3 = false;
        this.imgBus = false;
        this.imgLizard3 = true;
    };

    clickImgPineapple() {
        this.imgPineapple= true;
        this.imgSpine = false;
        this.ImgWasps = false;
        this.ImgLamb4 = false;
        this.imgSnail4 = false;
    };

    clickImgSpine() {
        this.imgPineapple= false;
        this.imgSpine = true;
        this.ImgWasps = false;
        this.ImgLamb4 = false;
        this.imgSnail4 = false;
    };

    clickImgWasps() {
        this.imgPineapple= false;
        this.imgSpine = false;
        this.ImgWasps = true;
        this.ImgLamb4 = false;
        this.imgSnail4 = false;
    };

    clickImgLamb4() {
        this.imgPineapple= false;
        this.imgSpine = false;
        this.ImgWasps = false;
        this.ImgLamb4 = true;
        this.imgSnail4 = false;
    };

    clickImgSnail4() {
        this.imgPineapple= false;
        this.imgSpine = false;
        this.ImgWasps = false;
        this.ImgLamb4 = false;
        this.imgSnail4 = true;
    };

    clickImgU4() {
        if (this.imgSnail4 == true) {
            const getImgSnail = document.getElementById('snail4');
            const getU = document.getElementById('u4');

            getImgSnail!.remove();
            getU!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa4() {
        if (this.ImgLamb4 == true) {
            const getImgLamb4 = document.getElementById('lamb4');
            const getYa = document.getElementById('ya4');

            getImgLamb4!.remove();
            getYa!.style.border! = "3px solid green"; 
        };
    };

    clickImgI4() {
        if (this.imgSpine == true) {
            const getImgSpine = document.getElementById('spine');
            const getI = document.getElementById('i4');

            getImgSpine!.remove();
            getI!.style.border! = "3px solid green"; 
        };
    };

    clickImgO4() {
        if (this.ImgWasps == true) {
            const getImgWasps = document.getElementById('wasps');
            const getO = document.getElementById('o4');

            getImgWasps!.remove();
            getO!.style.border! = "3px solid green"; 
        };
    };

    clickImgA4() {
        if (this.imgPineapple == true) {
            const getImgPineapple = document.getElementById('pineapple');
            const getA = document.getElementById('a4');

            getImgPineapple!.remove();
            getA!.style.border! = "3px solid green"; 
        };
    };

    checkInput1() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input1')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input2')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input3')).value;

        if(valueOfInput1 == "АУ") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "ИА") {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput3 == "УА") {
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
        const valueOfInput4 = (<HTMLInputElement>document.getElementById('input4')).value;
        const valueOfInput5 = (<HTMLInputElement>document.getElementById('input5')).value;
        const valueOfInput6 = (<HTMLInputElement>document.getElementById('input6')).value;
        const valueOfInput7 = (<HTMLInputElement>document.getElementById('input7')).value;
        const valueOfInput8 = (<HTMLInputElement>document.getElementById('input8')).value;
        const valueOfInput9 = (<HTMLInputElement>document.getElementById('input9')).value;
        const valueOfInput10 = (<HTMLInputElement>document.getElementById('input10')).value;
        const valueOfInput11 = (<HTMLInputElement>document.getElementById('input11')).value;

        if(valueOfInput4 == "И") {
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

        if(valueOfInput7 == "ИА") {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input7')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput8 == "АУ") {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input8')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput9 == "УА") {
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

        if(checkValue === 8) {
            setTimeout(this.viewDiv16, 1000);
        }
    };
}