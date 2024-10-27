export function findSectionProgress(subsections){
    let completed = 0;
    for(let i =0; i < subsections.length; i++) {
        if (subsections[i].completed) completed++;
    }
    return Math.round((completed / subsections.length) * 100);

}

export function findOverallProgress(dsaList){
    let totalProgress = 0;
    for(let i = 0; i < dsaList.length; i++){
        totalProgress += dsaList[i].progress;
    }
    return Math.round(totalProgress / dsaList.length);
}