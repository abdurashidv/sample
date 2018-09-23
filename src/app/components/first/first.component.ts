import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  isPageLoading = true;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.setBannerTime();
  }

  public setBannerTime() {
    if (this.isPageLoading = true) {
      setTimeout(() => {
        this.isPageLoading = false;
        setTimeout(() => {
          this._router.navigate(['/second']);
        }, 1000);
      }, 30000);
    } else {
      //
    }
  }

}
