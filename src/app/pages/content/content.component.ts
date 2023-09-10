import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datafake } from 'src/app/data/data-fake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  @Input()
  contentImage: string = ""
  @Input()
  contentTitle: string = ""
  @Input()
  contentDetails: string = ""
  @Input()
  private id:string | null = ""

  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"))
    this.setValueToComponents(this.id)
    console.log(this.id)
  }

  setValueToComponents(id:string | null){
    const result = datafake.filter(article => article.id.toString() == id)[0]
    this.id = result.id.toString()
    this.contentImage = result.image
    this.contentTitle = result.title
    this.contentDetails = result.details
    console.log("aqui "+this.id)
  } 
}
