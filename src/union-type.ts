type List = (string | number)[];

// https://typescriptbook.jp/reference/values-types-variables/discriminated-union
// 判別可能なUnion型
type UploadStatus = InProgress | Success | Failure;
type InProgress = { done: boolean; progress: number };
type Success = { done: boolean };
type Failure = { done: boolean; error: Error };

function printStatus(status: UploadStatus) {
    if (status.done === false) {
        // console.log(`アップロード中:${status.progress}%`); // progressがあることは保証されないためエラーになる
    }
    if (status.done === false && 'progress' in status) {
        console.log(`アップロード中:${status.progress}%`);
    }
}

// 判別可能なユニオン型
// type部分はディスクリミネーターという
type NewStatus = NewInProgress | NewSuccess | NewFailure;
type NewInProgress = { type: 'NewInProgress'; progress: number };
type NewSuccess = { type: 'NewSuccess' };
type NewFailure = { type: 'NewFailure'; error: Error };

const printNewStatus = (status: NewStatus) => {
    if (status.type === 'NewInProgress') console.log(status.progress);
};
