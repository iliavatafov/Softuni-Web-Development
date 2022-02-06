function solve(workerData) {
    if (workerData.dizziness) {
        workerData.levelOfHydrated += workerData.experience * workerData.weight * 0.1;
        workerData.dizziness = false;
    }
    return workerData;
}