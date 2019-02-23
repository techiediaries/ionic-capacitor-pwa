import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
const { Clipboard } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  API_URL = "https://www.techiediaries.com/api/data.json";
  entries: Array<any>;

  constructor(private httpClient: HttpClient){

  }

  ionViewDidEnter(){
    this.getData();
  }
  getData(){
    this.httpClient.get(this.API_URL).subscribe((entries: any[])=>{
      this.entries = entries;
      console.log(entries);
    })
  }

  async copy(name: string, text: string){
    console.log("copy", text);
    Clipboard.write({
      string:  name + ' is ' + text
    });
  }
}


