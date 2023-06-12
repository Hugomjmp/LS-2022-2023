
function hasWinner(completedBoard, SubBoardIndex){
    if (completedBoard[SubBoardIndex]==='X'||completedBoard[SubBoardIndex]==='O'){
        
        console.log("sucesso?");
        console.log("dentro do class jogo - sub index" + SubBoardIndex );


        return false;

    }else{
        return true;
    }
}








export default hasWinner;