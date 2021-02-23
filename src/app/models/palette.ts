import { RandomUtils } from 'src/app/utils/random.utils';
import { Color } from './color';

export class Palette {
  constructor(public name?: string, public colors?: Color[]) {
    if (!name) {
      this.name = this.generateCoolName();
    }

    if (!colors) {
      const colors = [];

      for (let i = 0; i < 5; i++) {
        colors.push(new Color());
      }

      this.colors = colors;
    }
  }

  private generateCoolName(): string {
    const preffixes = [
      'Pink',
      'Red',
      'Blue',
      'Black',
      'Dark',
      'White',
      'Grey',
      'Orange',
      'Green',
      'Golden',
      'Silver',
      'Faded',
      'Nice',
      'Super',
      'Ultra',
      'Magic',
      'Power',
      'Master',
      'Artsy',
      'Cult',
      'Modern',
      'Antique',
      'Vintage',
      'SteamPunk',
      'Medieval',
      'Futuristic',
      'Neo',
      'Unreal',
      'Dream',
      'Cute',
      'Fun',
      'Friendly',
      'Naive',
      'Cute',
      'Interesting',
    ];

    const suffixes = [
      'Shade',
      'Glow',
      'Shine',
      'Explosion',
      'Attack',
      'Splash',
      'Blade',
      'Shade',
      'Steel',
      'Bolt',
      'Maneuver',
      'Variation',
      'Mood',
      'Morning',
      'Day',
      'Night',
      'Afternoon',
    ];

    const preffix = RandomUtils.getRandomItem(preffixes);
    const suffix = RandomUtils.getRandomItem(suffixes);

    return preffix + ' ' + suffix;
  }
}
