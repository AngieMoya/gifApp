import { Component, inject, signal, viewChild } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  //imports: [ListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  gifService = inject(GifService);

  scrollDivRef = viewChild('groupDiv');

  onScroll(event: Event) {
    console.log(event);
  }
}
