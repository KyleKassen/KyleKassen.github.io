// Function to change icon color on hover
/*let changeColor = () => {
    htmlIcon.style.transition = 'color 1s'
    htmlIcon.style.transition = 'transform 1s'
    htmlIcon.style.color = 'blue';
    htmlIcon.style.transform = 'scale(1.2)';
    //htmlIcon.style.fontSize = '60px';
}
let resetColor = () => {
    htmlIcon.style.color = '';
    htmlIcon.style.transform = '';
}

//let htmlIcon = document.getElementById('html5');
let htmlIcon = document.getElementsByClassName('fa-html5')[0];
htmlIcon.style.transition
htmlIcon.onmouseover = changeColor;
htmlIcon.onmouseout = resetColor;
//htmlIcon.style.color = 'blue';d*/
let changeColor = event => {
    let cTarget = event.currentTarget;

    cTarget.style.transition = 'all 0.4s';
    cTarget.style.color = cTarget.setColor;
    cTarget.style.transform = 'scale(1.2)'
}

let resetColor = event => {
    let cTarget = event.currentTarget;

    cTarget.style.color = '';
    cTarget.style.transform = '';
}

let htmlIcon = document.getElementsByClassName('fa-html5')[0];
//htmlIcon.setColor = '#E54C26';
htmlIcon.setColor = '#F0652A';
htmlIcon.onmouseover = changeColor;
htmlIcon.onmouseout = resetColor;

const cssIcon = document.getElementsByClassName('fa-css3-alt')[0];
cssIcon.setColor = '#2FAADB';
cssIcon.onmouseover = changeColor;
cssIcon.onmouseout = resetColor;

const jsIcon = document.getElementsByClassName('fa-js')[0];
jsIcon.setColor = '#FFD93B';
jsIcon.onmouseover = changeColor;
jsIcon.onmouseout = resetColor;

const reactIcon = document.getElementsByClassName('fa-react')[0];
reactIcon.setColor = '#60DBFB';
reactIcon.onmouseover = changeColor;
reactIcon.onmouseout = resetColor;

const pythonIcon = document.getElementsByClassName('fa-python')[0];
pythonIcon.setColor = '#366C9B';
pythonIcon.onmouseover = changeColor;
pythonIcon.onmouseout = resetColor;

const gitIcon = document.getElementsByClassName('fa-git-alt')[0];
gitIcon.setColor = '#F05034';
gitIcon.onmouseover = changeColor;
gitIcon.onmouseout = resetColor;

const terminalIcon = document.getElementsByClassName('fa-terminal')[0];
terminalIcon.setColor = '#02F708';
terminalIcon.onmouseover = changeColor;
terminalIcon.onmouseout = resetColor;

const githubIcon = document.getElementsByClassName('fa-github')[0];
githubIcon.setColor = '#AE2DFE';
githubIcon.onmouseover = changeColor;
githubIcon.onmouseout = resetColor;

const javaIcon = document.getElementsByClassName('fa-java')[0];
javaIcon.setColor = '#5382A0';
javaIcon.onmouseover = changeColor;
javaIcon.onmouseout = resetColor;

const nodeIcon = document.getElementsByClassName('fa-node')[0];
nodeIcon.setColor = '#689E63';
nodeIcon.onmouseover = changeColor;
nodeIcon.onmouseout = resetColor;

const microsoftIcon = document.getElementsByClassName('fa-microsoft')[0];
microsoftIcon.setColor = '#000000';
microsoftIcon.onmouseover = changeColor;
microsoftIcon.onmouseout = resetColor;

