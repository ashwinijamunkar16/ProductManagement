export class AppError{
    constructor(public originalerror: any){
        alert('AppError');
        alert(JSON.stringify(originalerror));
    }
}