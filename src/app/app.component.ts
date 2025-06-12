import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import * as ProgressBar from 'progressbar.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    Scrollbar.init(document.querySelector('#scrollbar') as HTMLElement, {
      damping: 0.1,
      alwaysShowTracks: true
    });
    Scrollbar.init(document.querySelector('#scrollbar2') as HTMLElement, {
      damping: 0.1,
      alwaysShowTracks: true
    });

    const projectSwiper = new Swiper('.art-blog-slider', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-blog-swiper-next',
        prevEl: '.art-blog-swiper-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
    
    const circle1 = new ProgressBar.Circle('#circleprog1', {
      color: '#FFCC00',  // yellow color
      trailColor: '#222',
      strokeWidth: 5,
      trailWidth: 5,
      duration: 1400,
      text: {
        value: '0%',
      },
      step: function(state, circle) {
        (circle as any).setText(Math.round(circle.value() * 100) );
      }
    });
    circle1.animate(0.7); // 100%

    const circle2 = new ProgressBar.Circle('#circleprog2', {
      color: '#FFCC00',
      trailColor: '#222',
      strokeWidth: 5,
      trailWidth: 5,
      duration: 1400,
      text: {
        value: '0%',
      },
      step: function(state, circle) {
        (circle as any).setText(Math.round(circle.value() * 100) );
      }
    });
    circle2.animate(0.7); // 90%

    const circle3 = new ProgressBar.Circle('#circleprog3', {
      color: '#FFCC00',
      trailColor: '#222',
      strokeWidth: 5,
      trailWidth: 5,
      duration: 1400,
      text: {
        value: '0%',
      },
      step: function(state, circle) {
        (circle as any).setText(Math.round(circle.value() * 100) );
      }
    });
    circle3.animate(1); // 70%
    const line1 = new ProgressBar.Line('#lineprog1', {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFCC00', // yellow
      trailColor: '#222',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '10px'}
    });
    line1.animate(1.0); // 100% for HTML

    const line2 = new ProgressBar.Line('#lineprog2', {
      strokeWidth: 4,
      color: '#FFCC00',
      trailColor: '#222',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '10px'}
    });
    line2.animate(0.9); // 90% for CSS

    const line3 = new ProgressBar.Line('#lineprog3', {
      strokeWidth: 4,
      color: '#FFCC00',
      trailColor: '#222',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '10px'}
    });
    line3.animate(0.85); // 85% for JS

    const line4 = new ProgressBar.Line('#lineprog4', {
      strokeWidth: 4,
      color: '#FFCC00',
      trailColor: '#222',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '10px'}
    });
    line4.animate(0.75); // 75% for PHP

    const line5 = new ProgressBar.Line('#lineprog5', {
      strokeWidth: 4,
      color: '#FFCC00',
      trailColor: '#222',
      trailWidth: 4,
      svgStyle: {width: '100%', height: '10px'}
    });
    line5.animate(0.6);
  }
  title = 'rpor';
}
