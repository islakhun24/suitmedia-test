import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortModel } from '../../../models/sort.model';
import { ResponseModels } from '../../../models/response.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() selectPageSize!: number
  @Input() sort!: SortModel
  @Input() arraySort!: SortModel[]
  @Input() response!: ResponseModels

  @Output() getPageSize = new EventEmitter()
  @Output() getSort = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  onChangePageSize(e: any): void{
    const value = e.target.value;
    this.selectPageSize = value;
    this.getPageSize.emit(this.selectPageSize)
  }

  onChangeSort(e: any): void{
    this.getSort.emit(this.sort)

  }
}
