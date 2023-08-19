import { Component } from '@angular/core';
import { SocialCardType } from './constants/social-card-type';
import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const buttonTextAnimation = (animationName: string, textWidth: string) => {
  return trigger(animationName, [
    state('btn-active-text', style({
      width: textWidth,
      visibility: 'visible',
    })),
    state('btn-active-text', style({
      width: '0px',
      visibility: 'hidden',
    })),
    transition('btn-inactive-text => btn-active-text', [
      group([
        animate('0.3s ease', style({
          width: textWidth
        })),
        animate('0.3s ease', style({
          visibility: 'visible'
        }))
      ])
    ]),
    transition('btn-active-text => btn-inactive-text', [
      group([
        animate('0s ease', style({
          width: '0px'
        })),
        animate('0s ease', style({
          visibility: 'hidden'
        }))
      ])
    ])
  ])
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    buttonTextAnimation('fbButtonTextAnimation', '80px'),
    buttonTextAnimation('twButtonTextAnimation', '80px'),
  ]
})
export class AppComponent {
  title = 'ng-dynamic-components';
  selectedCardType: SocialCardType;
  cardTypes = SocialCardType;

  setCardType(type: SocialCardType) {
    this.selectedCardType = type;
  }
}
