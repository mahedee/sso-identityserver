import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {    

    constructor() {}

    get authApiURI() {
        //return 'http://localhost:5000/api';
        return 'http://localhost:5000';
    }    
     
    get resourceApiURI() {
        //return 'http://localhost:5001/api';
        return 'http://localhost:5001';
    }  
}