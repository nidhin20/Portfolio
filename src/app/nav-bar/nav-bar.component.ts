import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  scrollToElement(selector) {
    // const navbar= document.querySelector('#navbarColor01');
    // const headers=navbar.querySelectorAll('a');
    // headers.forEach(obj=>{
    //   obj.classList.remove('activate')
    //   if( obj.id==selector){
    //     obj.classList.add('activate')
    //   }
    // })

    const element = document.querySelector(selector);
    element ? element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}): null;
  }
  ngOnInit(): void {
  }

}
