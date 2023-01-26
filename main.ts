let mojeSeriove = Utility.encodeSerial();
let hodGrp = 5; 
let codeValue = 12;
let nextCode = 0; 
let nextGroup = 0;
let groupIsTrue = false;
let codeIsTrue = false;

radio.setFrequencyBand(7);
radio.setTransmitSerialNumber(true);
radio.setGroup(hodGrp);

input.onButtonPressed(Button.A, function () { 
    radio.sendNumber(codeValue);
basic.showString("O"); 
basic.clearScreen(); 
})

radio.onReceivedValue(function (name: string, value: number) { 
    if (mojeSeriove === name) { nextCode = value; groupIsTrue = true; basic.showString("C")   
    
basic.clearScreen();
}

 if (name === "grp") {
nextGroup = value; codeIsTrue = true;
control.inBackground(function () {
music.playTone(Note.D, music.beat(BeatFraction.Whole)); 
})
} 

if (groupIsTrue && codeIsTrue) { codeValue = nextCode;
    hodGrp = nextGroup;
basic.showString("N"); basic.clearScreen();
    radio.setGroup(hodGrp);
groupIsTrue = false;
codeIsTrue = false; }
})
 
 input.onButtonPressed(Button.B, function () {
basic.showNumber(codeValue); })
