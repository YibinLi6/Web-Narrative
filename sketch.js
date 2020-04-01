let myTitle;
let myButton;
let buttonPush;

function setup () {
  noCanvas ()
  myTitle = select ('#myTitle')
  myButton = select ('#myButton')
  myButton.mousePressed (buttonPressed);
  buttonPush = 0;
}

function buttonPressed () {
  buttonPush = buttonPush + 1;
  if (buttonPush === 1) {
    myTitle.html ("Hello!")
    myButton.html ('Hello')
  }
  else if (buttonPush === 2) {
   myTitle.html ("Are You Ready?!!")
    myButton.html ('YES! I AM!')
  }
  else if (buttonPush === 3) {
    myTitle.html ("Here!")
    myButton.html ('?')
  }
  else if (buttonPush === 4) {
    myTitle.html ("WE!")
    myButton.html ('We!')
  }
  else if (buttonPush === 5) {
    myTitle.html ("Go!!")
    myButton.html ('Lets Go!!!!'')
  }
  else if (buttonPush === 6) {
    myTitle.html ("you know what. we are no longer doing it anymore.Go shome and take a sleep.")
    myButton.html ('??????????????????????????'')
  }
