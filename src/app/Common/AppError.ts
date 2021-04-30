export class AppError{
    constructor(public originalerror: Response){
        // debugger;
        alert('AppError');
        alert(JSON.stringify(originalerror));
    }
}