import { useDispatch, useSelector } from '@/hooks/useRedux';
import cn from 'classnames';
import Button from '../button';
import { GameButtonPad } from '../gameButtonPad';
import { BugsBunny } from '../icons';
import { setBackwardSelectLetter, setCheck, setNextStep, startTimer, tick } from '@/store/reducer/gameSlice';
import useTranslation from 'next-translate/useTranslation';
import { useEffect } from 'react';

export const GamePad: React.FC = () => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();
  const { isRunning, time, selectLetter } = useSelector(state => state.game);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && time >= 0) {
      interval = setInterval(() => {
        dispatch(tick());
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, dispatch]);
  const handleClickBackward = () => {
    dispatch(setBackwardSelectLetter());
  };
  const handleClickCheck = () => {
    dispatch(setCheck());
  };
  const handleClickComplateStep = () => {
    dispatch(setNextStep());
  };
  const handleStart = () => {
    dispatch(startTimer());
  };
  return (
    <div className="flex flex-col gap-14 relative">
      <div
        className={cn(
          'flex justify-between h-[63px] border-b-[3px] border-black relative',
          isRunning && time > 0 ? 'opacity-100' : 'opacity-0',
        )}
      >
        <BugsBunny width={76} height={141} className="absolute bottom-[-50px]" />
        <span></span>
        <span className="font-bold text-6xl text-border-3 text-primary">
          {selectLetter
            .map(i => i.letter)
            .join('')
            .toLocaleUpperCase()}{' '}
        </span>

        <Button onClick={handleClickBackward} icon="Backward" circle />
      </div>
      <div>
        <GameButtonPad />
      </div>
      <div className="flex justify-center gap-2">
        <Button onClick={handleClickComplateStep} label={t('complete-step')} icon="Check" />
        <Button onClick={handleClickCheck} label={t('add')} icon="Check" />
      </div>
      <div
        className={cn(
          'absolute w-full h-full top-0 left-0 bg-white flex justify-center items-center',
          isRunning || time <= 0 ? 'hidden' : 'visible',
        )}
      >
        <Button onClick={handleStart} label={t('start')} />
      </div>
    </div>
  );
};
