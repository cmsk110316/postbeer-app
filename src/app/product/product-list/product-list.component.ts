import { Component, OnInit } from '@angular/core';
import { notes } from '../../note';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  notes: any = [1,2]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.notes = notes
  }

}
