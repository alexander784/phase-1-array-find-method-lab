function superbowlWin(record) {
    const winningRecord = record.find(record => record.result === "W");
    if(winningRecord) {
        return winningRecord.year;
    }else{
        return undefined;
    }
}