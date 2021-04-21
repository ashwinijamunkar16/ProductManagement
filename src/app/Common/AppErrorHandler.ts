import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler{
    handleError(error: any){
        if(error.statusText === 'Unknown Error')
        {
            alert('Service is temporarily down, please try after some time.');
            console.log(JSON.stringify(error));
        }
    }
}