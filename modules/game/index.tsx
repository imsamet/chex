import useTranslation from 'next-translate/useTranslation';
import { Icons as IconsType } from '@/components/icons/_model';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '@/hooks/useRedux';
import getGame from '@/store/actions/game/getGame';
import { Lang } from '@/core/_model';
import { Translate } from 'next-translate';
import Card from '@/components/card';
import Button from '@/components/button';
import { Progress } from '@/components/progress';
import { GamePad } from '@/components/gamePad';
import { setDeleteWord } from '@/store/reducer/gameSlice';
import { Modal } from '@/components/modal';
interface List {
  label: string;
  icon: IconsType;
}
export const Game: React.FC = ({}) => {
  const { t, lang } = useTranslation('game') as { t: Translate; lang: Lang };
  const dispatch = useDispatch();
  const { level, game, time, words } = useSelector(state => state.game);
  useEffect(() => {
    !game && dispatch(getGame(lang));
  }, []);
  const handleClickDelete = (word: string) => {
    dispatch(setDeleteWord(word));
  };
  return (
    <header className="py-24">
      <Modal />
      <div className="container">
        <div className="row grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10">
              <Progress />
              <GamePad />
            </div>
          </div>
          <Card title={t('card-title')} className="mt-8 md:mt-0">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-5 items-center p-5 pr-14">
              <span className="text-sm">{t('level')}</span>
              <span className="text-sm">{t('card-title')}</span>
              <span className="text-sm justify-self-end">{t('action')}</span>
            </div>
            {words?.map(i => (
              <div className="grid grid-cols-[1fr_1fr_1fr] gap-5 items-center p-5 pr-14">
                <span className="text-xl font-bold">{i.level}</span>
                <span className="text-xl font-bold">{i.word}</span>
                <Button
                  className="w-fit justify-self-end"
                  onClick={() => handleClickDelete(i.word)}
                  icon="Cross"
                  circle
                />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </header>
  );
};
