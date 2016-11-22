import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  sub: any;
  item;

  constructor(private hackerNewsApiService: HackerNewsApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let itemID = +params['id'];
      this.hackerNewsApiService.fetchComments(itemID).subscribe(data => {
          this.item = data;
      }, error => console.log('could not load item ' + itemID));
    });
  }
}
