import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	date = new Date();
  title = 'APPLICATION BLOG';
  
		// declaration des posts initiaux via un tableau
		post = [{title:"Mon premier post",
				 content: "BLA BLA BLA BLA BLA ET ENCORE BLA BLA BLA",
				 loveIts: 1,
		created_at: this.date},
		{title:"Mon Second post",
				 content: "BLA BLA BLA BLA BLA ET ENCORE BLA BLA BLA dsl je n'ai pas beaucoup d'imagination",
				 loveIts: 1,
		created_at: this.date},
		{title:"Mon x post",
				 content: "BLA BLA BLA BLA BLA ET ENCORE BLA BLA BLA je ne sais pas compter aprés trois",
				 loveIts: 1,
		created_at: this.date
		}];
}
