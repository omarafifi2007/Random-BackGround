let HexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let ColorParts = [];

for(let i = 0; i < 6; i++)
{
    ColorParts.push(HexArray[Math.floor(Math.random() * HexArray.length)]);
};
let FinalColor = `#${ColorParts.join("")}`;
document.body.append(FinalColor);
document.body.style.backgroundColor = FinalColor;