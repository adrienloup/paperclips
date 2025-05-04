import { Universe } from '@/src/generic/types/Universe.type.ts';
import { Theme } from '@/src/generic/types/Theme.type.ts';
import { Mode } from '@/src/generic/types/Mode.type.ts';
import { Language } from '@/src/generic/types/Language.type.ts';

export interface Settings {
  universe: Universe;
  theme: Theme;
  mode: Mode;
  language: Language;
}
