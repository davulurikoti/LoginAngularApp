import { Component } from "@angular/core";
import { HttpClient} from "@angular/common/http";

@Component({
    selector:'signup-root',
    templateUrl:'signup.component.html'
})
export class SignupComponent{
    constructor(private _httpClient :HttpClient){

    }
    signUp(data) :void{
        if(data.userName!='' && data.password!='' && data.password == data.cpassword){
            console.log(data);
            this._httpClient.post("http://localhost:3010/signUp",
            {
                "username":data.userName,
                "password":data.password
            })
                .subscribe((data :any)=>{
                    console.log(data);
                    }
                );
        }
      }
}