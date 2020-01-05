import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
appTitle = 'QueenScare'
  constructor() { }

  ngOnInit() {
    $(function(){
      $(document).click(function(event){
        $('.navbar-collapse').collapse('hide');
      });
    });
  }

}
