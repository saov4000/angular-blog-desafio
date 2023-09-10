import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datafake } from 'src/app/data/data-fake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css','./big-card-responsive.component.css']
})
export class BigCardComponent implements OnInit{

  @Input()
  bigCardImage: string = ""
  @Input()
  bigCardTitle: string = ""
  @Input()
  bigCardDetails: string = ""
  @Input()
  id:string | null = ""

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.setValueToComponents('1')
  }

  setValueToComponents(id:string | null){
    const result = datafake.filter(article => article.id.toString() == id)[0]
    this.bigCardImage = result.image
    this.bigCardTitle = result.title
    this.bigCardDetails = result.details
  }

}
