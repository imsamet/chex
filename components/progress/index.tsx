import useTranslation from 'next-translate/useTranslation';
import { useSelector } from '@/hooks/useRedux';
import { Lang } from '@/core/_model';
import { Translate } from 'next-translate';
import { useEffect, useState } from 'react';
export const Progress: React.FC = ({}) => {
  const { t, lang } = useTranslation('game') as { t: Translate; lang: Lang };
  const { level, game, time, words, letterSetId } = useSelector(state => state.game);
  const [step, setStep] = useState<number>(0);
  useEffect(() => {
    if (!game) return;
    const temp = game.steps.find(i => i.level === level)?.games.find(i => i.id === letterSetId);
    temp && setStep(temp.wordsLength);
  }, [words, letterSetId]);
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between w-full">
        <span className="text-3xl text-black">
          {t('time')}: <span className="font-bold">{formatTime(time)}</span>
        </span>
        <span className="text-3xl text-black">
          {t('total')}:{' '}
          <span className="font-bold">
            {words.length}/{step}
          </span>
        </span>
      </div>
      <div className="h-1 w-full bg-black">
        <div style={{ width: '50%' }} className="bg-primary h-1" />
      </div>
    </div>
  );
};
