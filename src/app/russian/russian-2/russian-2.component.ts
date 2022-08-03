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
    imgCow = false;
    imgGoat = false;
    imgCuckoo = false;

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

    clickImgU() {
        if (this.imgSnail == true) {
            document.getElementById('snail')!.remove();
            document.getElementById('u')!.style.border! = "3px solid green"; 
        };
    };

    clickImgYa() {
        if (this.imgApple == true) {
            document.getElementById('apple')!.remove();
            document.getElementById('ya')!.style.border! = "3px solid green"; 
        };
    };

    clickImgI() {
        if (this.imgSpine == true) {
            document.getElementById('spine')!.remove();
            document.getElementById('i')!.style.border! = "3px solid green"; 
        };
    };

    clickImgO() {
        if (this.imgCloud == true) {
            document.getElementById('cloud')!.remove();
            document.getElementById('o')!.style.border! = "3px solid green"; 
        };
    };

    clickImgA() {
        if (this.imgWatermelon == true) {
            document.getElementById('watermelon')!.remove();
            document.getElementById('a')!.style.border! = "3px solid green"; 
        };
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

        if((valueOfInput1 == "МУ") || (valueOfInput1 == "му")) {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input1')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput2 == "МЕ") || (valueOfInput2 == "ме")) {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid green";
            checkValue++;
        } else {
            document.getElementById('input2')!.parentElement!.style.border = "3px solid red";
        };

        if((valueOfInput3 == "КУ-КУ") || (valueOfInput3 == "ку-ку")) {
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
        this.imgBaby = true;
        this.imgDonkey = false;
        this.imgCry = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCuckoo = false;
    };

    clickImgDonkey2() {
        this.imgDonkey = true;
        this.imgBaby = false;
        this.imgCry = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCuckoo = false;
    };

    clickImgCry2() {
        this.imgCry = true;
        this.imgBaby = false;
        this.imgDonkey = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCuckoo = false;
    };

    clickImgCow() {
        this.imgCry = false;
        this.imgBaby = false;
        this.imgDonkey = false;
        this.imgCow = true;
        this.imgGoat = false;
        this.imgCuckoo = false;
    };

    clickImgGoat() {
        this.imgCry = false;
        this.imgBaby = false;
        this.imgDonkey = false;
        this.imgCow = false;
        this.imgGoat = true;
        this.imgCuckoo = false;
    };

    clickImgCuckoo() {
        this.imgCry = false;
        this.imgBaby = false;
        this.imgDonkey = false;
        this.imgCow = false;
        this.imgGoat = false;
        this.imgCuckoo = true;
    };

    clickDivForCry2() {
        if (this.imgCry == true) {
            const getImgCry = document.getElementById('cry2');
            const getDivCry = document.getElementById('divForCry2');
            getDivCry!.append(getImgCry!);
            getDivCry!.parentElement!.style.border! = "3px solid green"; 
        };
    };

    clickDivForBaby2() {
        if (this.imgBaby == true) {
            const getImgBaby = document.getElementById('baby2');
            const getDivBaby = document.getElementById('divForBaby2');
            getDivBaby!.append(getImgBaby!);
            getDivBaby!.parentElement!.style.border! = "3px solid green";
        };
    };

    clickDivForDonkey2() {
        if (this.imgDonkey == true) {
            const getImgDonkey = document.getElementById('donkey2');
            const getDivDonkey = document.getElementById('divForDonkey2');
            getDivDonkey!.append(getImgDonkey!);
            getDivDonkey!.parentElement!.style.border = "3px solid green";
        };
    };

    clickDivForCow() {
        if (this.imgCow == true) {
            const getImgCow = document.getElementById('cow');
            const getDivCow = document.getElementById('divForCow');
            getDivCow!.append(getImgCow!);
            getDivCow!.parentElement!.style.border = "3px solid green";
        };
    };

    clickDivForGoat() {
        if (this.imgGoat == true) {
            const getImgGoat = document.getElementById('goat');
            const getDivGoat = document.getElementById('divForGoat');
            getDivGoat!.append(getImgGoat!);
            getDivGoat!.parentElement!.style.border = "3px solid green";
        };
    };

    clickDivForCuckoo() {
        if (this.imgCuckoo == true) {
            const getImgCuckoo = document.getElementById('cuckoo');
            const getDivCuckoo = document.getElementById('divForCuckoo');
            getDivCuckoo!.append(getImgCuckoo!);
            getDivCuckoo!.parentElement!.style.border = "3px solid green";
        };
    };
}
