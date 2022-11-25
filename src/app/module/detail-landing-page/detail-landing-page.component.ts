import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataModels } from '../../models/response.model';

@Component({
  selector: 'app-detail-landing-page',
  templateUrl: './detail-landing-page.component.html',
  styleUrls: ['./detail-landing-page.component.scss']
})
export class DetailLandingPageComponent implements OnInit {
  detail: DataModels | null
  constructor(private route: ActivatedRoute) {
    const data = this.route?.snapshot?.paramMap?.get('detail')
    this.detail = JSON.parse(data || '');

  }

  ngOnInit(): void {

  }

}
