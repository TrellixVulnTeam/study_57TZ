import { Component } from "@angular/core";

@Component({
    selector: 'russian2',
    templateUrl: './russian-2.component.html',
    styleUrls: ['./russian-2.component.scss']
})

export class Russian2 {
    imgApple = false;
    imgSpine = false;
    imgSnail = false;
    imgCloud = false;
    imgWatermelon = false;
    imgCry = false;
    imgBaby = false;
    imgDonkey = false;
    a = 1;
    b = 1;
    c = 1;
    d = 1;
    imgBaby2 = false;
    imgDonkey2 = false;
    imgCry2 = false;
    imgCow2 = false;
    imgGoat2 = false;
    imgCuckoo2 = false;

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
        if (this.imgCloud == true) {
            const getImgCloud = document.getElementById('cloud');
            const getO = document.getElementById('o');

            getImgCloud!.remove();
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

    clickImgSnail() {
        this.imgSnail = true;
        this.imgCloud = false;
        this.imgSpine = false;
        this.imgWatermelon = false;
        this.imgApple = false;
    };

    clickImgCloud() {
        this.imgSnail = false;
        this.imgCloud = true;
        this.imgSpine = false;
        this.imgWatermelon = false;
        this.imgApple = false;
    };

    clickImgSpine() {
        this.imgSnail = false;
        this.imgCloud = false;
        this.imgSpine = true;
        this.imgWatermelon = false;
        this.imgApple = false;
    };

    clickImgWatermelon() {
        this.imgSnail = false;
        this.imgCloud = false;
        this.imgSpine = false;
        this.imgWatermelon = true;
        this.imgApple = false;
    };

    clickImgApple() {
        this.imgSnail = false;
        this.imgCloud = false;
        this.imgSpine = false;
        this.imgWatermelon = false;
        this.imgApple = true;
    };

    clickImgBaby() {
        this.imgBaby = true;
        this.imgDonkey = false;
        this.imgCry = false;
    };

    clickImgDonkey() {
        this.imgDonkey = true;
        this.imgBaby = false;
        this.imgCry = false;
    };

    clickImgCry() {
        this.imgCry = true;
        this.imgBaby = false;
        this.imgDonkey = false;
    };

    clickDivForCry() {
        if (this.imgCry == true) {
            const getImgCry = document.getElementById('cry');
            const getDivCry = document.getElementById('divForCry');
            getDivCry!.append(getImgCry!);
            getDivCry!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForBaby() {
        if (this.imgBaby == true) {
            const getImgBaby = document.getElementById('baby');
            const getDivBaby = document.getElementById('divForBaby');
            getDivBaby!.append(getImgBaby!);
            getDivBaby!.parentElement!.style.border! = "3px solid green";
        };
    };

    clickDivForDonkey() {
        if (this.imgDonkey == true) {
            const getImgDonkey = document.getElementById('donkey');
            const getDivDonkey = document.getElementById('divForDonkey');
            getDivDonkey!.append(getImgDonkey!);
            getDivDonkey!.parentElement!.style.border = "3px solid green";
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
            this.viewDiv13();
        };
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

    checkImage2() {
        if(this.b % 2 === 0) {
            this.viewDiv14();
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

    checkImage3() {
        if((this.c % 2 === 0) && (this.d % 2 === 0)) {
            this.viewDiv15();
        };
    };

    checkInput1() {
        let checkValue = 0;
        const valueOfInput1 = (<HTMLInputElement>document.getElementById('input1')).value;
        const valueOfInput2 = (<HTMLInputElement>document.getElementById('input2')).value;
        const valueOfInput3 = (<HTMLInputElement>document.getElementById('input3')).value;

        if(valueOfInput1 == "МУ") {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if(valueOfInput2 == "МЕ") {
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

        if(checkValue === 3) {
            setTimeout(this.viewDiv16, 1000);
        }
    };

    clickImgBaby2() {
        this.imgBaby2 = true;
        this.imgDonkey2 = false;
        this.imgCry2 = false;
        this.imgCow2 = false;
        this.imgGoat2 = false;
        this.imgCuckoo2 = false;
    };

    clickImgDonkey2() {
        this.imgDonkey2 = true;
        this.imgBaby2 = false;
        this.imgCry2 = false;
        this.imgCow2 = false;
        this.imgGoat2 = false;
        this.imgCuckoo2 = false;
    };

    clickImgCry2() {
        this.imgCry2 = true;
        this.imgBaby2 = false;
        this.imgDonkey2 = false;
        this.imgCow2 = false;
        this.imgGoat2 = false;
        this.imgCuckoo2 = false;
    };

    clickImgCow2() {
        this.imgCry2 = false;
        this.imgBaby2 = false;
        this.imgDonkey2 = false;
        this.imgCow2 = true;
        this.imgGoat2 = false;
        this.imgCuckoo2 = false;
    };

    clickImgGoat2() {
        this.imgCry2 = false;
        this.imgBaby2 = false;
        this.imgDonkey2 = false;
        this.imgCow2 = false;
        this.imgGoat2 = true;
        this.imgCuckoo2 = false;
    };

    clickImgCuckoo2() {
        this.imgCry2 = false;
        this.imgBaby2 = false;
        this.imgDonkey2 = false;
        this.imgCow2 = false;
        this.imgGoat2 = false;
        this.imgCuckoo2 = true;
    };

    clickDivForCry2() {
        if (this.imgCry2 == true) {
            const getImgCry = document.getElementById('cry2');
            const getDivCry = document.getElementById('divForCry2');
            getDivCry!.append(getImgCry!);
            getDivCry!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForBaby2() {
        if (this.imgBaby2 == true) {
            const getImgBaby = document.getElementById('baby2');
            const getDivBaby = document.getElementById('divForBaby2');
            getDivBaby!.append(getImgBaby!);
            getDivBaby!.parentElement!.style.border! = "3px solid green";
        };
    };

    clickDivForDonkey2() {
        if (this.imgDonkey2 == true) {
            const getImgDonkey = document.getElementById('donkey2');
            const getDivDonkey = document.getElementById('divForDonkey2');
            getDivDonkey!.append(getImgDonkey!);
            getDivDonkey!.parentElement!.style.border = "3px solid green";
        };
    };

    clickDivForCow2() {
        if (this.imgCow2 == true) {
            const getImgCow = document.getElementById('cow2');
            const getDivCow = document.getElementById('divForCow2');
            getDivCow!.append(getImgCow!);
            getDivCow!.parentElement!.style.border = "3px solid green";
        };
    };

    clickDivForGoat2() {
        if (this.imgGoat2 == true) {
            const getImgGoat = document.getElementById('goat2');
            const getDivGoat = document.getElementById('divForGoat2');
            getDivGoat!.append(getImgGoat!);
            getDivGoat!.parentElement!.style.border = "3px solid green";
        };
    };

    clickDivForCuckoo2() {
        if (this.imgCuckoo2 == true) {
            const getImgCuckoo = document.getElementById('cuckoo2');
            const getDivCuckoo = document.getElementById('divForCuckoo2');
            getDivCuckoo!.append(getImgCuckoo!);
            getDivCuckoo!.parentElement!.style.border = "3px solid green";
        };
    };
}
