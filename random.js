let arr=["Apna Kam Kar na Lawde","Dhat teri Ma ki Chut","Madarchod baap se Aese baat krega","Bhenchod","Suar ki Jhaat","Ooh Bhodiwale","Gand Faad dunga"]
function cusswords()
{
    return arr[Math.floor(Math.random()*7)];
}

module.exports={cusswords}