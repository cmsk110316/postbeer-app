import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { notes } from '../../note';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  note: any;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.note = notes[+params.get('noteId')]
    });
  
  

}
}