import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MetaModels, LinksModels, ResponseModels } from '../../../models/response.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() meta: MetaModels | undefined;
  @Input() link: LinksModels | undefined;
  @Output() getPage = new EventEmitter()
  @Input() response!: ResponseModels
  currentPage = 1;
  constructor() {}

  ngOnInit(): void {}
  isNumber(value: string | number): boolean {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  }

  onClickPage(page: string | undefined): void{
    this.getPage.emit(page)
  }

}

