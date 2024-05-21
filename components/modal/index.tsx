import { useSelector } from '@/hooks/useRedux';
import { Score } from '@/store/reducer/gameSlice/_models';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../button';

type Props = {
  showModal: boolean;
  setShowModal: (val: boolean) => void;
};
export const Modal: React.FC<Props> = ({ showModal, setShowModal }) => {
  const { t } = useTranslation('game');
  const { scores } = useSelector(state => state.game);
  const [score, setScore] = useState<Score>(scores[scores.length - 1]);
  useEffect(() => {
    scores.length > 0 && setScore(scores[scores.length - 1]);
  }, [scores]);
  const close = () => setShowModal(false);
  return (
    showModal && (
      <>
        <div
          onClick={close}
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div
              onClick={e => e.stopPropagation()}
              className="shadow-lg relative flex flex-col gap-12 w-full bg-white outline-none focus:outline-none p-12 rounded-xl"
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/5] min-w-64">
                  <Image src={`/child/${score?.child}.png`} layout="fill" alt="" />
                </div>
                <div className="border border-1 rounded-xl rounded-bl-none shadow-sm py-2 px-3 h-fit">
                  <span className=" text-xs italic">“{t(score.message)}“</span>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <span className="text-3xl">
                  {t('card-title')}:{' '}
                  <span className="font-bold text-3xl text-border-2 text-primary">{score.score}</span>
                </span>
              </div>
              <div className="flex gap-3 justify-center">
                <Button onClick={close} label={t('next')} />
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    )
  );
};
