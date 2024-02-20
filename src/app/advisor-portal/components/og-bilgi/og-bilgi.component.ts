import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { BaseComponent } from '../../../base/base.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-og-bilgi',
  templateUrl: './og-bilgi.component.html',
  styleUrls: ['./og-bilgi.component.scss']
})
export class OgBilgiComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {
    // Remove the getStudent() method call here
  }

  @ViewChild(ListComponent) listComponents: ListComponent;
}