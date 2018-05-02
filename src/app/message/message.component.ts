import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
		
	@Input() blogMessage : string ;
	@Input() blogContent : string;
	@Input() blogLove : number;
	@Input() blogCreated : Date;
		
  constructor() { }

  ngOnInit() {

}			// fonction se rapportant à la classe
			getColor(){
								return "list-group-item-success";
					}
					
					// fonction se rapportant au bouton j'aime
					love(){
						this.blogLove = this.blogLove+1;
						return (this.blogLove);
					}
					
					// fonction se rapportant au bouton j'aime pas
						hate(){
							this.blogLove = this.blogLove - 1;
						return (this.blogLove);
						}
}