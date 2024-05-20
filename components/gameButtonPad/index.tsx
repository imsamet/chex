import { useDispatch, useSelector } from '@/hooks/useRedux';
import cn from 'classnames';
import styles from './style.module.css';
import { setSelectLetter } from '@/store/reducer/gameSlice';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from '../button';

export const GameButtonPad: React.FC = () => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();
  const { level, selectLetter, letterSetId, game } = useSelector(state => state.game);
  const [charSet, setCharSet] = useState<string[]>([]);
  useEffect(() => {
    const temp = game?.steps.find(i => i.level === level)?.games.find(i => i.id === letterSetId)?.['letter-set'];
    temp && setCharSet(temp);
  }, [letterSetId]);
  const handleClick = (index: number) => {
    !!charSet?.[index] &&
      dispatch(
        setSelectLetter({
          index,
          letter: charSet[index],
        }),
      );
  };
  return (
    <div className="flex flex-col items-center relative">
      <div className={styles.main}>
        <div className={styles.container}>
          <div
            onClick={() => handleClick(0)}
            className={cn('bg-black cursor-pointer', selectLetter.some(i => i.index === 0) && 'opacity-50')}
          >
            <div className="bg-primary relative">
              <span className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit font-bold text-6xl text-border-3 text-white">
                {charSet?.[0]?.toLocaleUpperCase()}
              </span>
            </div>
          </div>
          <div
            onClick={() => handleClick(1)}
            className={cn('bg-black cursor-pointer', selectLetter.some(i => i.index === 1) && 'opacity-50')}
          >
            <div className="bg-primary relative">
              <span className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit font-bold text-6xl text-border-3 text-white">
                {charSet?.[1]?.toLocaleUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(styles.main, level === 2 && 'ml-[106px]')}>
        <div className={styles.container}>
          <div
            onClick={() => handleClick(2)}
            className={cn('bg-black cursor-pointer', selectLetter.some(i => i.index === 2) && 'opacity-50')}
          >
            <div className="bg-primary relative">
              <span className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit font-bold text-6xl text-border-3 text-white">
                {charSet?.[2]?.toLocaleUpperCase()}
              </span>
            </div>
          </div>
          {level === 2 && (
            <div
              onClick={() => handleClick(3)}
              className={cn('bg-black cursor-pointer', selectLetter.some(i => i.index === 3) && 'opacity-50')}
            >
              <div className="bg-primary relative">
                <span className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit font-bold text-6xl text-border-3 text-white">
                  {charSet?.[3]?.toLocaleUpperCase()}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      {level === 3 && (
        <div className={styles.main}>
          <div className={styles.container}>
            <div
              onClick={() => handleClick(3)}
              className={cn('bg-black cursor-pointer', selectLetter.some(i => i.index === 3) && 'opacity-50')}
            >
              <div className="bg-primary relative">
                <span className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit font-bold text-6xl text-border-3 text-white">
                  {charSet?.[3]?.toLocaleUpperCase()}
                </span>
              </div>
            </div>
            <div
              onClick={() => handleClick(4)}
              className={cn('bg-black cursor-pointer', selectLetter.some(i => i.index === 4) && 'opacity-50')}
            >
              <div className="bg-primary relative">
                <span className="absolute left-0 right-0 top-0 bottom-0 m-auto w-fit h-fit font-bold text-6xl text-border-3 text-white">
                  {charSet?.[4]?.toLocaleUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
