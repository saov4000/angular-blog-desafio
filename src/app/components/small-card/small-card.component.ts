import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datafake } from 'src/app/data/data-fake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card-responsive.component.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  smallCardImage: string = ""
  @Input()
  smallCardTitle:string = ""
  @Input()
  id:string| null=""

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    //this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValueToComponents(this.id)
  }
  
  setValueToComponents(id:string | null){
    const result = datafake.filter(article => article.id.toString() == id)[0]
    this.smallCardImage = result.image
    this.smallCardTitle = result.title
  }

}
