import { Injectable } from '@nestjs/common';

interface wishType {
  id: number;
  wish: string;
}
type Wishlist = {
  [key: string]: wishType[];
};
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getWishlistByLang(lang: string): wishType[] {
    const wishlist: Wishlist = {
      ge: [
        { id: 1, wish: 'მინდა ვიმოგზაურო პარიზში' },
        { id: 2, wish: 'მინდა ვიმოგზაურო ტოკიოში' },
      ],

      en: [
        { id: 3, wish: 'I want to travel to Paris' },
        { id: 4, wish: 'I want to travel to Tokyo' },
      ],

      ru: [
        { id: 5, wish: 'Я хочу поехать в Париж' },
        { id: 6, wish: 'Я хочу поехать в Токио' },
      ],

      de: [
        { id: 7, wish: 'Ich möchte nach Paris reisen' },
        { id: 8, wish: 'Ich möchte nach Tokio reisen' },
      ],

      fr: [
        { id: 9, wish: 'Je veux voyager à Paris' },
        { id: 10, wish: 'Je veux voyager à Tokyo' },
      ],

      it: [
        { id: 11, wish: 'Voglio viaggiare a Parigi' },
        { id: 12, wish: 'Voglio viaggiare a Tokyo' },
      ],
    };

    return wishlist[lang];
  }
}
