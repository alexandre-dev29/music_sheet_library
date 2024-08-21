import { CreateComposerCommand } from '@/music_sheet/composer/Commands/CreateComposer/CreateComposerCommand';

export type CreateComposerDto = Omit<CreateComposerCommand, 'composerImage'>;
